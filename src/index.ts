import replaceTrailingCommas from "./replaceTrailingCommas"

const convertSyntax = ({ aString }: { aString: string }): string => {
  return replaceTrailingCommas({ aString })
}

export default convertSyntax
