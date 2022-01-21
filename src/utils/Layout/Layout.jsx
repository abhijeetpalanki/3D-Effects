import React, { useState } from "react";
import {
  Card,
  Modal,
  Filter,
  BusinessCard,
  YearChanger,
  Clock,
  Leaves,
  Loader,
  SocialMediaIcons,
  GlowingCube,
  Blob,
  Particles,
  Water,
  Rocket,
  Wavy,
  Smiley,
  Box,
  Button,
  GlassCard,
  Shutter,
  Greeting,
  Parallax,
  Calculator,
  Banner,
  CircularMenu,
  Squares,
  FontAwesomeIcons,
  Checkbox,
  Climb,
  Shapes,
  TiltCard,
  SkillsBar,
  DropdownMenu,
  MagicMenu,
  Rain,
  Balancer,
  BatteryIndicator,
  RankList,
  InkSplash,
  Slider,
  DynamicCalendar,
  Ocean,
  ColorPalette,
  NavbarMenu,
} from "../../component-imports";

const Layout = ({ theme }) => {
  const [openBusinessCardModal, setOpenBusinessCardModal] = useState(false);
  const [openYearChangerModal, setOpenYearChangerModal] = useState(false);
  const [openClockModal, setOpenClockModal] = useState(false);
  const [openLeavesModal, setOpenLeavesModal] = useState(false);
  const [openLoaderModal, setOpenLoaderModal] = useState(false);
  const [openSocialMediaIconsModal, setOpenSocialMediaIconsModal] =
    useState(false);
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
  const [openCircularMenuModal, setOpenCircularMenuModal] = useState(false);
  const [openSquaresModal, setOpenSquaresModal] = useState(false);
  const [openFontAwesomeIconsModal, setOpenFontAwesomeIconsModal] =
    useState(false);
  const [openCheckboxModal, setOpenCheckboxModal] = useState(false);
  const [openClimbModal, setOpenClimbModal] = useState(false);
  const [openShapesModal, setOpenShapesModal] = useState(false);
  const [openTiltCardModal, setOpenTiltCardModal] = useState(false);
  const [openSkillsBarModal, setOpenSkillsBarModal] = useState(false);
  const [openDropdownMenuModal, setOpenDropdownMenuModal] = useState(false);
  const [openMagicMenuModal, setOpenMagicMenuModal] = useState(false);
  const [openRainModal, setOpenRainModal] = useState(false);
  const [openBalancerModal, setOpenBalancerModal] = useState(false);
  const [openBatteryIndicatorModal, setOpenBatteryIndicatorModal] =
    useState(false);
  const [openRankListModal, setOpenRankListModal] = useState(false);
  const [openInkSplashModal, setOpenInkSplashModal] = useState(false);
  const [openSliderModal, setOpenSliderModal] = useState(false);
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const [openOceanModal, setOpenOceanModal] = useState(false);
  const [openColorPaletteModal, setOpenColorPaletteModal] = useState(false);
  const [openNavbarMenuModal, setOpenNavbarMenuModal] = useState(false);

  return (
    <div className={theme.color === "white" ? "body-light" : "body-dark"}>
      <Filter theme={theme}></Filter>

      <div className="cards">
        <Card
          title="Business"
          description="A small card printed with one's name, email address, and contact information."
          setOpenModal={setOpenBusinessCardModal}
          filterItem="cards"
          serialNo={1}
          theme={theme}
        />
        {openBusinessCardModal && (
          <Modal
            component={<BusinessCard />}
            closeModal={setOpenBusinessCardModal}
          />
        )}

        <Card
          title="Happy New Year"
          description="Animation gradually changes from 2021 to 2022 on hover"
          setOpenModal={setOpenYearChangerModal}
          filterItem="buttons"
          serialNo={2}
          theme={theme}
        />
        {openYearChangerModal && (
          <Modal
            component={<YearChanger />}
            closeModal={setOpenYearChangerModal}
          />
        )}

        <Card
          title="Neumorphism Clock"
          description="New visually pleasing cool trend in a design inspired by Skeuomorphism with a more minimal approach Neumorphism (New+Skeuomorphism)"
          setOpenModal={setOpenClockModal}
          filterItem="glass"
          serialNo={3}
          theme={theme}
        />
        {openClockModal && (
          <Modal component={<Clock />} closeModal={setOpenClockModal} />
        )}

        <Card
          title="Falling Leaves"
          description="Emulate autumn leaves falling only using css animations"
          setOpenModal={setOpenLeavesModal}
          filterItem="abstract"
          serialNo={4}
          theme={theme}
        />
        {openLeavesModal && (
          <Modal component={<Leaves />} closeModal={setOpenLeavesModal} />
        )}

        <Card
          title="Loader"
          description="Used for notifications that reassure users that the system is still handling their request"
          setOpenModal={setOpenLoaderModal}
          filterItem="abstract"
          serialNo={5}
          theme={theme}
        />
        {openLoaderModal && (
          <Modal component={<Loader />} closeModal={setOpenLoaderModal} />
        )}

        <Card
          title="3D Isometric Icons"
          description="Isometric design for shorthand symbols that link to company's profile on different networks"
          setOpenModal={setOpenSocialMediaIconsModal}
          filterItem="icons"
          serialNo={6}
          theme={theme}
        />
        {openSocialMediaIconsModal && (
          <Modal
            component={<SocialMediaIcons />}
            closeModal={setOpenSocialMediaIconsModal}
          />
        )}

        <Card
          title="Glowing Cube"
          description="Ambient light 3D glowing cube with text animation effect"
          setOpenModal={setOpenGlowingCubeModal}
          filterItem="abstract"
          serialNo={7}
          theme={theme}
        />
        {openGlowingCubeModal && (
          <Modal
            component={<GlowingCube />}
            closeModal={setOpenGlowingCubeModal}
          />
        )}

        <Card
          title="Smooth Animated Blob"
          description="Blob animation effect using SVG"
          setOpenModal={setOpenBlobModal}
          filterItem="abstract"
          serialNo={8}
          theme={theme}
        />
        {openBlobModal && (
          <Modal component={<Blob />} closeModal={setOpenBlobModal} />
        )}

        <Card
          title="Glowing Particles"
          description="Random particles background animation effect"
          setOpenModal={setOpenParticlesModal}
          filterItem="nature"
          serialNo={9}
          theme={theme}
        />
        {openParticlesModal && (
          <Modal component={<Particles />} closeModal={setOpenParticlesModal} />
        )}

        <Card
          title="Water Bubbles Background"
          description="Background animation with creative water bubbles"
          setOpenModal={setOpenWaterModal}
          filterItem="nature"
          serialNo={10}
          theme={theme}
        />
        {openWaterModal && (
          <Modal component={<Water />} closeModal={setOpenWaterModal} />
        )}

        <Card
          title="Rocket"
          description="Also known as image carousels or slideshows are a convenient way to display multiple images, videos, or graphics"
          setOpenModal={setOpenRocketModal}
          filterItem="abstract"
          serialNo={11}
          theme={theme}
        />
        {openRocketModal && (
          <Modal component={<Rocket />} closeModal={setOpenRocketModal} />
        )}

        <Card
          title="Oxygen Wave"
          description="A water wave with oxygen text hover effect"
          setOpenModal={setOpenWaveModal}
          filterItem="nature"
          serialNo={12}
          theme={theme}
        />
        {openWaveModal && (
          <Modal component={<Wavy />} closeModal={setOpenWaveModal} />
        )}

        <Card
          title="Smiley Rating Bar"
          description="A simple rating bar which displays animated smileys as rating icon"
          setOpenModal={setOpenSmileyModal}
          filterItem="buttons"
          serialNo={13}
          theme={theme}
        />
        {openSmileyModal && (
          <Modal component={<Smiley />} closeModal={setOpenSmileyModal} />
        )}

        <Card
          title="Quote Of The Day"
          description="Creative design with hover animation effect"
          setOpenModal={setOpenBoxModal}
          filterItem="cards"
          serialNo={14}
          theme={theme}
        />
        {openBoxModal && (
          <Modal component={<Box />} closeModal={setOpenBoxModal} />
        )}

        <Card
          title="Button Hover Effects"
          description="Various hover effects and animations for buttons"
          setOpenModal={setOpenButtonModal}
          filterItem="buttons"
          serialNo={15}
          theme={theme}
        />
        {openButtonModal && (
          <Modal component={<Button />} closeModal={setOpenButtonModal} />
        )}

        <Card
          title="Glowing Gradient Card"
          description="Various hover effects and animations for buttons"
          setOpenModal={setOpenGlassCardModal}
          filterItem="cards"
          serialNo={16}
          theme={theme}
        />
        {openGlassCardModal && (
          <Modal component={<GlassCard />} closeModal={setOpenGlassCardModal} />
        )}

        <Card
          title="Glass Shutter"
          description="Shutter effect based on progress bar"
          setOpenModal={setOpenShutterModal}
          filterItem="glass"
          serialNo={17}
          theme={theme}
        />
        {openShutterModal && (
          <Modal component={<Shutter />} closeModal={setOpenShutterModal} />
        )}

        <Card
          title="Greeting Card"
          description="Greeting - 3D foldable card on hover"
          setOpenModal={setOpenGreetingModal}
          filterItem="cards"
          serialNo={18}
          theme={theme}
        />
        {openGreetingModal && (
          <Modal component={<Greeting />} closeModal={setOpenGreetingModal} />
        )}

        <Card
          title="Parallax Effect"
          description="An effect where background images move past the camera more slowly than foreground images, creating an illusion of depth in a 2D scene of distance. (NOT SUPPORTED IN MOBILE BROWSERS)"
          setOpenModal={setOpenParallaxModal}
          filterItem="abstract"
          serialNo={19}
          theme={theme}
        />
        {openParallaxModal && (
          <Modal component={<Parallax />} closeModal={setOpenParallaxModal} />
        )}

        <Card
          title="Calculator"
          description="Basic functional calculator with animations"
          setOpenModal={setOpenCalculatorModal}
          filterItem="glass"
          serialNo={20}
          theme={theme}
        />
        {openCalculatorModal && (
          <Modal
            component={<Calculator />}
            closeModal={setOpenCalculatorModal}
          />
        )}

        <Card
          title="Starry Night Banner"
          description="Banner with clouds and stars animation effect"
          setOpenModal={setOpenBannerModal}
          filterItem="nature"
          serialNo={21}
          theme={theme}
        />
        {openBannerModal && (
          <Modal component={<Banner />} closeModal={setOpenBannerModal} />
        )}

        <Card
          title="Circular"
          description="Animated circular menu displaying ring of choices with custom menu icons"
          setOpenModal={setOpenCircularMenuModal}
          filterItem="menu"
          serialNo={22}
          theme={theme}
        />
        {openCircularMenuModal && (
          <Modal
            component={<CircularMenu />}
            closeModal={setOpenCircularMenuModal}
          />
        )}

        <Card
          title="Colorful Squares"
          description="Animated background animation which randomly creates colorful squares"
          setOpenModal={setOpenSquaresModal}
          filterItem="abstract"
          serialNo={23}
          theme={theme}
        />
        {openSquaresModal && (
          <Modal component={<Squares />} closeModal={setOpenSquaresModal} />
        )}

        <Card
          title="Font Awesome Icons"
          description="Animated background animation using font-awesome icons"
          setOpenModal={setOpenFontAwesomeIconsModal}
          filterItem="icons"
          serialNo={24}
          theme={theme}
        />
        {openFontAwesomeIconsModal && (
          <Modal
            component={<FontAwesomeIcons />}
            closeModal={setOpenFontAwesomeIconsModal}
          />
        )}

        <Card
          title="Checkbox UI"
          description="Animated checkbox UI animation"
          setOpenModal={setOpenCheckboxModal}
          filterItem="buttons"
          serialNo={25}
          theme={theme}
        />
        {openCheckboxModal && (
          <Modal component={<Checkbox />} closeModal={setOpenCheckboxModal} />
        )}

        <Card
          title="Climb"
          description="A box climbing up the hill animation"
          setOpenModal={setOpenClimbModal}
          filterItem="abstract"
          serialNo={26}
          theme={theme}
        />
        {openClimbModal && (
          <Modal component={<Climb />} closeModal={setOpenClimbModal} />
        )}

        <Card
          title="Shapes"
          description="A set of square and circlular shaped objects floating around"
          setOpenModal={setOpenShapesModal}
          filterItem="abstract"
          serialNo={27}
          theme={theme}
        />
        {openShapesModal && (
          <Modal component={<Shapes />} closeModal={setOpenShapesModal} />
        )}

        <Card
          title="Mousemove Card"
          description="3D card with parallax and tilt effect on mousemove"
          setOpenModal={setOpenTiltCardModal}
          filterItem="cards"
          serialNo={28}
          theme={theme}
        />
        {openTiltCardModal && (
          <Modal component={<TiltCard />} closeModal={setOpenTiltCardModal} />
        )}

        <Card
          title="5 Star Skills Rating Bar"
          description="A scale used to display skills in one's technology stack"
          setOpenModal={setOpenSkillsBarModal}
          filterItem="buttons"
          serialNo={29}
          theme={theme}
        />
        {openSkillsBarModal && (
          <Modal component={<SkillsBar />} closeModal={setOpenSkillsBarModal} />
        )}

        <Card
          title="Dropdown"
          description="A list of choices when an user clicks on the menu's title"
          setOpenModal={setOpenDropdownMenuModal}
          filterItem="menu"
          serialNo={30}
          theme={theme}
        />
        {openDropdownMenuModal && (
          <Modal
            component={<DropdownMenu />}
            closeModal={setOpenDropdownMenuModal}
          />
        )}

        <Card
          title="Magic Indicator"
          description="Animated list of options presented to an user that will reveal current page on the website"
          setOpenModal={setOpenMagicMenuModal}
          filterItem="menu"
          serialNo={31}
          theme={theme}
        />
        {openMagicMenuModal && (
          <Modal component={<MagicMenu />} closeModal={setOpenMagicMenuModal} />
        )}

        <Card
          title="Colorful Rain"
          description="Animated rain with randomized color"
          setOpenModal={setOpenRainModal}
          filterItem="abstract"
          serialNo={32}
          theme={theme}
        />
        {openRainModal && (
          <Modal component={<Rain />} closeModal={setOpenRainModal} />
        )}

        <Card
          title="Balancer"
          description="Physics animations using basic CSS"
          setOpenModal={setOpenBalancerModal}
          filterItem="nature"
          serialNo={33}
          theme={theme}
        />
        {openBalancerModal && (
          <Modal component={<Balancer />} closeModal={setOpenBalancerModal} />
        )}

        <Card
          title="Battery Indicator"
          description="A visual indication of the battery's state of charge with mousemove tilt effect"
          setOpenModal={setOpenBatteryIndicatorModal}
          filterItem="glass"
          serialNo={34}
          theme={theme}
        />
        {openBatteryIndicatorModal && (
          <Modal
            component={<BatteryIndicator />}
            closeModal={setOpenBatteryIndicatorModal}
          />
        )}

        <Card
          title="Cricketers Rank List"
          description="A list of the famous cricketers made by an official organization"
          setOpenModal={setOpenRankListModal}
          filterItem="glass"
          serialNo={35}
          theme={theme}
        />
        {openRankListModal && (
          <Modal component={<RankList />} closeModal={setOpenRankListModal} />
        )}

        <Card
          title="Ink Splash"
          description="An ink bleed transition effect, powered by CSS animations"
          setOpenModal={setOpenInkSplashModal}
          filterItem="abstract"
          serialNo={36}
          theme={theme}
        />
        {openInkSplashModal && (
          <Modal component={<InkSplash />} closeModal={setOpenInkSplashModal} />
        )}

        <Card
          title="Marvel Slider"
          description="Presents multiple hero images in sequence, using captions, transitions, and animation"
          setOpenModal={setOpenSliderModal}
          filterItem="product"
          serialNo={37}
          theme={theme}
        />
        {openSliderModal && (
          <Modal component={<Slider />} closeModal={setOpenSliderModal} />
        )}

        <Card
          title="Dynamic Calendar"
          description="A chart showing the days, weeks, and months of a particular year, or giving particular seasonal information."
          setOpenModal={setOpenCalendarModal}
          filterItem="glass"
          serialNo={38}
          theme={theme}
        />
        {openCalendarModal && (
          <Modal
            component={<DynamicCalendar />}
            closeModal={setOpenCalendarModal}
          />
        )}

        <Card
          title="Purify Ocean"
          description="Animation to keep ocean clean from plastic"
          setOpenModal={setOpenOceanModal}
          filterItem="nature"
          serialNo={39}
          theme={theme}
        />
        {openOceanModal && (
          <Modal component={<Ocean />} closeModal={setOpenOceanModal} />
        )}

        <Card
          title="Random Color Palette Generator"
          description="Generates random colors of lighter shades to darker shades"
          setOpenModal={setOpenColorPaletteModal}
          filterItem="buttons"
          serialNo={40}
          theme={theme}
        />
        {openColorPaletteModal && (
          <Modal
            component={<ColorPalette />}
            closeModal={setOpenColorPaletteModal}
          />
        )}

        <Card
          title="Navbar"
          description="Animation effects when an user hovers on a list of options"
          setOpenModal={setOpenNavbarMenuModal}
          filterItem="menu"
          serialNo={41}
          theme={theme}
        />
        {openNavbarMenuModal && (
          <Modal
            component={<NavbarMenu />}
            closeModal={setOpenNavbarMenuModal}
          />
        )}
      </div>
    </div>
  );
};

export default Layout;
