const postArea = document.querySelector('#post-area');

PopulatePosts();

function PopulatePosts() {

    posts = JSON.parse(localStorage.getItem('posts'));

    if (posts !== null){

         for (const post of posts ) {
            
           const container = document.createElement('div');
           container.setAttribute('class', 'post');
           
           const title = document.createElement('h2');
           title.innerHTML = post.title.charAt(0).toUpperCase() + post.title.slice(1);
           container.appendChild(title);
           const content = document.createElement('p');
           content.innerHTML = post.content;
           container.appendChild(content);
           const user = document.createElement('h4');
           user.innerHTML = "-" + post.username;
           container.appendChild(user);

           postArea.appendChild(container);



        }
    }else{
        const defaultpost = document.createElement('p');
        defaultpost.innerHTML = 'no posts here yet';
        postArea.appendChild(defaultpost);

    } 


}