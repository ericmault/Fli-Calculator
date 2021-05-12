const add = (x) => (y) => x + y
const addOne = add(1)
const divide = (x) => (y) => y / x
const compose =
  (...fns) =>
  (initialValue) =>
    fns.reduceRight((val, fn) => fn(val), initialValue)

const divideBy100 = divide(100)

const trace = (label) => (val) => {
  console.log(`${label}::`, val)
  return val
}

const testObject = {
  investment: 1000,
  percentChange: 10,
  ratio: 1.7,
  ethPrice: 4000
}

const evaluatePercentLogic = ({ percentChange }) => divideBy100(percentChange)

const calculateFliReturn = (x) =>
  x.investment * (1 + evaluatePercentLogic(x) * x.ratio)

const evalFinalTokenPrice = (x) => x.tokenPrice * (1 + evaluatePercentLogic(x))
const calculateTokenRoi = (x) => x.investment * (1 + evaluatePercentLogic(x))

const createInputParams = ({
  finalFliPrice,
  finalTokenPrice,
  tokenRoi,
  fliTokenStrategy,
  fliRoi,
  ...rest
}) => ({
  fliStrategy: fliTokenStrategy,
  finalFliPrice,
  finalTokenPrice,
  tokenRoi,
  fliRoi,
  fliIndexProfit: fliRoi - tokenRoi,
  userInput: rest
})

const createFliReturn = (x) => ({
  ...x,
  finalFliPrice: calculateFliReturn(x),
  fliRoi: calculateFliReturn(x) - x.investment,
  tokenRoi: calculateTokenRoi(x) - x.investment
})

const createFinalTokenPrice = (x) => ({
  ...x,
  finalTokenPrice: evalFinalTokenPrice(x),
  profitAmount: x.fliRio - x.tokenRoi
})

// const calculateFliROI = compose(createInputParams, createFinalTokenPrice, createFliReturn)(testObject) //?
export default compose(
  trace('final valeu'),
  createInputParams,
  trace('after createFinalTokenPrice'),
  createFinalTokenPrice,
  trace('after createFliReturn'),
  createFliReturn,
  trace('starting calculation')
)
