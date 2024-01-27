"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";

function MainCanvas({ fS, forward, mouse }) {
  return (
    <Canvas
      className="min-h-screen "
      camera={{
        position: [0, 1, 5],
        fov: 30,
      }}
    >
      <Experience fS={fS} forward={forward} mouse={mouse} />
    </Canvas>
  );
}

export default MainCanvas;
