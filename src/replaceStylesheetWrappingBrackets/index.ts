const replaceStylesheetWrappingBrackets = (aString: string): string => {
  return aString.replace("({", "`").replace("})", "`")
}

export default replaceStylesheetWrappingBrackets
