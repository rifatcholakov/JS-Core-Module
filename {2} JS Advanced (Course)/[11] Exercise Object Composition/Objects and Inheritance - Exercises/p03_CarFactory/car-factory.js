function assembleCar(carRequirements) {
    let car = {
        model: carRequirements.model,

        engine: {
            power: smallestPossible(carRequirements.power).power,
            volume: smallestPossible(carRequirements.power).volume
        },

        carriage: {
            type: carRequirements.carriage,
            color: carRequirements.color
        },

        wheels: (function () {
            let wheelsize = carRequirements.wheelsize;

            if(wheelsize % 2 === 0) {
                wheelsize--;
            }

            return [wheelsize, wheelsize, wheelsize, wheelsize];
        }())
    };

    return car;
    
    function smallestPossible (requiredPower) {
        let power = 120, volume = 2400;

        if (requiredPower <= 90){
            power = 90;
            volume = 1800;
        }

        if (requiredPower > 120){
            power = 200;
            volume = 3500;
        }

        return {
            power: power,
            volume: volume
        };
    }
}