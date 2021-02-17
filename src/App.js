import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Product from './routes/shop/Product';
import Customs from './routes/customs/Customs';
import Cart from './routes/cart/Cart';
import Shipping from './routes/shipping/Shipping';
import AboutUs from './routes/about-us/AboutUs';


function App() {
    return (
        <div className='content'>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/product' component={Product}/>
                    <Route path='/customs' component={Customs}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/shipping' component={Shipping}/>
                    <Route path='/about-us' component={AboutUs}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
        
    )
}

export default App;
