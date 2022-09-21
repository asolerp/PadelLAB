import React from 'react';
import { useAnimateMethodBoxes } from '../../pages/hooks/useAnimateMethodBoxes';
import { Button } from '../input/Button';

export const MethodSection = () => {
  useAnimateMethodBoxes();

  return (
    <div
      style={{ height: 700, opacity: 0.9, backgroundColor: '#000000' }}
      className="absolute w-full h-full flex flex-row"
    >
      <div className="flex flex-1 items-center justify-center">
        <div
          id="method_box1"
          style={{
            width: 250,
            height: 250,
            top: 300,
            transform: `rotate(140deg)`,
            backgroundColor: '#FF9900',
          }}
          className="absolute opacity-50 overflow-hidden"
        ></div>
        <div
          id="method_box2"
          style={{
            width: 350,
            height: 350,
            top: 200,
            marginLeft: 200,
            backgroundColor: '#FF9900',
          }}
          className="absolute opacity-50 overflow-hidden"
        ></div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="pr-40">
          <h4 className="font-sans text-white text-4xl mb-16">El método</h4>
          <p className="font-sans text-white text-4xl mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <Button text="Descubrir" onClick={() => console.log('Descubrir')} />
        </div>
      </div>
    </div>
  );
};
