const makeHTML = (users) => {

  if (!Array.isArray(users)) {
    throw new Error("Input must be an array")
  }

  return users.map(user => {
    return `
      <div>
        <h3>${user.name}</h3>
        <h3>${user.age}</h3>
      </div>
    `
  })
};

module.exports = { makeHTML }

