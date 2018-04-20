function theHungryProgrammer(portionsOfMeals, commands) {
    let count = 0;

    for (let command of commands) {
        let action = command.split(" ")[0];

        switch (action) {
            case "Serve":
                if(portionsOfMeals.length > 0) {
                    console.log(`${portionsOfMeals.pop()} served!`);
                }
                break;

            case "Eat":
                if(portionsOfMeals.length > 0) {
                    console.log(`${portionsOfMeals.shift()} eaten`);
                    count++;
                }
                break;

            case "Add":
                let meal = command.split(" ")[1];
                if(meal !== undefined) {
                    portionsOfMeals.unshift(meal);
                }
                break;

            case "Consume":
                let startIndex = Number(command.split(" ")[1]);
                let endIndex = Number(command.split(" ")[2]);

                if(portionsOfMeals[startIndex] !== undefined && portionsOfMeals[endIndex] !== undefined) {
                    portionsOfMeals.splice(startIndex, (endIndex - startIndex) + 1);
                    console.log("Burp!");
                    count += (endIndex - startIndex) + 1;
                }
                break;

            case "Shift":
                let firstIndex = Number(command.split(" ")[1]);
                let secondIndex = Number(command.split(" ")[2]);

                if(portionsOfMeals[firstIndex] !== undefined && portionsOfMeals[secondIndex] !== undefined) {
                    let temp = portionsOfMeals[firstIndex];
                    portionsOfMeals[firstIndex] = portionsOfMeals[secondIndex];
                    portionsOfMeals[secondIndex] = temp;
                }
                break;

            case "End":
                if(portionsOfMeals.length > 0) {
                    portionsOfMeals = portionsOfMeals.filter(e => e !== undefined);
                    console.log(`Meals left: ${portionsOfMeals.join(", ")}`);
                } else {
                    console.log("The food is gone");
                }

                console.log(`Meals eaten: ${count}`);
                return;
        }
    }
}
