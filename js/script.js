
// Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
// - testo
// - "completed", un booleano settato inizialmente a false.
// Stampare in pagina un item per ogni elemento della to-do list.

// Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).

// BONUS:
// Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).
// Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).

var app = new Vue (
    {
        el: "#root",
        data: {
            toDoList: [
                {
                    text: "Fare la spesa",
                    completed: false
                },
                {
                    text: "Portare a spasso il cane",
                    completed: false 
                },
                {
                    text: "Studiare Vue-js",
                    completed: false 
                },
                {
                    text: "Relax",
                    completed: false 
                },
                {
                    text: "Allenamento in bici",
                    completed: false 
                },
            ]
        },
        methods: {
            removeObject: function (indexRemove) {
                console.log("removeObject", indexRemove);
                this.toDoList.splice(indexRemove, 1);
            },
            addObject: function (event) {
                const text = event.target.value;
                this.toDoList.push({
                    text: text,
                    completed: false,
                });
                event.target.value = "";
            },
            toggle: function (item) {
               item.completed = !item.completed;
            }
        }
    }
);