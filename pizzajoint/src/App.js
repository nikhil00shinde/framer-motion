import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	const [pizza, setPizza] = useState({ base: "", toppings: [] });
	const [showModal, setShowModal] = useState(false);

	const addBase = (base) => {
		setPizza({ ...pizza, base });
	};

	const addTopping = (topping) => {
		let newToppings;
		if (!pizza.toppings.includes(topping)) {
			newToppings = [...pizza.toppings, topping];
		} else {
			newToppings = pizza.toppings.filter((item) => item !== topping);
		}
		setPizza({ ...pizza, toppings: newToppings });
	};

	return (
		<>
			<Header />
			<Modal showModal={showModal} setShowModal={setShowModal} />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path="/base">
						<Base addBase={addBase} pizza={pizza} />
					</Route>
					<Route path="/toppings">
						<Toppings addTopping={addTopping} pizza={pizza} />
					</Route>
					<Route path="/order">
						<Order pizza={pizza} setShowModal={setShowModal} />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;

// agar dom se bahar jata hain toh humhe usey animate krna hoga with AnimatePrsence Component
// it doesn't know when to fire exit animation in Route
// we need to know when animation route changes
// hum use karenge useLocation hook from react-router-dom
//useLocation --> get the information on current route location,whenever the route changes it goona update the information
// Just keep in mind the purpose useLocation() is getting information from the current route, and it will return these attributes.
// basically, AnimatePresence tab chalta jab usey pata chalta hain ki kab kab woh dom se hat raha hain

// AnimatePrsence ko props dedo 'exitBeforeEnter'
// any component that is exiting is complete before we start the enter the next component
