import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import {
  Container,
  Stack,
  ThemeProvider,
  Toolbar,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Footer from "./components/common/Footer";
import Contact from "./components/pages/Contact";
import Scholarship from "./components/pages/Scholarship";
import Visa from "./components/pages/Visa";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppSnackBar from "./components/common/AppSnackBar";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Stack position="relative">
          <Container>
            <AppSnackBar />
            <Router>
              <Navbar />
              <Toolbar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/scholarship" element={<Scholarship />} />
                <Route exact path="/visa" element={<Visa />} />
              </Routes>
            </Router>
          </Container>
          <Footer />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
