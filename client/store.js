import { createStore } from 'redux'

import portfolioReducer from './reducer'

const store = createStore(portfolioReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
