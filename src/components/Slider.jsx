import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


const Slider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Step 1',
      pretitle:"CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
      content: 'Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.'
    },
    {
      title: 'Step 2',
      pretitle:'SEND YOUR SOLANA TO A WALLET',
      content: 'CREATE AN ACCOUNT WITH PHANTOM, BACKPACK OR ANY WALLET OF YOUR CHOICE'
    },
    {
      title: 'Step 3',
      pretitle:'TRANSFER SOLANA',
      content: 'TRANSFER YOUR SOLANA TO YOUR WALLET.'
    },
    {
      title: 'Step 4',
      pretitle:'BUY $SPEPE',
      content: 'CONNECT YOUR WALLET TO A DECENTRALIZED EXCHANGE LIKE JUPITER OR RAYDIUM'
    }
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  return (
    <div className="slider h-auto sm:h-[320px] ">
      <div className="slider-content">
        <div className="slide" key={currentStep}>
          <h2 className=' font-bold text-4 text-sad text-4xl py-2 text-black font-snow'>{steps[currentStep].title}</h2>
          <h2 className=' font-bold font-dream text-3xl py-2 text-black'>{steps[currentStep].pretitle}</h2>
          <p className=' text-white'>{steps[currentStep].content}</p>
        </div>
        <button onClick={handleNext} className=' font-bold text-2xl font-dream flex items-center gap-2 text-black'> <FaArrowRightLong /> Next</button>
      </div>
      <div className="indicator-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`indicator ${index === currentStep ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
