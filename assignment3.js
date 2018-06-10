/*function b2d(str)
{
    return parseInt(str,2)
}
console.log(b2d(1001))


function d2bho(str,base)
{ 
    switch(base)
    {
    case 'b':
    return parseInt(str, 10).toString(2);
    break;
    case 'h':
    return parseInt(str, 10).toString(16);
    break;
    case 'o': 
    return parseInt(str, 10).toString(8);
    break;
    default:
    return ('wrong input')
    }
 }
console.log(d2bho(120,'b'));
console.log(d2bho(120,'h'));
console.log(d2bho(120,'o'));
console.log(d2bho(120));


function randomNumbers()
{
    for(let i=0;i<10;i++)
{
    console.log(parseInt(Math.random()*10))
}

} randomNumbers()


function dec(n,d)
{
    if ((typeof n !== 'number') || (typeof d !== 'number'))
   return false;
   return parseFloat(n).toFixed(d)
}
console.log(dec(21,2))
console.log(dec(21,'a'))
console.log(dec(21.4,2))


var a =[1,6,3]
{
 console.log(Math.max(...a))  //(...) called as spread func nd will either fail or return the wrong result if the array has too many elements
}


var a =[1,6,3]
{
 console.log(Math.min(...a))
}


function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    while(y) 
    {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(gcd(12, 16));
console.log(gcd(9, 3));


function power(n) {
    if (typeof n !== 'number') 
         return 'Not a number'; 
         return (n & (n - 1)) == 0;

}
   console.log(power(16));
   console.log(power(14));



   function round(v,d) 
   {
    return Number(Math.round(v,d))
  }
  
  console.log(round(1.005,2)); 



  function capitalize(string) 
  {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  console.log(capitalize("hello"))


  var a ,b;
   a = 1
   b = 2
  if(a>b)
  {
      console.log('a:'+a)
  }
  else
  {
      console.log('b:' +b)
  }


  
  
  
  
