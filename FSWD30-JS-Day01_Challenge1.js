/*Challenge 1 | Multidimensional array 

Create a multidimensional array that will output the values
"Vienna is a nice city". The values should be outputted from the 
array diagonally (order: top-left -> bottom-right).*/

var multiArray = [
['1', '2', '1', '24'], 
['8', 'Vienna ', '9', '4'], 
['7', 'city.', '7', 'nice '], 
['7', '4', '28', '14'], 
['3', '10', 'is ', '7'], 
['21', '4', '6', 'a '], 
['3', '5', '26', '3']];

document.write( "Multidimensional Array" + "<br>" +  "<br>" + multiArray [1] [1]);
document.write(multiArray [4] [2]);
document.write(multiArray [5] [3]);
document.write(multiArray [2] [3]);
document.write(multiArray [2] [1]);
