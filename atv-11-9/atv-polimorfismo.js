// Classe base para personagens de Outer Banks
class Character {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  
    introduce() {
      console.log(`Oi, eu sou ${this.name} e sou um ${this.role} em Outer Banks.`);
    }
  }
  
  // Subclasse que herda de Character para representar um Pogue
  class Pogue extends Character {
    constructor(name) {
      super(name, 'Pogue');
    }
  
    introduce() {
      console.log(`Oi, eu sou ${this.name}, um Pogue aventureiro de Outer Banks.`);
    }
  }
  
  // Subclasse que herda de Character para representar um Kook
  class Kook extends Character {
    constructor(name) {
      super(name, 'Kook');
    }
  
    introduce() {
      console.log(`Oi, eu sou ${this.name}, um Kook de Outer Banks, vivendo a vida na riqueza.`);
    }
  }
  
  // Função para demonstrar o polimorfismo
  function introduceCharacter(character) {
    character.introduce();
  }
  
  // Criando instâncias das classes
  const johnB = new Pogue('John B');
  const sarahCameron = new Kook('Sarah Cameron');
  
  // Chamando a função com diferentes personagens
  introduceCharacter(johnB);
  introduceCharacter(sarahCameron);
  