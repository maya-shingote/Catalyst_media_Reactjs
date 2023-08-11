import "./App.css";
import { useState } from "react";
import Products from "./components/Products_section3/Products";
import Header from "./components/Header_section1/Header1";
import Footer from "./components/Footer_section5/Footer";

function App() {
  // cart counting start
  const [cartCount, setCartCount] = useState(0);

  const handleIncrement = () => {
    setCartCount(cartCount + 1);
  };

  const handleDecrement = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };
  // cart counting end
  return (
    <>
      <Header cart_count={cartCount} />
      <Products Count_Incre={handleIncrement} COunt_Decr={handleDecrement} />
      <Footer />
    </>
  );
}

export default App;
