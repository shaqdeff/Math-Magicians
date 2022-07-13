import operate from "./__mocks__/operate";

describe("operate", () => {

    test("1 + 2 should return 3", ()=> {
        expect(operate("1", "2", "+")).toBe("3");
    })

    test("1 - 2 should return -1", ()=> {
        expect(operate("1", "2", "-")).toBe("-1");
    })

    test("1 x 2 should return 2", ()=> {
        expect(operate("1", "2", "x")).toBe("2");
    })

    test("1 divided by 2 should return 0.5", ()=> {
        expect(operate("1", "2", "÷")).toBe("0.5");
    })
    test("4 mod 3 should return 1", ()=> {
        expect(operate("4", "3", "%")).toBe("1");
    })

  it("should return the correct result", () => {
    expect(operate("1", "0", "÷")).toBe("Can't divide by 0.");
    expect(operate("1", "0", "%")).toBe("Can't find modulo as can't divide by 0.");
  })});