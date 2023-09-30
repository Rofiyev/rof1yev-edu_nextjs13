"use client";

import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import earth_night_img from "@/assets/earth.jpg";
import earth_light_img from "@/assets/earth-light.jpg";
import { useColorMode } from "@chakra-ui/react";

export default function Earth() {
  const globeEl = useRef<any>(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 3;
      globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2 });
    }
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={270}
      height={270}
      globeImageUrl={
        colorMode === "dark" ? earth_night_img.src : earth_light_img.src
      }
      polygonAltitude={0.005}
      polygonsTransitionDuration={1000}
      backgroundColor={"rgba(0,0,0,0)"}
      animateIn={true}
    />
  );
}
