import { useState } from "react";

import { Card, Modal, Filter, GlassBusinessCard, YearChanger, Clock, Leaves, Loader, SocialMediaIcons, GlowingCube, Blob, Particles, Water, Rocket, Wavy, Smiley, Box, Button, GlassCard, Shutter, Greeting, Parallax, Calculator, Banner, Menu, Squares } from "./component-imports";

import { businessCard, yearChanger, clock, leaves, loader, socialMediaIcons, glowingCube, blob, particles, bubbles, rocket, oxygen, smileyRatingBar, quoteBox, buttons, glassCard, shutter, brothers, parallax, calculator, banner, menu, squares } from "./image-imports";

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
  const [openRocketModal, setOpenRocketModal] = useState(false); 
  const [openWaveModal, setOpenWaveModal] = useState(false); 
  const [openSmileyModal, setOpenSmileyModal] = useState(false); 
  const [openBoxModal, setOpenBoxModal] = useState(false); 
  const [openButtonModal, setOpenButtonModal] = useState(false); 
  const [openGlassCardModal, setOpenGlassCardModal] = useState(false); 
  const [openShutterModal, setOpenShutterModal] = useState(false); 
  const [openGreetingModal, setOpenGreetingModal] = useState(false); 
  const [openParallaxModal, setOpenParallaxModal] = useState(false); 
  const [openCalculatorModal, setOpenCalculatorModal] = useState(false); 
  const [openBannerModal, setOpenBannerModal] = useState(false); 
  const [openMenuModal, setOpenMenuModal] = useState(false); 
  const [openSquaresModal, setOpenSquaresModal] = useState(false); 

  return (
      <>
         <h1 data-text="Creativity" className="header">Creativity</h1>
         <Filter></Filter>
         <div className="cards"> 
            <Card image={businessCard} title="Business Card" description="UI design that emphasises light or dark objects, placed on top of colourful backgrounds" setOpenModal={setOpenBusinessCardModal} filterItem="glassmorphism" />
            {
               openBusinessCardModal && 
               <Modal component={<GlassBusinessCard />} closeModal={setOpenBusinessCardModal} />
            }

            <Card image={yearChanger} title="Happy New Year" description="Animation gradually changes from 2021 to 2022 on hover" setOpenModal={setOpenYearChangerModal} filterItem="text" />
            {
                  openYearChangerModal && 
                  <Modal component={<YearChanger />} closeModal={setOpenYearChangerModal} />
            }

            <Card image={clock} title="Neumorphism Clock" description="New visually pleasing cool trend in a design inspired by Skeuomorphism with a more minimal approach Neumorphism (New+Skeuomorphism)"  setOpenModal={setOpenClockModal} filterItem="dark" />
            {
                  openClockModal && 
                  <Modal component={<Clock />} closeModal={setOpenClockModal} />
            }

            <Card image={leaves} title="Falling Leaves" description="Emulate autumn leaves falling only using css animations" setOpenModal={setOpenLeavesModal} filterItem="abstract" />
            {
                  openLeavesModal && 
                  <Modal component={<Leaves />} closeModal={setOpenLeavesModal} />
            }

            <Card image={loader} title="Loader" description="Used for notifications that reassure users that the system is still handling their request" setOpenModal={setOpenLoaderModal} filterItem="glow" />
            {
                  openLoaderModal && 
                  <Modal component={<Loader />} closeModal={setOpenLoaderModal} />
            }

            <Card image={socialMediaIcons} title="3D Isometric Icons" description="Isometric design for shorthand symbols that link to company's profile on different networks" setOpenModal={setOpenSocialMediaIconsModal} filterItem="buttons" />
            {
                  openSocialMediaIconsModal && 
                  <Modal component={<SocialMediaIcons />} closeModal={setOpenSocialMediaIconsModal} />
            }
            
            <Card image={glowingCube} title="Glowing Cube" description="Ambient light 3D glowing cube with text animation effect" setOpenModal={setOpenGlowingCubeModal} filterItem="glow" />
            {
               openGlowingCubeModal && 
               <Modal component={<GlowingCube />} closeModal={setOpenGlowingCubeModal} />
            }

            <Card image={blob} title="Smooth Animated Blob" description="Blob animation effect using SVG" setOpenModal={setOpenBlobModal} filterItem="abstract" />
            {
               openBlobModal && 
               <Modal component={<Blob />} closeModal={setOpenBlobModal} />
            }

            <Card image={particles} title="Glowing Particles" description="Random particles background animation effect" setOpenModal={setOpenParticlesModal} filterItem="glow" />
            {
               openParticlesModal && 
               <Modal component={<Particles />} closeModal={setOpenParticlesModal} />
            }

            <Card image={bubbles} title="Water Bubbles Background" description="Background animation with creative water bubbles" setOpenModal={setOpenWaterModal} filterItem="environment" />
            {
               openWaterModal && 
               <Modal component={<Water />} closeModal={setOpenWaterModal} />
            }

            <Card image={rocket} title="Rocket" description="Also known as image carousels or slideshows are a convenient way to display multiple images, videos, or graphics" setOpenModal={setOpenRocketModal} filterItem="abstract" />
            {
               openRocketModal && 
               <Modal component={<Rocket />} closeModal={setOpenRocketModal} />
            }

            <Card image={oxygen} title="Oxygen Wave" description="A water wave with oxygen text hover effect" setOpenModal={setOpenWaveModal} filterItem="environment" />
            {
               openWaveModal && 
               <Modal component={<Wavy />} closeModal={setOpenWaveModal} />
            }

            <Card image={smileyRatingBar} title="Smiley Rating Bar" description="A simple rating bar which displays animated smileys as rating icon" setOpenModal={setOpenSmileyModal} filterItem="buttons" />
            {
               openSmileyModal && 
               <Modal component={<Smiley />} closeModal={setOpenSmileyModal} />
            }

            <Card image={quoteBox} title="Quote Of The Day" description="Creative design with hover animation effect" setOpenModal={setOpenBoxModal} filterItem="text" />
            {
               openBoxModal && 
               <Modal component={<Box />} closeModal={setOpenBoxModal} />
            }

            <Card image={buttons} title="Button Hover Effects" description="Various hover effects and animations for buttons" setOpenModal={setOpenButtonModal} filterItem="buttons" />
            {
               openButtonModal && 
               <Modal component={<Button />} closeModal={setOpenButtonModal} />
            }

            <Card image={glassCard} title="Glowing Gradient Card" description="Various hover effects and animations for buttons" setOpenModal={setOpenGlassCardModal} filterItem="glow" />
            {
               openGlassCardModal && 
               <Modal component={<GlassCard />} closeModal={setOpenGlassCardModal} />
            }

            <Card image={shutter} title="Glass Shutter" description="Shutter effect based on progress bar" setOpenModal={setOpenShutterModal} filterItem="glassmorphism" />
            {
               openShutterModal && 
               <Modal component={<Shutter />} closeModal={setOpenShutterModal} />
            }

            <Card image={brothers} title="Greeting Card" description="Greeting - 3D foldable card on hover" setOpenModal={setOpenGreetingModal} filterItem="text" />
            {
               openGreetingModal && 
               <Modal component={<Greeting />} closeModal={setOpenGreetingModal} />
            }

            <Card image={parallax} title="Parallax Effect" description="An effect where background images move past the camera more slowly than foreground images, creating an illusion of depth in a 2D scene of distance. (NOT SUPPORTED IN MOBILE BROWSERS)" setOpenModal={setOpenParallaxModal} filterItem="abstract" />
            {
               openParallaxModal && 
               <Modal component={<Parallax />} closeModal={setOpenParallaxModal} />
            }

            <Card image={calculator} title="Calculator" description="Basic functional calculator with animations" setOpenModal={setOpenCalculatorModal} filterItem="glassmorphism" />
            {
               openCalculatorModal && 
               <Modal component={<Calculator />} closeModal={setOpenCalculatorModal} />
            }

            <Card image={banner} title="Starry Night Banner" description="Banner with clouds and stars animation effect" setOpenModal={setOpenBannerModal} filterItem="environment" />
            {
               openBannerModal && 
               <Modal component={<Banner />} closeModal={setOpenBannerModal} />
            }

            <Card image={menu} title="Circular Menu" description="Animated circular menu displaying ring of choices with custom menu icons" setOpenModal={setOpenMenuModal} filterItem="glassmorphism" />
            {
               openMenuModal && 
               <Modal component={<Menu />} closeModal={setOpenMenuModal} />
            }

            <Card image={squares} title="Colorful Squares" description="Animated background animation which randomly creates colorful squares" setOpenModal={setOpenSquaresModal} filterItem="abstract" />
            {
               openSquaresModal && 
               <Modal component={<Squares />} closeModal={setOpenSquaresModal} />
            }
            </div>
      </>
  );
}

export default App;