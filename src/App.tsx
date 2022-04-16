import { ThemeProvider, Theme } from "theme-ui";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import "../src/styles/global.css";

import { theme } from "styles";
import { OptimalBreathing } from "layouts";
import { store } from "./store";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID as string);
console.log(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.send("pageview");

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
