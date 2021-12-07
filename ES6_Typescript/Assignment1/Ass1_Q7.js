let sports =["cricket","football","vollyball","basketball"];   
[, , ,a,] = sports;  
console.log(a);



// sub Q)2
let organization = {
    name: "Tesla",
    address:{
        street: "MVP Colony",
        city: "Visakhapatnam",
        pincode: 535501
    }
}

let {address: {pincode: pin}} = organization;

console.log("Pincode:", pin);