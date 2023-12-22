class Vehicle {
    move() {
        console.log('O veículo está se movendo...')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo...')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O návio está navegando...')
    }
}

class Arplane extends Vehicle {
    move(speed) {
        console.log(`A aeroname está voando a ${speed} km/h...`)
    }
}

const delorean = new Car()
const balckpearl = new Ship()
const boeing = new Arplane()

delorean.move()
balckpearl.move()
boeing.move(900)

function start(vehicle) {
    console.log('Ligando o veículo...')
    vehicle.move()
}

start(delorean)
start(balckpearl)
start(boeing)