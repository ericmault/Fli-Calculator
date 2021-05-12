import autodux from 'autodux'
import roiFunction from '../../shared/utils/calculator'

export const defaultState = {
  fliTokenStrategy: 'ETH',
  initialInvestment: 0,
  leverageRatio: 1,
  percentChange: 0,
  holdingPeriod: 0,
  tokenPrice: 0,
  roiResult: null
}

export const {
  reducer,
  actions: {
    setLeverageRatio,
    setFliTokenStrategy,
    setInitialInvestment,
    setPercentChange,
    setHoldingPeriod,
    setTokenPrice,
    setRoiResult
  },
  selectors: {
    getLeverageRatio,
    getFliTokenStrategy,
    getInitialInvestment,
    getPercentChange,
    getHoldingPeriod,
    getTokenPrice,
    getRoiResult
  }
} = autodux({
  slice: 'FLI ROI calculator',
  initial: defaultState,
  actions: {
    setRoiResult: (state, payload) => {
      return {
        ...state,
        roiResult: roiFunction(payload)
      }
    },
    resetForm: (state) => ({
      fliTokenStrategy: state.fliTokenStrategy
    })
  }
})
