import * as THREE from 'three';

export default class Door {
    constructor() {
        this.length = null;
        this.height = null;
    }
    
    setLength(length) {
        this.length = length;
    }

    setHeight(height) {
        this.height = height;
    }

    hole() {
        const hole = new THREE.Path();
        // hole.moveTo(3, 3);
        // hole.lineTo(3, 10);
        // hole.lineTo(10, 10);
        // hole.lineTo(10, 3);
        // hole.lineTo(3, 3);
        
        const doorHeight = 7;
        const doorStart = (this.length - doorHeight) / 2

        hole.moveTo(doorStart, doorStart);
        hole.lineTo(doorStart, this.height);
        hole.lineTo(this.height, this.height);
        hole.lineTo(this.height, doorStart);
        hole.lineTo(doorStart, doorStart);

        return hole;
    }
}