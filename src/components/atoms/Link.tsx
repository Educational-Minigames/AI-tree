import { Box } from "@mui/material";
import { FC } from "react";
import { LinkType } from "types/General";

type LinkPropsType = LinkType & {
}

const Link: FC<LinkPropsType> = ({
  x, y, rotate, length,
}) => {
  return (
    <Box sx={{
      position: 'fixed',
      top: y, left: x,
      transform: `rotate(${rotate}deg)`,
      transformOrigin: '0px 6px',
      width: length, height: 12,
      background: 'repeating-linear-gradient(90deg, #DE6B44 0 16px, transparent 0 26px)'
    }} />
  )
}

export default Link;
