const subtract = (x, y) => {
  return x-y
}

console.log(subtract(5,2))

test('subtract function returns proper result', () => {
  const result = subtract(10,6)
  expect(result).toBe(4)
  expect(result).toEqual(4)
})
test('subtract function returns proper result', () => {
  const result = subtract(6,10)
  expect(result).toBe(-4)
  expect(result).toEqual(-4)
})
describe('sad paths', () => {
  test('if second arg not provide, will throw an error', () => {
    expect(() => {
      subtract(2)
    }).toThrow()
  })
})