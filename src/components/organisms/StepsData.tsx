import { Button, Typography } from "@mui/material";
import { Fragment } from "react";
import { StepType } from "types/General";

const ArtificalInteligence: StepType = {
  id: "AI",
  x: 0,
  y: 0,
  scale: 2,
  children: <Typography variant="h1">{'هوش مصنوعی'}</Typography>,
  links: [
    { x: 940, y: 450, rotate: 2, length: 110 }
  ]
};

const ComputerVision: StepType = {
  id: "AII",
  x: 1000,
  y: 0,
  scale: 1,
  children:
    <Fragment>
      <Button>
        salam
      </Button>
      <Typography variant="h1">{'پردازش زبان'}</Typography>
    </Fragment>,
  links: [
    { x: 650, y: 520, rotate: 90, length: 400 }
  ]
};


export default [ArtificalInteligence, ComputerVision];