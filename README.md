# Anatashia Collection 🛍️

A modern, mobile-first fashion storefront built with **Next.js** and **Sanity CMS**. Customers browse products online and connect directly via WhatsApp to make purchases — no payment gateway required.

---

## ✨ Features

- 🛒 Product catalogue with category filtering and search
- 📱 Mobile-first, responsive design
- 💬 WhatsApp integration — customers contact the vendor directly to buy
- 🖼️ Multi-image product gallery per product
- ⭐ Featured products section on the homepage
- ✅ Available / Sold Out badge on each product
- 🎛️ Sanity Studio CMS — vendor manages products with zero technical knowledge
- 🔍 SEO-optimised pages with dynamic meta tags
- ⚡ Fast image loading via Next.js Image optimisation

---

## 🛠️ Tech Stack

### Frontend
| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Sanity Client](https://www.sanity.io/docs/js-client) | Fetching product data from Sanity |
| [@sanity/image-url](https://www.sanity.io/docs/image-url) | Optimised image URL generation |

### CMS
| Tool | Purpose |
|---|---|
| [Sanity.io](https://www.sanity.io/) | Headless CMS — stores all product data |
| Sanity Studio | Embedded at `/studio` — vendor dashboard |

### Backend (separate repo)
| Tool | Purpose |
|---|---|
| Django + DRF | REST API for leads, enquiries, analytics |
| PostgreSQL | Database for business logic data |

---

## 📁 Project Structure

```
anatashia-store/
├── app/
│   ├── page.js                        # Homepage
│   ├── products/
│   │   ├── page.js                    # All products catalogue
│   │   └── [slug]/
│   │       └── page.js                # Single product page
│   ├── about/
│   │   └── page.js                    # About page
│   ├── contact/
│   │   └── page.js                    # Contact page
│   └── studio/[[...tool]]/
│       └── page.jsx                   # Sanity Studio (embedded)
├── lib/
│   ├── sanity.js                      # Sanity client + image URL builder
│   └── queries.js                     # GROQ queries
├── sanity/
│   ├── schemaTypes/
│   │   ├── index.js                   # Schema registry
│   │   └── product.js                 # Product document schema
│   └── sanity.config.js               # Sanity configuration
├── components/                        # Reusable UI components
├── public/                            # Static assets
├── .env.local                         # Environment variables (not committed)
└── next.config.js                     # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)
- A [Sanity.io](https://sanity.io) account

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/anatashia-collection.git
cd anatashia-collection
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

> You can find your project ID on your [Sanity dashboard](https://sanity.io/manage).

### 4. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the storefront.
Open [http://localhost:3000/studio](http://localhost:3000/studio) to access Sanity Studio.

---

## 🗂️ Sanity CMS — Product Fields

| Field | Type | Description |
|---|---|---|
| `name` | String | Product name |
| `slug` | Slug | Auto-generated URL identifier |
| `price` | Number | Price in ₦ (Naira) |
| `category` | String | Clothes / Accessories / Bags / Shoes / Other |
| `images` | Image Array | Multiple product photos |
| `description` | Text | Product description |
| `sizes` | Array | Available sizes (XS–XXL) |
| `isAvailable` | Boolean | Marks product as Available or Sold Out |
| `isFeatured` | Boolean | Shows product on homepage |

---

## 💬 WhatsApp Integration

No payment gateway is needed. Every product page has a **"Contact on WhatsApp"** button that pre-fills a message:

```
Hi, I'm interested in [Product Name] priced at ₦[Price]
```

The vendor's WhatsApp number is configured via the Django backend `/api/config/` endpoint and fetched dynamically by the frontend.

---

## 🔌 Backend API Endpoints

The Django backend handles all non-product business logic:

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/leads/` | POST | Log WhatsApp button clicks |
| `/api/enquiries/` | POST | Save contact form submissions |
| `/api/analytics/view/` | POST | Track product page views |
| `/api/analytics/summary/` | GET | Top products & traffic insights (admin) |
| `/api/config/` | GET | Fetch store config (WhatsApp number) |
| `/api/webhook/sanity/` | POST | Sync Sanity product updates to PostgreSQL |

> Backend repo: [anatashia-collection-api](https://github.com/yourusername/anatashia-collection-api)

---

## 🌍 Deployment

### Frontend — Vercel
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Add your environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
4. Deploy ✅

Your cousin accesses the CMS at:
```
https://yoursite.vercel.app/studio
```

### Backend — Railway or Render
Deploy the Django backend separately and update the frontend API base URL.

---

## 📸 Pages Overview

| Page | Route | Description |
|---|---|---|
| Homepage | `/` | Hero banner + featured products |
| Catalogue | `/products` | All products with filter & search |
| Product Detail | `/products/[slug]` | Images, description, WhatsApp CTA |
| About | `/about` | Vendor story and info |
| Contact | `/contact` | WhatsApp link and social handles |
| Studio | `/studio` | Sanity CMS dashboard (vendor only) |

---

## 👩‍💼 For the Vendor

1. Go to `yoursite.com/studio`
2. Log in with your Sanity account
3. Click **Product** in the left sidebar
4. Click the ✏️ icon to create a new product
5. Fill in the name, price, upload photos, select category
6. Toggle **"Show on Homepage?"** to feature it
7. Click **Publish** — it goes live instantly ✅

---

## 📄 License

MIT © Anatashia Collection