let ak = ()=>{
    return Swal.fire({
    title: "works",
    text: "thanks",
    icon: "success"
  })}



const button = document.querySelector('button')

button.addEventListener("mouseover",()=>{
    ak();
})