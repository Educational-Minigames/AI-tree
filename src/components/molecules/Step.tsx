import { FC } from "react";
import { StepIdType } from "types/General";

type StepComponentPropsType = {
  id: StepIdType;
  previousStep?: StepIdType;
  nextStep?: StepIdType;
  children: any;
  x: number;
  y: number;
  scale: number;
}

const Step: FC<StepComponentPropsType> = ({
  id,
  nextStep,
  previousStep,
  x,
  y,
  scale,
  children,
}) => {
  return (
    <div className="step center" id={id} data-scale={scale} data-x={x} data-y={y} next-step={nextStep} prev-step={previousStep}>
      {children}
    </div>
  )
}

export default Step;
