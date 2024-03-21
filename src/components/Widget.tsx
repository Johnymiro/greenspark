// src/components/Widget.tsx
import React from "react";
import styles from "./Widget.module.css";
import { ProductWidget, WidgetColor } from "../types";

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
    console.log("color slected:", {selectedColor, id})
  }, [selectedColor])

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.widget}>
        <div className={styles.widgetHeader}>
          <span className={styles.widgetIcon}>🌱</span>
          <div className={styles.widgetText}>
            <p>
              This product{" "}
              <strong>
                {action} {amount} {type}
              </strong>
            </p>
          </div>
        </div>
        <div className={styles.widgetBody}>
          <div className={`${styles.widgetToggle} ${styles.widgetBodyItem}`}>
            <span>Link to Public Profile</span>
            <input
              className={styles.customCheckbox}
              type="checkbox"
              checked={linked}
              onChange={() => onLinkedChange(id, !linked)}
            />
          </div>
          <div className={`${styles.widgetColors} ${styles.widgetBodyItem}`}>
            <label>Badge colour</label>
            <div className={styles.colors}>
              {/* Map over colors */}
              {(
                ["blue", "green", "beige", "white", "black"] as WidgetColor[]
              ).map((color) => (
                <div
                  key={color}
                  className={`${styles.colorBox} ${styles[color]}`}
                  onClick={() => onColorChange(id, color)}
                />
              ))}
            </div>
          </div>
          <div className={`${styles.widgetActivate} ${styles.widgetBodyItem}`}>
            <span>Activate badge</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={active}
                onChange={() => onActiveChange(id)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
