// Renders text with **bold** segments, so content in data.js can stay as plain strings.
export default function Rich({ text, bold: Bold = "strong" }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? <Bold key={i}>{part.slice(2, -2)}</Bold> : part
  );
}
