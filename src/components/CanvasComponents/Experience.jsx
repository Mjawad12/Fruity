"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Float } from "@react-three/drei";
import Can, { Canred, Canpurple } from "./Can";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

function Experience({ fS, forward, mouse }) {
  const [rotate, setrotate] = useState(0);
  const can = useRef(null);

  useFrame(() => {
    if (forward) {
      if (fS === 2 && rotate > -3.1) {
        can.current.rotation.y -= 0.08;
        setrotate((prev) => (prev -= 0.08));
      } else if (fS === 3 && rotate > -3.4 - 2.7) {
        can.current.rotation.y -= 0.08;
        setrotate((prev) => (prev -= 0.08));
      }
    } else {
      if (fS === 2 && rotate < -3.1) {
        can.current.rotation.y += 0.08;
        setrotate((prev) => (prev += 0.08));
      } else if (fS === 1 && rotate < 0) {
        can.current.rotation.y += 0.08;
        setrotate((prev) => (prev += 0.08));
      }
    }
  });

  return (
    <>
      <pointLight position={[-1, 1, 1]} intensity={3} />
      <ambientLight intensity={1} />
      <spotLight intensity={2.5} position={[0, 0, 2]} />
      <Float speed={2}>
        <motion.group
          ref={can}
          animate={{
            x: mouse.x * -0.1,
            y: mouse.y * 0.1,
            transition: { duration: 0.2, type: "spring" },
          }}
          scale={1.15}
        >
          <Can fS={fS} />
          <Canred fS={fS} />
          <Canpurple fS={fS} />
        </motion.group>
      </Float>
    </>
  );
}

export default Experience;
