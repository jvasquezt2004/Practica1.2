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
            } else {
                console.log("Annalyn no puede liberar al prisionero, el arquero está despierto");
            }
        // Si Annalyn no tiene un perro, el prisionero esta despierto y el arquero y el caballero estan durmiendo, Annalyn libera al prisionero
        } else {
            if (Prisionero.Estado == "Despierto") {
                if (Arquero.Estado == "Durmiendo" && Caballero.Estado == "Durmiendo") {
                    console.log("Annalyn libera al prisionero");
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

// Generacion de los estados de los personajes
Caballero.GenerarEstado();
Arquero.GenerarEstado();
Prisionero.GenerarEstado();

// Llamado a los metodos de Annalyn
Annalyn.AtaqueRapido();
Annalyn.Espia();
Annalyn.SeñalarPrisionero();
Annalyn.PrisioneroLibre();