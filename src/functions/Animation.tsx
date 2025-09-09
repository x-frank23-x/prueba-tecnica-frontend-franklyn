import { motion } from "framer-motion";

export default function Animation() {
  return (
    <div className="fixed w-screen h-screen overflow-hidden bg-white">
      <motion.div
        initial={{
          scale: 0,
          x: "100%",
          y: "100%",
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: 100,
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,  
        }}
        className="absolute right-[-400px] top-1/2 w-40 h-40 rounded-full bg-white"
        style={{
          boxShadow: "0 0 120px 10px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}
