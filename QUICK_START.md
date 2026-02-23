# Quick Start Guide - Portfolio Home Page

## ✅ Current Status

**Development Server**: Running at http://localhost:5173/
**Status**: All components loaded and ready
**Hot Reload**: Active

## 🚀 Quick Commands

```bash
# Development server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Key Files to Customize

### 1. Content & Data
```
src/constants/
├── index.js          # General content, services, skills
├── projects.js       # Development projects
└── designProjects.js # Design portfolio items
```

### 2. Main Components
```
src/components/layouts/
├── FirstSection.jsx  # Hero section - Update intro text
├── AboutSection.jsx  # About me - Update bio
├── Profile.jsx       # Profile image - Add your photo
```

### 3. Styling
```
src/
├── index.css         # Global styles & animations
└── tailwind.config.js # Colors, fonts, theme
```

## 🎨 Quick Customizations

### Change Primary Color
**File**: `tailwind.config.js`
```javascript
colors: {
  primeColor: "#ff014f", // Change this hex value
  designColor: "#ff014f", // Keep same as primeColor
}
```

### Update Profile Image
**File**: `src/components/layouts/FirstSection.jsx`
```jsx
<Profile imageUrl="/img/profile.png" />
```

### Modify Hero Text
**File**: `src/components/layouts/FirstSection.jsx`
```jsx
const developerRoles = ["Web", "Frontend", "Backend", ...];
const designerRoles = ["Graphic", "UI/UX", "Motion", ...];
```

### Change About Section
**File**: `src/components/layouts/AboutSection.jsx`
- Update the image path (line 16)
- Modify the description text (lines 22-26)

## 📊 Adding New Projects

### Development Projects
**File**: `src/constants/projects.js`
```javascript
{
  id: 1,
  title: "Project Name",
  desc: "Project description",
  img: "/img/projects/project.jpg",
  category: "Web Development",
  tech: ["React", "Node.js", "MongoDB"],
  demo: "https://demo-link.com",
  github: "https://github.com/username/repo"
}
```

### Design Projects
**File**: `src/constants/designProjects.js`
```javascript
{
  id: 1,
  title: "Design Name",
  description: "Design description",
  image: "/img/designs/design.jpg",
  category: "Logo Design",
  tools: ["Photoshop", "Illustrator"]
}
```

## 🔧 Common Issues & Fixes

### Issue: Components not showing
**Solution**: Check browser console for errors
```bash
# Open browser DevTools (F12)
# Check Console tab for errors
```

### Issue: Styles not applying
**Solution**: Restart dev server
```bash
# Stop server (Ctrl+C)
npm run dev
```

### Issue: Images not loading
**Solution**: Check image paths
- Images should be in `public/img/` folder
- Reference as `/img/filename.jpg` (not `public/img/`)

## 📱 Testing Responsiveness

### Browser DevTools
1. Press F12
2. Click device toolbar icon (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1440px

## 🎯 Section IDs for Navigation

Use these IDs for smooth scroll navigation:
- `#home` - FirstSection
- `#about` - AboutSection
- `#developer-section` - Developersection
- `#services` - ServiceSection
- `#skills` - SkillSection

## 📦 Project Structure

```
Portfolio/
├── public/
│   ├── img/          # All images
│   └── index.html    # Main HTML
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── constants/    # Data & content
│   ├── styles/       # Additional styles
│   ├── App.jsx       # Main app component
│   └── index.css     # Global styles
├── package.json      # Dependencies
└── vite.config.js    # Vite configuration
```

## 🌐 Deployment Checklist

Before deploying:
- [ ] Update all placeholder content
- [ ] Add real project images
- [ ] Update profile photo
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Run `npm run build`
- [ ] Test production build with `npm run preview`

## 📚 Documentation Files

- `HOME_PAGE_SETUP.md` - Complete setup documentation
- `COMPONENT_FLOW.md` - Visual component hierarchy
- `README.md` - Project readme

## 🆘 Need Help?

### Check These First:
1. Browser console for errors
2. Terminal for build errors
3. Component file imports
4. Image paths in public folder

### Common Commands:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 🎉 You're All Set!

Your portfolio home page is ready to go! 

**Next Steps:**
1. Open http://localhost:5173/ in your browser
2. Customize the content in `src/constants/`
3. Add your images to `public/img/`
4. Update the styling to match your brand

Happy coding! 🚀
