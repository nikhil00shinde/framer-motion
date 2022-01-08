import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
	hidden: {
		x: "100vw",
		opacity: 0,
	},

	visible: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			mass: 0.4,
			damping: 8,
			when: "beforeChildren",
			staggerChildren: 0.4,
		},
	},
};

const childVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};
const Order = ({ pizza }) => {
	return (
		<motion.div
			className="container order"
			variants={containerVariant}
			initial="hidden"
			animate="visible"
		>
			<h2>Thank you for your order :)</h2>
			<motion.p variants={childVariants}>
				You ordered a {pizza.base} pizza with:
			</motion.p>
			<motion.div variants={childVariants}>
				{pizza.toppings.map((topping) => (
					<div key={topping}>{topping}</div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Order;

// Orchestration Property
// when is orchestration property --> it dictates when this animation should occur in relation to any children elements which animating too.
// when:"beforeChildren" -> we want to complete this animation before any children animation occur
// when:"afterChildren"

// staggerChildren -> it stagger the animation of all children by seconds, if each child elements by x amount, so they all animate one after another for nice little effect

// SPRING PROPERTY
// mass => higher mass means it moves slower
// damping => strength of opposing force (higher number means less ocsillation)
