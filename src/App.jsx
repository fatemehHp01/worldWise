import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import Form from "./pages/Form";
import { createContext, useEffect, useState } from "react";

// BASE URL
const BASE_URL = "http://localhost:8000/cities";
export const AppContext = createContext();
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_URL);
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const data = await response.json();
        setCities(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ cities }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="cities" element={<CityList />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
