import {combineReducers} from 'redux';

//Import All Reducers
import {authReducer} from './auth';
import {calendarReducer} from './calendar';
import {groupReducer} from './group';
import {prayerReducer} from './prayer';
export default combineReducers({
  auth: authReducer,
  group: groupReducer,
  events: calendarReducer,
  prayer: prayerReducer,
});
