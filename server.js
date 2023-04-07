const exp=require('express');
const ejs=require("ejs");
const parse=require("body-parser");
const app=exp();
var arr=[];
var input="";
app.use(parse.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(exp.static("public"));
app.listen(56567,(req,res)=>{
  console.log("Server started on the port 56567");
});
var today=new Date();
var type={
  weekday:"long",
  day:"numeric",
  month:"long"
}
var day=today.toLocaleDateString("en-US",type);
console.log(today);
app.get("/",(requ,resp)=>{

  console.log(arr);
  resp.render("index",{data:arr ,day:day});
});
app.post("/",(reque,respo)=>{
  input=reque.body.input;
  arr.push(input);
  respo.redirect("http://localhost:56567/");
});
