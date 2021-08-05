import navbar, {mealDiv} from './components/navbar.js'
import { makeRequest, appendMealOfDay} from './scripts/data.js';

document.body.innerHTML = navbar();

function mealOfDay(){
    /* loads randomly selected meal of the day */
    /* load default recipe to show */

    //get default html div
    document.body.append(mealDiv());

    //append html and data
    makeRequest("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => {
        //append recipes data
        const div = document.getElementById("mealDiv");
        appendMealOfDay(div, res);
    });
}

mealOfDay();