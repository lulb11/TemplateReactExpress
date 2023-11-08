import { ContextProvider } from "./context/Context";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ContextProvider>
  );
}

export default App;
