let press=[];
let firstValue=0;
let secondValue=0;
let press2 = []
let button = document.querySelectorAll('.num');
let adds = document.querySelector('.adds')
// let equal = d


const display = document.querySelector('input');
console.log(display)

button.forEach(e=>{
    e.addEventListener('click',()=>{
        display.value+=e.value
    }) 

    
})

function calculate(){
    display.value=eval(display.value)
}

//  const substract = (press)=>{
//      press.forEach(e=>{
//     total.push(e+e)
//     return total
//      })
//  }

// const multiply = (x,y)=>{
//     return x*y;
// }

// const divide = (x,y)=>{
//     return x/y;s
// }

// console.log(sum(x,y))
// console.log(divide(x,y))
// console.log(substract(x,y))