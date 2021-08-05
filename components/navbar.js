function navbar(){
    /* return navbar html */
    return `<div class="navbar">
                <h2><a href='./index.html'>Recipe Mine</a></h2>
                <div class="searchbar">
                    <input type="text" name="" id="query" placeholder='Search for any recipe you crave...'>
                    <button id="searchBtn" class="search-btn"><span class="material-icons">search</span></button>
                </div>
                <div class="right">
                    <a href="meal_of_day.html"><h3>Recipe Of the Day</h3></a>
                    <a href="#"><h3>Latest Recipes</h3></a>
                </div>`
}

function defaultDiv(){
    /* return default categories html div */

    const parent = document.createElement("div");
    parent.id = "defaultParent";
    parent.setAttribute("class", "default-parent");
    const div = document.createElement("div");
    const h2 = document.createElement("h3");
    h2.innerHTML = "We offer the following categories of meals:";
    div.id = "defaultDiv";
    div.setAttribute("class", "default-categories");
    parent.append(h2, div);
    return parent; 
}

function searchDiv(){
    /* returns search div html */
    const parent = document.createElement("div");
    parent.id = "searchParent";
    parent.setAttribute("class", "search-parent");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerHTML = "Matching recipes found:";
    div.id = "searchDiv";
    div.setAttribute("class", "search-div");
    parent.append(h3, div);
    return parent;     
}

function mealDiv(){
    /* returns search div html */
    const parent = document.createElement("div");
    parent.id = "mealParent";
    parent.setAttribute("class", "meal-parent");
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerHTML = "Our Hand-Picked Meal Of The Day...Ta Da!";
    div.id = "mealDiv";
    div.setAttribute("class", "meal-div");
    parent.append(h3, div);
    return parent;     
}
export default navbar
export {defaultDiv, searchDiv, mealDiv}