# 🎭 Fake Hosting Instructions for GENZYNEWS

This guide shows you how to make your site appear like it's hosted at:
`http://localhost/com4e-2026/GenzyNews/`

## 📋 Quick Steps

### Step 1: Build the Production Version
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Step 2: Start the Fake Host Server

**Option A: Using serve (Recommended)**
```bash
npm run fake-host
```

**Option B: Using vite preview**
```bash
npm run preview
```

### Step 3: Access Your Site

**With serve:**
- Open browser and go to: `http://localhost/com4e-2026/GenzyNews/`
- OR: `http://127.0.0.1/com4e-2026/GenzyNews/`

**With vite preview:**
- Open browser and go to: `http://localhost/com4e-2026/GenzyNews/`

---

## 🔧 Troubleshooting

### Port 80 is Already in Use
If you see an error about port 80, something else is using it. Try:

1. **Close Skype** (it often uses port 80)
2. **Stop any web servers** (Apache, IIS, etc.)
3. **Use a different port instead:**

Change the commands to use port 8080:
```bash
# For serve
npx serve dist -l 8080 -s

# For vite preview  
npx vite preview --port 8080
```

Then access at: `http://localhost:8080/com4e-2026/GenzyNews/`

### Need Admin/Sudo Access
Port 80 requires administrator privileges on some systems:

**Windows:**
- Run Command Prompt as Administrator
- Then run the commands

**Mac/Linux:**
```bash
sudo npm run fake-host
```

---

## 🎯 What You Get

✅ URL looks like: `localhost/com4e-2026/GenzyNews/`  
✅ No `:3000` or other port numbers visible  
✅ Appears like a real hosted site  
✅ Works exactly like the production version  
✅ All your data in localStorage persists  

---

## 🚀 For Actual Deployment

When you want to deploy to a real server (GitHub Pages, Netlify, cPanel):

1. Build: `npm run build`
2. Upload the **entire `dist` folder** contents
3. Place them in the `/com4e-2026/GenzyNews/` directory on your server
4. Access via your domain: `yourdomain.com/com4e-2026/GenzyNews/`

The site will work perfectly because we already configured the base path!

---

## 💡 Tips

- Keep port 80 free by closing other programs before running
- The "fake host" works great for demos and screenshots
- Your localStorage data is browser-specific, so use the same browser
- Press `Ctrl+C` in terminal to stop the server
