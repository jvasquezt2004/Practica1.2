//Funcion par acalcular el tiempo necesario para obtener el jugo deseado.
function timeToMixJuice(juice) {
    //Utilizacion de una estructura swicht para manejar diferentes tipos de jugos.
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
        //Para cual quier otro jugo o ofertas especiales.
        default:
            console.log("Es otro jugo, tardara unos 2.5 minutos");
            return 2.5;
    }
}

//Objeto con el tamaño de las limas y cantidad de rodajas
const limes = {
    "pequena": 6,
    "mediana": 8,
    "grande": 10,
};

//Funcion  para determinar cuantas limas se deben cortar para alcanzar el numero de cortes.
function limesToCut(numberCuts, limesAvailable) {
    let numberLimes = 0
    let cuts = 0
    //Iteramos sobre el arreglo de limas disponibles.
    for (let i = 0; i < limesAvailable.length; i++) {
        const size = limesAvailable[i];
        cuts += limes[size];
        numberLimes += 1;
        if (cuts >= numberCuts) {
            console.log("Se deben de cortar las primeras " + numberLimes + " limas");
            break;
        }
    }
    //Si los cortes son insuficientes.
    if (cuts < numberCuts) {
        console.log("No hay suficientes limas, por lo que corta todas");
    }
    //Retorna el numero de limas a cortar.
    return numberLimes;
}

//Objeto con las bebidas y su tiempo de preparacion.
const drinks = {
    "Pure Strawberry Joy": 0.5,
    "Energizer": 1.5,
    "Green Garden": 1.5,
    "Tropical Island" : 3,
    "All or nothing" : 5,
};

//Funcion para gestionar las ordenes.
function ordersLiMei(timeLeft, driksMissing){
    //Verifica que el tiempo dado no sea 0.
    if (timeLeft > 0){
        //Mientras haya bebidas ppor hacer.
        while (driksMissing.length > 0){
            const drink = driksMissing.shift();
            //si la bebida no esta en el objeto toma como una bebida especial por lo que es 2.5
            timeLeft -= drinks[drink] || 2.5;
            if (timeLeft <= 0){
                console.log("Ya se tiene que ir Li Mei");
                break;
            }
        }
        //Retorna las bebidas que faltan por hacer.
        return driksMissing;
    }
    else{
        console.log("No se pueden hacer mas bebidas, Li Mei ya salio")
    }
}

//Se llaman a las funciones, se puede cambiar los valores para diferentes resultados
testJuice = timeToMixJuice("Green Garden");
console.log(testJuice);
console.log();
testLimes = limesToCut(50, ["grande", "pequena", "mediana", "grande", "grande", "grande", "grande", "grande"]);
console.log(testLimes);
console.log();
testTime = ordersLiMei(5,["Vodka", "All or nothing", "Pure Strawberry Joy", "Energizer"]);
console.log("Bebidas faltantes por hacer Dmitry")
console.log(testTime)