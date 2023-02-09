class TestClass {
	constructor(a){
		this.a = a
	}

	get(){
		return;
	}

	set(){
		return;
	}
}

/**
 * 
 * @param {any} o The object to compare to. 
 */
export default function (o) {
	return o?.constructor.prototype == TestClass.constructor.prototype
}