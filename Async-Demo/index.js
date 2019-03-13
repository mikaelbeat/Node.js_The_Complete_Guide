
console.log('Before');

getUser(1, getRepositories);

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
};

function getCommits(repos) {
    getCommits(repo, displayCommits);
};

function displayCommits(commits) {
    console.log(commits);
};

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from database...');
        callback({id: id, gitHubUsername: 'Test'});
    }), 2000;
};

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Callig GitHub API...');
        callback(['repo1', 'repo2', 'repo3'])
    }), 2000;
};

console.log('After');
