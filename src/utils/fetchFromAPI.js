import axios from 'axios';

const BASE_URL= 'https://youtube-v31.p.rapidapi.com';
const options = {
    
    params: {
     maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '452b73dab2msh0f78579a421cd0cp133a90jsnd306baa51766',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  }

  export const fetchFromAPI=async(url) =>{
    const response=await axios.request(`${BASE_URL}/${url}`,options);
  
 let { data }=response;
 console.log(data)
    return data;
  }
