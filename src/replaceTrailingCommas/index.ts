const replaceTrailingCommas = ({ aString }: { aString: string }): string => {
  return aString.replaceAll(",", ";")
}

export default replaceTrailingCommas
