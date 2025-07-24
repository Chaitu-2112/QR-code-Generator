# QR-code-Generator
A simple Node.js CLI application that generates a QR code from a user-provided URL. It uses the inquirer package to collect input, qr-image to create the QR code, and fs to save both the QR image and the original URL into files. This is a beginner-friendly utility demonstrating command-line interactivity and file system operations in Node.js.

# A simple Node.js command-line tool that generates a QR code image from a URL provided by the user.

## 📌 Features

- Accepts URL input from the user using `inquirer`
- Generates a QR code using `qr-image`
- Saves the QR code as a `.png` file
- Stores the original URL in a `.txt` file



### 🔧 Prerequisites

Make sure you have Node.js installed:

```bash
node -v
