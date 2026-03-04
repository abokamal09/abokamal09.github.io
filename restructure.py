import shutil
import os

# Create docs/posts 
os.makedirs('docs/posts', exist_ok=True)

# Move files from docs/blog/posts to docs/posts
src_dir = 'docs/blog/posts'
dest_dir = 'docs/posts'

if os.path.exists(src_dir):
    for filename in os.listdir(src_dir):
        shutil.move(os.path.join(src_dir, filename), os.path.join(dest_dir, filename))
    print("Moved posts.")
else:
    print("Source directory docs/blog/posts does not exist.")

# Remove docs/index.md
if os.path.exists('docs/index.md'):
    os.remove('docs/index.md')
    print("Deleted docs/index.md")

# Remove docs/blog
if os.path.exists('docs/blog'):
    shutil.rmtree('docs/blog')
    print("Deleted docs/blog")

print("Cleanup complete.")
