const replacePropertyNames = (aString: string): string => {
  return aString
    .replace("backgroundColor", "background-color")
    .replace("borderRadius", "border-radius")
    .replace("gridTemplateRows", "grid-template-rows")
    .replace("maxWidth", "max-width")
    .replace("rowGap", "row-gap")
    .replace("textAlign", "text-align")
}

export default replacePropertyNames
