
const container = document.querySelector('.task-container');





async function fetches(){
let gettig = await axios.get('http://localhost:5000/taskcompleted')


let ak = gettig.data
ak.forEach((e)=>{

let  inner = document.createElement('div');
inner.classList.add('innerContainer')


let span = document.createElement('span')
span.classList.add('text')
span.innerText=`${e.item}`

let button = document.createElement('button')
button.innerText=`delete ${e.item}`
button.classList.add('remove')
button.setAttribute('id',`${e._id}`)

inner.append(span,button)
container.append(inner)
})

}

fetches()

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('remove')){
        const ids = e.target.id;
        console.log(ids)
         axios.post(`http://localhost:5000/taskcompleted/${e.target.id}`).then((e)=>{
             console.log('sends')
             alert('removed')
             window.location.reload()
         })
        
    }
    })