let rainb3 = 0
let raina3 = 0
let rainb2 = 0
let raina2 = 0
let rainy3 = 0
let rainx3 = 0
let rainy2 = 0
let rainx2 = 0
let rainb = 0
let raina = 0
let rainy = 0
let rainx = 0
let time = 0
let y = 0
let b = 0
let x = 0
let a = 0
input.onButtonPressed(Button.A, function () {
    a = x
    b = y
    if (x <= 4 && y >= 0) {
        led.unplot(a, b)
        x = x - 1
        led.plot(x, y)
    }
    if (x == -1) {
        led.unplot(a, b)
        x = 4
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    a = x
    b = y
    if (x <= 4 && x >= 0) {
        led.unplot(a, b)
        x = x + 1
        led.plot(x, y)
    }
    if (x == 5) {
        led.unplot(a, b)
        x = 0
        led.plot(x, y)
    }
})
function rain12() {
    basic.showString("RAIN")
    basic.showString("LEVEL 1")
    x = 2
    y = 4
    led.plot(x, y)
    time = 700
    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 1; i++) {
            rainx = x
            rainy = 0
            led.plot(rainx, rainy)
            while (rainy < 5) {
                if (rainy == y && rainx == x) {
                    game.gameOver()
                }
                raina = rainx
                rainb = rainy
                basic.pause(time)
                rainy = rainy + 1
                led.plot(rainx, rainy)
                led.unplot(raina, rainb)
            }
        }
        time = time - 50
    }
    images.createBigImage(`
        # . . . . # . . . .
        # . . . # . # . . .
        # . . . . . # . . .
        # . . . . # . . . .
        # # # . # # # . . .
        `).scrollImage(1, 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 2
    y = 4
    led.plot(x, y)
    for (let i = 0; i < 4; i++) {
        for (let i = 0; i < 1; i++) {
            rainx2 = Math.randomRange(0, 4)
            rainy2 = 0
            led.plot(rainx2, rainy2)
            rainx = x
            rainy = -2
            led.plot(rainx, rainy)
            while (rainy < 5 && rainy2 < 7) {
                if (rainx == x && rainy == y || rainx2 == x && rainy2 == y) {
                    game.gameOver()
                }
                raina = rainx
                rainb = rainy
                raina2 = rainx2
                rainb2 = rainy2
                basic.pause(time)
                rainy2 = rainy2 + 1
                led.plot(rainx2, rainy2)
                rainy = rainy + 1
                led.plot(rainx, rainy)
                led.unplot(raina2, rainb2)
                led.unplot(raina, rainb)
            }
        }
        time = time - 50
    }
    for (let i = 0; i < 15; i++) {
        for (let i = 0; i < 1; i++) {
            rainx2 = Math.randomRange(0, 4)
            rainy2 = 0
            led.plot(rainx2, rainy2)
            rainx = x
            rainy = -2
            led.plot(rainx, rainy)
            while (rainy < 5 && rainy2 < 7) {
                if (rainx == x && rainy == y || rainx2 == x && rainy2 == y) {
                    game.gameOver()
                }
                raina = rainx
                rainb = rainy
                raina2 = rainx2
                rainb2 = rainy2
                basic.pause(time)
                rainy2 = rainy2 + 1
                led.plot(rainx2, rainy2)
                rainy = rainy + 1
                led.plot(rainx, rainy)
                led.unplot(raina2, rainb2)
                led.unplot(raina, rainb)
            }
        }
    }
    images.createBigImage(`
        # . . . # # # . . .
        # . . . . . # . . .
        # . . . # # # . . .
        # . . . . . # . . .
        # # # . # # # . . .
        `).scrollImage(1, 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 2
    y = 4
    led.plot(x, y)
    time = 300
    for (let i = 0; i < 200; i++) {
        for (let i = 0; i < 1; i++) {
            rainx3 = Math.randomRange(0, 4)
            rainy3 = -2
            led.plot(rainx3, rainy3)
            rainx2 = Math.randomRange(0, 4)
            rainy2 = -1
            led.plot(rainx2, rainy2)
            rainx = x
            rainy = 0
            led.plot(rainx, rainy)
            while (rainy < 7 && rainy2 < 6 && rainy3 < 5) {
                if (rainx == x && rainy == y || rainx2 == x && rainy2 == y || rainx3 == x && rainy3 == y) {
                    game.gameOver()
                }
                raina = rainx
                rainb = rainy
                raina2 = rainx2
                rainb2 = rainy2
                raina3 = rainx3
                rainb3 = rainy3
                basic.pause(time)
                rainy3 = rainy3 + 1
                led.plot(rainx3, rainy3)
                led.unplot(raina3, rainb3)
                rainy2 = rainy2 + 1
                led.plot(rainx2, rainy2)
                led.unplot(raina2, rainb2)
                rainy = rainy + 1
                led.plot(rainx, rainy)
                led.unplot(raina, rainb)
            }
        }
        time = time - 10
    }
    images.createBigImage(`
        # . . . # . . . . .
        # . . . # . # . . .
        # . . . # # # . . .
        # . . . . . # . . .
        # # # . . . # . . .
        `).scrollImage(1, 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    x = 2
    y = 4
    led.plot(x, y)
}
basic.forever(function () {
    rain12()
})
