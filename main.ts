input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.South)
    }
})
basic.forever(function () {
	
})
