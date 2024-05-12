"use client";
import React, { useEffect, useState } from "react";
import { HeroImage } from "../admin/heroimage/heroimage";

const LandingImage = () => {
  const [heroImage, setHeroImage] = useState({
    title: "",
    image: "",
    updatedAt: "",
  });

  async function fetchHeroImage() {
    try {
      const response = await fetch("/lib/api/heroimage");
      if (!response.ok) {
        throw new Error(`API call failed with status ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setHeroImage(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchHeroImage();
  }, []);
  return (
    <>
      {heroImage.image && <HeroImage image={heroImage.image} />}
      {!heroImage.image && (
        <p className="font-bold text-2xl">Preview image here</p>
      )}
    </>
  );
};

export default LandingImage;
