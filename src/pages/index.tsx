import Step from "components/molecules/Step";
import React, { Fragment, useEffect, useState } from "react";
import steps from 'components/organisms/StepsData';
import { Button, Dialog, Stack, Typography } from "@mui/material";

function Home() {
  const [impress, setImpress] = useState<any>();
  const [openInitialDialog, setOpenInitialDialog] = useState(false);

  useEffect(() => {
    const impress = (window as any).impress();
    if (impress) {
      impress.init();
      setImpress(impress);
    }
  }, [])

  return (
    <Fragment>
      <Dialog open={openInitialDialog} onClose={() => setOpenInitialDialog(!openInitialDialog)}>
        <Stack width={'100%'}>
          <Typography variant="h3">
            {'AI Tree'}
          </Typography>
          <Typography variant="h3">
            {'درخت هوش مصنوعی'}
          </Typography>
          <Typography>
            فناوری هوش مصنوعی همچون درختی از روش‌ها و الگوریتم‌های گوناگون است که تازه در قرن بیست و یکم به بار نشسته است. بیایید گردشی کوتاه داشته باشیم در میان اصلی‌ترین شاخه‌های کنونی این فناوری.
          </Typography>
        </Stack>
      </Dialog>
      <div id="impress" data-transition-duration="1000">
        {steps.map(step => {
          const stepData = step.getStepData();
          return <Step key={stepData.id} {...stepData} />
        })}
      </div>
      <script type="text/javascript" src="/js/impress.js" />
      <Button
        onClick={() => impress.prev()}
        size="large" variant='contained' sx={{
          boxShadow: '-3px 4px 4.159999847412109px 0px #00000059',
          backgroundColor: '#0F3C6C', color: '#F5EFD9', fontSize: 30,
          position: 'fixed', bottom: 30, left: 30, width: 180,
        }}>
        {'بازگشت'}
      </Button>
      <Button
        onClick={() => impress.next()} 
        size="large" variant='contained' sx={{
          boxShadow: '3px 4px 4.159999847412109px 0px #00000059',
          backgroundColor: '#0F3C6C', color: '#F5EFD9', fontSize: 30,
          position: 'fixed', bottom: 30, right: 30, width: 180,
        }}>
        {'ادامه'}
      </Button>
    </Fragment >
  )
}

export default Home;
