import React, { useState } from "react";
import { Card, Filter } from "../../component-imports";
import items from "./effects";

const allFilterItems = [
  "all",
  ...new Set(items.map((item) => item.filterItem)),
];

const Layout = ({ theme }) => {
  const [effects, setEffects] = useState(items);
  const [buttons, setButtons] = useState(allFilterItems);

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
          return (
            <Card
              key={effect.serialNo}
              serialNo={effect.serialNo}
              title={effect.title}
              description={effect.description}
              filterItem={effect.filterItem}
              theme={theme}
              component={effect.component}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
