let humedad = 0
pins.setPull(DigitalPin.P2, PinPullMode.PullDown)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    basic.pause(100)
    humedad = pins.analogReadPin(AnalogPin.P2)
    led.plotBarGraph(
    humedad,
    1023
    )
    if (humedad < 600) {
        robotbit.Servo(robotbit.Servos.S1, 90)
        basic.pause(2000)
        robotbit.Servo(robotbit.Servos.S1, 0)
        basic.pause(2000)
    } else {
        robotbit.Servo(robotbit.Servos.S1, 0)
    }
})
