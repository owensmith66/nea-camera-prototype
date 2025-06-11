import {Vector3, PerspectiveCamera} from "three";

export class Camera {
    constructor() {

        this.__renderer = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.__cameraPosition = new Vector3(0,10,20)
        this.__cameraOrientation = new Vector3(0,0,0)
        this.__movementSpeed = 1


        this.__renderer.position.setFromVector3(this.__cameraPosition)
    }

    __setCameraPosition(newPos) {
        this.__cameraPosition = newPos

        this.__renderer.position.setFromVector3(this.__cameraPosition)
    }

    __setCameraOrientation(newOri) {
        this.__cameraOrientation = newOri

        this.__renderer.rotation.setFromVector3(cameraRotation)
    }

    __moveCamera(keysDown) {
        movementDirection = new Vector3(0,0,0)

        directions = {
	        W: new Vector3(0,0,1),
	        S: new Vector3(0,0,-1),
	        A: new Vector3(-1,0,0),
	        D: new Vector3(1,0,0),
	        Q: new Vector3(0,-1,0),
	        E: new Vector3(0,1,0),
        }

        for (key in directions) {
            if (keysDown[key]) {
                movementDirection = movementDirrection + directions[key]
            }
        }
		     
        newPosition = this.__cameraPosition + movementDirection

        this.__setCameraPosition(newPosition)

    }
}