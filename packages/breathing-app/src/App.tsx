import { ThemeProvider, Theme } from "theme-ui";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { QueryParamProvider } from "use-query-params";

import "../src/styles/global.css";

import { theme } from "styles";
import { OptimalBreathing } from "layouts";
import { store } from "./store";
import "./utils/i18n";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID as string);
ReactGA.send("pageview");

function App() {
  return (
    <Provider store={store}>
      <QueryParamProvider>
        <ThemeProvider theme={theme as Theme}>
          <OptimalBreathing />
        </ThemeProvider>
      </QueryParamProvider>
    </Provider>
  );
}

export default App;
