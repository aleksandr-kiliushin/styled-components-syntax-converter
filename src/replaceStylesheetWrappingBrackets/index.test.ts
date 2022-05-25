import replaceStylesheetWrappingBrackets from "./index"

const aString = `styled('div')({
  display: 'grid',
  gridTemplateRows: '65px 22px auto',
  rowGap: '10px',
  maxWidth: '500px',
  padding: '32px 44px 40px',
  backgroundColor: '#32339d',
  border: '1px solid #4c3dfc',
  borderRadius: '8px',
  textAlign: 'center',
})`

describe("replaceStylesheetWrappingBrackets", () => {
  it("Replaces correctly", () => {
    expect(replaceStylesheetWrappingBrackets(aString)).toEqual(`styled('div')\`
  display: 'grid',
  gridTemplateRows: '65px 22px auto',
  rowGap: '10px',
  maxWidth: '500px',
  padding: '32px 44px 40px',
  backgroundColor: '#32339d',
  border: '1px solid #4c3dfc',
  borderRadius: '8px',
  textAlign: 'center',
\``)
  })
})
