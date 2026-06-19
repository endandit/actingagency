import ftplib
import os
from pathlib import Path

HOST = "87.253.149.117"
USER = "actingagency"
PASS = "4sGgVbhKbECe9rzuFQsM"
REMOTE_ROOT = "/public_html"
LOCAL_ROOT = Path(__file__).parent / "dist"

def ensure_dir(ftp, path):
    try:
        ftp.mkd(path)
    except ftplib.error_perm:
        pass  # already exists

def upload_dir(ftp, local_dir, remote_dir):
    ensure_dir(ftp, remote_dir)
    for item in sorted(local_dir.iterdir()):
        remote_path = f"{remote_dir}/{item.name}"
        if item.is_dir():
            upload_dir(ftp, item, remote_path)
        else:
            print(f"  uploading {item.relative_to(LOCAL_ROOT)}")
            with open(item, "rb") as f:
                ftp.storbinary(f"STOR {remote_path}", f)

def main():
    print(f"Connecting to {HOST}...")
    with ftplib.FTP(HOST, USER, PASS) as ftp:
        print("Connected.")
        upload_dir(ftp, LOCAL_ROOT, REMOTE_ROOT)
    print("\nDone.")

if __name__ == "__main__":
    main()
