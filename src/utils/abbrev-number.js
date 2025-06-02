export default function abbrevNumber(number) {
  if (number > 999_999_999_999) {
    return '\u{221E}'
  } else if (number > 999_999_999) {
    return (number / 1_000_000_000).toFixed(1) + 'B'
  } else if (number > 999_999) {
    return (number / 1_000_000).toFixed(1) + 'M'
  } else if (number > 999) {
    return (number / 1_000).toFixed(1) + 'K'
  } else {
    return number
  }
}
