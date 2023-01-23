import * as THREE from 'three';
import Wall from './Wall.js';
import Roof from './Roof.js';

export default class Shed {
    constructor() {
        this.length = null;
        this.width = null;
        this.height = null;
        this.shed = new THREE.Object3D();
        this.hasDoor = false;
    }

    setLength(length) {
        this.length = length;
    }

    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setDoor(value) {
        this.hasDoor = value;
    }
    
    buildFrontWall() {
        const frontWall = new Wall();
        frontWall.setLength(this.length);
        frontWall.setHeight(this.height);
        
        if(this.hasDoor)
            frontWall.setDoor();
        
        return frontWall;
    }

    buildBackWall() {
        const backWall = new Wall();
        backWall.setLength(this.length);
        backWall.setHeight(this.height);
        backWall.setZ(this.width);

        return backWall;
    }

    buildLeftWall() {
        const leftWall = new Wall();
        leftWall.setHeight(this.height);
        leftWall.setWidth(this.width);
        leftWall.setZ(-1);

        return leftWall;
    }

    buildRightWall() {
        const rightWall = new Wall();
        rightWall.setWidth(this.width);
        rightWall.setHeight(this.height);
        rightWall.setZ(-this.length);

        return rightWall;
    }

    buildRoof() {
        const roof = new Roof();
        roof.setLength(this.length);
        roof.setWidth(this.width);

        return roof;
    }

    build() {
        this.shed.add(this.buildFrontWall().shape());
        this.shed.add(this.buildBackWall().shape());
        this.shed.add(this. buildLeftWall().shape());
        this.shed.add(this.buildRightWall().shape());
        this.shed.add(this.buildRoof().shape());

        application.enableLighting();
        application.enableOrbitControls();
        application.scene().add(this.shed);
    }
}