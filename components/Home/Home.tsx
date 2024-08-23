"use client";

import Ads from "../Global/Ads";
import Blog from "./Blog/Blog";
import Download from "./Download/Download";
import Featured from "./featured/Featured";
import Hero from "./Hero/Hero";
import Offer from "./offer/Offer";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Ads />
      <Hero />
      <Featured />
      <Offer />
      <Services />
      <Download />
      <Testimonial />
      <Blog />
    </div>
  );
}
