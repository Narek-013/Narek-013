import { useEffect, useRef } from "react";
import { gsap } from "gsap"; // Use gsap from GSAP 3
import * as THREE from "three";
import { MathUtils } from "three";

const RevealEffect = () => {
  const backRef = useRef(null);
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const TMath = MathUtils;

  const conf = {
    color: 0x000000,
    objectWidth: 12,
    objectThickness: 3,
    ambientColor: 0xffffff,
    light1Color: 0xffffff,
    shadow: false,
    perspective: 75,
    cameraZ: 75,
  };

  let objects = [];
  let material;
  let nx, ny;

  useEffect(() => {
    backRef.current.style.display = "none";
    
    rendererRef.current = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(rendererRef.current.domElement);

    cameraRef.current = new THREE.PerspectiveCamera(conf.perspective, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current.position.z = conf.cameraZ;

    sceneRef.current = new THREE.Scene();
    geometryRef.current = new THREE.BoxGeometry(conf.objectWidth, conf.objectWidth, conf.objectThickness);

    initScene();
    window.addEventListener("resize", onResize);

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const initScene = () => {
    onResize();
    sceneRef.current = new THREE.Scene();
    initLights();
    initObjects();
  };

  const initLights = () => {
    sceneRef.current.add(new THREE.AmbientLight(conf.ambientColor));
    let light = new THREE.PointLight(0xffffff);
    light.position.z = 100;
    sceneRef.current.add(light);
  };

  const initObjects = () => {
    objects = [];
    nx = Math.round(window.innerWidth / conf.objectWidth) + 1;
    ny = Math.round(window.innerHeight / conf.objectWidth) + 1;
    let mesh, x, y;

    for (let i = 0; i < nx; i++) {
      for (let j = 0; j < ny; j++) {
        material = new THREE.MeshLambertMaterial({
          color: conf.color,
          transparent: true,
          opacity: 1,
        });
        mesh = new THREE.Mesh(geometryRef.current, material);
        x = -window.innerWidth / 2 + i * conf.objectWidth;
        y = -window.innerHeight / 2 + j * conf.objectWidth;
        mesh.position.set(x, y, 0);
        objects.push(mesh);
        sceneRef.current.add(mesh);
      }
    }
    document.body.classList.add("loaded");
    startAnim();
  };

  const startAnim = () => {
    document.body.classList.remove("revealed");
    objects.forEach((mesh) => {
      mesh.rotation.set(0, 0, 0);
      mesh.material.opacity = 1;
      mesh.position.z = 0;
      let delay = TMath.randFloat(1, 2);
      let rx = TMath.randFloatSpread(2 * Math.PI);
      let ry = TMath.randFloatSpread(2 * Math.PI);
      let rz = TMath.randFloatSpread(2 * Math.PI);
      gsap.to(mesh.rotation, { x: rx, y: ry, z: rz, duration: 2, delay: delay });
      gsap.to(mesh.position, { z: 80, duration: 2, delay: delay + 0.5, ease: "power1.out" });
      gsap.to(mesh.material, { opacity: 0, duration: 2, delay: delay + 0.5 });
    });

    // Fade out and hide the heading
    gsap.to("#heading", {
      opacity: 0,
      duration: 2,
      onComplete: () => {
        document.getElementById("heading").style.display = "none"; // Hide after animation
      },
    });

    setTimeout(() => {
      document.body.classList.add("revealed");
    }, 4500);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    rendererRef.current.render(sceneRef.current, cameraRef.current);
  };

  const onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(width, height);
  };



  return (
    <>
      <div className="back" ref={backRef}></div>
      <h1 id="heading">Welcome</h1>
      <canvas ref={canvasRef} id="reveal-effect"></canvas>
    </>
  );
};

export default RevealEffect;
