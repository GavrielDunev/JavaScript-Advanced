function attachEvents() {
    const loadButton = document.querySelector('#btnLoadPosts');
    loadButton.addEventListener('click', loadPosts);

    const viewButton = document.querySelector('#btnViewPost');
    viewButton.addEventListener('click', viewComments);
    viewButton.disabled = true;
}

async function loadPosts() {
    const response = await fetch('http://localhost:3030/jsonstore/blog/posts');
    const data = await response.json();
    Object.values(data).forEach(p => {
        const option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.title;
        document.querySelector('#posts').appendChild(option);
    })
    document.querySelector('#btnViewPost').disabled = false;
}

async function viewComments() {
    const commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';

    const postId = document.querySelector('#posts').value;
    const [commentResponse, postResponse] = await Promise.all([fetch('http://localhost:3030/jsonstore/blog/comments'),
    fetch('http://localhost:3030/jsonstore/blog/posts/' + postId)
    ]);

   
    const allComments = await commentResponse.json();

    const filteredComments = Object.values(allComments).filter(c => c.postId == postId);

    const postData = await postResponse.json();
    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    filteredComments.map(createComment).forEach(c => commentsUl.appendChild(c));
}

function createComment(comment) {
    const li = document.createElement('li');
    li.textContent = comment.text;
    return li;
}

attachEvents();