class Hero {
	constructor(name, age, type){
		this.name = name;
		this.age = age;
		this.type = type;
	}

	attack(){
		let attackType = "";

		switch (this.type.toLowerCase()) {
			case "mago":
				attackType = "magia";
				break;
			case "guerreiro":
				attackType = "espada";
				break;
			case "monge":
				attackType = "artes marciais";
				break;
			case "ninja":
				attackType = "shuriken";
				break;
			default:
				attackType = "um ataque básico";
				break;
		}

		console.log(`O ${this.type} atacou usando ${attackType}.`);
	}
}


let hero = new Hero("João",15,"Guerreiro");
hero.attack();