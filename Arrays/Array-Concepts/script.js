//length
let a=[10,20,30];
document.write(a.length);
document.write("<br>");

//shift (Remove first element from array)
let shi=[10,20,30,40,50];
document.write(shi.shift());
document.write("<br>");
document.write(shi);

let sh=[];
document.write("<br>")
document.write(sh.shift());
document.write("<br>")

//unshift (Add first element to array)
let unsh=[10,20,30,40,50];
document.write(unsh.unshift('0'));
document.write("<br>")
document.write(unsh);
document.write("<br>")

//pop (Remove last element from an array)
let po=[10,20,30,40];
document.write(po.pop());
document.write("<br>")
document.write(po);
document.write("<br>")

//push (Add last element to an array)
let pu=[10,20,30,40,50];
document.write(pu.push('60'));
document.write("<br>");
document.write(pu)
document.write("<br>")

//indexof
let inx=[10,20,30,40,50]
document.write(inx.indexOf(50));
document.write("<br>");
document.write(inx.indexOf(200));
document.write("<br>");

//lastindexof
let lainx=[10,20,30,40,50,40,50,30,20,10];
document.write(lainx.lastIndexOf(50));
document.write("<br>")
document.write(lainx.lastIndexOf(10));
document.write("<br>")

//includes
let inc=[10,20,30,40,50];
document.write(inc.includes(30));
document.write("<br>");
document.write(inc.includes(60));
document.write("<br>");

//join
let joi=[10,20,30,40,50];
document.write(joi.join('-'));
document.write("<br>");

//reverse
let rev=[10,20,30,40,50];
document.write(rev.reverse());
document.write("<br>");

//concat
let con=[10,20,30,40,50];
document.write(con.concat(60,70));
document.write("<br>");

//foreach
let foea=[10,20,30,40,50];
foea.forEach(function(value,index){
    document.write(value);
})

//every
let evr=[10,20,30,40,50,60];
let ever=evr.every(function(value,index){
    return value>20;
})
document.write(ever);
document.write("<br>")

//some
let somar=[10,20,30,40,50];
let somearr=somar.some(function(value,index){
    return value>30;
})
document.write(somearr);
document.write("<br>")

//filter
let filer=[10,20,30,40,50];
let filtr=filer.filter(function(value,index){
    return value>20;
})
document.write(filtr);
document.write("<br>")

//slice
let slc=[10,20,30,40,50];
document.write(slc.slice(2,5))

//splice
let slp=[10,20,30,40,50];
document.write(slp.splice(1,0,100,200,300));//start delete insert
document.write("<br>")
document.write(slp)
document.write("<br>")

//without map method
let m=[1,2,3];
let area=[];
let are;

for(let i=0;i<m.length;i++){
    are=m[i]*5;
    area.push(are);
}
document.write(area)
document.write("<br>")

//map
let ma=[1,2,3,4,5];
let maa=ma.map(function(value,index){
    return value*5
})
document.write(maa);

//Arrays are fixed in terms of size
//Array operations
//Accesing
//Insert
//Delete
//Traverse
//Search
//Update
//Benifits: Random access,cache friendly,implement other Data structure
//Limitations: Fixed size,insert,delete,insufficient for frequent modifications
//Use cases
//Implement DS
//Caching
//graph problem and tree
//Mathematical
//coding
//Array 1D 2D 3D 4D 5D





