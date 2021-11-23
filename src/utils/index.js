export function unescapeHTML(unsafe) {
  return unsafe
    .replaceAll("&amp;", '&')
    .replaceAll("&lt;", '<')
    .replaceAll("&gt;", '>')
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
    .replaceAll("&ouml;", "ö")
    .replaceAll("&ndash;", '/')
  }