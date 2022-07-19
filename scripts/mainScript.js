const blogEl = document.querySelectorAll(".blog-els");
fetch("https://raw.githubusercontent.com/Tapish1511/Grant-Tech/main/posts.json").then(
    (response)=> response.json
).then(
    (data)=>{
        const blogData = data.posts
        console.log(data)
    }
)