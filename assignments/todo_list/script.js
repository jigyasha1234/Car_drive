var countkey = 0;

const div = document.getElementsByClassName('todos')[0];
const Btn = document.getElementsByTagName('button')[0];
let Input = document.getElementsByTagName('input')[0];

Btn.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute("key", countkey);
    p.textContent = Input.value;
    p.addEventListener("click",function(){
        remove(this);
    })
    div.appendChild(p)
    Input.value = ''
    countkey += 1;
})

function remove(elem){
    elem.remove();
}
