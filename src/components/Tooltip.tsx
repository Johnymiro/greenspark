// Tooltip.tsx
import React, { useState, useRef } from 'react';
import { ReactComponent as TooltipIcon } from "../assets/info_outline.svg";

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    clearTimeout(timeoutId.current as NodeJS.Timeout);
    timeoutId.current = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay of 200ms before showing tooltip
  };

  const hideTooltip = () => {
    clearTimeout(timeoutId.current as NodeJS.Timeout);
    timeoutId.current = setTimeout(() => {
      if (tooltipRef.current && !tooltipRef.current.matches(':hover')) {
        setIsVisible(false);
      }
    }, 300); // Delay of 300ms before hiding tooltip
  };


  return (
    <div className="tooltip-container" onMouseLeave={hideTooltip}>
      <TooltipIcon className="tooltip-icon" onMouseOver={showTooltip} />
      <div className={`tooltip ${isVisible ? 'show' : ''}`} ref={tooltipRef}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
