
async function makeRequest(url){
    try {
        const response = await fetch(url)
        const data = await response.json();
        console.log(data);
        return data;        
    } catch (error) {
        console.log("No data found! "+error);
    }
}

function appendDefault(parent, data){
    /* load default meals */
    data.categories.forEach(({strCategory, strCategoryThumb, strCategoryDescription}) => {
        const div = document.createElement("div");

        const heading = document.createElement("h5");
        heading.innerHTML = strCategory;

        const img = document.createElement("img");
        img.setAttribute("src", strCategoryThumb);

        const p = document.createElement("p");
        p.innerHTML = strCategoryDescription;
        
        div.append(img, heading, p);

        parent.append(div);
    });    

}
function appendSearchResults(parent, data){
    /* load default meals */
    parent.innerHTML = "";
    try {
        data.meals.forEach(({strMeal, strMealThumb, strInstructions}) => {
            const div = document.createElement("div");
    
            const heading = document.createElement("h2");
            heading.innerHTML = strMeal;
    
            const img = document.createElement("img");
            img.setAttribute("src", strMealThumb);
    
            const p = document.createElement("p");
            p.innerHTML = strInstructions;
            
            div.append(img, heading, p);
    
            parent.append(div);
        });            
    } catch (error) {
        console.log("No data found "+error);
        const headingError = document.createElement("h1");
        headingError.innerHTML = "Oops, We could not find that! We will add this Recipe soon!";
        parent.append(headingError);
        setTimeout(() => {
            //redirect after 8000ms
            window.location.href = "./index.html";
        }, 8000);
    }

}
function appendMealOfDay(parent, data){
    /* load default meals */
    parent.innerHTML = "";
    try {
        data.meals.forEach(({strMeal, strMealThumb, strInstructions}) => {
            const div = document.createElement("div");
    
            const heading = document.createElement("h2");
            heading.innerHTML = strMeal;
    
            const img = document.createElement("img");
            img.setAttribute("src", strMealThumb);
    
            const p = document.createElement("p");
            p.innerHTML = strInstructions;
            
            div.append(img, heading, p);
    
            parent.append(div);
        });            
    } catch (error) {
        console.log("No data found "+error);
        const headingError = document.createElement("h1");
        headingError.innerHTML = "Oops, We could not find that! We will add this Recipe soon!";
        parent.append(headingError);
        setTimeout(() => {
            //redirect after 8000ms
            window.location.href = "./index.html";
        }, 8000);
    }

}
export {makeRequest, appendDefault, appendSearchResults, appendMealOfDay}