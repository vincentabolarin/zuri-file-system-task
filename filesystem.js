// Importing the file system and node-fetch modules.
const fs = require('fs');
const fetch = require('node-fetch');

// Creating a 'result' directory if it does not already exist in my working folder.
const newFolder = 'result';
try {
    if (!fs.existsSync(newFolder)) {
      fs.mkdirSync(newFolder);
    }
  } catch (err) {
    console.error(err)
  }

  // Using node-fetch to fetch the JSON data from jsonplaceholder.typicode.com.
  const jsonData = fetch('http://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())

  // Stringifying the JSON data and writing it to posts.json in the 'result' folder created above.
  .then(jsonData => {
    const stringifiedJsonData = JSON.stringify(jsonData, null, 2);
    fs.writeFile('result/posts.json', stringifiedJsonData, (err) => {
    if(err) throw err;
    });
  });

  console.log('JSON file successfully written.');