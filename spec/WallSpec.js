import Wall from "../models/Wall.js";

describe('Wall', () => {
    let model
    beforeEach(() => {
        model = new Wall();
    })

    describe('Wall', () => {
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

        it('sets z', () => {
            model.setZ(-1);
            expect(model.z).toBe(-1);
        });

        it('sets addDoor', () => {
            model.setDoor(true);
            expect(model.addDoor).toBe(true);
        });

        it('sets sideWall', () => {
            model.setWidth(15);
            expect(model.sideWall).toBe(true);
        });

        it('front wall four vertices', () => {
            model.setLength(12);
            model.setHeight(10);

            expect(model.shape().geometry.parameters.shapes[0].curves.length).toBe(4)
        });

        it('side wall four vertices', () => {
            model.setHeight(10);
            model.setWidth(15);

            expect(model.shape().geometry.parameters.shapes[0].curves.length).toBe(4)
        });
    })
})