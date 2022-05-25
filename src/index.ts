import R from "ramda"
import removePropertyValueWrappingQuotes from "./removePropertyValueWrappingQuotes"

import replacePropertyNames from "./replacePropertyNames"
import replaceTrailingCommas from "./replaceTrailingCommas"

const convertSyntax = ({ aString }: { aString: string }): string => {
  return R.pipe(replacePropertyNames, replaceTrailingCommas, removePropertyValueWrappingQuotes)(aString)
}

export default convertSyntax
