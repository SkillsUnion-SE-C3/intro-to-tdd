// import the file which we want to test against
const { sum } = require('./sum')

describe("sum()", () => {
  it("returns a number", () => {
    const result = sum()
    expect(typeof result).toBe('number')
  })

  it("returns 2 when inputs are 1 and 1", () => {
    const result = sum(1, 1)
    expect(result).toBe(2)
  })

  it("returns 4 when inputs are 1 and 3", () => {
    const result = sum(1, 3)
    expect(result).toBe(4)
  })
});
