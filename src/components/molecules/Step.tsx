import { Stack } from "@mui/material";
import Link from "components/atoms/Link";
import { FC } from "react";
import { StepType } from "types/General";

type StepComponentPropsType = StepType & {
}

const Step: FC<StepComponentPropsType> = ({
  id,
  nextStep,
  previousStep,
  x,
  y,
  scale,
  children,
  links,
}) => {
  return (
    <div className="step" id={id} data-scale={scale} data-x={x} data-y={y} next-step={nextStep} prev-step={previousStep}>
      {links?.map((link, index) =>
        <Link key={index} {...link} />
      )}
      {children}
    </div>
  )
}

export default Step;
