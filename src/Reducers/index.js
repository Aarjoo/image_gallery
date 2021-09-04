import {combineReducers} from 'redux';

const images = (state =[], action) =>
{
    if(action.type === 'FETCH_PHOTO')
    {
        return action.payload;
    }
    return state; 
}

const pages = (state =0, action) =>
{
    if(action.type === 'FETCH_PAGES')
    {
        return action.payload;
    }
    return state; 
}

export default combineReducers({
    images:images,
    pages:pages
});