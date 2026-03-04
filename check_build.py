import subprocess

result = subprocess.run(['venv\\Scripts\\mkdocs', 'build'], capture_output=True, text=True)
with open('build_log.txt', 'w') as f:
    f.write("STDOUT:\n")
    f.write(result.stdout)
    f.write("\nSTDERR:\n")
    f.write(result.stderr)
