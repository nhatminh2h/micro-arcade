let bulletS: game.LedSprite = null
let body: game.LedSprite = null
let cancelled = false
let bulletR: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    body.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    body.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.Shake, function () {
    cancelled = true
    bulletS = game.createSprite(body.get(LedSpriteProperty.X), 4)
    bulletS.turn(Direction.Left, 90)
    basic.pause(150)
    for (let i = 0; i < 4; i++) {
        if (bulletS.isTouching(bulletR)) {
            bulletS.delete()
            bulletR.delete()
            cancelled = false
        } else {
            bulletS.move(1)
            basic.pause(150)
        }
    }
    if (cancelled) {
        radio.sendNumber(Math.abs(bulletS.get(LedSpriteProperty.X) - 4))
    }
    bulletS.delete()
})
radio.onReceivedNumber(function (receivedNumber) {
    bulletR = game.createSprite(receivedNumber, 0)
    bulletR.turn(Direction.Right, 90)
    basic.pause(150)
    for (let i = 0; i < 4; i++) {
        if (bulletS.isTouching(bulletR)) {
            bulletS.delete()
            bulletR.delete()
            cancelled = false
        } else {
            bulletR.move(1)
            basic.pause(150)
        }
    }
    if (bulletR.isTouching(body)) {
        game.removeLife(1)
    }
    bulletR.delete()
})
bulletR = game.createSprite(2, 4)
bulletR.delete()
bulletS = game.createSprite(2, 4)
bulletS.delete()
game.setLife(3)
body = game.createSprite(2, 4)
basic.forever(function () {

})
