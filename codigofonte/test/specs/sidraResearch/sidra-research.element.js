//@ts-check
/// <reference="jasmine" />

describe("sidra-research element ui tests", () => {

    it('should be defined', () => {
        const el = browser
            .init()
            .url("http://127.0.0.1:8080/")
            .element('sidra-research');

        expect(el.constructor.toString()).tp

    });

});