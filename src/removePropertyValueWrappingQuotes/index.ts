const removePropertyValueWrappingQuotes = (aString: string): string => {
  return aString.replaceAll("'", "")
}

export default removePropertyValueWrappingQuotes
