function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let Annalyn = {

    Perro : false,

    GenerarPerro: function() {
        let numeroAleatorio = generarNumeroAleatorio(1, 100);
        if (numeroAleatorio <= 50) {
            this.Perro = true;
        } else {
            this.Perro = false;
        }
    },

    AtaqueRapido: function() {
        if(Caballero.Estado == "Despierto") {
            console.log("Annalyn no puede atacar, el caballero está despierto")
        } else {
            console.log("Annalyn ataca al caballero");
        }
    },


    Espia: function() {
        if (Arquero.Estado == "Despierto" || Caballero.Estado == "Despierto") {
            console.log("Annalyn puede espiar, hay al menos un enemigo despierto");
        } else {
            console.log("Annalyn no puede espiar, no hay enemigos despiertos");
        }
    },

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
        if (this.Perro == true) {
            if (Arquero.Estado == "Durmiendo") {
                console.log("Annalyn libera al prisionero");
            } else {
                console.log("Annalyn no puede liberar al prisionero, el arquero está despierto");
            }
        } else {
            if (Prisionero.Estado == "Despierto") {
                if (Arquero.Estado == "Durmiendo" && Caballero.Estado == "Durmiendo") {
                    console.log("Annalyn libera al prisionero");
                } else {
                    console.log("Annalyn no puede liberar al prisionero, hay al menos un enemigo despierto");
                }
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

function crearPersonaje() {
    return {
        Estado: "",
        GenerarEstado: function() {
            let numeroAleatorio = generarNumeroAleatorio(1, 100);
            if (numeroAleatorio <= 50) {
                this.EstablecerEstado("Despierto");
            } else {
                this.EstablecerEstado("Durmiendo");
            }
        },
        EstablecerEstado: function(estado) {
            this.Estado = estado;
        }
    };
}


let Caballero = crearPersonaje();
let Arquero = crearPersonaje();
let Prisionero = crearPersonaje();

Annalyn.GenerarPerro();
Caballero.GenerarEstado();
Arquero.GenerarEstado();
Prisionero.GenerarEstado();


Annalyn.AtaqueRapido();
Annalyn.Espia();
Annalyn.SeñalarPrisionero();
Annalyn.PrisioneroLibre();