# Running the Site Locally

## Method 1: Using Jekyll (Recommended)

### Step 1: Install Ruby
1. Download Ruby+Devkit from: https://rubyinstaller.org/
2. Choose the latest **Ruby+Devkit** version
3. Run the installer and check "Add Ruby executables to your PATH"
4. **Restart your terminal** after installation

### Step 2: Install Dependencies
```bash
cd C:\Users\pedir\Desktop\portfolio\yashasvi-pvv.github.io
gem install bundler
bundle install
```

### Step 3: Run Jekyll Server
```bash
bundle exec jekyll serve
```

### Step 4: View Site
Open your browser and go to: **http://localhost:4000**

The site will automatically reload when you make changes to files.

---

## Method 2: Quick Preview (Without Jekyll)

If you just want to see the static files quickly (but Jekyll templates won't work):

```bash
cd C:\Users\pedir\Desktop\portfolio\yashasvi-pvv.github.io
python -m http.server 8000
```

Then visit: **http://localhost:8000**

**Note:** This won't process Jekyll templates, so blog posts and dynamic content won't work properly.

---

## Troubleshooting

### "bundle: command not found"
- Make sure Ruby is installed and terminal is restarted
- Try: `gem install bundler`

### "jekyll: command not found"
- Run: `bundle install` first
- Then use: `bundle exec jekyll serve`

### Port already in use
- Jekyll uses port 4000 by default
- Change it: `bundle exec jekyll serve --port 4001`

### Windows-specific issues
- Make sure you installed **Ruby+Devkit**, not just Ruby
- Restart terminal after installation
- Run terminal as Administrator if needed

---

## What Jekyll Does

Jekyll processes:
- ✅ Blog posts from `_posts/` folder
- ✅ Liquid templates (`{{ }}` syntax)
- ✅ Layouts and includes
- ✅ Site configuration from `_config.yml`
- ✅ Generates static HTML files

Without Jekyll, you'll see raw template code instead of rendered content.

