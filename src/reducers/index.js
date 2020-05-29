import { combineReducers } from 'redux';
//reduxFormReducer is called reducer
import { reducer as reduxForm } from 'redux-form';
import itemReducer from './itemReducer';

export default combineReducers({
  items: itemReducer,
  form: reduxForm,
});
