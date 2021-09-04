import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com/search',
      
    headers:{
        authorization: 'Client-ID R0bnwkuKNT2gF78DJXUrzxP5fvI3CJM6mLEK_kKyTvQ'
    }
});