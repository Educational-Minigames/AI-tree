import { IconButton } from "@mui/material";
import { FC, Fragment, useState } from "react";
import PlayGame from 'assets/play-game-button.png';
import Image from "next/image";
import IframDialog from "../atoms/IframDialog";

type PlayGameButtonPropsType = {
  gameLink: string;
}

const PlayGameButton: FC<PlayGameButtonPropsType> = ({
  gameLink,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen(!open)} disableRipple>
        <Image
          width={0} height={0} src={PlayGame} alt=""
          style={{ width: '100%', height: 'auto' }} />
      </IconButton>
      <IframDialog src={gameLink} open={open} handleClose={() => setOpen(!open)} />
    </Fragment>
  )
}

export default PlayGameButton;
