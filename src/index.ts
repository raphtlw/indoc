/**
 * # Indented Documents
 *
 * Template literal function to generate unindented strings
 *
 * @example
 * indoc`
 *   test
 * `
 * // output: `test`
 */
export function indoc(document: TemplateStringsArray): string {
  return document[0]
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .join("\n")
}

export function ind(document: string): string {
  return document[0]
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .join("\n")
}

export default indoc
