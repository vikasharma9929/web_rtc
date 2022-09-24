import React from 'react';
import StepName from '../Steps/StepName/stepName';
import StepAvatar from '../Steps/StepAvtar/StepAvtar';
import { useState } from 'react';

const steps = {
    1: StepName,
    2: StepAvatar
}
// const steps = [StepName, StepAvatar]

function Activate() {
    const [ step, setStep ] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return (
        
           <div className="cardWrapper">
            <Step onNext={onNext}></Step>
            </div>
        
    );
};

export default Activate