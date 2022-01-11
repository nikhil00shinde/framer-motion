import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// create variant for extracting initial,transition , animate properties

const containerVariant = {
	hidden: {
		// basically for initail,we can write initial also
		x: "100vw",
		opacity: 0,
	},

	visible: {
		x: 0,
		opacity: 1,
		transition: { type: "spring", delay: 0.5 },
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};

const nextVariant = {
	hidden: {
		x: "-100vw",
	},
	visible: {
		x: 0,
		transition: { type: "spring", stiffness: 120 },
	},
};

const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255,255,255)",
		boxShadow: "0px 0px 8px rgb(255,255,255)",
		transition: {
			duration: 0.3,
			yoyo: Infinity,
		},
	},
};

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			className="base container"
			variants={containerVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div
					className="next"
					variants={nextVariant}
					// propogation of properties of initial , animate from parent motion to children motion
					//here no need to use initial and animate property because in parent it is already defined
				>
					<Link to="/toppings">
						<motion.button variants={buttonVariants} whileHover="hover">
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;

// hum isme variants padenge
// jo animate,initial,transition property nikaal sakte hain into a single object
// ae allow karte hain variant changes through the DOM
// they allow us to create timing relationship between parent motion and children motions using transition orchestration properties
// transition jha par lagate jha pr uski jaroorat hain
