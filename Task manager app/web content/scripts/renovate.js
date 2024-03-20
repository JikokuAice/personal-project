// Assuming you have a form with a class 'inner' and an input field with class 'taskName'
let input = document.querySelector('.taskName');
let inputSecond = document.querySelector('.newName');
// Assuming you have a button in your HTML markup
let button = document.querySelector('button');

// Define a function to make the Axios request to the server
let id;     
  function fetching(){
    // Make an Axios POST request to the server's /update endpoint
    axios.get('http://localhost:5000/update/real')
        .then((response) => {
            // Extract the task name from the response data
            input.value=response.data.taskName
            id = response.data._id;
        
            // Update the input field with the received task name
        
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

 fetching()

button.addEventListener('click',(e)=>{
    e.preventDefault();
if(inputSecond.value.length>0){
    let newName = inputSecond.value;
    
axios.put('http://localhost:5000/update/set',{key:id,update:newName}).then((result)=>{
   window.location.href='../index.html'
})
inputSecond.style.border='';

}else{
    inputSecond.style.border='2px solid red';
}
})

