const inquirer = require('inquirer')

let count = 0

const question = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'list',
        name: 'choice',
        message: 'Pick a number',
        choices: ['one', 'two', 'three', 'four']
      }
    ])
    .then(res => {
      console.log(res.name, res.choice)
      count++
      if (count < 5) {
        question()
      }
    })
    .catch(err => console.log(err))
}

question()

// for (let i = 0; i < 5; i++) {
//   inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?'
//       },
//       {
//         type: 'list',
//         name: 'choice',
//         message: 'Pick a number',
//         choices: ['one', 'two', 'three', 'four']
//       }
//     ])
//     .then(res => {
//       console.log(res.name, res.choice)
//     })
//     .catch(err => console.log(err))
// }