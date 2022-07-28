import React, { useState, useRef, useEffect } from 'react';
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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomSelect from '../CustomSelect';
import MultiSelect from '../CustomSelect/MultiSelect';

const steps: Array<{
  label: string;
  labelDescription?: string;
  description: string;
}> = [
  {
    label: 'Select campaign settings',
    // labelDescription: 'Select campaign settings and template',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Create new ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Create another ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

type Props = {
  variant?: 'dark' | 'light';
  questionnaire: Questionnaire;
};
const VerticalStepper: React.FC<Props> = ({
  variant,
  questionnaire,
  ...props
}) => {
  const [activeStep, setActiveStep] = useState(0);
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
  } = useStyles({
    activeStep,
    totalSteps: questions?.length,
    variant,
  })();
  console.log({ questions });
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          } else if (index >= activeStep - 2) {
            step.style.display = 'block';
          } else if (activeStep === questions.length) {
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
        if (activeStep < 2) {
          connectorArray[2].style.display = 'none';
          if (connectorArray[3]) {
            connectorArray[3].style.display = 'none';
          }
        } else {
          connectorArray[2].style.display = 'block';
          if (connectorArray[3]) {
            connectorArray[3].style.display = 'block';
          }
        }
      }
    }
  };

  useEffect(() => {
    handleStepperSteps();
  }, [activeStep, stepperRef]);

  const renderField = (question: Question) => {
    const { type, validation, options = [] } = question;
    console.log({ type, options });
    switch (type) {
      case 'freeForm':
        return <TextField label='freeForm' required={validation.required} />;
      case 'toggle':
        const label = { inputProps: { 'aria-label': 'Switch demo' } };
        return <Switch {...label} defaultChecked />;
        break;
      case 'singleSelection':
        return (
          options.length > 0 && <CustomSelect options={options} {...props} />
        );
        break;
      case 'multipleSelection':
        return (
          options.length > 0 && <MultiSelect options={options} {...props} />
        );
        break;
    }
  };
  return (
    <>
      {questions?.length && (
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
                    {step?.prompt && (
                      <span className={labelDescription}>{step.prompt}</span>
                    )}
                  </div>
                </StepLabel>
                <StepContent className={stepContent}>
                  <Typography>{renderField(step)}</Typography>
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
              <Typography>
                request sent! view updates in the{' '}
                <span onClick={() => {}}>request tracking page</span>
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                submit another response
              </Button>
            </Paper>
          )}
        </Box>
      )}
    </>
  );
};
export default VerticalStepper;
