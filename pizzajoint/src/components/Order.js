import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
	const [showTitle, setShowTitle] = useState(true);

	setTimeout(() => {
		setShowTitle(false);
	}, 4000);

	return (
		<motion.div
			className="container order"
			variants={containerVariant}
			initial="hidden"
			animate="visible"
		>
			<AnimatePresence>
				{showTitle && (
					<motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
				)}
				{/* the thing on the left must be true in order for the thing right to show */}
			</AnimatePresence>
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

// to animate something out of the component or page
// we use animate presence component => whatever component or tag we want to out
// exit attribute -> the thing we want to animate out
