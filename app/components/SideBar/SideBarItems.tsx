import { Link } from "@/navigation";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SideBarItemsProps } from "@/types";

const SideBarItems = ({
  href,
  label,
  icon,
  isExpanded,
  tooltipContent,
  combo = false,
  subItems = [],
}: SideBarItemsProps) => {
  // Separate refs for button and link
  const buttonRef = useRef<HTMLButtonElement | null>(null); // For button
  const linkRef = useRef<HTMLAnchorElement | null>(null); // For Link

  const [tooltipPosition, setTooltipPosition] = useState(0); // State to track the vertical position of the tooltip

  const [isOpen, setIsOpen] = useState(false);
  const toggleSubItems = () => setIsOpen(!isOpen);

  // Calculate the icon's position for correct alignment
  useEffect(() => {
    if (buttonRef.current) {
      const { top } = buttonRef.current.getBoundingClientRect();
      setTooltipPosition(top); // Set the tooltip position based on the button icon
    } else if (linkRef.current) {
      const { top } = linkRef.current.getBoundingClientRect();
      setTooltipPosition(top); // Set the tooltip position based on the link icon
    }
  }, []); // Empty dependency array to run the effect once

  return (
    <>
      <li className="mb-4 w-full relative group">
        {combo ? (
          <button
            ref={buttonRef} // Attach ref to the button for calculating position
            className="flex items-center text-white hover:text-secondary text-lg px-4 w-full"
            onClick={toggleSubItems}
          >
            {icon}
            {isExpanded && <span className="ms-4">{label}</span>}
            <span className="ml-auto">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
        ) : (
          <Link
            href={href}
            ref={linkRef} // Attach ref to the link for calculating position
            className="flex items-center text-white hover:text-secondary text-xl px-4 relative"
          >
            {icon}
            {isExpanded && <span className="ms-4">{label}</span>}
          </Link>
        )}

        {/* Tooltip for collapsed state */}
        {!isExpanded && tooltipContent && (
          <div
            className="fixed left-[80px] z-[9999] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-md whitespace-nowrap"
            role="tooltip"
            style={{
              top: `${tooltipPosition}px`, // Set the tooltip position dynamically based on the icon
              marginLeft: "1rem", // Space it from the sidebar (adjust if necessary)
            }}
          >
            {tooltipContent}
            {/* Tooltip arrow */}
            <div className="tooltip-arrow absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </li>

      {/* Render sub-items when combo is true and isOpen */}
      {combo && isOpen && (
        <ul className="ml-4">
          {subItems.map((subItem, index) => (
            <SideBarItems key={index} {...subItem} />
          ))}
        </ul>
      )}
    </>
  );
};

export default SideBarItems;
