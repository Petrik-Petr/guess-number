let X = 0
let Y = Math.randomRange(0,9)
input.onButtonPressed(Button.A, function(){
    X += 1
    basic.showNumber(X)
    if (X >= 9) {
        X = 9
        music.setVolume(100)
        music.ringTone(Note.C4)
        basic.pause(100)
        music.setVolume(0)
        basic.pause(100)
        basic.showNumber(X)
    }
})
input.onButtonPressed(Button.B, function(){
    X -= 1
    basic.showNumber(X)
    if (X <= 0) {
        X = 0
        music.setVolume(100)
        music.ringTone(Note.C4)
        basic.pause(100)
        music.setVolume(0)
        basic.pause(100)
        basic.showNumber(X)
    }
})
basic.forever(function(){
    console.log(Y)
    input.onButtonPressed(Button.AB, function () {
        if ((X -= Y) === 0) {
            basic.showLeds(`
            ####.
            ####.
            .##.#
            #.#.#
            ##.##     
        `)
            Y = Math.randomRange(0, 9)
        } else if ((X -= Y) >= 0) {
            basic.showLeds(`
        ##.##
        ##.##
        .#.#.
        #...#
        ##.##
        `)
        X = 0
        } else if((X += -Y) <= 0){
            basic.showLeds(`
        ##.##
        #...#
        .#.#.
        ##.##
        ##.##
        `)
        X = 0
        } else {
            basic.showString('?')
        }
    })
})
