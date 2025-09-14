import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}) {
  const results = calculateInvestmentResults(input);
  const initialInvestment = results[0]?.valueEndOfYear - results[0]?.interest - results[0]?.annualInvestment;
  
  return (
    <div id='result'>
      <table>
        <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
            </tr>
        </thead>
        <tbody>
          {results && results.map((yearData, index) => {
            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            return (
              <tr key={index}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>   
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  )
}