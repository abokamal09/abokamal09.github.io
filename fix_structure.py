import shutil, os

# Source: old nested blog directory
src_posts = r"docs\blog\posts"
dst_posts = r"docs\posts"

# Move all posts to correct location
if os.path.isdir(src_posts):
    for fname in os.listdir(src_posts):
        src = os.path.join(src_posts, fname)
        dst = os.path.join(dst_posts, fname)
        shutil.copy2(src, dst)
        print(f"Copied {src} -> {dst}")

# Remove the entire old docs/blog directory
old_blog_dir = r"docs\blog"
if os.path.isdir(old_blog_dir):
    shutil.rmtree(old_blog_dir)
    print(f"Removed {old_blog_dir}")

# Remove docs/index.md if it exists  
index_md = r"docs\index.md"
if os.path.exists(index_md):
    os.remove(index_md)
    print(f"Removed {index_md}")

# List the final structure
print("\nFinal docs/ structure:")
for root, dirs, files in os.walk("docs"):
    level = root.replace("docs", "").count(os.sep)
    indent = "  " * level
    print(f"{indent}{os.path.basename(root)}/")
    for f in files:
        print(f"{indent}  {f}")
