#!/usr/bin/env python3
"""
Blog Post Creator for Jekyll Portfolio
Creates a new blog post with proper front matter and file naming.
"""

import os
import sys
from datetime import datetime
from pathlib import Path
import click
from dateutil import parser as date_parser


def slugify(text):
    """Convert text to a URL-friendly slug."""
    import re
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text.strip('-')


def create_post(title, date=None, tags=None, author=None, excerpt=None):
    """Create a new blog post file."""
    # Get the project root (parent of scripts directory)
    project_root = Path(__file__).parent.parent
    posts_dir = project_root / "_posts"

    # Ensure _posts directory exists
    posts_dir.mkdir(exist_ok=True)

    # Parse or use current date
    if date:
        try:
            post_date = date_parser.parse(date)
        except:
            click.echo(f"Error: Invalid date format '{date}'. Use YYYY-MM-DD", err=True)
            sys.exit(1)
    else:
        post_date = datetime.now()

    # Create filename: YYYY-MM-DD-title-slug.md
    title_slug = slugify(title)
    filename = f"{post_date.strftime('%Y-%m-%d')}-{title_slug}.md"
    filepath = posts_dir / filename

    # Check if file already exists
    if filepath.exists():
        click.echo(f"Error: Post already exists at {filepath}", err=True)
        sys.exit(1)

    # Prepare front matter
    front_matter = ["---"]
    front_matter.append(f'layout: post')
    front_matter.append(f'title: "{title}"')
    front_matter.append(f'date: {post_date.strftime("%Y-%m-%d")}')

    if author:
        front_matter.append(f'author: {author}')

    if tags:
        if isinstance(tags, str):
            tags_list = [tag.strip() for tag in tags.split(',')]
        else:
            tags_list = tags
        front_matter.append(f'tags: [{", ".join(f\'"{tag}"\' for tag in tags_list)}]')

    if excerpt:
        front_matter.append(f'excerpt: "{excerpt}"')

    front_matter.append("---")
    front_matter.append("")
    front_matter.append("Write your blog post content here using Markdown.")
    front_matter.append("")

    # Write file
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(front_matter))

        click.echo(f"✅ Created new blog post: {filepath}")
        click.echo(f"📝 Edit the file to add your content.")
        return filepath
    except Exception as e:
        click.echo(f"Error creating file: {e}", err=True)
        sys.exit(1)


@click.command()
@click.argument('title')
@click.option('--date', '-d', help='Post date (YYYY-MM-DD). Defaults to today.')
@click.option('--tags', '-t', help='Comma-separated list of tags')
@click.option('--author', '-a', help='Author name')
@click.option('--excerpt', '-e', help='Short excerpt for the post')
def main(title, date, tags, author, excerpt):
    """Create a new blog post for your Jekyll portfolio.

    Example:
        python scripts/new_post.py "My New Post" --tags "python,web" --excerpt "A great post"
    """
    create_post(title, date, tags, author, excerpt)


if __name__ == '__main__':
    main()

