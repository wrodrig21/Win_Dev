//[
   // ["Batman", "Bruce Wayne"],
    //[//"The Flash", "Barry Allen"]
 // ]

  //let students = [
//	{firstName: 'Cam', lastName: 'Newton'},
//	{firstName: 'Ted', lastName: 'Ginn'},
//	{firstName: 'Greg', lastName: 'Olsen'}
//]

//let fullNames = students.map(function(student){
	//return `${student.firstName} ${student.lastName}`;
//})

//fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

  var secretIdentity =[
    ["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]
  ];
  let secretIdentity = superHeroes.map(

    function(revealArray){
        return revealArray.join(" is ");
    }
  );
  console.log(secretIdentity.join("\n"));


  let food = ['burgers', 'salad', 'tomatoes', 'fries'];
 let newFood= food.join(" ");
 console.log(newFood);


 // // THIS IN AN ASYNC FUNCTION
let teacher = {
	name: 'Shane',
    // saving a function to the key labeled 'speak'
	speak: function() {
		//Maybe you're fetching data from an API, or getting user input
        // // set Timeout essentially delays a function by x milliseconds
        // // inner scope
		setTimeout(function(random = "david"){
            // this is referring to the object that's calling upon this THIS keyword
            console.log('this inside of setTimeout: ' + random);
			console.log('later my name is ' + this.random); //undefined
		},5000)
		
        console.log(this.name); // shane
        // look for 'this' in its immediate scope first and then move outward
		console.log('Now my name is ' + this.name); // 'Shane'
	}
}

let tomObj = {
    teacher: 'tom',
    doSomething: teacher.speak()
}
tomObj.doSomething;

// teacher.speak();

let slideShow ={
    photolist: ['beach', 'doggo', 'instafood', 'more dogs'],
    currentPhotoIndex: 2,
}