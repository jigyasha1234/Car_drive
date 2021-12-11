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

async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/todos'
    let res = await fetch(url);
    return await res.json();
    }
async function renderUsers() {
    let users = await getUsers();
    let ul0 = document.getElementsByClassName('list0')[0];
    let ul1 = document.getElementsByClassName('list1')[0];
    users.forEach(user => {
        let l = document.createElement('li');
        console.log(user.completed);
        if (user.completed === true){
            l.textContent = user.title;
            ul0.append(l);
        }
        else{
            l.textContent = user.title;
            ul1.append(l);
        }
    });

}
renderUsers();
