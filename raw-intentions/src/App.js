import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUs from "./routes/information/AboutUs";
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/checkout/Checkout";
import ContactUs from "./routes/information/ContactUs";
import Customs from "./routes/customs/Customs";
import FAQ from "./routes/information/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/home/Home";
import Product from "./routes/shop/Product";
import Shipping from "./routes/information/Shipping";
import Shop from "./routes/shop/Shop";

function App() {
  return (
    <div className="content">
      <title>raw intentions</title>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/product/:id" component={Product} />
          <Route path="/customs" component={Customs} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/checkout/:step" component={Checkout} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/faq" component={FAQ} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
