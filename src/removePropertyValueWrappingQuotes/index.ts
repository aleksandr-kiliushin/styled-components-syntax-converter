const removePropertyValueWrappingQuotes = (aString: string): string => {
  return aString.replaceAll("'", "").replaceAll("div", "'div'")
}

export default removePropertyValueWrappingQuotes
