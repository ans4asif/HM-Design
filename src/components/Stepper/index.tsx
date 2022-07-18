import React, { useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";
import { idText } from "typescript";

const steps = [
  {
    label: "Select campaign settings",
    labelDescription: "Select campaign settings and template",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Create new ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Create another ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);
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
  } = useStyles({
    activeStep,
    totalSteps: steps.length,
  })();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if (stepperRef?.current) {
      const connectors = stepperRef?.current;
      const children = connectors?.children as HTMLCollection;
      let childrenArray = [];
      // const steps = childrenArray.map((child) =>
      //   child.classList.contains("MuiStep-root")
      // );
      for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains("MuiStep-root")) {
          childrenArray.push(children[i] as HTMLDivElement);
        }
      }
      console.log({ childrenArray });
      if (activeStep > 2) {
        const div = children[0] as HTMLDivElement;
        const connector = children[1] as HTMLDivElement;
        div.style.display = "none";
        connector.style.display = "none";
      } else if (activeStep <= 2) {
        const div = children[0] as HTMLDivElement;
        const connector = children[1] as HTMLDivElement;
        connector.style.display = "block";
        div.style.display = "block";
      }
      if (childrenArray.length > 3) {
        // if (activeStep < 3) {
        childrenArray.forEach((step, index) => {
          if (index > 2 && activeStep < 3) {
            step.style.display = "none";
          } else if (index >= activeStep) {
            step.style.display = "block";
          }
        });
        // }
      }
      console.log({ connectors, children, oth: children[0] });
    }
  }, [activeStep, stepperRef]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={stepper}
        ref={stepperRef}
      >
        {steps.map((step, index) => (
          <Step key={step.label} className={stepp}>
            <StepLabel
              className={stepLabel}
              StepIconProps={{
                classes: {
                  root: stepIcon,
                  active: activeStep === index ? activeStepIcon : "",
                  completed: completedStepIcon,
                },
              }}
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              <span className={labelNo}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <div className={labelText}>
                {step.label}
                <span className={labelDescription}>
                  {step?.labelDescription}
                </span>
              </div>
            </StepLabel>
            <StepContent className={stepContent}>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
