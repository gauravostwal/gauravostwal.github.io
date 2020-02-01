import { combineReducers } from 'redux';

import { loadingReducers } from './loadingReducers';
import { modelReducers } from './modelReducers';
import { forms } from './forms';

export const rootReducer = combineReducers({
    models: modelReducers,
    loading: loadingReducers,
    forms,
    
});
