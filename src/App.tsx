import { ThemeProvider, Theme } from "theme-ui";
import ReactGA from "react-ga";
import "../src/styles/global.css";

import { store } from "./store";
import { Provider } from "react-redux";
import { theme } from "styles";
import { OptimalBreathing } from "layouts";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID as string);
ReactGA.pageview(window.location.pathname + window.location.search);

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
