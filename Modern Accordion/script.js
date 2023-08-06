//variable
const content = document.querySelector('.heading');
const main = document.querySelector('.main');
const body = document.querySelector('body');
const grov = document.querySelector('#grov');


const button = document.querySelector('.btn-btn');
button.addEventListener('click',function(){
button.style.boxShadow="0px 0px 0px";
main.style.display="block";

});

document.addEventListener('click',function(e){
if(e.target !== button ){
  button.style.boxShadow="";
}
});


 grov.addEventListener('click',function(){
  main.style.display=''
  });


//now accordian 

const imp = document.querySelectorAll('.tabs');
console.log(imp);

const toggle =(events)=>{
  events.currentTarget.classList.toggle('active');
};

// imp.forEach((tabs) => {
//   tabs.addEventListener('click',toggle);
// });

for(let i=0;i<imp.length;i++){
  imp[i].addEventListener('click',toggle);
}