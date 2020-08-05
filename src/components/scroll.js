import React, { useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Scroll(props) {
  const animation = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const defaultVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.33, 1, 0.68, 1]}},
    hidden: { opacity: 0, y: 100 }
  }

  return (
    <>
      <motion.div
        ref={ref}
        animate={animation}
        initial="hidden"
        variants={defaultVariants}
      >
       {props.children}
      </motion.div>
    </>
  );
}

export default Scroll