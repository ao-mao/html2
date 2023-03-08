import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import serviceReducer from './serviceList/serviceListReducer'

const rootReducer = combineReducers({
    service:serviceReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))

export default store