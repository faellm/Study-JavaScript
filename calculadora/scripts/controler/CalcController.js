class CalcController {
    
    /* classe é um atribuito de conjuntos e metodos */
    // Emcapsulamento - quem pode acessar.
    constructor(){
        // quando tiver _xxxx = é privado
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();

    }

    initialize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        let new_date = new Date();

        dateEl.innerHTML = new_date.toLocaleDateString("pt-br")
        timeEl.innerHTML = new_date.toLocaleTimeString("pt-br")
    }

    get displayCalc(){
        
        return this._displayCalc;
    }

    set displayCalc(valor) {

        this._displayCalc = valor;
        
    }

    get currentDate() {

        return this._dataAtual;
    }

    

    set dataAtual(agora) {

        this._dataAtual = agora;

    }

}