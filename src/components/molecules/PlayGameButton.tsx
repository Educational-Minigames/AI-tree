import { Button, Stack, Typography } from "@mui/material";
import { FC, Fragment, useState } from "react";
import Image from "next/image";
import IframDialog from "../atoms/IframDialog";
import PlayGameButtonIcon from 'assets/play-game-button-icon.png';

type PlayGameButtonPropsType = {
  gameLink: string;
}

const PlayGameButton: FC<PlayGameButtonPropsType> = ({
  gameLink,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button disableRipple onClick={() => setOpen(!open)} variant="contained" sx={{
        paddingX: 2, paddingY: 1.8, backgroundColor: '#F5EFD9', borderRadius: 100,
        boxShadow: '4px 4px 4px 0px #00000073',
      }}>
        <Stack alignItems={'center'} direction={'row'}>
          <Typography fontSize={24} color={'#0F3C6C'} marginLeft={2} fontWeight={1000}>
            {'بازی کنید'}
          </Typography>
          <Image width={0} height={0} style={{ width: 34, height: 34 }} src={PlayGameButtonIcon} alt="" />
        </Stack>
      </Button>
      <IframDialog src={gameLink} open={open} handleClose={() => setOpen(!open)} />
    </Fragment>
  )
}

export default PlayGameButton;
