import Door from "../models/Door.js"

describe('Door', () => {
    let model
    beforeEach(() => {
        model = new Door();
    })

    describe('Door', () => {
        it('sets height', () => {
            model.setHeight(10);
            expect(model.height).toBe(10);
        });

        it('sets length', () => {
            model.setHeight(12);
            expect(model.height).toBe(12);
        });

        it('has four vertices', () => {
            const shape = model.hole();
            expect(shape.curves.length).toBe(4)
        });
    })
})