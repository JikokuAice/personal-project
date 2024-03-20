
const list = document.querySelector('.task-list');
const button = document.querySelector('.clickMe')



let ash = async function fetching(){
    const getting = await axios.get('http://localhost:5000/as')
    let ak = getting.data;


   ak.forEach(element => {
    let div = document.createElement('div')

div.classList.add('task-item')

let span = document.createElement('span')

let container = document.createElement('div')
let update = document.createElement('button');
let remove = document.createElement('button');

update.innerText='update';
update.classList.add('update')
update.setAttribute('id',`${element._id}`)

remove.innerText='Completed';
remove.classList.add('delete')
remove.setAttribute('id',`${element._id}`)
container.append(update,remove)

  span.innerText= element.taskName;

   div.append(span,container) 

   list.append(div)


    })
   
}
    
    

ash()

document.addEventListener('click', (e)=>{

    if(e.target.classList.contains('delete')){
        let ids = e.target.id
        try{
        let ak =  axios.delete(`http://localhost:5000/${ids}`)
        .then((result)=>{
            console.log('sucessully send to')
            window.location.reload()
         
        })
    }
    catch(err){
        console.log(err)
    }

    }
})


document.addEventListener('click', (e)=>{
if(e.target.classList.contains('update')){
 let ids = e.target.id

 try{
  
    let ak =  axios.post(`http://localhost:5000/update`,{key:ids}).then((r)=>{
  
        window.location.href='../update.html'
    })


}
catch(err){
console.log(err)
}
}
})