
// You can write more code here

/* START OF COMPILED CODE */

class ScrollFactorX extends EventComponent {
	
	constructor(gameObject) {
		super(gameObject);
		
		gameObject["__ScrollFactorX"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {number} */
		this.scrollFactor = 0;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {ScrollFactorX} */
	static getComponent(gameObject) {
		return gameObject["__ScrollFactorX"];
	}
	
	/* START-USER-CODE */

	start() {

		this.gameObject.scrollFactorX = this.scrollFactor;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
