import { ThemeProvider, Theme } from "theme-ui";
import "../src/styles/global.css";

import { theme } from "styles";
import { BreathingCircle } from "components";
import { CircletBreathing } from "components/molecules/CircletBreathing";

function App() {
  return (
    <ThemeProvider theme={theme as Theme}>
      <BreathingCircle
        breathings={[
          {
            duration: 1500,
            breathingState: "inhale",
            label: "Inhale",
          },
          {
            duration: 1000,
            breathingState: "inhale_hold",
            label: "Hold",
          },
          {
            duration: 1500,
            breathingState: "exhale",
            label: "Exhale",
          },
          {
            duration: 1000,
            breathingState: "exhale_hold",
            label: "Hold",
          },
        ]}
      />
    </ThemeProvider>
  );
}

export default App;
