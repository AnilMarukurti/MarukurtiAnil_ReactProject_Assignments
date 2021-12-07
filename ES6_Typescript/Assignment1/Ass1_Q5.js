// Sub Question 1
let add = (a = 15, b = 5) => {
    console.log(a+b);
  };
  
  add();
  add(10);


  
  let userWithFriends = (userName, ...userFriends) => {
    console.log(`{userName: "${userName}", list of Friends is: "${userFriends}"}`);
}

userWithFriends('Anil','sona','tarun','jai','lokesh');
userWithFriends('Anil','ganesh','tarun','upendra');



// Sub Question 3
let printCapitalNames = (...names) => {
    const result= [];
    names.forEach((element) => {
        result.push(element.toUpperCase());
    });
    console.log(`Names in Upper Case: "${result }"`);
}

let namesList = ['anil','sona','tarun','jai'];
console.log(namesList);
printCapitalNames(...namesList);