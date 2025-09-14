import { useState } from "react"
import { calculateInvestmentResults, formatter } from "../util/investment";
import Results from "./Results";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleSubmit(Specifier, value) {
    setUserInput((prevInput) => ({
      ...prevInput,
      [Specifier]: +value,
    }));
  }

  return (
    <>
    <div id='user-input'>
      <div className='input-group'>
        <div>
          <label htmlFor="init_invest">Initial Investmenet</label>
          <input type="number" id='init_invest' required defaultValue={0} onChange={(e) => handleSubmit('initialInvestment', e.target.value)} />
        </div>
        <div>
          <label htmlFor="annual_invest">Annual Investmenet</label>
          <input type="number" id='annual_invest' required defaultValue={0} onChange={(e) => handleSubmit('annualInvestment', e.target.value)} />
        </div>
      </div>
      <div className='input-group'>
        <div>
          <label htmlFor="exp_return">Expected Return (%)</label>
          <input type="number" id='exp_return' required defaultValue={0} onChange={(e) => handleSubmit('expectedReturn', e.target.value)} />
        </div>
        <div>
          <label htmlFor="duration">duration (Years)</label>
          <input type="number" id='duration' required defaultValue={0} onChange={(e) => handleSubmit('duration', e.target.value)} />
        </div>
      </div>
    </div>
    <Results input={userInput} />
    </>
  )
}