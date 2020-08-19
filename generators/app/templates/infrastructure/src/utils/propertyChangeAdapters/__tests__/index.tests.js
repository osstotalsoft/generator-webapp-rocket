import { addPropertyPrefix } from '../index'

describe("propertyChangeAdapters tests suite:", () => {

    // it("addPropertyPrefix should be memoized: ", () => {
    //     const prefix = "prefix";
    //     const fn = str => str;

    //     const firstResult = addPropertyPrefix(prefix, fn);
    //     const secondResult = addPropertyPrefix(prefix, fn);
    //     expect(Object.is(firstResult, secondResult)).toBe(true);
    // })

    it("addPropertyPrefix should prefix first param: ", () => {
        const prefix = "prefix";
        const fn = str => str;
        const param = "param";

        const result = addPropertyPrefix(prefix, fn)(param);
        expect(result).toBe(prefix + "." + param);
    })
})