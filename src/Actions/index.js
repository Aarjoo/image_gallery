import Api from '../API';

const fetchPhoto = (term,pageNumber) => async dispatch => {
   
    const response = await Api.get('/photos', {
        params:{
            query:term,
            per_page:20,
            page:pageNumber
            }, 
    });
    dispatch({type:'FETCH_PHOTO', payload:response.data.results});
   
    // console.log(response);

};

const fetchPages = (term) => async dispatch => {

    const response = await Api.get('/photos', {
        params:{
            query:term,
            }, 
    });
    dispatch({type:'FETCH_PAGES', payload:response.data.total});
};

export {fetchPhoto, fetchPages};