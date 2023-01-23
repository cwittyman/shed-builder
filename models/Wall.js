import * as THREE from 'three';
import Door from './Door.js';

export default class Wall {
    constructor() {
        this.length = null;
        this.width = null;
        this.height = null;
        this.z = null;
        this.sideWall = false;
        this.addDoor = false;
    }

    setLength(length) {
        this.length = length;
    }

    setHeight(height) {
        this.height = height;
    }

    setZ(zValue) {
        this.z = zValue;
    }

    setWidth(width) {
        this.width = width;
        this.sideWall = true;
    }

    setDoor(){
        this.addDoor = true;
    }

    shape() {
        const shape = new THREE.Shape();
        shape.moveTo(0, 0);
        shape.lineTo(this.sideWall ? this.width : this.length, 0);
        shape.lineTo(this.sideWall ? this.width : this.length, this.height);
        shape.lineTo(0, this.height);
        shape.lineTo(0, 0);

        if(this.addDoor) {
            const door = new Door();
            door.setHeight(this.height);
            door.setLength(this.length)
            shape.holes.push(door.hole());
        }

        const wallGeometry = new THREE.ExtrudeBufferGeometry([ shape ], {
            steps: 1,
            depth: 1,
            bevelEnabled: false,
            curveSegments: 32
        });

        const wall = new THREE.Mesh(wallGeometry, new THREE.MeshBasicMaterial({ color: '#765341' }));
        
        if(this.sideWall)
            wall.rotateY(-Math.PI / 2);
        
        if(this.z)
            wall.translateZ(this.z);

        return wall;
    }
} 