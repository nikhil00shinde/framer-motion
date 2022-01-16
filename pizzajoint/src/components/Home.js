import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: "0px 0px 8px rgb(255,255,255)",
		boxShadow: "0px 0px 8px rgb(255,255,255)",
		// adding yoyo
		transition: {
			// how many keyframes
			// yoyo: 10,
			duration: 0.3,
			// always repeated n never stops
			yoyo: Infinity,
		},
	},
};

const containerVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1.5, duration: 1.5 },
	},
	exit: {
		x: "-100vw",
		transition: { ease: "easeInOut" },
	},
};

const Home = () => {
	return (
		<motion.div
			className="home container"
			variants={containerVariant}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button variants={buttonVariants} whileHover="hover">
					Create Your Pizza
				</motion.button>
			</Link>
			<Loader />
		</motion.div>
	);
};

export default Home;

// Repeating animation
// transition property -> yoyo (allow a animation to rep over n over)
// yoyo property -> to infinitly repeat an animation

// keyframes -> to do several step in an animation
// [0,-20,20,-20,20,0]
// ex:   // visible: {
// 	x: [0, -20, 20, -20, 20, 0],
// 	transition: { delay: 2 },
// },
