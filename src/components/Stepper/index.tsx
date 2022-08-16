import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  ReactElement,
} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import useStyles from './styles';
import { Question, Questionnaire, validation } from './types';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import { SelectChangeEvent } from '@mui/material/Select';
import CustomSelect from '../CustomSelect';
import MultiSelect from '../CustomSelect/MultiSelect';
import { FormHelperText } from '@mui/material';

type Props = {
  variant?: 'dark' | 'light';
  questionnaire: Questionnaire;
  onFinish: (values: any) => void;
  children: ReactElement | string | string[];
  submitBtnText: string;
};
const VerticalStepper = ({
  variant,
  onFinish = () => {},
  questionnaire,
  children,
  submitBtnText,
  ...props
}: Props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [errors, setErrors] = useState<any>({});
  const [state, setState] = useState<any>({});
  const stepperRef = useRef<HTMLDivElement>(null);
  const { questions } = questionnaire;
  const {
    stepp,
    labelNo,
    stepLabel,
    labelText,
    labelDescription,
    stepContent,
    stepper,
    stepIcon,
    activeStepIcon,
    completedStepIcon,
    btnWrap,
    btnBack,
    btnNext,
    stepperBox,
    finishTextHolder,
    textField,
    toggleHolder,
    errorMsg,
  } = useStyles({
    activeStep,
    totalSteps: questions?.length,
    variant,
  })();

  const isQuestionValid = () => {
    let isValid = true;
    let myError: any = {};
    const question = questions[activeStep];
    const { label, validation } = question;
    const value = state[label!];
    const { required, maxLength, minItems, maxItems } = validation;
    if (required && !value) {
      isValid = false;
      myError[label!] = 'This field is required';
    } else if (maxLength && value.length > maxLength) {
      isValid = false;
      myError[label!] = `This field must be less than ${maxLength} characters`;
    } else if (minItems && value.length < minItems) {
      isValid = false;
      myError[label!] = `Minimum ${minItems} items must be selected`;
    } else if (maxItems && value.length > maxItems) {
      isValid = false;
      myError[label!] = `Maximum ${maxItems} items can be selected`;
    }
    setErrors(myError);
    return isValid;
  };
  const handleNext = () => {
    if (isQuestionValid()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    if (isQuestionValid() && activeStep === questions.length - 1) {
      onFinish(state);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setState({});
    setErrors({});
  };
  const handleStepperSteps = () => {
    if (stepperRef?.current) {
      const connectors = stepperRef?.current;
      const children = connectors?.children as HTMLCollection;
      let childrenArray = [];
      let connectorArray: HTMLDivElement[] | { style: { display: string } }[] =
        [];

      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('MuiStep-root')) {
          childrenArray.push(children[i] as HTMLDivElement);
        }
        if (children[i].classList.contains('MuiStepConnector-root')) {
          connectorArray.push(children[i] as HTMLDivElement);
        }
      }
      if (activeStep > 2 && activeStep !== questions.length) {
        //remove 1st step and conector
        const div = children[0] as HTMLDivElement;
        const connector = children[1] as HTMLDivElement;
        div.style.display = 'none';
        connector.style.display = 'none';
      } else if (activeStep <= 2) {
        // show 1st step and connector
        const div = children[0] as HTMLDivElement;
        const connector = children[1] as HTMLDivElement;
        connector.style.display = 'block';
        div.style.display = 'block';
      }
      // if more than 3 questions
      if (childrenArray.length > 2) {
        // if (activeStep < 3) {
        childrenArray.forEach((step, index) => {
          if (index < activeStep - 2 || (index > activeStep && index > 2)) {
            step.style.display = 'none';
          } else if (
            index >= activeStep - 2 ||
            activeStep === questions.length
          ) {
            step.style.display = 'block';
          }
        });
        //show 3rd last step
        if (activeStep === questions.length) {
          childrenArray[activeStep - 3].style.display = 'block';
        }
        if (activeStep > 3) {
          connectorArray[1].style.display = 'none';
        } else {
          connectorArray[1].style.display = 'block';
        }
        if (activeStep < 2 && connectorArray.length > 2) {
          connectorArray[2].style.display = 'none';
          if (connectorArray[3]) {
            connectorArray[3].style.display = 'none';
          }
        } else if (connectorArray.length > 2) {
          connectorArray[2].style.display = 'block';
          if (connectorArray[3]) {
            connectorArray[3].style.display = 'block';
          }
        }
      }
      for (let i = 0; i < connectorArray.length; i++) {
        if (
          (activeStep < 2 && i >= 4) ||
          (activeStep === 2 && i >= 2) ||
          (activeStep > 2 && i >= activeStep) ||
          (activeStep > 2 && i < activeStep && i <= activeStep - 3) ||
          (activeStep > 4 && i < activeStep && i < activeStep - 2)
        ) {
          connectorArray[i].style.display = 'none';
        } else if (activeStep > 2 && i < activeStep && i >= 2) {
          connectorArray[i].style.display = 'block';
        }

        if (
          (activeStep > 4 && activeStep > connectorArray.length) ||
          (activeStep <= 4 &&
            activeStep > connectorArray.length &&
            connectorArray.length >= 2 &&
            connectorArray.length < 4)
        ) {
          connectorArray[connectorArray.length - 2].style.display = 'block';
        }
      }
    }
  };

  useEffect(() => {
    handleStepperSteps();
  }, [activeStep, stepperRef]);

  useEffect(() => {
    if (questions.length) {
      const toggleQuestions = questions
        .filter((ques) => ques.type === 'toggle')
        ?.map((ques) => ques.label);
      if (toggleQuestions.length) {
        let obj: any = {};
        toggleQuestions.forEach((label: any) => {
          obj[label] = false;
        });
        setState({ ...state, ...obj });
      }
    }
  }, []);
  const onChangeField = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      | SelectChangeEvent<string | string[]>,
    type: string
  ) => {
    const { name, value } = e.target;
    if (type === 'toggle') {
      setState({ ...state, [name]: state[name] === false ? true : false });
    } else {
      setState({ ...state, [name]: value });
    }
  };
  const renderField = (question: Question) => {
    const { label, type, validation, options = [], prompt } = question;
    if (type === 'freeForm') {
      return (
        <>
          <TextField
            label={label}
            name={label}
            value={state[label!] || ''}
            required={validation.required}
            className={textField}
            onChange={(e) => {
              onChangeField(e, type);
            }}
            size='small'
            error={!!errors[label!]}
          />
          {errors[label!] && (
            <FormHelperText className={errorMsg} error>
              {errors[label!]}
            </FormHelperText>
          )}
        </>
      );
    } else if (type === 'toggle') {
      return (
        label && (
          <>
            <div className={toggleHolder}>
              <Switch
                name={label}
                checked={state[label!]}
                // value={state[label!]}
                onChange={(e) => {
                  onChangeField(e, type);
                }}
              />
              <p>{prompt}</p>
            </div>
            {errors[label!] && (
              <FormHelperText>{errors[label!]}</FormHelperText>
            )}
          </>
        )
      );
    } else if (type === 'singleSelection') {
      return (
        options.length > 0 && (
          <CustomSelect
            options={options}
            showBorder
            {...props}
            name={label}
            value={state[label!] || ''}
            error={!!errors[label!]}
            errMsg={errors[label!]}
            onChange={(e) => {
              onChangeField(e, type);
            }}
          />
        )
      );
    } else if (type === 'multipleSelection') {
      const myLabel = { inputProps: { 'aria-label': `${question.label}` } };
      return (
        options.length > 0 &&
        question?.label && (
          <MultiSelect
            name={label}
            options={options}
            label={myLabel}
            value={state[label!] || []}
            error={!!errors[label!]}
            errMsg={errors[label!]}
            onChange={(e) => {
              onChangeField(e, type);
            }}
            showBorder
            {...props}
          />
        )
      );
    }
  };
  return (
    <>
      {!!questions?.length && (
        <Box sx={{ maxWidth: 400 }} className={stepperBox}>
          <Stepper
            activeStep={activeStep}
            orientation='vertical'
            className={stepper}
            ref={stepperRef}
          >
            {questions.map((step, index) => (
              <Step key={step.label} className={stepp}>
                <StepLabel
                  className={stepLabel}
                  StepIconProps={{
                    classes: {
                      root: stepIcon,
                      active: activeStep === index ? activeStepIcon : '',
                      completed: completedStepIcon,
                    },
                  }}
                >
                  <span className={labelNo}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className={labelText}>
                    {step.label}
                    {/* {step?.prompt && (
                      <span className={labelDescription}>{step.prompt}</span>
                    )} */}
                  </div>
                </StepLabel>
                <StepContent className={stepContent}>
                  {step?.prompt && step.type !== 'toggle' && (
                    <div className='prompt'>
                      <p>{step.prompt}</p>
                    </div>
                  )}
                  <div className='fieldWrap'>{renderField(step)}</div>
                  <Box sx={{ mb: 2 }}>
                    <div className={btnWrap}>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                        className={btnBack}
                      >
                        Back
                      </Button>
                      <Button
                        variant='contained'
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                        className={btnNext}
                      >
                        {index === questions.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === questions.length && (
            <Paper
              square
              elevation={0}
              sx={{ p: 3 }}
              className={finishTextHolder}
            >
              {children}
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                {submitBtnText}
              </Button>
            </Paper>
          )}
        </Box>
      )}
    </>
  );
};
export default VerticalStepper;
