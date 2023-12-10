import Step from "components/molecules/Step";
import React, { Fragment, useEffect } from "react";
import steps from 'components/organisms/StepsData';

function Home() {

  useEffect(() => {
    const impress = (window as any).impress();
    if (impress) {
      impress.init();
    }
  }, [])

  return (
    <Fragment>
      <div id="impress" data-transition-duration="1000">
        {steps.map(step => {
          const stepData = step.getStepData();
          return <Step key={stepData.id} {...stepData} />
        })}
      </div>
      <script type="text/javascript" src="/js/impress.js" />
    </Fragment >
  )
}

export default Home;
