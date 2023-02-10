import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { SignupPage, SigninPage, TodoPage, Root } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
