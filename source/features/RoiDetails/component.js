import { number, string } from 'prop-types'
const isZero = (x) => (x === 0 ? true : false)

const RoiDetails = ({
  finalTokenPrice = 0,
  finalFliPrice = 0,
  fliRoi = 0,
  tokenRoi = 0,
  fliIndexProfit = 0,
  fliStrategy = ''
}) => (
  <>
    {isZero(finalTokenPrice) ? null : (
      <div className="roiWrapper">
        <h2>ROI Calculator Results | {fliStrategy}</h2>
        <h3>FLI will outperform token investment by: {fliIndexProfit}</h3>
        <h3>
          FLI Investment End Value: {finalFliPrice} | ROI {fliRoi}
        </h3>
        <h3>
          Token Invesment End Value: {finalTokenPrice} | ROI {tokenRoi}
        </h3>
      </div>
    )}
  </>
)

RoiDetails.propTypes = {
  finalTokenPrice: number,
  fliIndexProfit: number,
  fliStrategy: string,
  finalFliPrice: number,
  fliRoi: number,
  tokenRoi: number
}
export default RoiDetails
