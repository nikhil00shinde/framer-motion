import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			className="home container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.5, duration: 1.5 }}
		>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<motion.button animate={{}}>Create Your Pizza</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;

// Now we want to control the animation like iteration,delay,duration,easing function many more
// transition attribute => how animation transition from start to end

// ----> delay -> start after delay seconds
// ----> duration -> from initial to end total time (can be used when type is tween)

// It can also accept props that define which type of animation to use a Tween, Spring or Inertia
