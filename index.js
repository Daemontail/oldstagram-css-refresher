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

const main=document.getElementById("main")

window.addEventListener("load",function(){
    let content=""
    for(let val of posts){
        let  {name,username,location,avatar,post,comment,likes} = val;
        content+=`
        <section class="post">
            <div class="post-info">
                <img class="profile-icon" src=${avatar}>
                <div>
                <p class="bold profile-details">${name}</p>
                <p class="location profile-details" >${location}</p>
                </div>
            </div>
            <img class="post-image" data-dblclick=${username} src=${post}>
            <div class="interactibles">
            <button class="btn-icon">                
            <img class="icon" data-click=${username} src="images/icon-heart.png">
            </button>
            <button class="btn-icon">
            <img class="icon" src="images/icon-comment.png">
            </button>
            <button class="btn-icon">
            <img class="icon" src="images/icon-dm.png">
            </button>
            <p class="bold"> <span id=${username}>${likes}</span> likes</p>
            <p><span class="bold username">${username}</span>${comment}</p>
            </div>
        </section>
        `
    }
    main.innerHTML+=content
    document.addEventListener('click',function(e){
        if(e.target.dataset.click){
            // console.log(e.target.dataset.click)
            const val=e.target.dataset.click
            let likes=JSON.parse(document.getElementById(val).textContent)
            likes++
            document.getElementById(val).textContent=JSON.stringify(likes)
        }
    })
    document.addEventListener('dblclick',function(e){
        if(e.target.dataset.dblclick){
            // console.log(e.target.dataset.click)
            const val=e.target.dataset.dblclick
            let likes=JSON.parse(document.getElementById(val).textContent)
            likes++
            document.getElementById(val).textContent=JSON.stringify(likes)
        }
    })
})

