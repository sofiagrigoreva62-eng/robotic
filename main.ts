function Animation () {
    basic.showLeds(`
        # # # . .
        # . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
}
function Clip_Action () {
	
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    onoff = 1
    basic.showIcon(IconNames.Happy)
})
let onoff = 0
onoff = 0
pins.servoWritePin(AnalogPin.P0, 0)
for (let index = 0; index < 1; index++) {
    Animation()
}
basic.clearScreen()
