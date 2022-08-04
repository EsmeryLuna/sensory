radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
    basic.showArrow(ArrowNames.West)
})
radio.setGroup(10)
