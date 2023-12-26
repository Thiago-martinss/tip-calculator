import { useState } from 'react';
import Reset from './Reset';
import Bill from './Bill';
import SelectPercentage from './SelectPercentage';
import Output from './Output';

export default function  TipCalculator() {
  const [bill, setBill] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  let tip = 0;
  tip = bill * ((percentage1 + percentage2) / 100);

  function handleReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill}>
        How much was the bill?{' '}
      </Bill>
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?{' '}
      </SelectPercentage>
      <SelectPercentage spercentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?{' '}
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
