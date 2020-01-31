class Trait{
	constructor(name){
		this.name = name;
	}
	update() {
		console.warn('Unhandled update from ' + this.name + ' trait');
	}

}