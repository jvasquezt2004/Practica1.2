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