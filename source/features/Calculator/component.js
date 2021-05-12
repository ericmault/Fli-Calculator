import { string, array } from 'prop-types'
import { useReducer } from 'react'
import RoiDetails from '../RoiDetails/component'
import {
  reducer,
  setFliTokenStrategy,
  setTokenPrice,
  setLeverageRatio,
  setPercentChange,
  setHoldingPeriod,
  setInitialInvestment,
  setRoiResult
} from './reducer'

const Calculator = ({
  fliIndexLogo = 'https://set-core.s3.amazonaws.com/img/portfolios/eth2x_fli.svg',
  fliTokenOptions = ['ETH', 'BTC']
}) => {
  const [state, dispatch] = useReducer(reducer, reducer())

  const {
    roiResult,
    fliTokenStrategy,
    initialInvestment,
    leverageRatio,
    tokenPrice,
    percentChange,
    holdingPeriod
  } = state
  const calculateReturn = (e) => {
    e.preventDefault()

    dispatch(
      setRoiResult({
        fliTokenStrategy,
        investment: Number(initialInvestment),
        percentChange: Number(percentChange),
        tokenPrice: Number(tokenPrice),
        ratio: Number(leverageRatio)
      })
    )

    console.log('state::', state)
  }
  return (
    <div>
      <form className="calculator" onSubmit={(x) => calculateReturn(x)}>
        <h2>
          Flexible Leverage Index ROI Calculator <img src={fliIndexLogo} />
        </h2>
        <div className="input-wrapper">
          <label name="fliToken" htmlFor="fliToken">
            FLI Token
          </label>
          <select
            id="fliToken"
            type="string"
            value={fliTokenStrategy}
            onChange={(e) => dispatch(setFliTokenStrategy(e.target.value))}
          >
            {fliTokenOptions.map((x, i) => (
              <option key={i} value={x}>
                {x}
              </option>
            ))}
          </select>
        </div>
        <div className="input-wrapper">
          <label name="tokenPrice" htmlFor="tokenPrice">
            Token Price
          </label>
          <input
            id="tokenPrice"
            type="number"
            value={tokenPrice}
            onChange={(e) => dispatch(setTokenPrice(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label name="holdingPeriodInput" htmlFor="holdingPeriodInput">
            Holding Period (Months)
          </label>
          <input
            id="holdingPeriodInput"
            type="number"
            value={holdingPeriod}
            onChange={(e) => dispatch(setHoldingPeriod(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label name="percentChangeInput" htmlFor="percentChangeInput">
            Percent Change in Token
          </label>
          <input
            id="percentChangeInput"
            type="number"
            value={percentChange}
            onChange={(e) => dispatch(setPercentChange(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label name="investmentAmountInput" htmlFor="investmentAmountInput">
            Initial Investment Amount (Dollars)
          </label>
          <input
            id="investmentAmountInput"
            type="number"
            value={initialInvestment}
            onChange={(e) => dispatch(setInitialInvestment(e.target.value))}
          />
        </div>
        <div className="input-wrapper">
          <label name="leverageRatioInput" htmlFor="leverageRatioInput">
            Current Leverage Ration
          </label>
          <input
            id="leverageRatioInput"
            type="number"
            value={leverageRatio}
            onChange={(e) => dispatch(setLeverageRatio(e.target.value))}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <RoiDetails {...roiResult} />
    </div>
  )
}

Calculator.propTypes = {
  fliTokenOptions: array,
  fliIndexLogo: string
}

export default Calculator
