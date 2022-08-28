import React from "react";
import Particles from "../../Components/Particles";
import TypewriterEffect from "../../Components/Typewriter/Typewriter";

function Homepage() {
  return (
    <>
      <div>
        <Particles id="ts-particles" />
      </div>
      <div>
        <TypewriterEffect className="text-center" />
      </div>
    </>
  );
}

export default Homepage;
