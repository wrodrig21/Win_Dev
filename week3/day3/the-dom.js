//Get all inputs
let firstButton = document.querySelector('button');
let inError = document.querySelectorAll('input.error');

console.log(firstButton); //single button node
console.log(inError); //Node list of inputs with class 'error'



let docHeader= window.document.querySelector("header");
   console.log("the header element is:"+docHeader);
   let SectionArr= window.document.querySelectorAll("section");
    console.log("the section elements array is: "+SectionArr);
    let currentSec= window.document.querySelector("section.current");
    console.log("the current section  is: "+currentSec);
    let nextSection= window.document.querySelector("section.current").nextElementSibling;
    console.log("the current section  is: "+nextSection);
    let prevSection= window.document.querySelector("section.current").previousElementSibling.children[0];
    console.log("the current section  is: "+prevSection);
    let h2Elements= window.document.querySelector("h2.highlight").parentElement.parentElement;
    console.log("the current section  is: "+h2Elements);