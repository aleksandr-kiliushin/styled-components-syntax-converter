const replacePropertyNames = ({ aString }: { aString: string }): string => {
  return aString
    .replaceAll(/gridTemplateRows/g, "grid-template-rows")
    .replaceAll(/rowGap/g, "row-gap")
    .replaceAll(/maxWidth/g, "max-width")
    .replaceAll(/backgroundColor/g, "background-color")
    .replaceAll(/borderRadius/g, "border-radius")
    .replaceAll(/textAlign/g, "text-align")
}

export default replacePropertyNames
