const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let container=document.getElementById("container")

window.addEventListener("load",function(){
    let content=""
    for(let i=0;i<posts.length;i++){
        content+=`
        <section class="post">
            <div class="post-info">
                <img class="profile-icon" src=${posts[i].avatar}>
                <div>
                <p class="bold profile-details">${posts[i].name}</p>
                <p class="location profile-details" >${posts[i].location}</p>
                </div>
            </div>
            <img class="post-image" src=${posts[i].post}>
            <div class="interactibles">
            <img class="icon" src="images/icon-heart.png">
            <img class="icon" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
            <p class="bold">${posts[i].likes} likes</p>
            <p><span class="bold username">${posts[i].username}</span>${posts[i].comment}</p>
            </div>
        </section>
        `
    }
    container.innerHTML+=content
})
