import store from "./app/store";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
