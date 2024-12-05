async function fetchGitHubProfile(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const data = await response.json();

        document.getElementById('profile-name').textContent = data.name || 'Nome não encontrado';
        document.getElementById('profile-username').textContent = `@${data.login}`;
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        document.getElementById('profile-link').href = data.html_url;

        const avatarImg = document.querySelector('.profile-avatar');
        avatarImg.src = data.avatar_url;
        } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchGitHubProfile('rebeccanayala');

