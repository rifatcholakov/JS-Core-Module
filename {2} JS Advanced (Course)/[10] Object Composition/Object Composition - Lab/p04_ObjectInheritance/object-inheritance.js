function objectInheritance(input) {
    let result = {};

    let commands = {
        create: (input) => {
            input = input.split(" ");
            let name = input[1];

            if(input.length > 3) {
                let parentName = input[3];
                result[name] = Object.create(result[parentName]);
            } else {
                result[name] = {};
            }
        },

        set: (input) => {
            input = input.split(" ");

            let name = input[1];
            let key = input[2];
            let value = input[3];

            result[name][key] = value;
        },

        print: (input) => {
            input = input.split(" ");

            let name = input[1];

            let output = [];

            for (let property in result[name]) {
                output.push(property + ":" + result[name][property]);
            }

            console.log(output.join(", "));
        }
    };

    for (let string of input) {
        let command = string.split(" ")[0];
        commands[command](string);
    }
}