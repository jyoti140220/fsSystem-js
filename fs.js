// const fs=require('fs');
// const data=fs.readFileSync("fsa.txt","utf8")
// console.log(data)
// fs.renameSync("fsa.txt","fs.txt")
// fs.unlinkSync("fs.txt")
// fs.mkdirSync("thapa")
// fs.rmdirSync("thapa")


// write file
// it is also take three para
// fs.writeFile('abc.txt','console.log("jyoti and jaya")',function(err){
//     if(err) throw err;
//     console.log("data saved")
// })

//read file
// it will be take three parameter
// fs.readFile("abc.txt","utf8",function(err,data){
//     if(err) throw err;
//     // var a=JSON.parse(data)
//     console.log(data)
// })


// append file
// it is also take three para
// fs.appendFile('abc.txt','console.log("jyoti and jaya")\n',function(err){
//     if(err) throw err;
//     console.log("data saved")
// })

// // for delete 
// fs.unlink("abc.txt",function(err){
//     console.log("delete")
// })


var fs = require('fs');
  
console.log("Open file!");
  
// To open file in write and read mode,
// create file if doesn't exists.
fs.open('demo.txt', 'w+', function (err, f) {
   if (err) {
      return console.error(err);
   }
   console.log(f);
   console.log("File opened!!");     
});