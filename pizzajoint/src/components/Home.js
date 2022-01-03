import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="home container"
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
			}}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button animate={{}}>Create Your Pizza</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;

// initial attributes ==> that where animination start or from
// we use animinate property to control where the animination end or animinate to
