/*function upper_case(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("String's first character is uppercase");
    } 
    else
    {
      console.log("String's first character is not uppercase");
    }
}
upper_case('Abcd');
upper_case('abcd');


function string_values(str)
{
   regexp = /^[a-zA-Z]*$/;
   if (regexp.test(str))
    {
      console.log("String values");
    } 
    else
    {
      console.log("Not a string values");
    }
}
string_values(123);
//string_values(1);


function numeric_values(number)
{
   regexp = /^[0-9]+$/;
   if (regexp.test(number))
    {
      console.log("numeric values");
    } 
    else
    {
      console.log("Not a numeric values");
    }
}
numeric_values(23);
numeric_values('abc');


function url(str)
{
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

if (regexp.test(str))
    {
      console.log("valid url");
    } 
    else
    {
      console.log("invalid url");
    }
}
//url("http://www.example.com")
//url("https://www.example.com");
url("example:com");


function is_hexadecimal(str)
{
 regexp = /^[0-9a-fA-F]+$/;
  
 if (regexp.test(str))
   {
      return true;
    }
     else
          {
            return false;
          }
}

console.log(is_hexadecimal("ffffff"));

console.log(is_hexadecimal("fz5500"));



var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};
delete student.rollno;
console.log(student)


var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};
console.log(Object.keys(student).length);



function Person(first, last, age, eyecolor) 
{ 
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
Person.prototype.nationality = function() 
{
  return this.nationality;
}
var myFather = new Person("John", "Doe", 50, "blue",'English');
console.log(myFather)


var arr =[3,2,1,4]
  var temp_arr = arr.slice(0)
  var second_largest_value = temp_arr.sort()[temp_arr.length - 2];
  var index_of_largest_value = arr.indexOf(second_largest_value);
  
  console.log( second_largest_value );
console.log( index_of_largest_value );


function union(arr1, arr2) 
{
  
  if ((arr1 == null) || (arr2==null)) 
    return void 0;
  
  var obj = [];
 
  for (var i = arr1.length-1; i >= 0; -- i)
     obj[arr1[i]] = arr1[i];
 
  for (var i = arr2.length-1; i >= 0; -- i)
     obj[arr2[i]] = arr2[i];
 
  var res = [];
 
  for (var n in obj)
  {
  
    if (obj.hasOwnProperty(n)) 
      res.push(obj[n]);
  }
 
  return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));




is_array = input => {
  if (toString.call(input) === "[object Array]")
    return true;
  return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));



first = function(array, n) {
  if (array == null) 
  return void 0;
if (n == null) 
  return array[0];
if (n < 0)
  return [];
return array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


var a = [1, 2, 3, 4],
    s = 0,
    p = 1;
for (i = 0; i < a.length; i++) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 


var a = new Array()
for(i=0; i<=Array.length; i++)
{
 //console.log(a.push())
}
console.log(a)



var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (var i in a) 
{
   console.log("row " + i);
   for (var j in a[i]) 
     {
      console.log( a[i][j]);
     }
    }*/


    











