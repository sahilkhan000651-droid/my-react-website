import React, { useState } from "react";
import "./locationselector.css";

const STORAGE_KEY = "quicker_delivery_pincode";

const EMPTY_ADDRESS = {
  name: "",
  phone: "",
  pincode: "",
  street: "",
  city: "",
  state: "",
};

function loadSavedAddress() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return EMPTY_ADDRESS;

  try {
    const value = JSON.parse(stored);
    if (value && typeof value === "object") {
      return { ...EMPTY_ADDRESS, ...value };
    }
  } catch {
    // Older versions saved only the PIN code as plain text.
    return { ...EMPTY_ADDRESS, pincode: stored };
  }

  return EMPTY_ADDRESS;
}

export default function LocationSelector() {
  const [address, setAddress] = useState(loadSavedAddress);
  const [input, setInput] = useState(() => ({ ...address }));
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function saveLocation(event) {
    event.preventDefault();

    const nextAddress = Object.fromEntries(
      Object.entries(input).map(([key, value]) => [key, value.trim()])
    );

    if (!/^[1-9][0-9]{5}$/.test(nextAddress.pincode)) {
      setError("Enter a valid 6-digit Indian PIN code.");
      setSaved(false);
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(nextAddress.phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      setSaved(false);
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAddress));
    } catch {
      setError("Could not save the address in this browser. Please try again.");
      setSaved(false);
      return;
    }

    setAddress(nextAddress);
    setInput(nextAddress);
    setError("");
    setSaved(true);
  }

  function openPopup() {
    setInput({ ...address });
    setError("");
    setSaved(false);
    setOpen(true);
  }

  function updateField(field, value) {
    setInput((current) => ({ ...current, [field]: value }));
    setError("");
    setSaved(false);
  }

  function removeAddress() {
    localStorage.removeItem(STORAGE_KEY);
    setAddress({ ...EMPTY_ADDRESS });
    setInput({ ...EMPTY_ADDRESS });
    setSaved(false);
    setError("");
  }

  return (
    <div className="quicker-location">
      <button
        className="location-trigger"
        type="button"
        onClick={openPopup}
        aria-label="Choose delivery location"
      >
        <span className="location-pin" aria-hidden="true">📍</span>
        <span className="location-copy">
          <span className="location-caption">Deliver to</span>
          <strong>
            {address.pincode
              ? `${address.name.split(" ")[0]} · ${address.pincode}`
              : "Select location"}
          </strong>
        </span>
        <span className="location-arrow" aria-hidden="true">⌄</span>
      </button>

      {open && (
        <div
          className="location-overlay"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            className="location-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-title"
          >
            <button
              className="location-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="location-icon" aria-hidden="true">📦</div>
            <h2 id="location-title">Delivery address</h2>
            <p>Enter your contact and address details for delivery.</p>

            <form onSubmit={saveLocation}>
              <div className="location-field">
                <label htmlFor="quicker-name">Full name</label>
                <input
                  id="quicker-name"
                  type="text"
                  autoComplete="name"
                  required
                  value={input.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </div>

              <div className="location-field">
                <label htmlFor="quicker-phone">Phone number</label>
                <input
                  id="quicker-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  required
                  value={input.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value.replace(/\D/g, ""))
                  }
                />
              </div>

              <div className="location-field">
                <label htmlFor="quicker-pincode">Indian PIN code</label>
                <input
                  id="quicker-pincode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  maxLength={6}
                  placeholder="6-digit PIN code"
                  required
                  value={input.pincode}
                  onChange={(event) =>
                    updateField("pincode", event.target.value.replace(/\D/g, ""))
                  }
                />
              </div>

              <div className="location-field">
                <label htmlFor="quicker-street">Street address</label>
                <textarea
                  id="quicker-street"
                  autoComplete="street-address"
                  rows={2}
                  required
                  value={input.street}
                  onChange={(event) => updateField("street", event.target.value)}
                />
              </div>

              <div className="location-address-row">
                <div className="location-field">
                  <label htmlFor="quicker-city">City</label>
                  <input
                    id="quicker-city"
                    type="text"
                    autoComplete="address-level2"
                    required
                    value={input.city}
                    onChange={(event) => updateField("city", event.target.value)}
                  />
                </div>

                <div className="location-field">
                  <label htmlFor="quicker-state">State</label>
                  <input
                    id="quicker-state"
                    type="text"
                    autoComplete="address-level1"
                    required
                    value={input.state}
                    onChange={(event) => updateField("state", event.target.value)}
                  />
                </div>
              </div>

              {error && (
                <p className="location-error" role="alert">{error}</p>
              )}

              {saved && (
                <p className="location-success" role="status">
                  Delivery address saved successfully.
                </p>
              )}

              <button className="location-save" type="submit">
                Save address
              </button>
            </form>

            {address.pincode && (
              <button
                className="location-remove"
                type="button"
                onClick={removeAddress}
              >
                Remove saved address
              </button>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
