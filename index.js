const token = 'MY TOKEN' //actually put my own token to test, just deleted it for committing.

fetch('https://api.github.com/user/repos', {
	headers: {
		Authorization: `token ${token}`
	}
}).then(res => res.json()).then(json => console.log(json))