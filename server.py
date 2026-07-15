import http.server
import socketserver
import os

PORT = 8080

# Change this to the folder that contains your HTML file
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

os.chdir(DIRECTORY)

handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving on http://localhost:{PORT}/")
    httpd.serve_forever()

