input.onButtonPressed(Button.A, function () {
    Maqueen_V5.motorRun(Maqueen_V5.Motors.All, Maqueen_V5.Dir.CW, 100)
})
input.onButtonPressed(Button.B, function () {
    Maqueen_V5.motorStop(Maqueen_V5.Motors.All)
})
