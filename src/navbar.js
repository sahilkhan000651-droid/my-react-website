import React, { useEffect, useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import LocationSelector from "./locationselector";
import Logo from "./logo";
import { CATEGORIES } from "./categories";
import { firebaseAuth, firebaseAuthConfigured } from "./firebase";
import "./navbar.css";

const NAV_LINKS = [
  { label: "Today’s deals", path: "/todays-deals" },
  { label: "New arrivals", path: "/new-arrivals" },
  { label: "Best sellers", path: "/best-sellers" },
  { label: "Gift ideas", path: "/gift-ideas" },
];

export default function Navbar({
  cartQuantity,
  cartOpen,
  category,
  searchTerm,
  onSearchChange,
  onCategoryChange,
  onCartClick,
}) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [signInMessage, setSignInMessage] = useState("");
  const [signInMode, setSignInMode] = useState("signin");
  const [signInBusy, setSignInBusy] = useState(false);
  const [user, setUser] = useState(null);
  const searchInputRef = useRef(null);
  const signInButtonRef = useRef(null);
  const signInEmailRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!firebaseAuth) return undefined;
    return onAuthStateChanged(firebaseAuth, setUser, (error) => {
      setSignInMessage(`Unable to check sign-in status: ${error.message}`);
    });
  }, []);

  useEffect(() => {
    if (!signInOpen) return undefined;

    signInEmailRef.current?.focus();
    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setSignInOpen(false);
        setSignInMessage("");
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [signInOpen]);

  function closeSignIn() {
    setSignInOpen(false);
    setSignInMessage("");
    setSignInMode("signin");
    signInButtonRef.current?.focus();
  }

  function firebaseErrorMessage(error) {
    const messages = {
      "auth/email-already-in-use": "An account already exists for this email.",
      "auth/invalid-credential": "The email or password is incorrect.",
      "auth/invalid-email": "Enter a valid email address.",
      "auth/network-request-failed": "Network error. Check your connection and try again.",
      "auth/too-many-requests": "Too many attempts. Wait a while and try again.",
      "auth/weak-password": "Choose a password with at least 6 characters.",
      "auth/user-disabled": "This account has been disabled.",
      "auth/user-not-found": "No account was found for this email.",
      "auth/wrong-password": "The email or password is incorrect.",
    };

    return messages[error.code] || `Authentication failed: ${error.message}`;
  }

  async function submitSignIn(event) {
    event.preventDefault();
    if (!firebaseAuth) {
      setSignInMessage("Firebase is not configured. Follow the setup instructions below.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    setSignInBusy(true);
    setSignInMessage("");

    try {
      if (signInMode === "forgot") {
        await sendPasswordResetEmail(firebaseAuth, email);
        setSignInMessage("If an account exists for that email, a password reset link has been sent.");
      } else if (signInMode === "signup") {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          formData.get("password")
        );
        closeSignIn();
      } else {
        await signInWithEmailAndPassword(
          firebaseAuth,
          email,
          formData.get("password")
        );
        closeSignIn();
      }
    } catch (error) {
      setSignInMessage(firebaseErrorMessage(error));
    } finally {
      setSignInBusy(false);
    }
  }

  function submitSearch(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <header className="quicker-header">
      <div className="quicker-header-main">
        <Logo />

        <LocationSelector />

        <form className="quicker-search" role="search" onSubmit={submitSearch}>
          <label className="quicker-search-category">
            <span className="sr-only">Search department</span>
            <select
              aria-label="Search department"
              value={category}
              onChange={(event) => {
                onCategoryChange(event.target.value);
                navigate("/");
              }}
            >
              {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <ChevronDown size={14} aria-hidden="true" />
          </label>
          <input
            ref={searchInputRef}
            className="quicker-search-input"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products"
            aria-label="Search products"
          />
          {searchTerm && (
            <button
              className="quicker-search-clear"
              type="button"
              aria-label="Clear search"
              onClick={() => {
                onSearchChange("");
                searchInputRef.current?.focus();
              }}
            >
              ×
            </button>
          )}
          <button className="quicker-search-submit" type="submit" aria-label="Search">
            <Search size={21} aria-hidden="true" />
          </button>
        </form>

        <button
          ref={signInButtonRef}
          className="quicker-account"
          type="button"
          aria-label="Sign in to your account"
          aria-haspopup="dialog"
          onClick={() => {
            setSignInMessage("");
            setSignInMode("signin");
            setSignInOpen(true);
          }}
        >
          <UserRound className="quicker-account-icon" size={21} aria-hidden="true" />
          <span className="quicker-action-copy">
            <span>{user ? `Hello, ${user.email}` : "Hello, sign in"}</span>
            <strong>Account <ChevronDown size={13} aria-hidden="true" /></strong>
          </span>
        </button>

        <NavLink className="quicker-orders" to="/returns-orders">
          <span>Returns</span>
          <strong>&amp; Orders</strong>
        </NavLink>

        <button
          className="quicker-cart"
          type="button"
          aria-label={`Shopping cart, ${cartQuantity} items`}
          aria-expanded={cartOpen}
          onClick={onCartClick}
        >
          <span className="quicker-cart-icon">
            <ShoppingCart size={27} strokeWidth={2} aria-hidden="true" />
            <span className="quicker-cart-count">{cartQuantity}</span>
          </span>
          <strong>Cart</strong>
        </button>
      </div>

      <nav className="quicker-subnav" aria-label="Shop navigation">
        <button
          className="quicker-all-button"
          type="button"
          aria-expanded={categoriesOpen}
          aria-controls="quicker-categories"
          onClick={() => setCategoriesOpen((open) => !open)}
        >
          <Menu size={19} aria-hidden="true" />
          <span>All</span>
        </button>
        <div className="quicker-subnav-links">
          {NAV_LINKS.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {categoriesOpen && (
        <nav className="quicker-category-menu" id="quicker-categories" aria-label="Departments">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                onCategoryChange(item);
                setCategoriesOpen(false);
                navigate("/");
                searchInputRef.current?.focus();
              }}
            >
              {item}
            </button>
          ))}
        </nav>
      )}

      {signInOpen && (
        <div
          className="quicker-signin-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeSignIn();
          }}
        >
          <section
            className="quicker-signin-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quicker-signin-title"
          >
            <button
              className="quicker-signin-close"
              type="button"
              aria-label="Close sign-in form"
              onClick={closeSignIn}
            >
              ×
            </button>
            <h2 id="quicker-signin-title">
              {user
                ? "Your account"
                : signInMode === "signup"
                  ? "Create account"
                  : signInMode === "forgot"
                    ? "Reset password"
                    : "Sign in"}
            </h2>
            <p>
              {user
                ? `Signed in as ${user.email}`
                : signInMode === "forgot"
                  ? "We’ll email you a link to reset your password."
                  : signInMode === "signup"
                    ? "Create an account with your email and a password."
                    : "Enter your email and password to continue."}
            </p>
            {user ? (
              <div className="quicker-signin-form">
                <button
                  className="quicker-signin-submit"
                  type="button"
                  disabled={signInBusy}
                  onClick={async () => {
                    setSignInBusy(true);
                    try {
                      await signOut(firebaseAuth);
                      closeSignIn();
                    } catch (error) {
                      setSignInMessage(firebaseErrorMessage(error));
                    } finally {
                      setSignInBusy(false);
                    }
                  }}
                >
                  Sign out
                </button>
                <p className="quicker-signin-message" role="status" aria-live="polite">
                  {signInMessage}
                </p>
              </div>
            ) : (
              <>
                {!firebaseAuthConfigured && (
                  <p className="quicker-signin-setup" role="alert">
                    Firebase is not configured. Copy <code>.env.example</code> to{" "}
                    <code>.env.local</code>, fill in your Firebase Web App values, enable
                    Email/Password in Firebase Authentication, and restart the app.
                  </p>
                )}
                <form className="quicker-signin-form" onSubmit={submitSignIn}>
                  <label htmlFor="quicker-signin-email">Email</label>
                  <input
                    ref={signInEmailRef}
                    id="quicker-signin-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  {signInMode !== "forgot" && (
                    <>
                      <label htmlFor="quicker-signin-password">Password</label>
                      <input
                        id="quicker-signin-password"
                        name="password"
                        type="password"
                        autoComplete={
                          signInMode === "signup" ? "new-password" : "current-password"
                        }
                        minLength={6}
                        required
                      />
                    </>
                  )}
                  <button
                    className="quicker-signin-submit"
                    type="submit"
                    disabled={signInBusy || !firebaseAuthConfigured}
                  >
                    {signInBusy
                      ? "Please wait…"
                      : signInMode === "signup"
                        ? "Create account"
                        : signInMode === "forgot"
                          ? "Send reset link"
                          : "Sign in"}
                  </button>
                  <p className="quicker-signin-message" role="status" aria-live="polite">
                    {signInMessage}
                  </p>
                </form>
                {signInMode === "signin" ? (
                  <div className="quicker-signin-links">
                    <button type="button" onClick={() => {
                      setSignInMessage("");
                      setSignInMode("forgot");
                    }}>
                      Forgot password?
                    </button>
                    <button type="button" onClick={() => {
                      setSignInMessage("");
                      setSignInMode("signup");
                    }}>
                      Create an account
                    </button>
                  </div>
                ) : (
                  <button
                    className="quicker-signin-back"
                    type="button"
                    onClick={() => {
                      setSignInMessage("");
                      setSignInMode("signin");
                    }}
                  >
                    Back to sign in
                  </button>
                )}
              </>
            )}
          </section>
        </div>
      )}
    </header>
  );
}
