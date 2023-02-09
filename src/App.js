import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { Login } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
