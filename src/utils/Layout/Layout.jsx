import React, { useState } from "react";
import {
  Card,
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
  SidebarMenu,
  CircleLogo,
  ParticlesText,
  ProductSlider,
  BMI,
  DigitalClock,
} from "../../component-imports";
import items from "./effects";

const allFilterItems = [
  "all",
  ...new Set(items.map((item) => item.filterItem)),
];

const Layout = ({ theme }) => {
  const [effects, setEffects] = useState(items);
  const [buttons, setButtons] = useState(allFilterItems);

  let componentModule = null;

  const filterEffects = (button) => {
    if (button === "all") {
      setEffects(items);
      return;
    }

    const filteredEffects = items.filter(
      (effect) => effect.filterItem === button
    );
    setEffects(filteredEffects);
  };

  return (
    <div className={theme.color === "white" ? "body-light" : "body-dark"}>
      <Filter
        theme={theme}
        filterEffects={filterEffects}
        buttons={buttons}
      ></Filter>

      <div className="cards">
        {effects.map((effect) => {
          if (effect.serialNo > 0) {
            if (effect.serialNo == 1) {
              componentModule = <BusinessCard />;
            } else if (effect.serialNo == 2) {
              componentModule = <YearChanger />;
            } else if (effect.serialNo == 3) {
              componentModule = <Clock />;
            } else if (effect.serialNo == 4) {
              componentModule = <Leaves />;
            } else if (effect.serialNo == 5) {
              componentModule = <Loader />;
            } else if (effect.serialNo == 6) {
              componentModule = <SocialMediaIcons />;
            } else if (effect.serialNo == 7) {
              componentModule = <GlowingCube />;
            } else if (effect.serialNo == 8) {
              componentModule = <Blob />;
            } else if (effect.serialNo == 9) {
              componentModule = <Particles />;
            } else if (effect.serialNo == 10) {
              componentModule = <Water />;
            } else if (effect.serialNo == 11) {
              componentModule = <Rocket />;
            } else if (effect.serialNo == 12) {
              componentModule = <Wavy />;
            } else if (effect.serialNo == 13) {
              componentModule = <Smiley />;
            } else if (effect.serialNo == 14) {
              componentModule = <Box />;
            } else if (effect.serialNo == 15) {
              componentModule = <Button />;
            } else if (effect.serialNo == 16) {
              componentModule = <GlassCard />;
            } else if (effect.serialNo == 17) {
              componentModule = <Shutter />;
            } else if (effect.serialNo == 18) {
              componentModule = <Greeting />;
            } else if (effect.serialNo == 19) {
              componentModule = <Parallax />;
            } else if (effect.serialNo == 20) {
              componentModule = <Calculator />;
            } else if (effect.serialNo == 21) {
              componentModule = <Banner />;
            } else if (effect.serialNo == 22) {
              componentModule = <CircularMenu />;
            } else if (effect.serialNo == 23) {
              componentModule = <Squares />;
            } else if (effect.serialNo == 24) {
              componentModule = <FontAwesomeIcons />;
            } else if (effect.serialNo == 25) {
              componentModule = <Checkbox />;
            } else if (effect.serialNo == 26) {
              componentModule = <Climb />;
            } else if (effect.serialNo == 27) {
              componentModule = <Shapes />;
            } else if (effect.serialNo == 28) {
              componentModule = <TiltCard />;
            } else if (effect.serialNo == 29) {
              componentModule = <SkillsBar />;
            } else if (effect.serialNo == 30) {
              componentModule = <DropdownMenu />;
            } else if (effect.serialNo == 31) {
              componentModule = <MagicMenu />;
            } else if (effect.serialNo == 32) {
              componentModule = <Rain />;
            } else if (effect.serialNo == 33) {
              componentModule = <Balancer />;
            } else if (effect.serialNo == 34) {
              componentModule = <BatteryIndicator />;
            } else if (effect.serialNo == 35) {
              componentModule = <RankList />;
            } else if (effect.serialNo == 36) {
              componentModule = <InkSplash />;
            } else if (effect.serialNo == 37) {
              componentModule = <Slider />;
            } else if (effect.serialNo == 38) {
              componentModule = <DynamicCalendar />;
            } else if (effect.serialNo == 39) {
              componentModule = <Ocean />;
            } else if (effect.serialNo == 40) {
              componentModule = <ColorPalette />;
            } else if (effect.serialNo == 41) {
              componentModule = <NavbarMenu />;
            } else if (effect.serialNo == 42) {
              componentModule = <SidebarMenu />;
            } else if (effect.serialNo == 43) {
              componentModule = <CircleLogo />;
            } else if (effect.serialNo == 44) {
              componentModule = <ParticlesText />;
            } else if (effect.serialNo == 45) {
              componentModule = <ProductSlider />;
            } else if (effect.serialNo == 46) {
              componentModule = <BMI />;
            } else if (effect.serialNo == 47) {
              componentModule = <DigitalClock />;
            }
          }

          return (
            <Card
              key={effect.serialNo}
              serialNo={effect.serialNo}
              title={effect.title}
              description={effect.description}
              filterItem={effect.filterItem}
              theme={theme}
              component={componentModule}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
