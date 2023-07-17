import { render } from "react-dom";
import App from "./App";
import { expensesStore } from "./stores";

render(<App expensesStore={expensesStore} />, document.getElementById("root"));
