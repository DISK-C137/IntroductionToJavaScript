// console.log("Hello CSD");
// console.log("Hello CSD");
// console.log("Hello CSD");

// //alert("Hello CSD")

// var name = "Chinnawat";
// console.log(name);
// name = "Disk";
// console.log(name);

// var FirstName = "Chinnawat";
// var LastName = "Suwanpasert";
// console.log(FirstName + " " + LastName);
// //alert(FirstName+" "+LastName)

// console.log(typeof "CSD");
// console.log(typeof 10);
// console.log(typeof true);

// console.log("Chinnawat " + "Suwanpasert");
// var age = 10 + 10;
// console.log(age);
// console.log(2 + 2 * 2);

// {
//     var x =20
//     let y =15
//     console.log(y)
// }
// var x=20
// {
//     var x =100
//     let y =15
// }
// console.log(x)

// let name = prompt("enter your name.")
// console.log("Hello "+name)

let lotto_number = prompt("กรุณากรอกเลขที่ต้องการ.")
let result = Math.floor(Math.random() * 1000)
let note = lotto_number == result ? "คุณถูกรางวัลเลขท้าย 3 ตัว!" : "คุณไม่ถูกรางวัลเลขท้าย 3 ตัว!"

document.getElementById("your_number").innerHTML = 
"เลขของคุณ คือ "+lotto_number
document.getElementById("result").innerHTML = "เลขที่ออก คือ "+result
document.getElementById("note").innerHTML = note

// console.log(1 == 1)
// console.log(2 == "2")
// console.log(3 === "3")
// console.log("------------------------------")
// console.log("Hello" != "Hello")
// console.log("hello" != "Hello");
// console.log("4" !== "4");
// console.log("4" !== 4);
// console.log("------------------------------");
// console.log(10 => 15)
