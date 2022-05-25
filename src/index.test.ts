import convertSyntax from "./index"

import { input as input1, output as output1 } from "./test-cases/1"

describe("Styled components syntax converts correctly", () => {
  test.each<{ input: string; output: string; testCaseNumber: number }>([
    { input: input1, output: output1, testCaseNumber: 1 },
  ])("Test case #$testCaseNumber converts correctly.", ({ input, output }) => {
    expect(convertSyntax(input)).toEqual(output)
  })
})
