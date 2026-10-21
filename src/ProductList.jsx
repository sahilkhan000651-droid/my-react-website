import React from "react";
import { ALL_DEPARTMENTS, CATEGORIES } from "./categories";
import "./product-list.css";

export const PRODUCT = {
  id: "featured-amazon",
  name: "The Derma Co Sali-Cinamide Anti-Acne Face Wash & Serum Combo",
  department: "Beauty",
  category: "Beauty & personal care",
  description:
    "A face wash and serum combo featuring salicylic acid. The face wash also contains niacinamide.",
  details: ["2% Salicylic Acid", "2% Niacinamide in the face wash", "Face wash + serum combo"],
  image: "https://m.media-amazon.com/images/I/51mCQhdHNDL._SX355_.jpg",
  price: 626,
  url: "https://link.amazon/A0hqft9JR",
};

const ADDITIONAL_PRODUCTS = [
  {
    id: "coco-body-lotion",
    name: "Multani Natural Cocoa Body Lotion (Pack of 2, 400 ml each)",
    department: "Beauty",
    category: "Beauty & personal care",
    image:
      "https://m.media-amazon.com/images/I/81DvwmTzeWL._SY355_PIbundle-2,TopRight,0,0_AA355SH20_.jpg",
    price: 288,
    url: "https://link.amazon/B03sxrH9c",
  },
  {
    id: "milton-electric-kettle",
    name: "Milton Rapid Electric Kettle 1.8L, 1500 Watts, Stainless Steel",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    description:
      "A 1.8L stainless steel electric kettle with automatic shut-off and a wide mouth for easy filling and cleaning.",
    details: ["1.8L capacity", "1500 watts", "Auto shut-off", "1-year warranty"],
    image: "https://m.media-amazon.com/images/I/51lYFOP2mUL._SX425_.jpg",
    price: 604,
    url: "https://link.amazon/B0b5hsnbh",
  },
  {
    id: "sweet-karam-coffee-ragi-laddu",
    name: "Sweet Karam Coffee Ragi Laddu, 150g",
    department: "Grocery & Gourmet Foods",
    category: "Grocery & Gourmet Foods",
    description:
      "A millet-based snack made with ragi, jaggery, almonds, and cashews, with no refined sugar or palm oil.",
    details: ["150g", "Made with ragi and jaggery", "No refined sugar or palm oil"],
    image: "https://m.media-amazon.com/images/I/91wDFH77UnL._SX522_.jpg",
    price: 130,
    url: "https://link.amazon/B07ohCTVK",
  },
  {
    id: "milton-champ-multi-cook-kettle",
    name: "Milton Champ 1.5L 600W Electric Multi Cook Kettle with Steamer",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    description:
      "A multipurpose stainless steel kettle for boiling, steaming, and quick cooking, with three operating modes.",
    details: ["1.5L capacity", "600 watts", "Steamer included", "3 modes", "1-year warranty"],
    image: "https://m.media-amazon.com/images/I/61wV4gWKRxL._SX425_.jpg",
    price: 1295,
    url: "https://link.amazon/B0aXQrz4K",
  },
  {
    id: "dettol-original-soap",
    name: "Dettol Original Germ Protection Bathing Soap, 125g (Pack of 5)",
    department: "Beauty",
    category: "Beauty & personal care",
    description: "A five-bar bathing soap pack formulated for everyday cleansing and germ protection.",
    details: ["5 bars, 125g each", "625g total"],
    image:
      "https://m.media-amazon.com/images/I/61KBZnySmlL._SY355_PIbundle-5,TopRight,0,0_AA355SH20_.jpg",
    price: 225,
    url: "https://link.amazon/B0etX2KDL",
  },
  {
    id: "parachute-coconut-oil",
    name: "Parachute Coconut Oil, 330ml",
    department: "Beauty",
    category: "Beauty & personal care",
    description: "Coconut oil made from hand-picked coconuts, with no added preservatives or chemicals.",
    details: ["330ml bottle", "No added preservatives"],
    image: "https://m.media-amazon.com/images/I/61J6YLGcV+L._SX522_.jpg",
    price: 167,
    url: "https://link.amazon/B0b3BR4mq",
  },
  {
    id: "sensodyne-fresh-gel",
    name: "Sensodyne Fresh Gel Toothpaste, 125g (Pack of 2)",
    department: "Beauty",
    category: "Beauty & personal care",
    description:
      "Fresh Gel toothpaste for daily care and protection against tooth sensitivity.",
    details: ["2 tubes, 125g each", "250g total", "Fresh Gel"],
    image:
      "https://m.media-amazon.com/images/I/61eEasjdJML._SY450_PIbundle-2,TopRight,0,0_AA450SH20_.jpg",
    price: 346,
    url: "https://link.amazon/B0aHDldu7",
  },
  {
    id: "olevs-mens-chronograph-watch",
    name: "OLEVS Men's Luxury Chronograph Analog Quartz Watch",
    department: "Fashion",
    category: "Fashion",
    description:
      "A gold-tone men's analog quartz wristwatch with a chronograph, luminous details, and water resistance.",
    details: ["Analog quartz movement", "Chronograph", "Luminous display", "Water resistant"],
    image: "https://m.media-amazon.com/images/I/71QTFyJ1sAL._SX385_.jpg",
    price: 3900,
    url: "https://link.amazon/B01uwMbQi",
  },
  {
    id: "loreal-hyaluron-shampoo-conditioner",
    name: "L'Oréal Paris Hyaluron Moisture Shampoo and Conditioner Regime Pack",
    department: "Beauty",
    category: "Beauty & personal care",
    description:
      "A shampoo and conditioner regime for dry, dehydrated hair, formulated with hyaluronic acid.",
    details: ["340ml shampoo", "180ml conditioner", "72-hour moisture"],
    image:
      "https://m.media-amazon.com/images/I/61kci5gq78L._SY355_PIbundle-2,TopRight,0,0_AA355SH20_.jpg",
    price: 533.12,
    url: "https://link.amazon/B0d4gYlYR",
  },
  {
    id: "loreal-hyaluron-shampoo",
    name: "L'Oréal Paris Hyaluron Moisture Filling Shampoo, 200ml",
    department: "Beauty",
    category: "Beauty & personal care",
    description:
      "A hyaluronic acid shampoo for dry, dehydrated hair that adds shine and bounce.",
    details: ["200ml", "Hyaluronic acid", "72-hour moisture"],
    image: "https://m.media-amazon.com/images/I/51u-Kuxu8DL._SY355_.jpg",
    price: 210,
    url: "https://link.amazon/B0fwQR9Vg",
  },
  {
    id: "loreal-hyaluron-hair-mask",
    name: "L'Oréal Paris Hyaluron Moisture Wrapping Hair Mask, 200g",
    department: "Beauty",
    category: "Beauty & personal care",
    description:
      "A hydrating hair mask with hyaluronic acid for dry and dehydrated hair.",
    details: ["200g", "10% hyaluronic acid", "Hydration boost"],
    image: "https://m.media-amazon.com/images/I/51SKzJr8ufL._SY355_.jpg",
    price: 363,
    url: "https://link.amazon/B04e2FicZ",
  },
  {
    id: "dove-peptide-leave-in-serum",
    name: "Dove Peptide Bond Strength Leave-in Crème Serum, 52ml",
    department: "Beauty",
    category: "Beauty & personal care",
    description:
      "A lightweight leave-in crème serum with a 5% protein peptide complex for continuous damage repair.",
    details: ["52ml", "5% protein peptide complex", "Lightweight leave-in formula"],
    image: "https://m.media-amazon.com/images/I/41pipwroFEL._SY355_.jpg",
    price: 269,
    url: "https://link.amazon/B05wxNZ1I",
  },
  {
    id: "dove-peptide-strength-shampoo",
    name: "Dove Peptide Bond Strength Shampoo for Dry & Damaged Hair, 340ml",
    department: "Beauty",
    category: "Beauty & personal care",
    description:
      "A peptide-enriched shampoo designed to repair damaged hair and help reconstruct broken hair bonds.",
    details: ["340ml", "Protein peptides", "For dry and damaged hair"],
    image: "https://m.media-amazon.com/images/I/518auJYkG+L._SY355_.jpg",
    price: 237,
    url: "https://link.amazon/B06UHHmO0",
  },
  {
    id: "muscleblaze-yeast-protein",
    name: "MuscleBlaze Yeast Protein Powder, Rich Chocolate, 1kg",
    department: "Protein",
    category: "Protein",
    details: ["26g protein per scoop", "Fermented yeast protein isolate"],
    image: "https://m.media-amazon.com/images/I/61JO5dzQF+L._SY450_.jpg",
    price: 2099,
    url: "https://link.amazon/B0aMymja3",
  },
  {
    id: "mille-dark-chocolate-yeast-protein",
    name: "Mille Dark Chocolate Yeast Protein Powder, 500g",
    department: "Protein",
    category: "Protein",
    details: ["24g protein per scoop", "Vegan", "No added sugar"],
    image: "https://m.media-amazon.com/images/I/61MYJl+IxkL._SY450_.jpg",
    price: 1700,
    url: "https://link.amazon/B0cTDWyYJ",
  },
  {
    id: "boldfit-gym-shaker-bottle",
    name: "Boldfit Leakproof Gym Shaker Bottle, 500ml",
    department: "Protein",
    category: "Protein",
    details: ["500ml", "For protein and workout drinks"],
    image: "https://m.media-amazon.com/images/I/31qXUaxEPqL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 113,
    url: "https://link.amazon/B03OaCQOY",
  },
  {
    id: "bigmuscles-creatine-mango-martini",
    name: "Bigmuscles Nutrition Micronized Creatine, Mango Martini, 155g",
    department: "Protein",
    category: "Protein",
    details: ["50 servings", "Creatine monohydrate"],
    image: "https://m.media-amazon.com/images/I/71kr-Av3e2L._SY450_.jpg",
    price: 208,
    url: "https://link.amazon/B01h03NAr",
  },
  {
    id: "colgate-total-toothpaste-combo",
    name: "Colgate Total Advanced Health Anti-Germ Toothpaste Combo, 300g",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["2 x 150g toothpaste", "Toothbrush included"],
    image: "https://m.media-amazon.com/images/I/41Ne-5T5UoL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 233,
    url: "https://link.amazon/B04K4fzIl",
  },
  {
    id: "dettol-original-handwash-refill",
    name: "Dettol Original Liquid Handwash Refill, 1350ml",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["1350ml", "Germ defence formula"],
    image: "https://m.media-amazon.com/images/I/41UIlXu+B+L._SY300_SX300_QL70_FMwebp_.jpg",
    price: 174,
    url: "https://link.amazon/B0dzFRgHv",
  },
  {
    id: "vim-dishwash-liquid",
    name: "Vim Dishwash Liquid Pouch, 3L",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    details: ["3L pouch", "Removes grease and odours"],
    image: "https://m.media-amazon.com/images/I/61aN1OYUsjL._SY450_.jpg",
    price: 379,
    url: "https://link.amazon/B0ftskEPd",
  },
  {
    id: "surf-excel-matic-liquid",
    name: "Surf Excel Matic Front Load Liquid Detergent Refill, 5kg",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    details: ["5kg refill pouch", "For front-load washing machines"],
    image: "https://m.media-amazon.com/images/I/616R3X-B5cL._SY450_.jpg",
    price: 687,
    url: "https://link.amazon/B07lmY8d7",
  },
  {
    id: "godrej-no1-sandal-turmeric-soap",
    name: "Godrej No. 1 Sandal & Turmeric Soap, Pack of 5",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["5 bars, 100g each"],
    image: "https://m.media-amazon.com/images/I/41dCtmCv3KL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 125,
    url: "https://link.amazon/B0h7a7UlR",
  },
  {
    id: "red-label-ginger-tea",
    name: "Red Label Ginger Tea, 100g",
    department: "Grocery & Gourmet Foods",
    category: "Grocery & Gourmet Foods",
    image: "https://m.media-amazon.com/images/I/61j7ReksE2L._SX522_.jpg",
    price: 95,
    url: "https://link.amazon/B046dM9mm",
  },
  {
    id: "red-label-masala-chai-premix",
    name: "Brooke Bond Red Label Instant Masala Chai Premix, 13g x 10 Sachets",
    department: "Grocery & Gourmet Foods",
    category: "Grocery & Gourmet Foods",
    details: ["10 sachets", "13g per sachet"],
    image: "https://m.media-amazon.com/images/I/61xL3yVO+TL._SX522_.jpg",
    price: 99,
    url: "https://link.amazon/B0hs88bot",
  },
  {
    id: "tata-salt-iodised",
    name: "Tata Salt Free Flowing Iodised Salt, 1kg",
    department: "Grocery & Gourmet Foods",
    category: "Grocery & Gourmet Foods",
    details: ["1kg", "Vacuum evaporated"],
    image: "https://m.media-amazon.com/images/I/51ZkJ-B1EYL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 74,
    url: "https://link.amazon/B0ixvWbLQ",
  },
  {
    id: "im-lite-stevia-sugar",
    name: "I'm Lite Sugar Blended with Stevia, 1kg",
    department: "Grocery & Gourmet Foods",
    category: "Grocery & Gourmet Foods",
    details: ["50% fewer calories"],
    image: "https://m.media-amazon.com/images/I/61lsmOAocRL._SX522_.jpg",
    price: 167,
    url: "https://link.amazon/B069pm643",
  },
  {
    id: "softouch-food-wrapping-paper",
    name: "Softouch Food Wrapping Paper Butter Paper Roll, 100m",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    details: ["100m roll", "Greaseproof", "Microwave safe"],
    image: "https://m.media-amazon.com/images/I/61nVi9+xzwL._SX342_.jpg",
    price: 199,
    url: "https://link.amazon/B025lkrlF",
  },
  {
    id: "softouch-toilet-tissue-rolls",
    name: "Softouch 3-Ply Toilet Tissue Rolls, Pack of 12",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    details: ["12 rolls", "3 ply", "Virgin paper"],
    image: "https://m.media-amazon.com/images/I/41+yBpt88aL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 249,
    url: "https://link.amazon/B018mDWRd",
  },
  {
    id: "robustt-bio-food-wrap",
    name: "Robustt Bio Food Wrap Cling Film, 100m x 12in",
    department: "Home & Kitchen",
    category: "Home & Kitchen",
    details: ["100m roll", "12in wide"],
    image: "https://m.media-amazon.com/images/I/419-uNzPzKL._SX342_SY445_QL70_FMwebp_.jpg",
    price: 169,
    url: "https://link.amazon/B0d5ghhOM",
  },
  {
    id: "chemist-at-play-exfoliating-face-scrub",
    name: "Chemist At Play Exfoliating Face Scrub, 100ml",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["100ml", "Instant glow"],
    image: "https://m.media-amazon.com/images/I/41QNQcWsDDL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 299,
    url: "https://link.amazon/B02UjbMUE",
  },
  {
    id: "chemist-at-play-exfoliating-body-wash",
    name: "Chemist At Play Gentle Exfoliating Body Wash, 236ml",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["236ml", "For women and men"],
    image: "https://m.media-amazon.com/images/I/51D62Rx9VjL._SY355_.jpg",
    price: 379,
    url: "https://link.amazon/B09G1WjhF",
  },
  {
    id: "wishcare-aha-bha-body-lotion",
    name: "WishCare AHA BHA Body Lotion, 200ml",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["10% AHA", "1% BHA", "For dry skin"],
    image: "https://m.media-amazon.com/images/I/31l-ngvixLL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 353,
    url: "https://link.amazon/B08Mlm960",
  },
  {
    id: "garnier-men-acno-fight-cleanser",
    name: "Garnier Men Acno Fight Gentle Cleanser Facewash, 155g",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["For acne-prone, sensitive skin"],
    image: "https://m.media-amazon.com/images/I/71+qfs4NxVL._SY550_.jpg",
    price: 325,
    url: "https://link.amazon/A043JkByF",
  },
  {
    id: "garnier-vitamin-c-serum-facewash",
    name: "Garnier 2-in-1 Vitamin C Serum Facewash, 100g",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["Cleanses", "Brightens", "Hydrates"],
    image: "https://m.media-amazon.com/images/I/31Mfgj8UrmL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 169,
    url: "https://link.amazon/B065avGhf",
  },
  {
    id: "garnier-men-turbobright-face-wash",
    name: "Garnier Men TurboBright Double Action Face Wash, 100g",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["Brightening", "Anti-pollution"],
    image: "https://m.media-amazon.com/images/I/31xDExq8HUL._SY300_SX300_QL70_FMwebp_.jpg",
    price: 207,
    url: "https://link.amazon/B0enYA34R",
  },
  {
    id: "lacto-calamine-oily-skin-face-wash",
    name: "Lacto Calamine Face Wash for Oily Skin, 100ml (Pack of 2)",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["2 x 100ml", "Kaolin clay", "Niacinamide and vitamin E"],
    image: "https://m.media-amazon.com/images/I/610ju0DHnTL._SY355_PIbundle-2,TopRight,0,0_AA355SH20_.jpg",
    price: 198,
    url: "https://link.amazon/B0gEWw0t7",
  },
  {
    id: "lacto-calamine-ubtan-face-wash",
    name: "Lacto Calamine Ubtan Exfoliating Face Wash, 100ml",
    department: "Beauty",
    category: "Beauty & personal care",
    details: ["Sandalwood, saffron, neem, almond, and turmeric"],
    image: "https://m.media-amazon.com/images/I/61a6eWLzxnL._SY355_.jpg",
    price: 134,
    url: "https://link.amazon/B08fb8ewv",
  },
  {
    id: "vedaka-whole-cashews",
    name: "Amazon Brand Vedaka Whole Cashews, 500g, Grade W320",
    department: "Grocery & Gourmet Foods",
    category: "Grocery & Gourmet Foods",
    details: ["500g", "Grade W320", "Gluten-free"],
    image: "https://m.media-amazon.com/images/I/71ZjEl7y78L._SX522_.jpg",
    price: 535,
    url: "https://link.amazon/A03OHR3ST",
  },
];

const createAmazonProduct = (id, name, department, image, url, price) => ({
  id,
  name,
  department,
  category: department,
  ...(image && { image }),
  ...(price != null && { price }),
  url,
});

const CATALOG_BATCH_PRODUCTS = [
  createAmazonProduct("hp-headphones-batch", "HP Wired On Ear Headphones with Mic with 3.5 Mm Drivers, in-Built Noise Cancelling, Foldable and Adjustable for Laptop/Pc/Office/Home/ 1 Year Warranty (B4B09PA)", "Electronics", "https://m.media-amazon.com/images/I/51r32ZQaFAL._SY450_.jpg", "https://link.amazon/B0i7vfXxH", 595),
  createAmazonProduct("boat-bassheads-100-batch", "boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)", "Electronics", "https://m.media-amazon.com/images/I/513ugd16C6L._SY355_.jpg", "https://link.amazon/B0dYEkFVn", 299),
  createAmazonProduct("ambrane-usb-c-audio-adapter-batch", "Ambrane Type C to 3.5mm Audio Jack Converter with DAC Headphone Adapter, Connector Cable for iPhone 16/15 Series, Samsung, OnePlus, Google Pixel, Laptops, Other Devices (AOTG-CX3, Black)", "Electronics", "https://m.media-amazon.com/images/I/61-baya6SkL._SX425_.jpg", "https://link.amazon/B0hStvjJ5", 129),
  createAmazonProduct("logitech-m90-mouse-batch", "Logitech M90 Wired USB Mouse, 3 yr Warranty, 1000 DPI Optical Tracking, Ambidextrous PC/Mac/Laptop - Black", "Electronics", "https://m.media-amazon.com/images/I/51a0sAyuLvL._SY679_.jpg", "https://link.amazon/B0aZVJNZ9", 389),
  createAmazonProduct("logitech-k120-keyboard-batch", "Logitech K120 Wired Keyboard for Windows, USB Plug-and-Play, Full-Size, Spill-Resistant, Curved Space Bar, Compatible with PC, Laptop", "Electronics", "https://m.media-amazon.com/images/I/81Y2VnQTuBL._SX450_.jpg", "https://link.amazon/B0glj1dAX", 625),
  createAmazonProduct("oneplus-earbuds-batch", "OnePlus Nord Buds 3r TWS Earbuds up to 54 Hours Playback, 2-mic Clear Calls, 3D Spatial Audio, AI Translation, 12.4mm Drivers, Dual-Device Connectivity, 47ms Low Latency - Ash Black", "Electronics", "https://m.media-amazon.com/images/I/51nBTTG3hNL._SY355_.jpg", "https://link.amazon/B0ccFycjB", 1799),
  createAmazonProduct("electronics-listing-batch-7", "KAPAVER Hybrid Series Back Cover Case Compatible with iPhone 13 (Clear)", "Electronics", "https://m.media-amazon.com/images/I/716hq+s3raL._SY355_.jpg", "https://link.amazon/A0bs86ST3", 380),
  createAmazonProduct("toy-imagine-game-batch", "Toy Imagine 54 Pcs Wooden Tumbling Tower Game – Indoor Stacking Puzzle Blocks for Kids, Adults & Families – Fun Balancing Toy for Boys & Girls of All Ages – Party Game & Brain Teaser", "Toys & Games", "https://m.media-amazon.com/images/I/61yEvHHViTL._SY355_.jpg", "https://link.amazon/B0gqdPeUL", 274),
  createAmazonProduct("asian-blade-13-shoes-batch", "ASIAN Civic-01 Men’s Sports Running Shoes | Lightweight Sneakers with Breathable Mesh Upper, Shock-Absorbing Cushion Midsole & Non-Slip Outsole for Running, Walking & Gym", "Shoes", "https://m.media-amazon.com/images/I/51kmnOhAyvL._SY500_.jpg", "https://link.amazon/B0crJWlbn", null),
  createAmazonProduct("asian-future-01-shoes-batch", "ASIAN Men Lace Up Running Shoes", "Shoes", "https://m.media-amazon.com/images/I/61YUuCn4u+L._SY500_.jpg", "https://link.amazon/B0fZrtqPr", null),
  createAmazonProduct("clymb-running-shoes-batch", "CLYMB Casual Running/Walking/Sport Shoes for Men's/Boys", "Shoes", "https://m.media-amazon.com/images/I/617OCUpPyaL._SY500_.jpg", "https://link.amazon/B05cMdIXW", null),
  createAmazonProduct("amazon-shoes-listing-batch-28", "Campus Men's Force Running Shoes", "Shoes", "https://m.media-amazon.com/images/I/619qmAIHfGL._SY500_.jpg", "https://link.amazon/B0chpXx9s", null),
  createAmazonProduct("amazon-electronics-listing-batch-33", "Original iPhone Charger 20W PD Type C", "Electronics", "https://m.media-amazon.com/images/I/617QjU2JHeL._SY355_.jpg", "https://link.amazon/A03esoTQ9", 339),
  createAmazonProduct("eddiktion-universal-charger-batch", "165W Super Fast Car Charger | Dual Port USB A 120W and USB C 45W PD Fast Charging Adapter | Universal 12V-24V Fast Car Charger for All Type of Mobile, Smartphone,Watch,Tablet,mac (Black)", "Electronics", "https://m.media-amazon.com/images/I/71fUUJEiLBL._SY355_.jpg", "https://link.amazon/B09IXaKhu", 599),
  createAmazonProduct("wayona-charging-cable-batch", "Wayona 100W USB C to USB C Cable 1.5M, Type C Fast Charging Cable Compatible with iPhone 16/16 Plus/16 Pro/16 Pro Max,15 Series, Galaxy S25 Ultra,S24/S23/S22, Car Play, MacBook, i Pad, Pixel-Grey", "Electronics", "https://m.media-amazon.com/images/I/71DDDblJgFL._SX342_.jpg", "https://link.amazon/B0eSk9r21", 350),
  createAmazonProduct("cello-unbreakable-glass-batch", "CELLO H2O Water Bottles Set of 3 Pcs For Daily Use, 1000ml Each Multicolor | Stylish & Unbreakable BPA-Free Leakproof Refrigerator Safe Pet Water Bottle For School, Office, Kitchen & Travel", "Home & Kitchen", "https://m.media-amazon.com/images/I/61+nyAaYETL._SX425_.jpg", "https://link.amazon/B03TUbaSO", 399),
  createAmazonProduct("cello-transparent-bottle-batch", "CELLO H2O Glass Water Bottle for Office & Daily Use 920 ml, Transparent | Durable & Stylish, Freezable & Fridge Safe, Leakproof Wide Mouth Leadfree Toughened Glass Water Bottle For Kitchen & Travel", "Home & Kitchen", "https://m.media-amazon.com/images/I/6193kFOYj+L._SX425_.jpg", "https://link.amazon/B0fBE9btt", 134),
  createAmazonProduct("solimo-stainless-steel-bottle-batch", "Amazon Brand - Solimo Stainless Steel Water Bottle, Set of 3, 1 L Each (Blitz)", "Home & Kitchen", "https://m.media-amazon.com/images/I/81mrMggUQnS._SX425_.jpg", "https://link.amazon/B0023ebKO", 519),
  createAmazonProduct("clazkit-stainless-steel-bottle-batch", "Clazkit Stainless Steel Water Bottle, 500 ml - Single-Walled, Spill-Proof, Food Grade Steel | Fridge, Office, School, Travel, Gym, Car (Silver)", "Home & Kitchen", "https://m.media-amazon.com/images/I/71GYvX5VzlL._SX425_.jpg", "https://link.amazon/B00BYrX2I", 143),
  createAmazonProduct("boldfit-quick-dry-towel-batch-3", "Boldfit Quick-Dry Absorbent Towel Variant", "Home & Kitchen", null, "https://link.amazon/B0eDYuFYr", null),
  createAmazonProduct("boldfit-quick-dry-towel-batch-4", "Boldfit Quick-Dry Absorbent Towel Variant", "Home & Kitchen", null, "https://link.amazon/B0es5ATH7", null),
  createAmazonProduct("amazon-kitchen-listing-batch", "Meta Ray-Ban (Gen 3) Wayfarer, Shiny Black, Polarised Green Lenses, AI Glasses with Camera for Men, Women", "Electronics", "https://m.media-amazon.com/images/I/51+r67wAViL._SY355_.jpg", "https://link.amazon/A0j3OIBaf", 46500),
  createAmazonProduct("philips-bt3325-trimmer-batch", "Philips India's No.1 Men's Trimmer* | Lift & Trim Technology | Skin Friendly Beard Trimmer for Men | Effortless Styling | Self-Sharpening Blades | 60 mins runtime | 3 yrs warranty* | BT3325", "Beauty", "https://m.media-amazon.com/images/I/613UQ+C5RBL._SY450_.jpg", "https://link.amazon/B05Y9oviF", 899),
  createAmazonProduct("wild-stone-edge-perfume-batch", "Wild Stone Edge Edp Premium Perfume For Men,100 Ml|Long-Lasting Eau De Parfum|Luxury Fragrances|Fragrance For Modern Lifestyle|Ideal Gift For Him|Premium Scent For Men", "Beauty", "https://m.media-amazon.com/images/I/61BXRNekoEL._SY355_.jpg", "https://link.amazon/B07F5a57S", 299),
  createAmazonProduct("philips-bg1025-body-groomer-batch", "Philips Showerproof Body & Balls Trimmer for Men Private Parts | Bi-directional Trimming| Skin Safe Intimate Grooming | Skin Protection System | 2yrs Warranty | India's #1 Men's Trimmer* | BG1025", "Beauty", "https://m.media-amazon.com/images/I/61Wfuh9LXsL._SY450_.jpg", "https://link.amazon/B0ghqgxdR", 949),
  createAmazonProduct("areyzin-rechargeable-grooming-batch", "AREYZIN Nose Trimmer for Man 3-in-1 Multipurpose Nose Hair Remover Eyebrow Trimmer For Women- Rechargeable USB, Stainless Steel Blades, Waterproof - Perfect Grooming Gift", "Electronics", "https://m.media-amazon.com/images/I/71gucD4QkXL._SY450_.jpg", "https://link.amazon/B012Y5fH0", 719),
  createAmazonProduct("etsap-waterproof-grooming-batch", "Manual RAZOR Nasal RAZOR For Men Mini Portable Nose Hair Cutter Painless Waterproof Steel Nose Hair Remover For Women (1 Pc,Not Electric)", "Beauty", "https://m.media-amazon.com/images/I/51AXXxZMF7L._SY450_.jpg", "https://link.amazon/B02MXXgwc", 122),
  createAmazonProduct("wipro-cabinet-light-batch", "wipro 3W Surface Cabinet Striker Warmwhite(Pack of 1)-Polycarbonate", "Home & Kitchen", "https://m.media-amazon.com/images/I/61dSIu6oh5L._SX425_.jpg", "https://link.amazon/B048DMZe6", 125),
  createAmazonProduct("phitku-underarm-care-batch", "Phitku Crystal Roll On with Aloe Vera | Natural Alum | Brightens Dark Underarms, Kills Bacteria | Fragrance-Free & Alcohol Free | Men & Women | 100g", "Beauty", "https://m.media-amazon.com/images/I/51KQNUoi79L._SY355_.jpg", "https://link.amazon/B06r0EfmJ", 699),
  createAmazonProduct("del-monte-olive-oil-batch", "Del Monte Light Olive Oil (Imported) 2L Pet Bottle| Extra Light in Flavour & Aroma | Ideal for Everyday Indian Cooking – Deep Frying, Curries, Roasting & Sauteing | High MUFA & Rich in Antioxidants", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/51nx9rVS1UL._SX522_.jpg", "https://link.amazon/B0dYPhyGk", 1599),
  createAmazonProduct("farmley-pistachio-cashew-batch", "Farmley Date Bites, Dates Barfi Made with Dates, Pista, Cashews, Almonds, Honey and Pure Ghee, Dry Fruits Nuts, Healthy Snacks, Healthy Sweets, Gluten Free, No Refined Sugar, 200g (10 Pieces)", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/61gjai3z-6L._SX522_.jpg", "https://link.amazon/B07odznOx", 298),
  createAmazonProduct("right-shift-jaggery-cookies-batch", "Right Shift Jaggery Atta Cookies, 3 x120g| No Palm oil, Made with Butter | 0% Maida, Refined Sugar| With Goodness of 6 Nuts & Seeds| Anytime Snack", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/51MlcISx+GL._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg", "https://link.amazon/B07UBXFCo", 196),
  createAmazonProduct("right-shift-jaggery-digestive-biscuits-batch", "Right Shift Jaggery Ragi Cookies, 3x100g | No Palm Oil, No Maida, No Refined Sugar | High Fibre Digestive, Protein and Calcium Biscuits | Guilt Free Snacks for Adults", "Protein", "https://m.media-amazon.com/images/I/5162luaOBcL._SX522_PIbundle-3,TopRight,0,0_AA522SH20_.jpg", "https://link.amazon/B06gf3H2z", 175),
  createAmazonProduct("zerobeli-elaichi-biscuits-batch", "Zerobeli Premium Jowar Atta Digestive Biscuits with Elaichi - 375g | Healthy, Nutritious, and Delicious Cookies | Best Tea Time Snacks | 100% Vegetarian | No Refined Sugar, Palm Oil, Preservatives, or Colors", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/61L9hVo-2WL._SX522_.jpg", "https://link.amazon/B084qb9B0", 204),
  createAmazonProduct("kinder-schoko-bons-batch", "Dave's American Food Kinder Joy Schokobons Crispy 12Pcs, Milk And Cocoa Flavor,67.2Gm", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/61HKIei1oXL._SX522_PIbundle-12,TopRight,0,0_AA522SH20_.jpg", "https://link.amazon/B0iunNbGa", 141),
  createAmazonProduct("prohance-nutrition-vanilla-batch", "Prohance Nutrition and Food Powder, Vanilla, Pack of 400 g", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/512m0iEIGoL._SY450_.jpg", "https://link.amazon/B0cK7bUMf", 608),
  createAmazonProduct("urban-platter-california-prunes-batch", "Urban Platter Pitted California Prunes, 1Kg (Dried Plums | Unsweetened | Rich in fibre | Great for Digestion)", "Grocery & Gourmet Foods", "https://m.media-amazon.com/images/I/81fGw3oHXsL._SX522_.jpg", "https://link.amazon/B0eJmvRO8", 905),
  createAmazonProduct("temperia-skincare-headband-batch", "TEMPERIA Makeup Headband Wristband Set for Women & Girls | Hair Band for Facial Time | Head Bands Skincare Hairband for Spa | 3 Pieces Set | Pink", "Beauty", "https://m.media-amazon.com/images/I/51Fxk+uNHmL._SY355_PIbundle-3,TopRight,0,0_AA355SH20_.jpg", "https://link.amazon/B03ViZsqX", 141),
  createAmazonProduct("xfyt-facial-headband-batch", "XFyt Spa Hairband for women girls facials makeup | Stylish Super soft sponge headband hair bands (Black)", "Beauty", "https://m.media-amazon.com/images/I/61vdBPlE6cL._SY355_.jpg", "https://link.amazon/B0f582HI0", 199),
  createAmazonProduct("criyale-stretchable-headbands-batch", "CRIYALE 3 Pcs - Spa Facial Headband for Women Makeup Head Wrap Towel Terry Cloth Sport Headband | Non-Slip Stretchable Adjustble Elastic Polycotton Facial Band for Shower, Yoga, Gym (Multicolor)", "Beauty", "https://m.media-amazon.com/images/I/713anx0fHDL._SY355_PIbundle-3,TopRight,0,0_AA355SH20_.jpg", "https://link.amazon/B06zw5ohn", 199),
  createAmazonProduct("rixtec-cleansing-sponge-batch", "Face Cleansing Sponge Puff Makeup Washing Pad Deep Cleansing & Exfoliating Facial Sponge - Assorted Color Pack of 4", "Beauty", "https://m.media-amazon.com/images/I/51OcOVdFunL._SY355_.jpg", "https://link.amazon/B0grrZnUX", 122),
  createAmazonProduct("nivea-hydration-moisturizer-batch", "NIVEA Soft Hydration+ Serum Infused Gel Moisturizer for Plump & Bouncy Skin | Face Cream with Hyaluron & Niacinamide | 100Hr Hydration | Quick Absorbing Moisturiser for All Skin Types | 300ml", "Beauty", "https://m.media-amazon.com/images/I/51M1FoB3qYL._SY355_.jpg", "https://link.amazon/B03Sif7pT", 415),
  createAmazonProduct("fruit-moisturizing-product-batch", "Joy Skin Fruits Moisturizing Skin Cream With Apple, Jojoba & Almond Oil (500ml) | Quick Absorbing & Non Sticky Moisturizer for Face, Hands & Body | Skin Cream For Healthy and Soft Skin", "Beauty", "https://m.media-amazon.com/images/I/512jdc174-L._SY355_.jpg", "https://link.amazon/B058hvI1h", 348),
  createAmazonProduct("cerave-hyaluronic-moisturizer-batch", "CeraVe HA Water Gel with Hyaluronic Acid, Ceramides & Niacinamide for Plumpy hydration|Oil-free gel moisturizer| 3 sec fast absorption| Dermat recommended for Women & Men| 50 ml", "Beauty", "https://m.media-amazon.com/images/I/7194utqQCNL._SX466_.jpg", "https://link.amazon/B09VqpTSw", 899),
  createAmazonProduct("cetaphil-optimal-hydration-batch", "Cetaphil Optimal Hydration Restoring Water Gel 48 g – Lightweight 72H Weightless Hydrating Gel for Dry & Sensitive Skin | Daily Moisturisation Hydro Boost & Skin Refreshing Formula", "Beauty", "https://m.media-amazon.com/images/I/61f4+ejPHaL._SY355_.jpg", "https://link.amazon/B0548ArT8", 799),
  createAmazonProduct("cetaphil-moisturising-cream-80g-batch", "Cetaphil Moisturising Cream 100 g for Dry & Sensitive Skin | 48H Hydration with Almond Oil, Niacinamide & Panthenol | Rich Fragrance and Paraben Free Moisturiser, Prevents Moisture Loss & Repairs Skin Barrier | Dermatologist Recommended", "Beauty", "https://m.media-amazon.com/images/I/615fFn0PrZL._SY355_.jpg", "https://link.amazon/B09Pbi4UW", 688),
  createAmazonProduct("cetaphil-moisturising-product-batch", "Cetaphil Moisturising Lotion 118 ml for Dry to Normal & Sensitive Skin | 48H Hydration with Niacinamide, Panthenol & Glycerin | Fragrance-Free, Non-Greasy, Dermatologist Recommended, For Face and Body", "Beauty", "https://m.media-amazon.com/images/I/61AM9NwjeCL._SY355_.jpg", "https://link.amazon/B0hhIkQWe", 533),
  createAmazonProduct("cetaphil-sensitive-skin-serum-batch", "Cetaphil Advanced Recovery Serum 30ml | Night Routine | Skin Barrier Repair Face for Sensitive Skin | Hydrating & Soothing with Gallic Acid 2x More Effective than Vitamin C | Fragrance Free, Dermatologist Recommended", "Beauty", "https://m.media-amazon.com/images/I/71GZsbts+5L._SY355_.jpg", "https://link.amazon/B02Z6JlN3", 1489),
  createAmazonProduct("cetaphil-sun-protection-batch", "Cetaphil Sun SPF 50 Sunscreen Light Gel 50 ml – Very High Protection SPF 50+ Broad Spectrum UVA/UVB - Lightweight, Non-Sticky Gel - - Water resistant - Fast Absorbing Daily Face Sunscreen for Sensitive Skin - For All Skin Types", "Beauty", "https://m.media-amazon.com/images/I/61i+MR6iwkL._SY355_.jpg", "https://link.amazon/B0foKfeCz", 975),
  createAmazonProduct("cetaphil-brightening-night-cream-batch", "Cetaphil Brightening Night Comfort Cream - 50 g| For Dark Spots, Uneven Skin Tone| Hyaluronic Acid & Niacinamide| Fragrance Free| Dermatologist Recommended", "Beauty", "https://m.media-amazon.com/images/I/61-lKA6IGKL._SY355_.jpg", "https://link.amazon/B09clO0dC", 999),
  createAmazonProduct("cetaphil-hydrating-cleanser-batch", "Cetaphil Gentle Skin Hydrating Face Wash 236ml, Paraben Free, Sulphate-Free Gentle Skin Hydrating Cleanser with Niacinamide, Vitamin B5 for Dry to Normal, Sensitive Skin", "Beauty", "https://m.media-amazon.com/images/I/61xxiBVDoaL._SY355_.jpg", "https://link.amazon/B010J5kDV", 639),
  createAmazonProduct("cerave-hydrating-cleanser-batch", "CeraVe Hydrating Cleanser For Normal To Dry Skin (473ml) - Non-Foaming Face Wash with Hyaluronic Acid And Ceramides | Non-Comedogenic, Non-Irritating And Fragrance-Free Cleanser", "Beauty", "https://m.media-amazon.com/images/I/512UNGaJmAL._SX466_.jpg", "https://link.amazon/B03Gv9coB", 959),
  createAmazonProduct("salicylic-niacinamide-cleanser-batch", "Cerave Blemish Control Cleanser with 2% Salicylic Acid & Niacinamide for Acne Prone Skin, Controls Acne & Spots, Unclog Pores & Reduces Blemishes, 236ml", "Beauty", "https://m.media-amazon.com/images/I/51P0n7m3DNL._SX466_.jpg", "https://link.amazon/B09smns2P", 1100),
  createAmazonProduct("cosrx-honey-overnight-mask-batch", "Full Fit Propolis Honey Overnight Mask", "Beauty", "https://m.media-amazon.com/images/I/61sZPp5T+gL._SX466_.jpg", "https://link.amazon/B0eNGCVGf", 1750),
  createAmazonProduct("biodance-collagen-mask-batch", "Biodance Bio-Collagen Real Deep Mask, Hydrating Hydrogel, 34g x 4", "Beauty", "https://m.media-amazon.com/images/I/51ubxqzNGIL._SX466_PIbundle-4,TopRight,0,0_AA466SH20_.jpg", "https://link.amazon/B00CX5fIX", 1280),
  createAmazonProduct("creation-collagen-mask-batch", "Bio Collagen Deep Collagen Night Mask Hydrating Overnight Hydrogel Korean Glass Skin Mask For Deep Hydration Wrapping Peel Off Facial Mask Pack (Pack of 4)", "Beauty", "https://m.media-amazon.com/images/I/51u7VZpQLBL._SY355_PIbundle-4,TopRight,0,0_AA355SH20_.jpg", "https://link.amazon/B07AfR8Wb", 175),
  createAmazonProduct("collagen-wrinkle-mask-batch", "Swiss Beauty Hydra Anti Wrinkle Eye Serum Patch| Treats Dark Circles, Fine Lines And Wrinkles | Enriched With Collagen And Aloe Vera Extract | Shade- 01 Aloevera, 60 Pcs", "Beauty", "https://m.media-amazon.com/images/I/71C44eIvjaL._SY355_PIbundle-60,TopRight,0,0_AA355SH20_.jpg", "https://link.amazon/B0aevMIj4", 299),
  createAmazonProduct("bodywise-underarm-deodorant-batch", "Be Bodywise 6% AHA BHA Underarm Roll-on Deodorant for Even Tone Skin,Reduces Body Odor & Pigmentation | 1% Mandelic, 4% Lactic, 1% Salicylic & Kojic Acid, Alcohol & Aluminum Free |Flora Fragrance,50ml", "Beauty", "https://m.media-amazon.com/images/I/71cdcEWtZZL._SY355_.jpg", "https://link.amazon/B0bjelDbX", 399),
  createAmazonProduct("melame-pigmentation-care-batch", "Asaya Fade Forward Inner Thigh & Bum AHA Roll-On | Pigmentation Removal Serum For Dark Inner Thighs & Buttocks | For Women & Men | Non-Sticky & Soothing | MelaMe™ Complex, 10% AHAs & PHA, Inulin | 70ml", "Beauty", "https://m.media-amazon.com/images/I/610k0dz8kSL._SY355_.jpg", "https://link.amazon/B02sjsccL", 559),
  createAmazonProduct("amazon-product-listing-batch-93", "Craftooba Hand Painted Bengali Haat Pakha – Decorative Bamboo Hand Fan. Folk Art, 8.5 Inch – for Wedding, Puja & Wall Decor", "Home & Kitchen", "https://m.media-amazon.com/images/I/61mp9jRM9iL._SX425_.jpg", "https://link.amazon/A0bDFZTKV", 599),
];

export const PRODUCTS = [PRODUCT, ...ADDITIONAL_PRODUCTS, ...CATALOG_BATCH_PRODUCTS];

export function getProductUrl(product) {
  if (product.url) return product.url;

  const url = new URL("https://www.amazon.in/s");
  url.searchParams.set("k", product.name);
  url.searchParams.set("tag", "quicker04-21");
  return url.toString();
}

export default function ProductList({
  category,
  searchTerm,
  onCategoryChange,
  onAddToCart,
}) {
  const allProducts = PRODUCTS;
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase();
  const products = allProducts.filter((product) => {
    const matchesCategory =
      category === ALL_DEPARTMENTS || product.department === category;
    const searchableText = [
      product.name,
      product.department,
      product.category,
      product.description,
      ...(product.details || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase();
    const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="product-list" aria-labelledby="product-list-title">
      <h1 id="product-list-title">Browse products</h1>
      <div className="product-category-grid" aria-label="Product categories">
        {CATEGORIES.map((item) => {
          const count =
            item === ALL_DEPARTMENTS
              ? allProducts.length
              : allProducts.filter((product) => product.department === item).length;

          return (
            <button
              className={`product-category-card${category === item ? " selected" : ""}`}
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => onCategoryChange(item)}
            >
              <span>{item}</span>
              <small>{count} {count === 1 ? "product" : "products"}</small>
            </button>
          );
        })}
      </div>
      <h2 className="product-results-title">
        {normalizedSearch
          ? `Search results for "${searchTerm.trim()}"`
          : category === ALL_DEPARTMENTS
            ? "Featured products"
            : category}
      </h2>
      {normalizedSearch && (
        <p className="product-search-count" aria-live="polite">
          {products.length} {products.length === 1 ? "product" : "products"} found
        </p>
      )}
      {products.length > 0 ? (
        <ul className="product-list-items">
          {products.map((product) => (
            <li className="product-card" key={product.id}>
              {product.image && (
                <a
                  className="product-card-image-link"
                  href={getProductUrl(product)}
                  rel="sponsored noopener noreferrer"
                  aria-label={`View ${product.name} on Amazon`}
                >
                  <img className="product-card-image" src={product.image} alt={product.name} />
                </a>
              )}
              <div className="product-card-content">
                {product.category && <p className="product-card-category">{product.category}</p>}
                <h2>{product.name}</h2>
                {product.description && (
                  <p className="product-card-description">{product.description}</p>
                )}
                {product.details && (
                  <ul className="product-card-details">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
                {product.price != null ? (
                  <>
                    <p className="product-card-price">
                      {product.price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 2,
                      })}
                    </p>
                    <p className="product-card-price-note">
                      Price may change. Confirm the current price on Amazon.
                    </p>
                  </>
                ) : (
                  <p className="product-card-price-note">
                    Check the current price on Amazon.
                  </p>
                )}
                <a
                  className="product-card-link"
                  href={getProductUrl(product)}
                  rel="sponsored noopener noreferrer"
                  aria-label={`View ${product.name} on Amazon`}
                >
                  View product
                </a>
                <button
                  className="product-card-add"
                  type="button"
                  onClick={() => onAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="product-list-empty" role="status">
          No products found
          {normalizedSearch ? ` for "${searchTerm.trim()}"` : ` in ${category}`}.
        </p>
      )}
      <p className="product-list-disclosure">
        Product links open the corresponding Amazon product page. As an Amazon Associate I
        earn from qualifying purchases.
      </p>
    </section>
  );
}