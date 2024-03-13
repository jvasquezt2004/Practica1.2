// Funcion que genera un numero aleatorio entre un rango
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Objeto Annalyn
let Annalyn = {
    // Atributo que indica si Annalyn tiene un perro
    Perro : false,

    // Metodo que genera un numero aleatorio y si es menor o igual a 50, Annalyn tiene un perro
    GenerarPerro: function() {
        let numeroAleatorio = generarNumeroAleatorio(1, 100);
        if (numeroAleatorio <= 50) {
            this.Perro = true;
        } else {
            this.Perro = false;
        }
    },

    // Metodo que verifica si el caballero esta despierto, si lo esta, Annalyn no puede atacar
    AtaqueRapido: function() {
        if(Caballero.Estado == "Despierto") {
            console.log("Annalyn no puede atacar, el caballero está despierto")
        } else {
            console.log("Annalyn ataca al caballero");
        }
    },

    // Metodo que verifica si el arquero o el caballero estan despiertos, si al menos uno lo esta, Annalyn puede espiar
    Espia: function() {
        if (Arquero.Estado == "Despierto" || Caballero.Estado == "Despierto") {
            console.log("Annalyn puede espiar, hay al menos un enemigo despierto");
        } else {
            console.log("Annalyn no puede espiar, no hay enemigos despiertos");
        }
    },

    // Metodo que verifica si el prisionero esta despierto, si lo esta y el arquero esta durmiendo, Annalyn puede señalar al prisionero
    SeñalarPrisionero: function() {
        if (Prisionero.Estado == "Despierto") {
            if (Arquero.Estado == "Durmiendo") {
                console.log("Annalyn señala al prisionero");
            } else {
                console.log("Annalyn no puede señalar al prisionero, el arquero está despierto");
            }
        } else {
            console.log("Annalyn no puede señalar al prisionero, está durmiendo");
        }
    },

    PrisioneroLibre: function() {
        // Si Annalyn tiene un perro, el prisionero esta despierto y el arquero esta durmiendo, Annalyn libera al prisionero
        if (this.Perro == true) {
            if (Arquero.Estado == "Durmiendo") {
                console.log("Annalyn libera al prisionero");
                Prisionero.EstablecerEstado("Liberado");
            } else {
                console.log("Annalyn no puede liberar al prisionero, el arquero está despierto");
            }
        // Si Annalyn no tiene un perro, el prisionero esta despierto y el arquero y el caballero estan durmiendo, Annalyn libera al prisionero
        } else {
            if (Prisionero.Estado == "Despierto") {
                if (Arquero.Estado == "Durmiendo" && Caballero.Estado == "Durmiendo") {
                    console.log("Annalyn libera al prisionero");
                    Prisionero.EstablecerEstado("Liberado");
                } else {
                    console.log("Annalyn no puede liberar al prisionero, hay al menos un enemigo despierto");
                }
            // Si el prisionero esta durmiendo, se despierta y despierta al arquero y al caballero
            } else {
                console.log("Annalyn no puede liberar al prisionero, está durmiendo");
                console.log("El prisionero se sorprendio por la repentina aparición de Annalyn y desperto al caballero y al arquero.");
                Caballero.EstablecerEstado("Despierto");
                Arquero.EstablecerEstado("Despierto");
                Prisionero.EstablecerEstado("Despierto");
            }
        }
    }
};

// Funcion que crea un personaje
function crearPersonaje() {
    return {
        // Atributo que indica el estado del personaje
        Estado: "",

        // Metodo que genera un numero aleatorio y si es menor o igual a 50, el personaje esta despierto
        GenerarEstado: function() {
            let numeroAleatorio = generarNumeroAleatorio(1, 100);
            if (numeroAleatorio <= 50) {
                this.EstablecerEstado("Despierto");
            } else {
                this.EstablecerEstado("Durmiendo");
            }
        },

        // Metodo que establece el estado del personaje
        EstablecerEstado: function(estado) {
            this.Estado = estado;
        }
    };
}

// Creacion de los personajes
let Caballero = crearPersonaje();
let Arquero = crearPersonaje();
let Prisionero = crearPersonaje();

// Generacion del perro de Annalyn
Annalyn.GenerarPerro();


//función para generar un numero aleatorio de 1 al 4
function generarNumeroAleatorio4() {
    
    return Math.floor(Math.random() * 4) + 1;
}

//Función que elige el método que se va a ocupar segun el numero aleatorio dado
function elegirMetodo(){
    var numero = generarNumeroAleatorio4();
    console.log("Numero generado:", numero);
    switch (numero){
        case 1:
            Annalyn.AtaqueRapido();
            break;
        case 2:
            Annalyn.Espia();
            break;
        case 3:
            Annalyn.SeñalarPrisionero();
            break;
        case 4:
            Annalyn.PrisioneroLibre();
            break;
    }
}

//Funcion que genera las acciones hasta que se libere al prisionero
while (Prisionero.Estado != "Liberado"){

    //Genera estado de los personajes
    Caballero.GenerarEstado();
    Arquero.GenerarEstado();
    Prisionero.GenerarEstado();

    console.log("Estado de los personajes: ")
    console.log("Caballero: " + Caballero.Estado)
    console.log("Arquero: " + Arquero.Estado)
    console.log("Prisionero: " + Prisionero.Estado)
    console.log("Perro de Annalyn: " + Annalyn.Perro)
    //Elige el metodo que se va a elegir
    elegirMetodo();
    console.log("")
}

console.log("¡Fin del juego! Annalyn ha logrado liberar al prisionero")
