const url = 'https://api.github.com/users/sumitsharma31';

function getData(api) {
    return fetch(api)
        .then(response => response.json())
        .then(data => {
            linkFun(data.repos_url);
            return data;
        })
        .catch(error => console.error("Error fetching data:", error)); // Handling errors
}

// Correct way to log the fetched data
getData(url).then(result => console.log(result));
function linkFun(link) {
    console.log(link+'hello its my link');
    
}