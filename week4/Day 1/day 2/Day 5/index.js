// grabbing elements from HTML to work with in js
  let search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    drinkName = document.getElementById("drinkName"),
    directions = document.getElementById("directions"),
    needed = document.getElementById("needed"),
    one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three");


    submit.addEventListener('click', getDrink)


var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=de230c27769be510293a1c0e90f7f788c1615655737");



var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
function getDrink(e){
    e.preventDefault();
    let drink = search.value;
   
   
   
   
   
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    drinkName.innerHTML = result.drinks[0].strDrink;
    one.innerHTML = result.drinks[0].strInstructions;
    two.innerHTML = result.drinks[0].strIngredients1;
    three.innerHTML = result.drinks[0].strIngredients2;
    directions.innerHTML = result.drinks[0].strIngredients3;
    needed.style.visibility ='visible';

  })
  .catch(error => console.log('error', error));
}






  
  

