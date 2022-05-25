export const input = `styled('div')({
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

export const output = `styled('div')\`
  display: grid;
  grid-template-rows: 65px 22px auto;
  row-gap: 10px;
  max-width: 500px;
  padding: 32px 44px 40px;
  background-color: #32339d;
  border: 1px solid #4c3dfc;
  border-radius: 8px;
  text-align: center;
\``
