import React, { useCallback, useEffect, useRef, useState } from "react";
import { MoreVertical, User, Package, ShoppingCart, Settings, LogOut } from "lucide-react";

const MENU_ITEMS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "orders", label: "Your Orders", icon: Package },
  { id: "cart", label: "Your Cart", icon: ShoppingCart },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "signout", label: "Sign Out", icon: LogOut, danger: true },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((current) => !current);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleMenuClick = useCallback(
    (id) => {
      console.log("Selected:", id);
      closeMenu();
    },
    [closeMenu]
  );

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [closeMenu]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeMenu]);

  return (
    <div style={styles.wrapper} ref={menuRef}>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Open menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={toggleMenu}
        style={isOpen ? { ...styles.menuButton, ...styles.buttonActive } : styles.menuButton}
      >
        <MoreVertical size={22} />
      </button>

      {isOpen && (
        <div role="menu" style={styles.dropdown}>
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                role="menuitem"
                onClick={() => handleMenuClick(item.id)}
                style={item.danger ? { ...styles.menuItem, ...styles.menuItemDanger } : styles.menuItem}
              >
                <span style={item.danger ? { ...styles.menuIcon, ...styles.menuIconDanger } : styles.menuIcon}>
                  <Icon size={18} />
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    display: "inline-block",
  },
  menuButton: {
    width: "44px",
    height: "44px",
    border: "1px solid #e2e8f0",
    borderRadius: "50%",
    background: "#ffffff",
    color: "#334155",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 6px 18px rgba(15, 23, 42, 0.08)",
  },
  buttonActive: {
    background: "#f1f5f9",
  },
  dropdown: {
    position: "absolute",
    top: 0,
    left: "calc(100% + 10px)",
    width: "230px",
    background: "rgba(255,255,255,0.98)",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "8px",
    boxShadow: "0 20px 40px rgba(15, 23, 42, 0.15)",
    zIndex: 100,
  },
  menuItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "11px 12px",
    border: "none",
    borderRadius: "10px",
    background: "transparent",
    color: "#1e293b",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
    cursor: "pointer",
  },
  menuItemDanger: {
    color: "#dc2626",
  },
  menuIcon: {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "9px",
    background: "#f8fafc",
    color: "#475569",
  },
  menuIconDanger: {
    color: "#dc2626",
    background: "#fef2f2",
  },
};

export default App;
