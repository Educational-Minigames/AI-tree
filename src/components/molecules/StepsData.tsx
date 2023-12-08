import { Button } from "@mui/material";
import { Fragment } from "react";

const ArtificalInteligence = {
  id: "AI",
  x: 0,
  y: 0,
  scale: 1,
  children: <h1>هوش مصنوعی</h1>
};

const ComputerVision = {
  id: "AII",
  x: 1000,
  y: 0,
  scale: 2,
  children:
    <Fragment>
      <Button>
        salam
      </Button>
      <h1>هوش مصنوععععی</h1>
    </Fragment>
};


export default [ArtificalInteligence, ComputerVision];