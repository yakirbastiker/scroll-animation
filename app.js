const boxes = document.querySelectorAll('.box');
console.log(boxes)
window.addEventListener('scroll',checkBoxes)


function checkBoxes () {
   const triggerBottom =  window.innerHeight / 5 * 4 ; 

   boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top ; 
        console.log(box)
        console.log(boxTop)

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        }else {
            box.classList.remove('show')
        }
   })
}