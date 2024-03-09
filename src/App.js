import { Route, BrowserRouter, Routes } from "react-router-dom";

import ROUTES from "./routes";
import TableUserAddress from "./components/TableUserAddress";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TableUserAddress />} path={ROUTES.USER_ADDRESS} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
