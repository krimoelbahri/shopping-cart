import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopCart from "./components/Shop-cart";

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Nav />
			</div>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/shop' component={Shop} />
				<Route exact path='/shop-cart' component={ShopCart} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
