const { celciusToFahrenheit } = require('./celciusToFahrenheit')

describe("celciusToFahrenheit()", () => {
  /*Add tests here*/
  it("returns a number", () => {
    const result = celciusToFahrenheit()
    expect(typeof result).toBe("number")
  })

  it("returns 32 when input is 0", () => {
    const result = celciusToFahrenheit(0)
    expect(result).toBe(32)
  })

  it("returns 41 when input is 5", () => {
    const result = celciusToFahrenheit(5)
    expect(result).toBe(41)
  })
});
