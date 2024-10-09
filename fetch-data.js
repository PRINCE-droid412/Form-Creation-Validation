 // Function to fetch user data
 async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Select container

    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json(); // Parse response as JSON

        dataContainer.innerHTML = ''; // Clear existing content (Loading message)

        const userList = document.createElement('ul'); // Create a <ul> element

        // Loop through each user and display their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set <li> content as user's name
            userList.appendChild(listItem); // Append each <li> to <ul>
        });

        dataContainer.appendChild(userList); // Append <ul> to data container

    } catch (error) {
        // Handle errors by displaying a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Invoke fetchUserData when DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);