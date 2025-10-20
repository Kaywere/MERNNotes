import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
