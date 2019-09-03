import Typography from "typography"
import oceanBeachTheme from "typography-theme-ocean-beach"

oceanBeachTheme.bodyFontFamily = ["Sarabun", ...oceanBeachTheme.bodyFontFamily]
oceanBeachTheme.headerFontFamily = [
  "Sarabun",
  ...oceanBeachTheme.headerFontFamily,
]

const typography = new Typography(oceanBeachTheme)

export default typography
