import Shed from "../models/Shed.js";

describe('Shed', () => {
    let model
    beforeEach(() => {
        model = new Shed();
    })

    describe('Shed', () => {
        it('sets height', () => {
            model.setHeight(10);
            expect(model.height).toBe(10);
        });

        it('sets length', () => {
            model.setHeight(12);
            expect(model.height).toBe(12);
        });

        it('sets width', () => {
            model.setWidth(15);
            expect(model.width).toBe(15);
        });

        it('sets hasDoor', () => {
            model.setDoor(true);
            expect(model.hasDoor).toBe(true);
        });

        it('front wall four vertices', () => {
            const shape = model.buildFrontWall().shape();
            expect(shape.geometry.parameters.shapes[0].curves.length).toBe(4)
        });

        it('builds', () => {
            model.setHeight(10);
            model.setHeight(12);
            model.setWidth(15);
            model.build();
            
            expect(model.shed.children.length).toBe(5);
        })
    })
})