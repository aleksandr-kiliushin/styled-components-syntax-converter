const replaceTrailingCommas = ({ aString }: { aString: string }): string => {
  return aString.replaceAll(/,/g, ";")
}

export default replaceTrailingCommas
