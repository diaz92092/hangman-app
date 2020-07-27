class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === '')
        
        if (this.remainingGuesses === 0) {
        this.status = 'failed'
        } else if (finished) {
        this.status = 'finished'
        } else {
        this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great Work! You guessed the word.'
        }
    }
    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
            } else {
            puzzle += '*'
            }
        })

        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== 'playing') {
        return
        }

        if (isUnique) {
        this.guessedLetters.push(guess) 

        }

        if (isUnique && isBadGuess) {
        this.remainingGuesses--
        //= this.remainingGuesses - 1 --> --
        //= this.remainingGuesses +1 --> ++
        }
        this.calculateStatus()
    }
}

export { Hangman as default }





// 1. Create a constructor function for the hangman hame
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed
// 3. Create two instances of it and print both to the console

// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guesses letters
// 3. Create a method that gives the word puzzle back

// No guesses? -> ***
// Guessed "c", "b", and "t"? -> c*t

// Create a method for making a guess
// 1. should accept a character for guessing
// 2. Should add unique quesses to list of guesses
// 3. Should decrement the guesses let if a unique guess isn't a match

// Display the puzzle to the browser instead of console
// Display the guesses left to the brower instead of console
// Separate the Hangman definition from the rest of the app code ( use app.js)