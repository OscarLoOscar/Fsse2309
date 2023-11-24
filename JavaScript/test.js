// alert('hello javascript'); //出警告視窗 
console.log('JavaScript')
console.log(1+1)
//變數Variable
let age = 10;
let language = 'javascript'
console.log(age);
console.log(language);
console.log(age,language);
age = 20;
console.log(age);

//常數 constant
const place = "HK"
console.log(place);

// place = "USA";

//變數/常數命名規則
//1.一定由英文字母/$/_開頭
//2.之後可由字母，數字 _ $ 
//3.不可以使用JS保留的詞 ： let , const

//命名習慣
//1.有語意地命名
//2.駝峰命名

// JS data type : Number ,String,Boolean, Null,Undefined , Array,Object
let age2 = 20;
//typeOf -> 用黎check 變數既data type
console.log(age, typeof(age))
//Number :  Integer , Float

//Null
let a = null;

//Underfined
let b;
console.log(b);

//Array
let hobbies = ['A','B','C',10,true];

//Object
let person = {
  name : 'ABC',
  age: 30,
  goodAtProgramming: true,
  hobbies:['A','B','C',10,true]
};

//String define
let platform = 'youtube'+'平台';
let lesson = "JS入門課程";

//String concat
console.log(platform+' : ' + lesson);

//Get characters
console.log(lesson[2]);
console.log('lesson 長度 ： '+lesson.length);

//Escape character 
let test = "\"JS入門課程\""
console.log(test)

//Template String 樣板字面值
let teacher = `ABC`; //Backtick / Backquote

console.log(`1. ${platform} , 2. ${lesson} , 3.${teacher}`)

//String常用功能
let userInput = '    學習javascript    '
console.log(userInput);
console.log("split : "+userInput.split())
console.log("trim : "+userInput.trim())
console.log("trimEnd : "+userInput.trimEnd())
console.log("substr : "+userInput.substring(4,8))
console.log("include : "+ userInput.includes('j'));
console.log("include : "+ userInput.includes('z'));
console.log("replace : "+ userInput.replace('j','J'));
console.log("replaceAll : "+ userInput.replaceAll('a','A'));

//Numbers
console.log(1+1);
console.log(1-1);
console.log(2*2);
console.log(2/1);
console.log(1/2);
console.log(2**3);
console.log(3%2);

//執行順序  BIDMAS
//括號-》指數-》除-》乘-》加-》減
(1+2)*3/5**2-6

//NaN (Not A Number)
console.log(1-'a'); 

let num = 12.3456;
console.log("toFixed : "+num.toFixed(2)) // 小數點後兩個位，4捨5入
console.log("round : "+Math.round(num))
console.log("random : " + Math.random()) // range : 0-1
console.log(Math.round(Math.random()*100))

//Array
let webLanguage = ['php','javascript','python','java']
let friends = [['ABC','123'],['DEF','456']]; 
console.log('indexOf : '+friends[0].indexOf('ABC'));
console.log('includes : '+friends[0].includes('ABC'));

//add new element
webLanguage.push('css')
console.log(webLanguage)
//remove
webLanguage.pop();
console.log(webLanguage);

//Comparison Operator
// == value 等於
// === value and datatype equals
// != value Not equals
// !== value and datatype not equals

console.log(1==1) //true
console.log(1===1) //true
console.log(1=="1")//true
console.log(1==="1")//false

//
let mark = 70
let pass = null
if(mark>=50)
  console.log('Y')
else
  console.log('N')

  console.log((mark>=90)?'Y':'N')

  //promt 手動入data
  // let grade = prompt('please input sth')

  // switch(grade){
  //   case'A':
  //   console.log('AAAA')
  //   break
  //   case'B':
  //   console.log('BBBB')
  //   break
  //   case'C':
  //   console.log('CCCC')
  //   break
  //   case'D':
  //   console.log('DDDD')
  //   break
  // }


  for(let i = 0 ; i < 10 ; ++i){
    console.log(i)
  }

  let webLanguage2 = ['php','javascript','python','java']
for(let i = 0 ; i < webLanguage2.length ; i++){
  console.log(webLanguage2[i])
}
// ---------
//Build-in function
// alert()
// console.log()

//Custom function
//Function Declaration
function hello(){
  console.log('bye bye')
}
hello();

//function expression 功能表達式
const hi = function(){
  console.log('HELLO')
}
hi();

// Hoistion -> Javascript Declaration are Hoisted
//Function Declaration : 可以先使用後定義
//Function Expression : 定義後先可以使用


//parameter
const say=function(msg1,msg2){
  //msg1,2 is call Local Variable
  console.log(msg1,msg2)
}

let msg1 = 'hihihi'//Global variable
console.log(msg1)
say("100",'200')

 //預設參數 ＋ return
 const area = function(width =3,height=4){
  let area = width*height;
  return area;
 }

 let output = area()
 console.log(output)//default 3*4
 console.log(area(1))//replace 3 , width =3
 console.log(area(4,5)) 


 //Arrow Function
 const hi2 = function(){
  console.log('hi')
 }
 hi2();

 //1.只得一行可以skip {}
 const hi3 = () => { 
  console.log('HI')
 }
 hi3();

 const hi5=()=> console.log('hi5')
 hi5()
//2.parameter得一個，可以skip括號()
// const say2 = (message)=>console.log(message)
const say2 = message=>console.log(message)
say2("TESTEST")
 //3.只return一句時，return 可以唔打

 const countArea = (width=3,height=4)=>width*height
 console.log(countArea());
 console.log(countArea(1,2));
 console.log(countArea(5));

 //Callback Function
const sayHello = (callback)=>callback()
sayHello(()=>console.log('callback function')) 
//input parameter  落function，parameter本身係function，it calls Callback Function
//保證function係特定事件做好後先run
const finish=()=>console.log('callback FUNCTION')
sayHello(finish)

setTimeout(()=>console.log('Time Out'),4000);
//Asyncronous Javascript 非同步

//Callback function in Array
let webLan = ['php','JS','Java','python']
webLan.forEach((element)=>{console.log(element)})
//1.參數本身係功能
//2.保證功能在特定事件完成後先run : 去database拎data，拎到先callback 去print


//Object
//#1 : Object Literal
let user={
  name : 'ABC',
  username : 'AAABBBCCC',
  hometown : 'HK',
  age : 17,
  isGood : true,
  blog:['something'],
  login : function(){console.log('login')},
  logout : function(){console.log('logout')},
  listBlog : function(){console.log(this.blog)},
  testing:function(){console.log(this)}
}
//#2 : Class 
user.name = 'CBA'
user.age=100
console.log(user.name)
console.log(user.age)

user.login()
user.logout()

//this
user.listBlog()
console.log(this)


//Document Object Model DOM
//choose 1 element , use html document
