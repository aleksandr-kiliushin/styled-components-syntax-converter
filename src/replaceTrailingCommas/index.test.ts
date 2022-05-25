import replaceTrailingCommas from "./index"

const aString = `styled('div')({
  display: 'grid',
  rowGap: '10px',
})`

describe("replaceTrailingCommas", () => {
  it("Replaces correctly", () => {
    expect(replaceTrailingCommas(aString)).toEqual(`styled('div')({
  display: 'grid';
  rowGap: '10px';
})`)
  })
})
