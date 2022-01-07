import { useState } from "react";

import { Card, Modal, GlassBusinessCard, YearChanger, Clock, Leaves, Loader, SocialMediaIcons, Background, GlowingCube, Blob } from "./component-imports";

import { businessCard, yearChanger, clock, leaves, loader, socialMediaIcons, animatedBackground, glowingCube, blob } from "./image-imports";

function App() {  
  const [openBusinessCardModal, setOpenBusinessCardModal] = useState(false); 
  const [openYearChangerModal, setOpenYearChangerModal] = useState(false); 
  const [openClockModal, setOpenClockModal] = useState(false); 
  const [openLeavesModal, setOpenLeavesModal] = useState(false); 
  const [openLoaderModal, setOpenLoaderModal] = useState(false); 
  const [openSocialMediaIconsModal, setOpenSocialMediaIconsModal] = useState(false); 
  const [openAnimatedBackgroundModal, setOpenAnimatedBackgroundModal] = useState(false); 
  const [openGlowingCubeModal, setOpenGlowingCubeModal] = useState(false); 
  const [openBlobModal, setOpenBlobModal] = useState(false); 

  return (
    <>
      <h1 className="header">3d effects</h1>      

      <div className="cards"> 
        <Card image={businessCard} title="Glassmorphism Business Card" description="UI design that emphasises light or dark objects, placed on top of colourful backgrounds" setOpenModal={setOpenBusinessCardModal} />
        {
          openBusinessCardModal && 
          <Modal component={<GlassBusinessCard />} closeModal={setOpenBusinessCardModal} />
        }

         <Card image={yearChanger} title="Happy New Year" description="Animation gradually changes from 2021 to 2022 on hover" setOpenModal={setOpenYearChangerModal} />
        {
            openYearChangerModal && 
            <Modal component={<YearChanger />} closeModal={setOpenYearChangerModal} />
        }

        <Card image={clock} title="Neumorphism Clock" description="New visually pleasing cool trend in a design inspired by Skeuomorphism with a more minimal approach Neumorphism (New+Skeuomorphism)"  setOpenModal={setOpenClockModal} />
        {
            openClockModal && 
            <Modal component={<Clock />} closeModal={setOpenClockModal} />
        }

        <Card image={leaves} title="Falling Leaves" description="Emulate autumn leaves falling only using css animations" setOpenModal={setOpenLeavesModal} />
        {
            openLeavesModal && 
            <Modal component={<Leaves />} closeModal={setOpenLeavesModal} />
        }

        <Card image={loader} title="Loader" description="Used for notifications that reassure users that the system is still handling their request" setOpenModal={setOpenLoaderModal} />
        {
            openLoaderModal && 
            <Modal component={<Loader />} closeModal={setOpenLoaderModal} />
        }

        <Card image={socialMediaIcons} title="3D Isometric Icons" description="Isometric design for shorthand symbols that link to company's profile on different networks" setOpenModal={setOpenSocialMediaIconsModal} />
        {
            openSocialMediaIconsModal && 
            <Modal component={<SocialMediaIcons />} closeModal={setOpenSocialMediaIconsModal} />
        }

        <Card image={animatedBackground} title="Animated Background" description="Objects floating in background animation which gradually changes from one style to another" setOpenModal={setOpenAnimatedBackgroundModal} />
        {
            openAnimatedBackgroundModal && 
            <Modal component={<Background />} closeModal={setOpenAnimatedBackgroundModal} />
        }
        
        <Card image={glowingCube} title="Glowing Cube" description="Ambient light 3D glowing cube with text animation effect" setOpenModal={setOpenGlowingCubeModal} />
        {
           openGlowingCubeModal && 
           <Modal component={<GlowingCube />} closeModal={setOpenGlowingCubeModal} />
        }

        <Card image={blob} title="Smooth Animated Blob" description="Blob animation effect using SVG" setOpenModal={setOpenBlobModal} />
        {
           openBlobModal && 
           <Modal component={<Blob />} closeModal={setOpenBlobModal} />
        }
      </div>
    </>
  );
}

export default App;