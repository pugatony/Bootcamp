function calculator() {
    switch (process.argv[2]) {
        case "add":
            console.log(
                parseFloat(process.argv[3]) + parseFloat(process.argv[4])
            );
            break;
        case "substract":
            console.log(
                parseFloat(process.argv[3]) - parseFloat(process.argv[4])
            );
            break;
        case "multiply":
            console.log(
                parseFloat(process.argv[3]) * parseFloat(process.argv[4])
            );
            break;
        case "divide":
            console.log(
                parseFloat(process.argv[3]) / parseFloat(process.argv[4])
            );
            break;
        case "reminder":
            console.log(
                parseFloat(process.argv[3]) % parseFloat(process.argv[4])
            );
            break;
        case "exponent":
            console.log(
                Math.pow(
                    parseFloat(process.argv[3]),
                    parseFloat(process.argv[4])
                )
            );
            break;
        case "algebra":
            console.log(parseAlgebra(process.argv[3]));
            break;
    }
}

calculator();
