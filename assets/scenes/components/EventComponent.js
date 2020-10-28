
// You can write more code here

/* START OF COMPILED CODE */

class EventComponent {
	
	constructor(gameObject) {
		gameObject["__EventComponent"] = this;
		
		/** @type {Phaser.GameObjects.GameObject} */
		this.gameObject = gameObject;
		
		/* START-USER-CTR-CODE */
		this.scene = this.gameObject.scene;

		this.scene.events.once("update", () => this.start());
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {EventComponent} */
	static getComponent(gameObject) {
		return gameObject["__EventComponent"];
	}
	
	/* START-USER-CODE */

	start() {
		// nothing
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
