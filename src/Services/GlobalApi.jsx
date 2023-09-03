
import axios from "axios";

const movieBaseUrl = "http://api.themoviedb.org/3"
const api_key = "83dd270a4e1ce260adc96e334c5ddeae"
// http://api.themoviedb.org/3/trending/all/day?api_key=83dd270a4e1ce260adc96e334c5ddeae

const getTrendingVideos=axios.get(movieBaseUrl+'/trending/all/day?api_key='
+api_key);



export default{
    getTrendingVideos
};