const replacePropertyNames = (aString: string): string => {
  return aString
    .replaceAll("backgroundColor", "background-color")
    .replaceAll("borderRadius", "border-radius")
    .replaceAll("gridTemplateRows", "grid-template-rows")
    .replaceAll("maxWidth", "max-width")
    .replaceAll("rowGap", "row-gap")
    .replaceAll("textAlign", "text-align")
}

export default replacePropertyNames
