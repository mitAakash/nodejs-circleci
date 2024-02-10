// app.js

async function fetchData() {
    // Code to fetch data from an API
    // Example:
    // const response = await fetch('https://api.example.com/data');
    // return await response.json();
    return { id: 1, name: 'John', email: 'john@example.com' };
  }
  
  // app.js

function processResult(data) {
    const name = data.name || '';
    const email = data.email || '';
    return `Hello, ${name} (${email})!`;
  }
  
  module.exports = { fetchData, processResult };
  
  
  module.exports = { fetchData, processResult };
  