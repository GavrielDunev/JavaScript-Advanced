async function loadCommits() {
    const username = document.querySelector('#username').value;
    const repository = document.querySelector('#repo').value;
    const ul = document.querySelector('#commits');
    ul.innerHTML = '';

    const url = `https://api.github.com/repos/${username}/${repository}/commits`;
    try {
        const response = await fetch(url);
        const commits = await response.json();
        if (response.ok == false) {
            throw new Error(`${response.status} (${response.statusText})`);
        }
        commits.forEach(c => {
            const li = document.createElement('li');
            li.textContent = `${c.commit.author.name}: ${c.commit.message}`;
            ul.appendChild(li);
        })
    } catch (error) {
        const li = document.createElement('li');
        li.textContent = error;
        document.querySelector('#commits').appendChild(li);
    }
}