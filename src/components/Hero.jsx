"use client";
import React, { useEffect, useState } from "react";
import MainCanvas from "./CanvasComponents/MainCanvas";
import Carasoulbtns from "./Carasoulbtns";
import { motion, useAnimate } from "framer-motion";

function hero() {
  const [img1, animateimg1] = useAnimate();
  const [img2, animateimg2] = useAnimate();
  const [img3, animateimg3] = useAnimate();
  const [Section1, animateSection1] = useAnimate();
  const [Section2, animateSection2] = useAnimate();
  const [Section3, animateSection3] = useAnimate();
  const [fS, setfS] = useState(1);
  const [forward, setForward] = useState(true);
  const [mouse, setmouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerWidth;
    setmouse({
      x,
      y,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const Animfunc = async () => {
    if (fS === 2) {
      animateimg1(
        img1.current,
        { y: ["-5%", "100%"] },
        { duration: 1, ease: "backInOut" }
      );
      animateSection1(Section1.current, { x: "-100%" }, { duration: "1" });
      animateSection2(Section2.current, { x: "0%" }, { duration: "1" });
      animateimg2(
        img2.current,
        { y: "0%" },
        { duration: 1, ease: "backInOut" }
      );
    } else if (fS === 3) {
      animateimg2(
        img2.current,
        { y: ["-5%", "100%"] },
        { duration: 1, ease: "backInOut" }
      );
      animateSection2(Section2.current, { x: "-100%" }, { duration: "1" });
      animateSection3(Section3.current, { x: "0%" }, { duration: "1" });
      animateimg3(
        img3.current,
        { y: "0%" },
        { duration: 1, ease: "backInOut" }
      );
    }
  };

  const AnimfuncPrevious = async () => {
    if (fS === 2) {
      animateimg3(
        img3.current,
        { y: ["-5%", "100%"] },
        { duration: 1, ease: "backInOut" }
      );
      animateSection3(Section3.current, { x: "100%" }, { duration: "1" });
      animateSection2(Section2.current, { x: "0%" }, { duration: "1" });
      animateimg2(img2.current, { y: 0 }, { duration: 1, ease: "backInOut" });
    } else if (fS === 1) {
      animateimg2(
        img2.current,
        { y: ["-5%", "100%"] },
        { duration: 1, ease: "backInOut" }
      );
      animateSection2(Section2.current, { x: "100%" }, { duration: "1" });
      animateSection1(Section1.current, { x: "0%" }, { duration: "1" });
      animateimg1(img1.current, { y: 0 }, { duration: 1, ease: "backInOut" });
    }
  };

  useEffect(() => {
    if (forward) {
      Animfunc();
    } else {
      AnimfuncPrevious();
    }
  }, [fS]);

  return (
    <div className="absolute inset-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Carasoulbtns fS={fS} setfS={setfS} setForward={setForward} />
      <div className="flex items-start w-max">
        <div>
          <Slide title={"Pear"} Section={Section1} clr={"#C9E78A"} />
          <ImgDiv
            Imgs={[
              "./Assests/Amrod/Amrod 1.webp",
              "./Assests/Amrod/Amrod 2.webp",
              "./Assests/Amrod/Amrod 1.webp",
              "./Assests/Amrod/Amrod 2.webp",
            ]}
            imgRef={img1}
          />
        </div>
        <div>
          <Slide
            title={"Apple"}
            Section={Section2}
            clr={"#FFA3BE"}
            initial={{
              x: "100%",
            }}
          />
          <ImgDiv
            Imgs={[
              "./Assests/Apples/Apple1.webp",
              "./Assests/Apples/Apple2.webp",
              "./Assests/Apples/Apple1.webp",
              "./Assests/Apples/Apple2.webp",
            ]}
            imgRef={img2}
            initial={{
              y: "100%",
            }}
          />
        </div>
        <div>
          <Slide
            Section={Section3}
            title="Exotio"
            clr={"#C1BEFF"}
            initial={{
              x: "100%",
            }}
          />
          <ImgDiv
            Imgs={[
              "./Assests/Pipe/pipe 1.webp",
              "./Assests/Pipe/pipe 2.webp",
              "./Assests/Pipe/pipe 1.webp",
              "./Assests/Pipe/pipe 2.webp",
            ]}
            imgRef={img3}
            initial={{
              y: "100%",
            }}
          />
        </div>
      </div>
      <div className="w-full Ph">
        <Suspense fallback={<img src="./Assests/Can.webp" alt="can" />}>
          <MainCanvas fS={fS} forward={forward} mouse={mouse} />
        </Suspense>
      </div>
      <div className="btnDiv mb-8">
        <button className="btn-p font-primary font-bold">Shop Taste</button>
      </div>
    </div>
  );
}

export default hero;

const Slide = ({ title, Section, clr, initial }) => {
  return (
    <>
      <motion.div
        ref={Section}
        style={{
          backgroundColor: `${clr}`,
        }}
        initial={initial}
        className={`w-full absolute inset-0 h-full overflow-hidden`}
      >
        <div className="mainHero w-full  relative h-screen mt-8 ">
          <h2 className="z-20 relative">{title}</h2>
        </div>
      </motion.div>
    </>
  );
};

const ImgDiv = ({ Imgs, imgRef, initial }) => {
  const [img1, img2, img3, img4] = Imgs;

  return (
    <>
      <motion.div
        ref={imgRef}
        className="absolute w-full h-screen inset-0 images "
        initial={initial}
      >
        <motion.img src={img1} alt={img1.slice(0, 9)} />
        <motion.img src={img2} alt={img1.slice(0, 9)} />
        <motion.img src={img3} alt={img1.slice(0, 9)} />
        <motion.img src={img4} alt={img1.slice(0, 9)} />
      </motion.div>
    </>
  );
};
