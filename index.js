// pure function
var conversion_rate = 100;
function convertToRs(x){
    return x*conversion_rate;
}

var a = convertToRs(3);//300
var b = convertToRs(3); //300

conversion_rate = 200;
convertToRs(3); // 600;

//

function convertToRs_v2(x){
    var conversion_rate = 100;
    console.log('a');
    return x*conversion_rate;
}

convertToRs_v2(3)

//pure function  
 // same o/p for same input
 // no side affect 
    //console
    // api call
    // read and write 

// currying
// curry functions

function sum(x,y,z){
    return x+y+z;
}

var op = sum(1,2,3);// 6


//

function f1(x){
    return function f2(y){
        return function f3(z){
            return x+y+z;
        }
    }
}

var o1 = f1(1);
console.log(o1);
var o2 = o1(2);
console.log(o2);
var final_op = o2(3);
console.log(final_op);
var final_op = f1(1)(2)(3);

function add(x,y){
    return x +y;
}

function f1(x){
    return function f2(y){
        return x +y;
    }
}

var add10  = f1(10);
add10(5)