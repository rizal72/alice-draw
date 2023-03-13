let colonna = 0
let riga = 0
input.onButtonPressed(Button.A, function () {
    led.plot(colonna, riga)
    colonna = colonna + 1
    if (colonna > 4) {
        colonna = 0
        riga = riga + 1
    }
    if (riga > 4) {
        riga = 0
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(colonna, riga)
    colonna = colonna + 1
    if (colonna > 4) {
        colonna = 0
        riga = riga + 1
    }
    if (riga > 4) {
        riga = 0
    }
})
basic.forever(function () {
	
})
