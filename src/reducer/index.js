import optionFilter from './filterOption'
import UnitData from './filterData'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    optionFilter,
    UnitData
})
export default allReducers