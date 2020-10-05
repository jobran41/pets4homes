import { combineReducers } from 'redux'
import PetsReducer from './PetsReducer'
import ArticleReducer from './ArticleReducer'

export default combineReducers({pets: PetsReducer, articles: ArticleReducer})