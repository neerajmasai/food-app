import navbar, {defaultDiv, searchDiv} from './components/navbar.js'
import { makeRequest, appendDefault, appendSearchResults } from './scripts/data.js';


document.body.innerHTML = navbar();
document.getElementById("searchBtn").addEventListener("click", search);

function defaultRecipes(){
    /* load default recipes to show */

    //get default html div
    document.body.append(defaultDiv());

    //append html and data
    makeRequest("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((res) => {
        //append recipes data
        const div = document.getElementById("defaultDiv");
        appendDefault(div, res);
    });
}

function search(){
    /* search for keyword */

    //clear default div
    document.getElementById("defaultParent").innerHTML = "";

    //get default html div
    document.body.append(searchDiv());

    //get search query
    const keyword = document.getElementById("query").value;

    //append html and data
    makeRequest(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then((res) => {
        //append recipes data
        const div = document.getElementById("searchDiv");
        appendSearchResults(div, res);
    });
}

defaultRecipes();
