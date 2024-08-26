import PropTypes from 'prop-types';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const Reveal = ({ children, width="fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
           mainControls.start("visible");  
           slideControls.start("visible");  
        }
    }, [isInView, mainControls, slideControls])

    return (
        <div ref={ref}  style={{ position: "relative", width, overflow: "hidden"}}>
            <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.6, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div 
                variants={{
                    hidden: { left: 0},
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.6, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#e5e7eb",
                    zIndex: 20,
                }}
            />
        </div>
    )
}

Reveal.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.node
  };
