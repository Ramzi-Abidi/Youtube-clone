const REACT_APP_RAPID_API_KEY = "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

fetch('https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50', options)
    .then(res => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));