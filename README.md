# Portfolio & Blog - Jekyll Edition

A modern, responsive portfolio and blog website built with Jekyll for GitHub Pages. Adding new blog posts is as simple as creating a markdown file!

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight
- 🎯 Smooth scrolling navigation
- 📝 **Easy blog posts** - Just create a markdown file!
- 💼 Project showcase
- 📧 Contact section with social links
- 🐍 Python script for creating new posts (using `uv`)

## Quick Start

### Prerequisites

- Ruby (for Jekyll)
- Python 3.8+ (for blog post management script)
- [uv](https://github.com/astral-sh/uv) - Fast Python package manager

### Local Development

1. **Install Jekyll dependencies:**

```bash
bundle install
```

2. **Run Jekyll locally:**

```bash
bundle exec jekyll serve
```

3. **Visit** `http://localhost:4000` in your browser

### Setting up Python Blog Manager

1. **Install uv** (if not already installed):

```bash
# On Windows (PowerShell)
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

# On macOS/Linux
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. **Install Python dependencies:**

```bash
uv sync
```

3. **Create a new blog post:**

```bash
# Using uv
uv run python scripts/new_post.py "My New Post Title" --tags "python,web" --excerpt "A great post about..."

# Or directly with Python
python scripts/new_post.py "My New Post Title" --tags "python,web"
```

## Adding Blog Posts

### Method 1: Using the Python Script (Recommended)

The easiest way to create a new blog post:

```bash
uv run python scripts/new_post.py "Your Post Title" --tags "tag1,tag2" --excerpt "Short description"
```

Options:

- `--date` or `-d`: Post date (YYYY-MM-DD). Defaults to today.
- `--tags` or `-t`: Comma-separated list of tags
- `--author` or `-a`: Author name
- `--excerpt` or `-e`: Short excerpt for the post

Example:

```bash
uv run python scripts/new_post.py "Getting Started with Python" --tags "python,programming" --excerpt "Learn Python basics" --date "2024-03-20"
```

### Method 2: Manual Creation

1. Create a new file in `_posts/` directory
2. Name it: `YYYY-MM-DD-your-title-slug.md`
3. Add front matter:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-03-20
tags: [tag1, tag2]
excerpt: "Short description"
---

Your content here using Markdown...
```

That's it! Jekyll will automatically:

- Generate the post page
- Add it to the blog listing
- Include it in the homepage "Latest Posts" section
- Create proper URLs

## Deploying to GitHub Pages

1. **Create a repository** named `yourusername.github.io` (replace `yourusername` with your GitHub username)

2. **Push your code:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. **GitHub Pages will automatically:**

   - Build your Jekyll site
   - Deploy it to `https://yourusername.github.io`
   - Rebuild on every push

4. **(Optional)** Go to repository Settings → Pages to configure custom domain

## Customization

### Site Configuration

Edit `_config.yml` to customize:

- Site title and description
- Author information
- Social media links
- Jekyll settings

### Personal Information

1. **Name and Title**: Update `_config.yml`:

   ```yaml
   author: Your Name
   ```

2. **About Section**: Edit `index.html`

3. **Skills**: Modify the skill tags in `index.html`

4. **Projects**: Update the project cards in `index.html`

5. **Contact Links**: Update social links in `_config.yml`:
   ```yaml
   github_username: yourusername
   linkedin_username: yourusername
   twitter_username: yourusername
   ```

### Styling

- **Colors**: Modify CSS variables in `assets/css/styles.css` (in the `:root` selector)
- **Fonts**: Change the Google Fonts import in `_layouts/default.html`
- **Layout**: Adjust grid and flexbox properties in `assets/css/styles.css`

## File Structure

```
portfolio/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Main layout
│   └── post.html        # Blog post layout
├── _includes/           # Reusable components
│   ├── nav.html        # Navigation
│   └── footer.html     # Footer
├── _posts/             # Blog posts (markdown files)
│   ├── 2024-03-15-post-title.md
│   └── ...
├── assets/             # Static assets
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
├── scripts/            # Python scripts
│   └── new_post.py     # Blog post creator
├── index.html          # Homepage
├── blog.html           # Blog listing page
├── Gemfile             # Ruby dependencies
├── pyproject.toml      # Python dependencies
└── README.md           # This file
```

## Blog Post Format

Each blog post is a Markdown file with front matter:

````markdown
---
layout: post
title: "Your Post Title"
date: 2024-03-20
author: Your Name
tags: [tag1, tag2, tag3]
excerpt: "Short description that appears in listings"
---

Your full blog post content here using Markdown.

## Headings

You can use all standard Markdown features:

- Lists
- **Bold** and _italic_ text
- [Links](https://example.com)
- Code blocks

```python
def hello():
    print("Hello, World!")
```
````

And more!

````

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Jekyll won't start

```bash
# Make sure you have Ruby and Bundler installed
ruby --version
gem install bundler
bundle install
````

### Blog posts not showing

- Check file naming: `YYYY-MM-DD-title.md`
- Verify front matter is correct
- Restart Jekyll server

### Python script errors

```bash
# Make sure uv is installed
uv --version

# Reinstall dependencies
uv sync
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Built with ❤️ using:

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [uv](https://github.com/astral-sh/uv) - Fast Python package manager
- Vanilla HTML, CSS, and JavaScript
