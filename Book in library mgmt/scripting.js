//form valiation 
let submit = document.querySelector('#main-button');
const table = document.querySelector('.Realtable').getElementsByTagName('tbody')[0];
submit.addEventListener('click',()=>{
   
    while(library.length > 0){
        library.length=0;
      console.log(library)
        };
        inputval();
    fig();
    
    
   
    
}
);

var library =[];
function inputval(){
   
    var bookname = document.querySelector('.book-name').value;
    var bookauthor = document.querySelector('.book-author').value;
    var bookpage= document.querySelector('.book-page').value;
    let dropit = document.getElementById('droping');



    var book ={
        bookNam : bookname,
        bookAuth : bookauthor,
        bookPage : bookpage
        };
        console.log(book);
       
        let{bookNam,bookAuth,bookPage}=book; 


library.push(bookNam,bookAuth,bookPage);






function rowabove(){

    let row = table.insertRow();
    let cel1 = row.insertCell(0);
    let cel2 = row.insertCell(1);
    let cel3 = row.insertCell(2);
    let cel4 = row.insertCell(3);
   let btnintable = document.createElement('button');
   btnintable.innerText='Done'
   btnintable.classList.add('button-status');
   cel4.appendChild(btnintable);
  
   let cel5=row.insertCell(4);
   let delbtn = document.createElement('button');
   delbtn.classList.add('delete');
   delbtn.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
   cel5.appendChild(delbtn);
        
cel1.innerText=library[0]
cel2.innerText=library[1];
cel3.innerText=library[2];

cel4.addEventListener('click', function(){
    btnintable.classList.toggle('black');
    if(btnintable.classList.contains('black')){
        btnintable.innerText='NotDone'
    }
    else{
       btnintable.innerText='Done'
       btnintable.backgroundColor='white';
       btnintable.color='black';
    }
    });
    if(dropit.options[dropit.selectedIndex].value=='a2'){
        btnintable.classList.toggle('black');
        btnintable.innerText='NotDone'
        

    }

delbtn.addEventListener('click',function(){
    cel1.remove();
    cel2.remove();
    cel3.remove();
    cel4.remove();
   cel5.remove();

   Array.length=0;

    });
   


}
rowabove();        
}









let bookname = document.querySelector('.book-name');
let bookauthor = document.querySelector('.book-author');
let bookpage= document.querySelector('.book-page');


function fig(){


    if((bookname.value)=='' ||  /^[0-9]+$/.test(bookname.value)){
    alert(`error (1)! you didnt enter value

     error(2) ${bookname.value} is number`);

     bookname.value=''
    
    }

    if(bookauthor.value=='' ||  /^[0-9]+$/.test(bookauthor.value)){
        alert(`error (1)! you didnt enter value

        error(2) ${bookauthor.value}  is number`);

        bookauthor.value=''
    }

    if(bookpage.value==''){
        alert('please enter no of  pages');
    }
}






