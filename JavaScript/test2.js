//Document Object Model DOM

//choose 1 element , use html document
const firstP = document.querySelector('p')
console.log(firstP)

//認class名 .
const secondP = document.querySelector('.second')//.second = class名 
console.log(secondP)

//認id #
const copyrightP = document.querySelector('#copyright') 
console.log(copyrightP)

//選多個HTML元素
const allP = document.querySelectorAll('p')
console.log(allP)
console.log(allP[0])
allP.forEach((p)=>{
  console.log(p)
})

//event (click event 點擊事件)
// const body = document.querySelector('body')
// body.addEventListener('click',()=>{
//   console.log('after click')
// })

// const div=document.querySelector('div')
// div.addEventListener('click',(event)=>{
// console.log(event)
// console.log(event.target)
// event.target.remove()
// event.target.style.fontSize='30px'
// })

const bigger=document.querySelector('#bigger')
const smaller=document.querySelector('#smaller')

const img = document.querySelector('img')
//read the width of pic
let currentWidth = img.getAttribute('width')
console.log(currentWidth)

img.style.width = currentWidth+'px';

bigger.addEventListener('click',()=>{
let newWidth = parseInt(img.style.width)+ 30;
console.log(newWidth)
img.style.width=newWidth+"px"
})

smaller.addEventListener('click',()=>{
  let newWidth = parseInt(img.style.width)- 30;
  console.log(newWidth)
  img.style.width=newWidth+"px"
  })

  //create element
const div = document.querySelector('div')
//method 1 :現有html中加入
div.innerHTML +='<p>新加入</p>'

//method 2 ： 創造新tag
const newP = document.createElement('p')
newP.innerText='新加入新加入新加入'

div.append(newP)//放後面

const newP2 = document.createElement('p')
newP2.innerText='新加入2新加入2新加入2'

div.prepend(newP2)//放前面

