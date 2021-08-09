import React, { useState } from "react";
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
			if (cartItems[i].url === item.url) {
				return true;
			}
		}
		return false;
	};

	const handleCartItems = (quantity, item) => {
		if (checkItemExist(item)) {
			setCartItems((arr) => {
				return arr.map((obj) => {
					if (obj.url === item.url) {
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
			...item,
			quantity,
		};
		setCartItems([...cartItems, obj]);
	};
	const deleteProduct = (e) => {
		let index = Number(e.target.id);
		setCartItems((arr) => {
			return arr.filter((a) => {
				return a !== arr[index];
			});
		});
	};

	return (
		<BrowserRouter>
			<Nav itemsNumber={cartItems.length} />
			<Switch>
				<Route exact path='/shopping-cart'>
					<Home />
				</Route>
				<Route exact path='/shop'>
					<Shop handleCartItems={handleCartItems} />
				</Route>
				<Route exact path='/shop-cart'>
					<ShopCart deleteProduct={deleteProduct} cartItems={cartItems} />
				</Route>
				<Route exact path='/shop/:id' component={Items} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
