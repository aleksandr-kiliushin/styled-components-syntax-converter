const replaceTrailingCommas = (aString: string): string => {
  return aString.replaceAll(",", ";")
}

export default replaceTrailingCommas
