function timeToMixJuice(juice) {
    switch (juice) {
        case "Pure Strawberry Joy":
            console.log("Tomara 0.5 minutos");
            return 0.5;
            break;
        case "Energizer":
        case "Green Garden":
            console.log("Tomara 1.5 minutos");
            return 1.5;
            break;
        case "Tropical Island":
            console.log("Tomara 3 minutos");
            return 3;
            break;
        case "All or nothing":
            console.log("Tomara 5 minutos");
            return 5;
            break;
        default:
            console.log("Es otro jugo, tardara unos 2.5 minutos");
            return 2.5;
    }
}

const limes = {
    "pequena": 6,
    "mediana": 8,
    "grande": 10,
};

function limesToCut(numberCuts, limesAvailable) {
    let numberLimes = 0
    let cuts = 0
    for (let i = 0; i < limesAvailable.length; i++) {
        const size = limesAvailable[i];
        cuts += limes[size];
        numberLimes += 1;
        if (cuts >= numberCuts) {
            console.log("Se deben de cortar las primeras " + numberLimes + " limas");
            break;
        }
    }
    if (cuts < numberCuts) {
        console.log("No hay suficientes limas, por lo que corta todas");
    }
    return numberLimes;
}

const drinks = {
    "Pure Strawberry Joy": 0.5,
    "Energizer": 1.5,
    "Green Garden": 1.5,
    "Tropical Island" : 3,
    "All or nothing" : 5,
};

function ordersLiMei(timeLeft, driksMissing){
    if (timeLeft > 0){
        while (driksMissing.length > 0){
            const drink = driksMissing.shift();
            timeLeft -= drinks[drink] || 2.5;
            if (timeLeft <= 0){
                console.log("Ya se tiene que ir Li Mei");
                break;
            }
        }
        return driksMissing;
    }
    else{
        console.log("No se pueden hacer mas bebidas, Li Mei ya salio")
    }
}

testJuice = timeToMixJuice("Green Garden");
console.log(testJuice);
console.log();
testLimes = limesToCut(50, ["grande", "pequena", "mediana", "grande", "grande", "grande", "grande", "grande"]);
console.log(testLimes);
console.log();
testTime = ordersLiMei(8,["Vodka", "All or nothing", "Pure Strawberry Joy", "Energizer"]);
console.log("Bebidas faltantes por hacer Dmitry")
console.log(testTime)