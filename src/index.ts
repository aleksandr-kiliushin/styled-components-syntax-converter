import R from "ramda"

import removePropertyValueWrappingQuotes from "./removePropertyValueWrappingQuotes"
import replacePropertyNames from "./replacePropertyNames"
import replaceStylesheetWrappingBrackets from "./replaceStylesheetWrappingBrackets"
import replaceTrailingCommas from "./replaceTrailingCommas"

const convertSyntax = (aString: string): string => {
  return R.pipe(
    replacePropertyNames,
    replaceTrailingCommas,
    removePropertyValueWrappingQuotes,
    replaceStylesheetWrappingBrackets
  )(aString)
}

export default convertSyntax

// /(?<=const \w+ = styled)\((?<quote>['"]?)\w+\k<quote>(?:, \{ shouldForwardProp: isPropValid \})?\)(:?.+?)(:?}\)\)\n|}\)\n\)\n|,\n}\)\n)/gs
