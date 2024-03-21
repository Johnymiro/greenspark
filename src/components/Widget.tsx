// src/components/Widget.tsx
import React from "react";
import { ProductWidget, WidgetColor } from "../types";
import { ReactComponent as GreensparkLogo } from "../assets/greenspark-logo.svg";
import { ReactComponent as GreensparkTitle } from "../assets/greenspark-title.svg";

interface WidgetProps {
  widget: ProductWidget;
  onColorChange: (id: number, color: WidgetColor) => void;
  onActiveChange: (id: number) => void;
  onLinkedChange: (id: number, linked: boolean) => void;
}

export const Widget: React.FC<WidgetProps> = ({
  widget,
  onColorChange,
  onActiveChange,
  onLinkedChange,
}) => {
  const { id, type, amount, action, active, linked, selectedColor } = widget;

  React.useEffect(() => {
    console.log("color slected:", { selectedColor, id });
  }, [selectedColor]);

  return (
    <div className={"widgetContainer"}>
      <div className={"widget"}>
        <div className={"widgetHeader " + selectedColor}>
          <div className={"widgetIcon"}>
            <GreensparkLogo className="greenspark-logo" />
            <GreensparkTitle className="greenspark-title" />
          </div>
          <div className={`widgetText`}>
            <p>This product {action} </p>
            <span>
              {amount} {type}
            </span>
          </div>
        </div>
        <div className={"widgetBody"}>
          <div className={`${"widgetToggle"} ${"widgetBodyItem"}`}>
            <span>Link to Public Profile</span>
            <div className="custom-checkbox--container">
              {/* hide native checkbox */}
             {/*  <input
                className={"custom-checkbox"}
                type="checkbox"
                checked={linked}
                onChange={() => onLinkedChange(id, !linked)}
              /> */}
              {/* visible custom checkbox */}
              <div onClick={() => onLinkedChange(id, !linked)} className={`custom-checkbox ${linked ? "selected" : ""}`}></div>
            </div>
          </div>
          <div className={`${"widgetColors"} ${"widgetBodyItem"}`}>
            <label>Badge colour</label>
            <div className={"colors"}>
              {/* Map over colors */}
              {(
                ["blue", "green", "beige", "white", "black"] as WidgetColor[]
              ).map((color) => (
                <div
                  key={color}
                  className={`${"colorBox"} ${color} ${
                    selectedColor === color ? "badge-active" : ""
                  }`}
                  onClick={() => onColorChange(id, color)}
                />
              ))}
            </div>
          </div>
          <div className={`${"widgetActivate"} ${"widgetBodyItem"}`}>
            <span>Activate badge</span>
            <label className={"switch"}>
              <input
                type="checkbox"
                checked={active}
                onChange={() => onActiveChange(id)}
              />
              <span className={"slider"}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
