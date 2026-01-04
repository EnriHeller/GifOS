# GifOS - GIF Management Web App

GifOS is a web application for searching, creating, and managing GIFs, inspired by popular GIF platforms. It allows users to browse trending GIFs, create their own GIFs using webcam recording, save favorites, and manage personal GIF collections.

## Features

- **Home Page**: Search and browse GIFs with trending suggestions.
- **Create GIF**: Record and edit GIFs from webcam.
- **Favorites**: Save and manage favorite GIFs.
- **My GIFs**: View and manage user-created GIFs.
- **Responsive Design**: Works on desktop and mobile devices.

## Repository Structure

- **`index.html`**: Home page.
- **`crear-gifo.html`**: Create GIF page.
- **`favoritos.html`**: Favorites page.
- **`misgifos.html`**: My GIFs page.
- **`src/`**:
  - **`img/`**: Images and icons for different sections.
  - **`js/`**: JavaScript files for functionality.
    - `homeMain.js`: Home page logic.
    - `crearGifo.js`: GIF creation logic.
    - `favMain.js`: Favorites management.
    - `misGifos.js`: My GIFs management.
    - `trending.js`: Trending GIFs.
    - `functions.js`: Shared utilities.
    - `header.js` and `footer.js`: Navigation components.
  - **`styles/`**: CSS and SCSS files.
    - `style.css`: Compiled CSS.
    - `style.scss`: Main SCSS file.
    - `sass/`: Partial SCSS files for components.

## Prerequisites

- A modern web browser (Chrome, Firefox, etc.).
- Webcam access for GIF creation (optional).

## Installation and Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/EnriHeller/GifOS.git
   cd GifOS
   ```

2. Open `index.html` in a web browser:
   ```bash
   # On Linux/Mac
   open index.html
   # Or simply double-click the file
   ```

3. For development, use a local server to avoid CORS issues:
   ```bash
   python -m http.server 8000
   # Then open http://localhost:8000
   ```

## Technologies Used

- **HTML5**: Structure.
- **CSS3/SCSS**: Styling and responsive design.
- **JavaScript**: Interactivity and API integration.
- **Giphy API**: For GIF search and trending (assumed integration).

## API Integration

The app integrates with the Giphy API for fetching GIFs. Ensure you have an API key and configure it in the JavaScript files if needed.

## Author

- **Enrique Heller** - [EnriHeller](https://github.com/EnriHeller)

## License

This repository is for educational purposes. Use and modify freely, but cite the source for academic work.

## Contributing

Feel free to suggest improvements or add features via issues or pull requests.