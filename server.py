import http.server
import socketserver
import os
import sys

PORT = 5500
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class ReusableThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

Handler = http.server.SimpleHTTPRequestHandler

def main():
    try:
        with ReusableThreadingHTTPServer(("127.0.0.1", PORT), Handler) as httpd:
            print("=" * 65)
            print(f"  YADHU // DEEP SPACE UNIVERSE SERVER RUNNING")
            print(f"  Local URL: http://127.0.0.1:{PORT}")
            print(f"  Local URL: http://localhost:{PORT}")
            print("=" * 65)
            print("Press Ctrl+C to stop the server.")
            httpd.serve_forever()
    except OSError as e:
        print(f"Error starting server on port {PORT}: {e}")
        # Try alternate port 5501
        alt_port = 5501
        print(f"Attempting fallback on http://127.0.0.1:{alt_port}...")
        with ReusableThreadingHTTPServer(("127.0.0.1", alt_port), Handler) as httpd:
            print(f"Running on http://127.0.0.1:{alt_port}")
            httpd.serve_forever()

if __name__ == "__main__":
    main()
