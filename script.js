let btn = document.getElementById('button');
let notes = document.querySelectorAll('.input');
console.log(notes)
let noteContainer = document.getElementById('notes-container')

btn.addEventListener('click',function(){
    let input = document.createElement('p');
    input.className = 'input'
    input.setAttribute('contenteditable','true')
    let img = document.createElement('img');
    img.src = 'notes-app-img/images/delete.png';
    noteContainer.appendChild(input)
    input.appendChild(img)
    console.log(noteContainer)
})


noteContainer.addEventListener('click',function(dets){
    if(dets.target.tagName === 'IMG'){
        dets.target.parentElement.remove()
        saveData()
    }else if(dets.target.tagName === 'P'){
        notes = document.querySelectorAll('.input');
       
      notes.forEach(function(value){
        value.addEventListener('keyup',function(){
            console.log('hello')
            saveData()
        })
      })
    }
})


function saveData(){
    localStorage.setItem('data',noteContainer.innerHTML)
}
function getData(){
    noteContainer.innerHTML = localStorage.getItem('data')
}
getData()