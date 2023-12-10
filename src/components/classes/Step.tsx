import { LinkType, StepType } from "types/General";

export class Step {
  parent: Step | undefined;
  id: string;
  nextStep: string | undefined;
  previousStep: string | undefined;
  children: any;
  x: number;
  y: number;
  scale: number;
  links: LinkType[] | undefined;

  constructor({ parent, id, previousStep, nextStep, x, y, scale, children, links }: StepType & { parent?: Step }) {
    this.parent = parent;
    this.id = id;
    this.nextStep = nextStep;
    this.previousStep = previousStep;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.children = children;
    this.links = links;
  }

  get_x(): number {
    if (this.parent) {
      return this.parent.get_x() + this.x;
    } else {
      return this.x;
    }
  }

  get_y(): number {
    if (this.parent) {
      return this.parent.get_y() + this.y;
    } else {
      return this.y;
    }
  }

  get_scale(): number {
    if (this.parent) {
      return this.parent.get_scale() * this.scale;
    } else {
      return this.scale;
    }
  }

  getStepData() {
    return {
      id: this.id,
      previousStep: this.previousStep,
      nextStep: this.nextStep,
      x: this.get_x(),
      y: this.get_y(),
      scale: this.get_scale(),
      children: this.children,
      links: this.links,
    }
  }
}