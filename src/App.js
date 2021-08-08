import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopCart from "./components/Shop-cart";
import Items from "./components/Items";
import "./Style/App.css";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const checkItemExist = (item) => {
		for (let i = 0; i < cartItems.length; i++) {
			if (cartItems[i].url === item) {
				return true;
			}
		}
		return false;
	};

	const handleCartItems = (quantity, item) => {
		if (checkItemExist(item)) {
			setCartItems((arr) => {
				return arr.map((obj) => {
					if (obj.url === item) {
						obj = {
							...obj,
							quantity: obj.quantity + quantity,
						};
					}
					return obj;
				});
			});
			return;
		}
		let obj = {
			url: item,
			quantity,
		};
		setCartItems([...cartItems, obj]);
	};

	useEffect(() => {
		console.log(cartItems);
	}, [cartItems]);
	return (
		<BrowserRouter>
			<Nav itemsNumber={cartItems.length} />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/shop'>
					<Shop handleCartItems={handleCartItems} />
				</Route>
				<Route exact path='/shop-cart'>
					<ShopCart cartItems={cartItems} />
				</Route>
				<Route exact path='/shop/:id' component={Items} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
