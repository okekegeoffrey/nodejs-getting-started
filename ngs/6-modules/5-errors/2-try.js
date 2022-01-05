// const path = require('path');
// const fs = require('fs');

// const files = ['./loop.js', 'kjkjhh', './2-try.js'];

// files.forEach(file => {
//   try {
//     const filePath = path.resolve(process.env.HOME, file);
//     const data = fs.readFileSync(filePath);
//     console.log('File data is', data);
//   } catch (err) {
//     console.log('File not found');
//   }
// });


const fs = require('fs');

const files = ['./1-loop.js', 'kjkjhh', './2-try.js'];

files.forEach(file => {
  try {
    const data = fs.readFileSync(file);
    console.log('File data is', data);
  } catch (err) {
    console.log('File not found');
  }
});
