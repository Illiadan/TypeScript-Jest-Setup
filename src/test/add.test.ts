import { add } from "../add";

describe("add.ts testing", () => {
    describe("sum of 2 numbers", () => {
        it("should return 10", () => {
            const t1 = add(5, 5);
            expect(t1).toBe(10);
        });
        it("should not return 0", () => {
            const t1 = add(4, -5);
            expect(t1).not.toBe(0);
        });
    });
});