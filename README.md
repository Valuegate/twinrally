# TwinRally (twin-rally-swain)

[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-cyan)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-orange)](https://ui.shadcn.com/)

**The Global Platform Connecting Twins Worldwide**

TwinRally is a comprehensive social platform exclusively designed for twins to connect, share experiences, host events, and build lifelong bonds. Combining social networking, event hosting, and community engagement features into one cohesive platform.

## 🏆 Vision

*"Facebook + Eventbrite + Discord, but exclusively for twins - blending social networking, events, and twin culture."*

## 🚀 Features

### 🌟 Core Platform Features
- **Community Hub**: Topic-based groups for interests (parenting, sports, music, careers)
- **Twin Finder**: Advanced search with filters by interests, age, language, and location
- **Events**: Host festivals, meetups, workshops with ticketing and live streaming
- **Messaging**: Private chats, group circles, and voice/video calls
- **Dashboard**: Personalized hub for events, messages, achievements, and insights

### 🔐 Authentication System
- Social-First Design: Google & Apple OAuth priorities
- Email Authentication: Traditional login/signup as secondary option
- Twin-Specific Registration: Collect twin relationship data
- Progressive Onboarding: Smooth social user experience

### 📱 Freemium Model
- **Free Tier**: Profile creation, public groups, basic messaging, event attendance
- **Premium Upgrade**: Event hosting, advanced filters, priority support, analytics

## 🛠 Technology Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite 7.1.2** - Fast build tool and dev server
- **React Router 7.8.2** - Client-side routing
- **Tailwind CSS 4.1.2** - Utility-first CSS framework

### UI & Components
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Plugins** - Fast refresh and development experience

## 📁 Project Structure

```
twinrally/
├── public/                      # Static assets
│   ├── twinrally_*.png         # Logo and branding images
│   └── ...
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── auth/                # Authentication components
│   │   │   ├── LoginForm.jsx
│   │   │   └── SignUpForm.jsx
│   │   ├── features/            # Feature showcases
│   │   │   └── FeaturesSection.jsx
│   │   ├── pricing/             # Pricing displays
│   │   │   └── PricingSection.jsx
│   │   ├── layout/              # Layout components
│   │   │   └── Footer.jsx
│   │   ├── ui/                  # UI primitives (shadcn/ui)
│   │   │   ├── button.jsx
│   │   │   └── AuthButtons.jsx
│   │   └── ...
│   ├── pages/                   # Route-level page components
│   │   ├── FeaturesPage.jsx
│   │   ├── PricingPage.jsx
│   │   └── AuthPages.jsx        # Login/Signup pages
│   ├── layouts/                 # Layout wrappers
│   │   └── AppLayout.jsx
│   ├── lib/                     # Utilities
│   │   └── utils.js
│   ├── App.jsx                  # Main application router
│   ├── main.jsx                 # Application entry point
│   ├── index.css                # Global styles & animations
│   └── App.css                  # Component styles
├── index.html                   # HTML template
└── package.json                 # Dependencies and scripts
```

## 🗺 Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | FeaturesPage | Default landing page with platform features |
| `/features` | FeaturesPage | Platform capabilities showcase |
| `/pricing` | PricingPage | Subscription plans and pricing |
| `/login` | LoginPage | User authentication |
| `/signup` | SignupPage | User registration |

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Valuegate/twinrally.git
   cd twinrally
   ```

2. **Checkout your branch**
   ```bash
   git checkout twin-rally-swain
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (default Vite port)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Linting

```bash
npm run lint
```

## 🎨 Design System

### Color Palette
```css
:root {
  --bg: #040e28;      /* Dark navy background */
  --pink: #fbc2eb;     /* Primary accent */
  --blue: #a6c0ee;     /* Secondary accent */
}
```

### Typography
- Gradient text effects for headings
- Glassmorphism card design
- Smooth animations and hover effects

### Components
- Responsive grid layouts
- Staggered entrance animations
- Consistent spacing and visual hierarchy

## 👥 Team Structure

### Core Team
- **Wasiu** (twin-rally-swain) - Authentication & Core Components
- **Precious** (precious-branch) - Landing Page & Navigation

### Branch Strategy
- `main` - Production-ready code
- `precious-branch` - Landing page development
- `twin-rally-swain` - Authentication system & components

## 🤝 Contributing

### Development Workflow

1. **Choose your feature branch** based on your assigned component
2. **Create a new branch** for specific features
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes** following the established patterns
4. **Test your changes** thoroughly
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add feature description"
   ```

6. **Push to your branch** and create a pull request
   ```bash
   git push origin feature/your-feature-name
   ```

### Component Guidelines

#### Authentication Components
- Use React hooks for state management
- Implement form validation
- Follow social-first design pattern
- Mock backend integration points

#### UI Components
- Use shadcn/ui foundation
- Implement proper accessibility
- Add hover effects and animations
- Ensure mobile responsiveness

#### Page Components
- Keep business logic in components
- Use consistent layout patterns
- Implement proper error handling

### Code Standards
- **React**: Functional components with hooks
- **Styling**: Tailwind utility classes
- **Naming**: PascalCase for components, camelCase for functions
- **Imports**: Group external, then internal imports
- **JSDoc**: Document all component props and functions

## 📝 Commit Conventions

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Testing related changes

## 🐛 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
```

**Build errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Styling not applying**
```bash
# Restart dev server
npm run dev
```

## 📄 Additional Documentation

- **[Project Documentation](./DOCUMENTATION.md)** - Detailed technical specs
- **[Component API](./src/components/README.md)** - Component documentation

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Contact team members through the project repository
- Check existing documentation first

---

**Built with ❤️ by the TwinRally Team**
