function load() {
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(data => console.log(data));
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data));
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(val => displayPost(val));
}
function displayUser(data) {
    const ul = document.getElementById('list-container');
    for (const item of data) {
        const li = document.createElement('li');
        li.innerHTML = `name:${item.name} ,phone: ${item.phone}`;
        ul.appendChild(li);
    }

}
function displayPost(data) {
    const sec = document.getElementById('post-container');
    for (const item of data) {
        div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h1>${item.title}</h1> <p>${item.body}</p>`
        sec.appendChild(div);
    }
}