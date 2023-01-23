import Roof from "../models/Roof.js";

describe('Roof', () => {
    let model
    beforeEach(() => {
        model = new Roof();
    })

    describe('Roof', () => {

        it('sets length', () => {
            model.setLength(12);
            expect(model.length).toBe(12);
        });

        it('sets width', () => {
            model.setWidth(15);
            expect(model.width).toBe(15);
        });
    })
})