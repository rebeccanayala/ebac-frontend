class Animal {
    constructor(nome, som) {
        this.nome = nome; 
        this.som = som; 
    }

    fazerSom() {
        console.log(`${this.nome} faz: ${this.som}`);
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome, "au au"); 
    }

    brincar() {
        console.log(`${this.nome} está brincando!`);
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome, "miau"); 
    }

    subirEmArvore() {
        console.log(`${this.nome} subiu na árvore!`);
    }
}

const cachorro1 = new Cachorro("Rex");
const cachorro2 = new Cachorro("Max");
const gato1 = new Gato("Mimi");

cachorro1.fazerSom(); 
cachorro1.brincar(); 

cachorro2.fazerSom(); 

gato1.fazerSom();     
gato1.subirEmArvore();
