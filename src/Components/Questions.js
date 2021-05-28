import React, { useEffect } from "react";
function Question() {
   var person = prompt("Please enter your name", "Harry Potter");

   if (person != null) {
     document.getElementById("demo").innerHTML =
       "Hello " + person + "! How are you today?";
   }
  return <div></div>;
}
export default Question
