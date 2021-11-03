const { makeHTML } = require('./makeHTML')

describe("makeHTML()", () => {
  it('returns an array', () => {
    const result = makeHTML([])
    expect(Array.isArray(result)).toBeTruthy()
  })

  it('throws if argument is not an array', () => {
    expect(() => {
      makeHTML("42");
    }).toThrow(new Error("Input must be an array"));
  })

  it('returns an array of the same length as input', () => {
    const users = [
      {
        name: "Linda",
        age: 42
      },
      {
        name: "Lucy",
        age: 37
      }
    ]
    const result = makeHTML(users)
    expect(result).toHaveLength(2)
  })

  it('turns user object to html string', () => {
    const users = [
      {
        name: "Linda",
        age: 42
      },
    ]

    const expectedHTMLString = `
      <div>
        <h3>${users[0].name}</h3>
        <h3>${users[0].age}</h3>
      </div>
    `
    const result = makeHTML(users)
    expect(result).toContain(expectedHTMLString)
  })

  it('turns turns all user objects to html strings', () => {
    const users = [
      {
        name: "Linda",
        age: 42
      },
      {
        name: "Lucy",
        age: 37
      }
    ]

    const expectedOutput = [`
      <div>
        <h3>${users[0].name}</h3>
        <h3>${users[0].age}</h3>
      </div>
    `, `
      <div>
        <h3>${users[1].name}</h3>
        <h3>${users[1].age}</h3>
      </div>
    `]
    const result = makeHTML(users)
    expect(result).toEqual(expectedOutput)
  })
});