//with execution blocking 
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

//without blocking execution
async function getUserData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}
getUserData();
