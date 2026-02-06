# GENZYNEWS - Professional News Portal

A complete, production-ready news portal website built with React, TypeScript, and Tailwind CSS. 100% frontend-only with no backend dependencies.

## 🌟 Features

### Core Functionality
- **60+ Mock Articles** - Comprehensive news database with diverse categories
- **LocalStorage Backend** - All data persisted in browser storage
- **Bilingual Support** - Khmer & English content
- **Fully Responsive** - Mobile-first design with optimized layouts
- **Dark Mode Ready** - Complete dark theme support (toggle in header)

### Pages & Components
- **Home Page** - Hero section with featured articles, latest news, and category sections
- **Article Detail** - Full article view with comments, sharing, and related articles
- **Category Pages** - Filtered views for Politics, Sports, Entertainment, Technology, Business, Education, Society
- **Search** - Real-time article search through title, excerpt, and content
- **Authentication** - Login and signup with role-based access
- **Admin Dashboard** - Complete content management system

### Admin Features (Admin-only)
- **Statistics Overview** - Articles, users, views, and comments metrics
- **Article Management** - Create, edit, and delete articles with featured flag
- **Comment Moderation** - Approve, reject, or delete user comments
- **User Management** - View all users and manage accounts

### Design
- **Professional Color Scheme** - Red (#DC2626) to Gold (#F59E0B) gradient theme
- **Category Color Coding** - Each category has distinct color badge
- **Smooth Animations** - Hover effects, transitions, and interactions
- **Custom Scrollbar** - Branded scrollbar design
- **Print-Friendly** - Optimized print styles

## 🚀 Getting Started

### Default Admin Account
```
Email: admin@genzynews.com
Password: admin123
```

### Default User Accounts
```
Email: sopheak@email.com
Password: user123

Email: bopha@email.com
Password: user123
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Main navigation with user menu
│   │   ├── Footer.tsx          # Site footer with links
│   │   ├── Layout.tsx          # Page layout wrapper
│   │   └── ArticleCard.tsx     # Reusable article card
│   ├── pages/
│   │   ├── HomePage.tsx        # Main landing page
│   │   ├── ArticleDetailPage.tsx  # Single article view
│   │   ├── CategoryPage.tsx    # Category filtered articles
│   │   ├── SearchPage.tsx      # Search functionality
│   │   ├── LoginPage.tsx       # User login
│   │   ├── SignupPage.tsx      # User registration
│   │   ├── NotFoundPage.tsx    # 404 page
│   │   └── admin/
│   │       ├── AdminDashboard.tsx    # Admin overview
│   │       ├── AdminArticles.tsx     # Article management
│   │       ├── AdminComments.tsx     # Comment moderation
│   │       └── AdminUsers.tsx        # User management
│   ├── routes.tsx              # React Router configuration
│   └── App.tsx                 # Root component
├── lib/
│   ├── data.ts                 # Data management & localStorage
│   ├── types.ts                # TypeScript interfaces
│   └── utils.ts                # Helper functions
└── styles/
    ├── index.css               # Main styles
    ├── theme.css               # Tailwind theme
    ├── tailwind.css            # Tailwind imports
    └── fonts.css               # Font imports
```

## 🎨 Categories

- **Politics** - Government, policy, and political news
- **Sports** - Athletics, competitions, and sports updates
- **Entertainment** - Movies, music, and cultural events
- **Technology** - Tech innovations, startups, and digital news
- **Business** - Economy, trade, and business developments
- **Education** - Schools, learning, and educational initiatives
- **Society** - Community, environment, and social issues

## 💾 Data Management

All data is stored in browser localStorage:
- `genzynews_articles` - Article database
- `genzynews_users` - User accounts
- `genzynews_comments` - User comments
- `genzynews_current_user` - Active session

### CRUD Operations
The `lib/data.ts` file provides complete CRUD operations for:
- Articles (create, read, update, delete, search)
- Users (create, read, update, delete, authenticate)
- Comments (create, read, update status, delete)
- Statistics (aggregate metrics)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🎯 Key Features

### Image Handling
- Unsplash integration for high-quality images
- Fallback images on error
- Lazy loading with object-cover
- Proper aspect ratios (16:9 for articles)

### Comments System
- Login required to comment
- Approval workflow (pending → approved/rejected)
- Real-time display of approved comments
- Admin moderation interface

### Search Functionality
- Searches through article titles, excerpts, and content
- Case-insensitive matching
- Results count display
- Maintains search query in URL

### View Tracking
- Automatic view counting on article visits
- View count formatting (1K, 1M)
- Popular articles ranking

## 🔒 Authentication & Authorization

### User Roles
- **Admin**: Full access to dashboard and content management
- **User**: Can comment on articles, view content

### Protected Routes
Admin pages (`/admin/*`) automatically redirect to login if user is not authenticated or not an admin.

## 🎨 Styling

### Tailwind CSS v4
- Utility-first CSS framework
- Custom theme with brand colors
- Dark mode support
- Responsive design utilities

### Color Palette
- Primary: Red (#DC2626)
- Secondary: Amber/Gold (#F59E0B)
- Gray scale for neutrals
- Category-specific colors

## 🌐 Deployment

This is a static site that can be deployed to:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **cPanel** (simple file upload)
- Any static hosting service

### No Configuration Needed
- No environment variables
- No API keys
- No database setup
- No build configuration

## 📄 License

This project is built for educational and demonstration purposes.

## 🙏 Credits

- Built with React 18, TypeScript, and Tailwind CSS
- Icons from Lucide React
- Images from Unsplash
- Routing with React Router v7

---

**GENZYNEWS** - ព័ត៌មានថ្មីៗប្រចាំថ្ងៃ (Daily Latest News)
