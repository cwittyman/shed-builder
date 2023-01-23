import * as THREE from 'three';

export default class Roof {
    constructor() {
        this.length = null;
        this.width = null;
        this.overHang = 1;
    }

    setLength(length) {
        this.length = length;
    }

    setWidth(width) {
        this.width = width;
    }

    shape() {
        const roof = new THREE.Shape();
        roof.moveTo(-this.overHang, 0);
        roof.lineTo((this.length/2) - .2, -4);
        roof.lineTo(this.length + this.overHang, 0);
        roof.lineTo(0, 0);
        
        const roofGeometry = new THREE.ExtrudeBufferGeometry([ roof ], {
            steps: 1,
            depth: this.width + this.overHang,
            bevelEnabled: false,
            curveSegments: 32
        });

        return new THREE.Mesh(roofGeometry, new THREE.MeshBasicMaterial({ color: '#000' }));
    }

    triangle(){
        const geometry = new THREE.BufferGeometry();
        const vertices1 = new Float32Array([
                -1, 0, 0,
                0.5, 1.5, 0,
                2, 0, 0
            ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices1, 3));
        geometry.computeVertexNormals(); // compute vertex normals
        geometry.addGroup(0, 3, 0); // just one group
        // uv attribute
        const vertices2 = new Float32Array([
                0, 0,
                1, 0,
                1, 1
            ]);
        geometry.setAttribute('uv', new THREE.BufferAttribute(vertices2, 2));
        return new THREE.Mesh(
            geometry, 
            new THREE.MeshBasicMaterial({
                color: '#765341'
            }));
    }
}