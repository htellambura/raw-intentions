import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Product from "./routes/shop/Product";
import Customs from "./routes/customs/Customs";
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/checkout/Checkout";
import Shipping from "./routes/shipping/Shipping";
import AboutUs from "./routes/about-us/AboutUs";
import Payment from "./routes/payment/Payment";

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
          <Route path="/payment" component={Payment} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
