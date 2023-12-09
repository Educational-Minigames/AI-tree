export type StepIdType = string;

export type LinkType = {
  x: number;
  y: number;
  rotate: number;
  length: number;
}

export type StepType = {
  id: StepIdType;
  previousStep?: StepIdType;
  nextStep?: StepIdType;
  children: any;
  x: number;
  y: number;
  scale: number;
  links?: LinkType[];
}