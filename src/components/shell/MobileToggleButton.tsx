"use client";

import CloseIcon from "@/components/shell/CloseIcon";
import HamburgerIcon from "@/components/shell/HamburgerIcon";

interface MobileToggleButtonProps {
    isOpen: boolean;
    onToggle: () => void;
    "aria-label"?: string;
}

/**
 * Button to toggle the mobile navigation menu.
 *
 * @component
 * @param {MobileToggleButtonProps} props - Contains `isOpen` flag and `onToggle` handler.
 * @returns Toggle button with correct icon.
 */
export default function MobileToggleButton({
    isOpen,
    onToggle,
    "aria-label": ariaLabel,
}: MobileToggleButtonProps) {
    return (
        <div className="md:hidden">
            <button
                id="menu-btn"
                className="rounded text-slate-600 dark:text-slate-400"
                aria-label={ariaLabel ?? (isOpen ? "Close menu" : "Open menu")}
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-haspopup="true"
                type="button"
                onClick={onToggle}
            >
                {isOpen ? (
                    <CloseIcon
                        id="icon-close"
                        className="h-6 w-6"
                        aria-hidden="true"
                        focusable="false"
                    />
                ) : (
                    <HamburgerIcon
                        id="icon-hamburger"
                        className="h-6 w-6"
                        aria-hidden="true"
                        focusable="false"
                    />
                )}
            </button>
        </div>
    );
}
