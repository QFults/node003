const { prompt } = require('inquirer')

const choices = ['r', 'p', 's']

let wins = 0,
  ties = 0,
  losses = 0,
  rounds = 0

const round = () => {
  prompt({
    type: 'list',
    name: 'choice',
    message: `Please choose 'r', 'p', or 's'`,
    choices
  })
    .then(({ choice }) => {
      rounds++
      const compChoice = choices[Math.floor(Math.random() * choices.length)]

      console.log(`
        You chose ${choice}
        The computer chose ${compChoice}
      `)

      if (choice === compChoice) {
        ties++
        console.log('You tied!')
      } else if ((choice === 'r' && compChoice === 's') ||
        (choice === 'p' && compChoice === 'r') ||
        (choice === 's' && compChoice === 'p')) {
        wins++
        console.log('You won!')
      } else {
        losses++
        console.log('You lost!')
      }

      if (rounds < 5) {
        round()
      } else {
        console.log(`
          Results
          -------
          Wins: ${wins}
          Losses: ${losses}
          Ties: ${ties}
        `)
      }
    })
    .catch(err => console.log(err))
}

round()
