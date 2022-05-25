const removeSpaces = ({ aString }: { aString: string }): string => {
  return aString.replaceAll(/\s/g, "")
}

export default removeSpaces
