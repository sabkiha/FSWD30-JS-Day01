/*Advanced Exercise 1 | String Manipulation

Create a program that will store the word Vienna in a new variable 
each time it appears in the text. Output all the variables in the web 
browser vertically to see how many times it has appeared in the text.

"With the online map of Vienna you can easily navigate through Vienna."

Please note: you don't need to use an automated way of looping over the
words, instead hard coded way of accessing each word separately.*/

var vienna = "With the online map of Vienna you can easily navigate through Vienna";

var temp = new Array();

temp = vienna.split(" ");

console.log(temp.sort());

console.log(temp.slice(0, 2));

document.write("String Manipulation" + "<br>" + temp[0] + "<br>" + temp[1] + "<br>");
