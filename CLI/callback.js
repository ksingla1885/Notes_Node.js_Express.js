const posts = [
    {title: "Post 1", body: "This is post 1"},
    {title: "Post 1", body: "This is post 1"},
];

function getPost() {
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}



// getPost();
createPost({title: "post 3", body: "This is post 3"}, getPost);