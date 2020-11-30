// Global variables
import Global from "../Global";
// HTTP requests
import axios from "axios";

export default class ArticleService {

    constructor() {
        this.api_url = Global.api_url;
    }

    getArticles() {
        return axios.get(this.api_url + "/articles");
    }

    getLastArticles() {
        return axios.get(this.api_url + "/articles/true");
    }
    
    getSearchArticles( searchTerm ) {
        return axios.get(this.api_url + "/search/" + searchTerm);
    }

    getArticle( articleId ) {
        return axios.get(this.api_url + "/article/" + articleId);
    }

}