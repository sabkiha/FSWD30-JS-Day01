	/*Intermediate Exercise 2 | Push and Pop Fruits

	Create a program that using push and pop methods will provide the 
	following output:

	Start = apple, banana, kiwi,
	After Push = apple, banana, kiwi, orange
	After Pop = apple, banana, kiwi

	Each statement should be outputted on separate line.-*/

	var fruit = ["apple", "banana", "kiwi"];

	document.write("<br>" + "<br>" + "Start = "+ fruit + "<br>");

	fruit.push("orange");

	document.write("After Push = " + fruit + "<br>");

	console.log(fruit.pop());
	document.write("After Pop = " + fruit + "<br>");






