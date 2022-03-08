export const theme = {
  breakpoints: ["480px", "768px", "1024px", "1200px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 768],
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "inherit",
    monospace: "inherit",
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96],
  lineHeights: ["1rem", "1.2rem", "1.4rem", "1.6rem", "2rem"],
  borderWidths: [0, 1, 2, 4, 8, 10, 12],
  zIndices: [-1, 1, 2, 3, 4, 5],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  colors: {
    text: "#3b3b3b",
    background: "#E6E6E6",
    primary: "#132F44",
    secondary: "#F57F01",
    muted: "#cccccc",
    gray: "#8D8D8D",
    info: "#2196F3",
    error: "#f2443e",
    success: "#64F57A",
    warning: "#ecc04f",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  sizes: [8, 18, 24, 32, 64, 128, 356, 420, 512, 768, 1024, 1200],
  radii: [12, 16, 20, 24, 26, 32, 38, 44],
  styles: {
    root: {
      fontFamily: "'Montserrat', sans-serif",
      boxSizing: "border-box",
    },
  },
};
