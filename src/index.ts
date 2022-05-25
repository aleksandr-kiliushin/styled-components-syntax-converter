import replacePropertyNames from "./replacePropertyNames"
import replaceTrailingCommas from "./replaceTrailingCommas"

const convertSyntax = ({ aString }: { aString: string }): string => {
  return replacePropertyNames({ aString: replaceTrailingCommas({ aString }) })
}

export default convertSyntax
