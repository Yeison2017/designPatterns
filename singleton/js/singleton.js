// Patron creacional

class Singleton {
    getInstance(){
        return Singleton.instance;
    }

    constructor(){
        console.log('entra al constructor')
        if(Singleton.instance){
            console.log('ya existe')
            return Singleton.instance;
        }
        console.log('no existe y se crea')
        Singleton.instance = this;
    }
}

const singleton = new Singleton();
const singleton2 = new Singleton();