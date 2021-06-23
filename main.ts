input.onButtonPressed(Button.A, function () {
    alphabet += 1
    basic.showString("" + (문자열_리스트[alphabet]))
})
input.onButtonPressed(Button.AB, function () {
    list_count = 1
    count += -1
    if (hangman.includes(문자열_리스트[alphabet]) == true) {
        문자열_리스트2[hangman.indexOf(문자열_리스트[alphabet])] = 문자열_리스트[alphabet]
        for (let index = 0; index < 4; index++) {
            basic.showString("" + (문자열_리스트2[list_count]))
            list_count += 1
        }
    } else {
        if (count == 5) {
            basic.showLeds(`
                . . . . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (count == 4) {
            basic.showLeds(`
                . . . . .
                . . # # #
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (count == 3) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else if (count == 2) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . . . # .
                . . . . #
                `)
        } else if (count == 1) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            basic.showString("Game Over")
            game.gameOver()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    alphabet += -1
    basic.showString("" + (문자열_리스트[alphabet]))
})
let list_count = 0
let hangman = ""
let 문자열_리스트2: string[] = []
let 문자열_리스트: string[] = []
let count = 0
let alphabet = 0
basic.showLeds(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
alphabet = 0
count = 6
문자열_리스트 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
문자열_리스트2 = ["_", "_", "_", "_", "_"]
let random = randint(0, 4)
if (random == 0) {
    hangman = "alien"
} else if (random == 1) {
    hangman = "black"
} else if (random == 2) {
    hangman = "eagle"
} else if (random == 3) {
    hangman = "water"
} else if (random == 4) {
    hangman = "radio"
}
basic.pause(500)
basic.clearScreen()
