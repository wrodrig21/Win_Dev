// Homework 1
async function city(cityName) {
  let response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
  .then((response) => response.json())
  .then((result) => {
      console.log(result.longt);
      console.log(result.latt);
  })
  .catch((error) => console.log("error", error));
}
city("Austin");

// Homework 2


function getRandomNumber(){
    let num = newPromise ((resolve, reject)=> {
        setTimeout(() => resolve(Math.random() *10), 500)
    });
    let result = num
    return num;
}

async function callIt() {
    let numberFunc = await getRandomNumber();
    console.log(numberFunc);
}
callIt();
