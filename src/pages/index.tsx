import Step from "components/molecules/Step";
import React, { Fragment, useEffect, useState } from "react";
import steps from 'components/organisms/StepsData';
import { Box, Button, Dialog, Stack, Typography, Backdrop, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BackgroundImage from 'assets/background-gradiant3.jpg';

const basePath = process.env.NODE_ENV === 'development' ? '' : '/AI-tree';

function Home() {
  const [impress, setImpress] = useState<any>(null);
  const [openInitialDialog, setOpenInitialDialog] = useState(true);

  useEffect(() => {
    const impress = (window as any).impress();
    if (impress) {
      impress.init();
      setImpress(impress);
      setInterval(() => {
        window.location.href = basePath;
      }, 5 * 60 * 1000);
    }
  }, [])

  const onClickHomeButton = (impress: any) => {
    impress.goto('OverallView', 1000);
    setOpenInitialDialog(true);
  }

  return (
    <Fragment>
      <Dialog
        sx={{ background: '#0F3C6CA0' }}
        maxWidth='xs'
        PaperComponent={Stack}
        open={openInitialDialog}>
        <Stack width={'100%'}>
          <Typography align="left" variant="h3" gutterBottom>
            {'AI Tree'}
          </Typography>
          <Typography align="right" variant="h3" gutterBottom>
            {'درخت هوش مصنوعی'}
          </Typography>
          <Typography gutterBottom>
            فناوری هوش مصنوعی همچون درختی از روش‌ها و الگوریتم‌های گوناگون است که تازه در قرن بیست و یکم به بار نشسته است. بیایید گردشی کوتاه داشته باشیم در میان اصلی‌ترین شاخه‌های کنونی این فناوری...
          </Typography>
          <Stack direction={'row'} width={'100%'} mt={3} justifyContent={'space-between'}>
            <Button onClick={() => {
              setOpenInitialDialog(!openInitialDialog);
              impress.goto('OverallView', 1000);
            }}
              variant="contained" sx={{
                fontSize: 18, backgroundColor: '#F5EFD9', color: '#0F3C6C',
              }}>
              {'کاوش کنید'}
            </Button>
            <Button onClick={() => {
              setOpenInitialDialog(!openInitialDialog);
              impress.goto('ArtificalInteligence', 1000);
            }}
              variant="contained" sx={{
                fontSize: 18, backgroundColor: '#F5EFD9', color: '#0F3C6C',
              }}>
              {'طبق الگو بروید'}
            </Button>
          </Stack>
        </Stack>
      </Dialog>
      <div id="impress" data-transition-duration="1500">
        <Box
          position={'fixed'}
          left={-15000}
          top={-10000}
          zIndex={-5}
          height={20000}
          width={30000}
          sx={{
            background: `url(${BackgroundImage.src}) center / cover`,
          }}
        />
        {steps.map(step => {
          const stepData = step.getStepData();
          return <Step key={stepData.id} {...stepData} />
        })}
      </div>
      <script type="text/javascript" src={`${basePath}/js/impress.js`} />
      <Box display={openInitialDialog ? 'none' : 'inherit'}>
        <IconButton disableRipple size="large" onClick={() => onClickHomeButton(impress)}>
          <HomeIcon sx={{ fontSize: 100 }} />
        </IconButton>
        <Button
          onClick={() => impress.prev()}
          size="large" variant='contained' sx={{
            boxShadow: '-3px 4px 4px 0px #00000059',
            backgroundColor: '#0F3C6C', color: '#F5EFD9', fontSize: 30,
            position: 'fixed', bottom: 30, left: 30, width: 180,
          }}>
          {'بازگشت'}
        </Button>
        <Button
          onClick={() => impress.next()}
          size="large" variant='contained' sx={{
            boxShadow: '3px 4px 4 0px #00000059',
            backgroundColor: '#0F3C6C', color: '#F5EFD9', fontSize: 30,
            position: 'fixed', bottom: 30, right: 30, width: 180,
          }}>
          {'ادامه'}
        </Button>
      </Box>
    </Fragment >
  )
}

export default Home;
