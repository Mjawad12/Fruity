"use client";

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

export default function Can(props) {
  const [scale, setscale] = useState(0);
  const group = useRef();
  const { nodes, materials } = useGLTF("./Assests/CAN_texture.glb");

  materials["Material.003"].metalness = 0.2;
  materials.Top.metalness = "0.8";
  useEffect(() => {
    if (props.fS !== 1) {
      if (scale !== 0) {
        setTimeout(() => {
          setscale(0);
        }, [1000]);
      }
    } else {
      setscale(0.306);
    }
  }, [props.fS]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.8, 0]}
      rotation={[0, 0, 0]}
    >
      <group name="Scene">
        <group name="Pepsi" scale={scale}>
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.Top}
          />
        </group>
        <group
          name="Camera_Turntable_Parent"
          position={[0.018, 0.273, -0.011]}
          rotation={[0, -0.912, 0]}
          scale={0.911}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Assests/CAN_texture.glb");

export function Canred(props) {
  // const [scale, setscale] = useState(0);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./Assests/CAN_texture_Red2.glb"
  );
  materials.Body.metalness = "0.5";
  materials.Top.metalness = "0.8";

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.8, -0.02]}
      rotation={[0, 1.6, 0]}
    >
      <group name="Scene">
        <group name="Pepsi" scale={0.306}>
          <mesh
            name="Cylinder001"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cylinder001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.Top}
          />
        </group>
        <group
          name="Camera_Turntable_Parent"
          position={[0.018, 0.273, -0.011]}
          rotation={[0, -0.912, 0]}
          scale={0.911}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Assests/CAN_texture_Red2.glb");

export function Canpurple(props) {
  const [scale, setscale] = useState(0);
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./Assests//CAN_texture_Purple.glb"
  );
  materials.Body.metalness = "0.5";
  materials["Top.001"].metalness = "0.8";

  useEffect(() => {
    if (props.fS === 2 || props.fS === 3) {
      if (scale !== 0.306) {
        setTimeout(() => {
          setscale(0.306);
        }, [1000]);
      }
    } else if (props.fS === 1) {
      setscale(0);
    }
  }, [props.fS]);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.8, 0.005]}
      rotation={[0, 0, 0]}
    >
      <group name="Scene">
        <motion.group
          name="Pepsi"
          rotation={[0.007, -0.025, 0.005]}
          scale={scale}
        >
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials.Body}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["Top.001"]}
          />
        </motion.group>
        <group
          name="Camera_Turntable_Parent"
          position={[0.018, 0.273, -0.011]}
          rotation={[0, -0.912, 0]}
          scale={0.911}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./Assests//CAN_texture_Purple.glb");
