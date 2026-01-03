# Quick Start Guide

## Running Locally with Jekyll

### 1. Install Ruby and Bundler

**Windows:**
- Download Ruby from [rubyinstaller.org](https://rubyinstaller.org/)
- Install and restart terminal

**macOS:**
```bash
brew install ruby
```

**Linux:**
```bash
sudo apt-get install ruby-full
```

### 2. Install Jekyll Dependencies

```bash
gem install bundler
bundle install
```

### 3. Start Jekyll Server

```bash
bundle exec jekyll serve
```

Visit: **http://localhost:4000**

## Creating a New Blog Post

### Using Python Script (Easiest)

1. **Install uv** (if not installed):
```bash
# Windows PowerShell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

2. **Install dependencies:**
```bash
uv sync
```

3. **Create a post:**
```bash
uv run python scripts/new_post.py "My Amazing Post" --tags "python,web" --excerpt "This is a great post"
```

The script will:
- ✅ Create a properly named file in `_posts/`
- ✅ Add correct front matter
- ✅ Use today's date (or specify with `--date`)

### Manual Method

1. Create file: `_posts/2024-03-20-my-post-title.md`
2. Add front matter:
```markdown
---
layout: post
title: "My Post Title"
date: 2024-03-20
tags: [tag1, tag2]
excerpt: "Short description"
---

Your content here...
```

That's it! Jekyll automatically:
- Generates the post page
- Adds it to blog listing
- Shows it on homepage

## Deploy to GitHub Pages

1. Push to `yourusername.github.io` repository
2. GitHub automatically builds and deploys
3. Site available at `https://yourusername.github.io`

No build step needed - GitHub does it for you!

