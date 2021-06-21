let hangman = ""
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
let random = randint(0, 4)
if (random == 0) {
    hangman = "cledor"
} else if (random == 1) {
    hangman = "basket"
} else if (random == 2) {
    hangman = "eagle"
} else if (random == 3) {
    hangman = "water"
} else if (random == 4) {
    hangman = "radio"
}
basic.forever(function () {
    while (true) {
    	
    }
})
