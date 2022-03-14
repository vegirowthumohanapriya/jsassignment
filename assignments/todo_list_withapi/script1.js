const compBtn = document.querySelector('button#comp');
const pendBtn = document.querySelector('button#pend');
async function fetchtodo(){
    let res=await fetch('https://jsonplaceholder.typicode.com/todos');
    let data=await res.json();
    let output='';
    compBtn.onclick = function(){
    data.forEach(function(todo,index) {
        if (todo.completed == true){
        output+=`<p key=${todo.id}>
                ${todo.title}
                </p>`
}})
    document.querySelector('.todos').innerHTML=output;
    }
    pendBtn.onclick = function(){
        data.forEach(function(todo,index) {
 if (todo.completed == false){
            output+=`<p key=${todo.id}>
                    ${todo.title}
                    </p>`
    }})
        document.querySelector('.todos').innerHTML=output;
        }
}
    fetchtodo();