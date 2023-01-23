import * as THREE from 'three';
import ExampleModel from './models/ExampleModel.js';
import Shed from './models/Shed.js';

// 2D Example:
// const model = new ExampleModel()
// application.addShape(model.shape(), '#FF7800')

// 3D Example:
// const shape = new THREE.BoxGeometry(5, 5, 5)
// application.add3DShape(shape, '#FF7800')

const length = Number(document.getElementById('lengthInput').value);
const height = Number(document.getElementById('heightInput').value);
const width = Number(document.getElementById('widthInput').value);

const shed = new Shed();
shed.setLength(length);
shed.setHeight(height);
shed.setWidth(width);

shed.build();

const widthCallback = (shed) => (value) => {
    application.clear();
    shed.setWidth(Number(value));
    shed.build();
}

const lengthCallback = (shed) => (value) => {
    application.clear();
    shed.setLength(Number(value));
    shed.build();
}

const heightCallback = (shed) => (value) => {
    application.clear();
    shed.setHeight(Number(value));
    shed.build();
}

const doorCallback = (shed) => (value) => {
    application.clear();
    shed.setDoor(value);
    shed.build();
}

application.setWidthChangedCallback(widthCallback(shed))
application.setLengthChangedCallback(lengthCallback(shed))
application.setHeightChangedCallback(heightCallback(shed))
application.setDoorChangedCallback(doorCallback(shed))