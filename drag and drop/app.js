const ul = document.querySelector('.sortMain');
const drag1 = ul.querySelectorAll('.sortList');





drag1.forEach((af)=>{
af.addEventListener('dragstart',(e)=>{
    af.classList.add('opac')
})

af.addEventListener('dragend',(e)=>{
    af.classList.remove('opac')
})

})



   let ak = (af)=>{ 
        af.preventDefault()
        const dragging = document.querySelector('.opac');
        const sibling = [...document.querySelectorAll(".sortList:not(.opac)")]

        let nextSibling = sibling.find(sib => {
                   return af.clientY <= sib.offsetTop + sib.offsetHeight / 2;
                });
                console.log(nextSibling)

               ul.insertBefore(dragging,nextSibling)
    }


   ul.addEventListener('dragover',ak)
   ul.addEventListener('dragcentre',(e)=>{e.preventDefault()})