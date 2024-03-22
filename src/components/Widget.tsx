// src/components/Widget.tsx
import React from "react";
import { ProductWidget, WidgetColor } from "../types";
import { ReactComponent as GreensparkLogo } from "../assets/greenspark-logo.svg";
import { ReactComponent as GreensparkTitle } from "../assets/greenspark-title.svg";
import TooltipComp from "./Tooltip";

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

  return (
    <div className={"widget-container"}>
      <div className={"widget"}>
        {/* widget header */}
        <div className={"widget-header " + selectedColor}>
          <div className={"widget-icon"}>
            <GreensparkLogo className="greenspark-logo" />
            <GreensparkTitle className="greenspark-title" />
          </div>
          <div className={`widget-text`}>
            <p>This product {action} </p>
            <span>
              {amount} {type}
            </span>
          </div>
        </div>
        {/* widget body */}
        <div className={"widget-body"}>
          <div className={`${"widget-toggle"} ${"widget-body-item"}`}>
            <div className="widget--tooltip">
              <span className="widget__tooltip-text">
                Link to Public Profile
                <div className="profile-tooltip">
                  <TooltipComp>
                    This widget links directly to your public profile so that
                    you can easily share your impact with your customers. Turn
                    it off here if you do not want the badge to link to it.
                    <a
                      className="tooltip__profile-link"
                      href="https://johnymiro.pt"
                      target="_blank"
                    >
                      View Public Profile
                    </a>
                  </TooltipComp>
                </div>
              </span>
              <div></div>
            </div>
            <div className="custom-checkbox--container">
              <div
                onClick={() => onLinkedChange(id, !linked)}
                className={`custom-checkbox ${linked ? "selected" : ""}`}
              ></div>
            </div>
          </div>
          <div className={`${"widget-colors"} ${"widget-body-item"}`}>
            <label>Badge colour</label>
            <div className={"colors"}>
              {/* Map over colors */}
              {(
                ["blue", "green", "beige", "white", "black"] as WidgetColor[]
              ).map((color) => (
                <div
                  key={color}
                  className={`${"color-box"} ${color} ${
                    selectedColor === color ? "badge-active" : ""
                  }`}
                  onClick={() => onColorChange(id, color)}
                />
              ))}
            </div>
          </div>
          <div className={`${"widget-activate"} ${"widget-body-item"}`}>
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
