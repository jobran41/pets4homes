import { combineReducers } from 'redux'
import PetsReducer from './PetsReducer'
import PetsWantedReducer from './PetsWantedReducer'
import ArticleReducer from './ArticleReducer'

export default combineReducers({pets: PetsReducer, articles: ArticleReducer,wanted:PetsWantedReducer})