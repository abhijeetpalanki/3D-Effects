import { useState } from "react";

import { Card, Modal, GlassBusinessCard, YearChanger, Clock, Leaves, Loader, SocialMediaIcons, GlowingCube, Blob, Particles, Water, ImageSlider, Rocket, Wavy, Smiley, Box, Button, GlassCard, Shutter, Greeting } from "./component-imports";

import { businessCard, yearChanger, clock, leaves, loader, socialMediaIcons, glowingCube, blob, particles, bubbles, imageSlider, rocket, oxygen, smileyRatingBar, quoteBox, buttons, glassCard, shutter, brothers } from "./image-imports";

function App() {  
  const [openBusinessCardModal, setOpenBusinessCardModal] = useState(false); 
  const [openYearChangerModal, setOpenYearChangerModal] = useState(false); 
  const [openClockModal, setOpenClockModal] = useState(false); 
  const [openLeavesModal, setOpenLeavesModal] = useState(false); 
  const [openLoaderModal, setOpenLoaderModal] = useState(false); 
  const [openSocialMediaIconsModal, setOpenSocialMediaIconsModal] = useState(false); 
  const [openGlowingCubeModal, setOpenGlowingCubeModal] = useState(false); 
  const [openBlobModal, setOpenBlobModal] = useState(false); 
  const [openParticlesModal, setOpenParticlesModal] = useState(false); 
  const [openWaterModal, setOpenWaterModal] = useState(false); 
  const [openImageSliderModal, setOpenImageSliderModal] = useState(false); 
  const [openRocketModal, setOpenRocketModal] = useState(false); 
  const [openWaveModal, setOpenWaveModal] = useState(false); 
  const [openSmileyModal, setOpenSmileyModal] = useState(false); 
  const [openBoxModal, setOpenBoxModal] = useState(false); 
  const [openButtonModal, setOpenButtonModal] = useState(false); 
  const [openGlassCardModal, setOpenGlassCardModal] = useState(false); 
  const [openShutterModal, setOpenShutterModal] = useState(false); 
  const [openGreetingModal, setOpenGreetingModal] = useState(false); 

  return (
      <>
         <h1 data-text="Creativity" className="header">Creativity</h1>
         <div className="cards"> 
            <Card image={businessCard} title="Business Card" description="UI design that emphasises light or dark objects, placed on top of colourful backgrounds" setOpenModal={setOpenBusinessCardModal} />
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

            <Card image={particles} title="Glowing Particles" description="Random particles background animation effect" setOpenModal={setOpenParticlesModal} />
            {
               openParticlesModal && 
               <Modal component={<Particles />} closeModal={setOpenParticlesModal} />
            }

            <Card image={bubbles} title="Water Bubbles Background" description="Background animation with creative water bubbles" setOpenModal={setOpenWaterModal} />
            {
               openWaterModal && 
               <Modal component={<Water />} closeModal={setOpenWaterModal} />
            }

            <Card image={imageSlider} title="Image Slider" description="Also known as image carousels or slideshows are a convenient way to display multiple images, videos, or graphics" setOpenModal={setOpenImageSliderModal} />
            {
               openImageSliderModal && 
               <Modal component={<ImageSlider />} closeModal={setOpenImageSliderModal} />
            }

            <Card image={rocket} title="Rocket" description="Also known as image carousels or slideshows are a convenient way to display multiple images, videos, or graphics" setOpenModal={setOpenRocketModal} />
            {
               openRocketModal && 
               <Modal component={<Rocket />} closeModal={setOpenRocketModal} />
            }

            <Card image={oxygen} title="Oxygen Wave" description="A water wave with oxygen text hover effect" setOpenModal={setOpenWaveModal} />
            {
               openWaveModal && 
               <Modal component={<Wavy />} closeModal={setOpenWaveModal} />
            }

            <Card image={smileyRatingBar} title="Smiley Rating Bar" description="A simple rating bar which displays animated smileys as rating icon" setOpenModal={setOpenSmileyModal} />
            {
               openSmileyModal && 
               <Modal component={<Smiley />} closeModal={setOpenSmileyModal} />
            }

            <Card image={quoteBox} title="Quote Of The Day" description="Creative design with hover animation effect" setOpenModal={setOpenBoxModal} />
            {
               openBoxModal && 
               <Modal component={<Box />} closeModal={setOpenBoxModal} />
            }

            <Card image={buttons} title="Button Hover Effects" description="Various hover effects and animations for buttons" setOpenModal={setOpenButtonModal} />
            {
               openButtonModal && 
               <Modal component={<Button />} closeModal={setOpenButtonModal} />
            }

            <Card image={glassCard} title="Glowing Gradient Card" description="Various hover effects and animations for buttons" setOpenModal={setOpenGlassCardModal} />
            {
               openGlassCardModal && 
               <Modal component={<GlassCard />} closeModal={setOpenGlassCardModal} />
            }

            <Card image={shutter} title="Glass Shutter" description="Shutter effect based on progress bar" setOpenModal={setOpenShutterModal} />
            {
               openShutterModal && 
               <Modal component={<Shutter />} closeModal={setOpenShutterModal} />
            }

            <Card image={brothers} title="Greeting Card" description="Greeting - 3D foldable card on hover" setOpenModal={setOpenGreetingModal} />
            {
               openGreetingModal && 
               <Modal component={<Greeting />} closeModal={setOpenGreetingModal} />
            }
            </div>
      </>
  );
}

export default App;