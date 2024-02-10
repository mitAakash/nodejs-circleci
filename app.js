// app.js

async function fetchData() {
    // Code to fetch data from an API
    // Example:
    // const response = await fetch('https://api.example.com/data');
    // return await response.json();
    return { id: 1, name: 'John', email: 'john@example.com' };
  }
  
  function processResult(data) {
    // Process data and return a result
    // Example:
    // return `Hello, ${data.name} (${data.email})!`;
    return `Hello, ${data.name} (${data.email})!`;
  }
  
  module.exports = { fetchData, processResult };
  