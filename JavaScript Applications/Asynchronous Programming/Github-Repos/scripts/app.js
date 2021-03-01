async function loadRepos() {
	const repos = document.querySelector('#repos');
	const text = document.querySelector('input').value;

	const url = `https://api.github.com/users/${text}/repos`;
	const response = await fetch(url)
	const info = await response.json();
	repos.textContent = '';
	info.forEach(r => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = r.html_url;
		a.textContent = r.full_name;
		li.appendChild(a);
		repos.appendChild(li);
	})
}