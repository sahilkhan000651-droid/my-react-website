import { useEffect, useRef, useState } from 'react'
import './App.css'

const CATEGORIES = [
  'All departments',
  'Electronics',
  'Home & Living',
  'Fashion',
  'Books',
]

const PRODUCTS = [
  {
    id: 1,
    name: 'Studio Wireless Headphones',
    category: 'Electronics',
    brand: 'Soundcore',
    price: 79.99,
    rating: 4.8,
    reviews: '2,418',
    badge: 'Bestseller',
    art: 'headphones',
    emoji: '🎧',
  },
  {
    id: 2,
    name: 'Everyday Ceramic Coffee Set',
    category: 'Home & Living',
    brand: 'North & Oak',
    price: 34.5,
    rating: 4.7,
    reviews: '846',
    badge: 'Popular pick',
    art: 'coffee',
    emoji: '☕',
  },
  {
    id: 3,
    name: 'Classic Canvas Everyday Backpack',
    category: 'Fashion',
    brand: 'Fieldwork',
    price: 52,
    rating: 4.6,
    reviews: '1,203',
    badge: '',
    art: 'backpack',
    emoji: '🎒',
  },
  {
    id: 4,
    name: 'Smart Watch Series 5',
    category: 'Electronics',
    brand: 'Momentum',
    price: 129,
    rating: 4.5,
    reviews: '3,091',
    badge: 'Top rated',
    art: 'watch',
    emoji: '⌚',
  },
  {
    id: 5,
    name: 'The Art of Slow Living',
    category: 'Books',
    brand: 'Papertrail Press',
    price: 18.95,
    rating: 4.9,
    reviews: '527',
    badge: 'Editor’s choice',
    art: 'book',
    emoji: '📚',
  },
  {
    id: 6,
    name: 'Soft Knit Weekend Throw',
    category: 'Home & Living',
    brand: 'Sunday House',
    price: 46,
    rating: 4.7,
    reviews: '932',
    badge: '',
    art: 'throw',
    emoji: '🧶',
  },
  {
    id: 7,
    name: 'Minimal Leather Card Holder',
    category: 'Fashion',
    brand: 'Goodform',
    price: 28,
    rating: 4.6,
    reviews: '674',
    badge: '',
    art: 'wallet',
    emoji: '👝',
  },
  {
    id: 8,
    name: 'Portable Bluetooth Speaker',
    category: 'Electronics',
    brand: 'Soundcore',
    price: 45.99,
    rating: 4.8,
    reviews: '1,754',
    badge: 'Bestseller',
    art: 'speaker',
    emoji: '🔊',
  },
]

const POPULAR_SEARCHES = ['wireless headphones', 'coffee set', 'backpack']

function SearchIcon({ size = 20 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.2 4.2" />
    </svg>
  )
}

function App() {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [isFocused, setIsFocused] = useState(false)
  const [activeSuggestion, setActiveSuggestion] = useState(-1)
  const [favorites, setFavorites] = useState([])
  const searchRef = useRef(null)
  const suggestionsRef = useRef(null)

  const normalizedInput = input.trim().toLowerCase()
  const suggestions =
    normalizedInput.length > 0
      ? PRODUCTS.filter((product) =>
          `${product.name} ${product.brand} ${product.category}`
            .toLowerCase()
            .includes(normalizedInput),
        ).slice(0, 5)
      : []

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      category === CATEGORIES[0] || product.category === category
    const matchesQuery =
      !query ||
      `${product.name} ${product.brand} ${product.category}`
        .toLowerCase()
        .includes(query.toLowerCase())

    return matchesCategory && matchesQuery
  })

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setIsFocused(false)
        setActiveSuggestion(-1)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  function submitSearch(searchTerm = input) {
    setInput(searchTerm)
    setQuery(searchTerm.trim())
    setIsFocused(false)
    setActiveSuggestion(-1)
  }

  function handleSearchKeyDown(event) {
    if (event.key === 'Escape') {
      setIsFocused(false)
      setActiveSuggestion(-1)
      return
    }

    if (event.key === 'ArrowDown' && suggestions.length > 0) {
      event.preventDefault()
      setActiveSuggestion((current) => (current + 1) % suggestions.length)
      return
    }

    if (event.key === 'ArrowUp' && suggestions.length > 0) {
      event.preventDefault()
      setActiveSuggestion((current) =>
        current <= 0 ? suggestions.length - 1 : current - 1,
      )
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      const selectedSuggestion = suggestions[activeSuggestion]
      submitSearch(selectedSuggestion?.name ?? input)
    }
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }

  return (
    <div className="storefront">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Quicker home"
          onClick={() => submitSearch('')}
        >
          <span className="brand-mark">q</span>
          <span>quicker<span className="brand-period">.</span></span>
        </a>

        <form
          className={`search-form${isFocused ? ' search-form-focused' : ''}`}
          role="search"
          onSubmit={(event) => {
            event.preventDefault()
            submitSearch()
          }}
          ref={searchRef}
        >
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <select
            aria-label="Search category"
            className="category-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <span className="search-divider" aria-hidden="true" />
          <input
            id="product-search"
            aria-autocomplete="list"
            aria-controls="search-suggestions"
            aria-expanded={isFocused && suggestions.length > 0}
            autoComplete="off"
            placeholder="Search products, brands and more"
            value={input}
            onChange={(event) => {
              setInput(event.target.value)
              setActiveSuggestion(-1)
              setIsFocused(true)
            }}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleSearchKeyDown}
          />
          {input && (
            <button
              className="clear-search"
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setInput('')
                setQuery('')
                setActiveSuggestion(-1)
                searchRef.current?.querySelector('input')?.focus()
              }}
            >
              ×
            </button>
          )}
          <button className="search-button" type="submit" aria-label="Search">
            <SearchIcon />
          </button>

          {isFocused && suggestions.length > 0 && (
            <ul className="suggestions" id="search-suggestions" ref={suggestionsRef}>
              {suggestions.map((product, index) => (
                <li
                  key={product.id}
                  className={
                    index === activeSuggestion ? 'suggestion-active' : ''
                  }
                >
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => submitSearch(product.name)}
                  >
                    <SearchIcon size={16} />
                    <span>{product.name}</span>
                    <small>{product.category}</small>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </form>

        <div className="header-note">
          <span className="header-note-dot" />
          Thoughtful finds, made easy
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> THE GOOD-FIND MARKETPLACE</p>
            <h1>Find something<br />worth <em>keeping.</em></h1>
            <p className="hero-description">
              A better way to discover everyday essentials, thoughtful gifts,
              and little things you’ll love.
            </p>
            <div className="popular-searches" aria-label="Popular searches">
              <span>Popular:</span>
              {POPULAR_SEARCHES.map((term) => (
                <button key={term} onClick={() => submitSearch(term)}>
                  {term}
                </button>
              ))}
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="hero-sun" />
            <div className="hero-product product-backpack">🎒</div>
            <div className="hero-product product-headphones">🎧</div>
            <div className="hero-product product-coffee">☕</div>
            <div className="hero-note">
              <span className="note-sparkle">✳</span>
              <span><strong>Good things</strong><br />are closer than you think.</span>
            </div>
          </div>
        </section>

        <section className="catalog-section" aria-labelledby="catalog-heading">
          <div className="catalog-heading">
            <div>
              <p className="section-kicker">
                {query ? 'YOUR SEARCH' : 'A LITTLE INSPIRATION'}
              </p>
              <h2 id="catalog-heading">
                {query ? `Results for “${query}”` : 'Good finds, right now'}
              </h2>
              <p className="result-count">
                {filteredProducts.length}{' '}
                {filteredProducts.length === 1 ? 'thoughtful find' : 'thoughtful finds'}
                {category !== CATEGORIES[0] ? ` in ${category}` : ''}
              </p>
            </div>
            <label className="sort-control">
              <span>Browse</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                aria-label="Filter products by category"
              >
                {CATEGORIES.map((item) => (
                  <option key={item} value={item}>
                    {item === CATEGORIES[0] ? 'All categories' : item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className={`product-art art-${product.art}`}>
                    {product.badge && (
                      <span className="product-badge">{product.badge}</span>
                    )}
                    <span className="product-emoji" aria-hidden="true">
                      {product.emoji}
                    </span>
                    <button
                      className="favorite-button"
                      type="button"
                      aria-label={`Save ${product.name} to favorites`}
                      onClick={() => {
                        setFavorites((current) =>
                          current.includes(product.id)
                            ? current.filter((id) => id !== product.id)
                            : [...current, product.id],
                        )
                      }}
                      aria-pressed={favorites.includes(product.id)}
                    >
                      {favorites.includes(product.id) ? '♥' : '♡'}
                    </button>
                  </div>
                  <div className="product-info">
                    <p className="product-brand">{product.brand}</p>
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <span aria-label={`${product.rating} out of 5 stars`}>
                        {'★'.repeat(Math.round(product.rating))}
                      </span>
                      <small>{product.rating} ({product.reviews})</small>
                    </div>
                    <div className="product-bottom">
                      <strong>{formatPrice(product.price)}</strong>
                      <span>Free delivery</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-icon"><SearchIcon size={28} /></span>
              <h3>No finds just yet</h3>
              <p>Try another keyword or browse all of our categories.</p>
              <button
                className="reset-search"
                onClick={() => {
                  setInput('')
                  setQuery('')
                  setCategory(CATEGORIES[0])
                }}
              >
                Browse everything
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home" onClick={() => submitSearch('')}>
          <span className="brand-mark">q</span>
          <span>quicker<span className="brand-period">.</span></span>
        </a>
        <span>Good things, found faster.</span>
        <span>© 2025 Quicker Market</span>
      </footer>
    </div>
  )
}

export default App
