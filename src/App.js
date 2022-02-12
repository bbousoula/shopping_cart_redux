import "./styles.scss";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <Router>
          <Routes />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
