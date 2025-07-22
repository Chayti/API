function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'my new post',
            user_id: 1,
            body: 'this is my post'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    }).then(res => res.json).then(data => console.log(data))
}
