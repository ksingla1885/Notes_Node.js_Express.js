const posts = [
    { title: "Post 1", body: "This is post 1" },
    { title: "Post 1", body: "This is post 1" },
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject("Something went wrong")
            }
        }, 2000)
    })
}



// getPost();
// createPost({ title: "post 3", body: "This is post 3" })
//     .then(getPost)
//     .catch(error => console.log(error));


// const promise1 = Promise.resolve("Hello ketan");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "GoodNight Ketan");
// });

// Promise.all([promise1, promise2, promise3]).then(values => console.log(values));




async function init() {
    await createPost({ title: "post 3", body: "This is post 3" });
    getPost();
}
init();

