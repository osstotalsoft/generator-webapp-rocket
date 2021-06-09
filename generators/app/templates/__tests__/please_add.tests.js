describe('root tests suite:', () => {
  it('using |> operator should not have undesired side-effects: ', () => {
    const add = x => y => x + y
    const result = 1 |> add(2)
    expect(result).toBe(6)
  })
})
