	/*Intermediate Exercise 3 | String manipulation

	Create a program that will output each fruit on a separate line 
	in the web browser from the following string 
	"mango/cherries/kiwi/grapes/pear/peach/orange/lemon".*/

	var fruit = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

	var fruit2 = fruit.replace(/[#/]/g,"<br>")

	document.write("<br>" + fruit2)






