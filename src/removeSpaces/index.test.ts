import removeSpaces from "./index"

const aString = `styled('div')({
  display: 'grid',
  rowGap: '10px',
})`

describe("removeSpaces", () => {
  it("removes spaces correctly", () => {
    expect(removeSpaces({ aString })).toEqual("styled('div')({display:'grid',rowGap:'10px',})")
  })
})
