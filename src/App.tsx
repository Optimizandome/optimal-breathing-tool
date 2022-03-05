import { ThemeProvider, Theme } from "theme-ui";
import "../src/styles/global.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { theme } from "styles";
import { OptimalBreathing } from "layouts";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme as Theme}>
        <OptimalBreathing />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
