const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', createblogobj);

function createblogobj(event)
{
    event.preventDefault();
    if(usernameInput.value !== ''
        && titleInput.value !== '' &&
        contentInput.value!== ''){

    const blogobj = {
        username: usernameInput.value,
        title: titleInput.value,
        content:contentInput.value
    }
    addPostToStorage(blogobj);
    window.location.href="./blog.html";
    return blogobj;
    }else{
        alert("Please fill in all fields before posting")
        
    }

}
function addPostToStorage(post) {
    let allPosts = [];

    if(localStorage.getItem('posts') !== null){
        allPosts = JSON.parse(localStorage.getItem('posts'))
        console.log("got localstorage")
    }

    allPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(allPosts));


}

