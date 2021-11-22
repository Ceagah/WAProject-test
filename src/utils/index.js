export function unescapeHTML(unsafe) {
  return unsafe
    .replace("&amp;", '&')
    .replace("&lt;", '<')
    .replace("&gt;", '>')
    .replace("&quot;", '"')
    .replace("&quot;", '"')
    .replace("&quot;", '"')
    .replace("&quot;", '"')
    .replace("&#039;", "'")
}