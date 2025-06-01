# Random Advice Generator | WebAPP | API Free

**Author:** Bocaletto Luca  
**GitHub:** [bocaletto-luca](https://github.com/bocaletto-luca)  
**License:** GNU GPL v3  

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-Advice%20Slip%20JSON-9cf?style=flat-square&logo=data)

## Overview

**Random Advice Generator** is a single‑page web application that fetches random advice using the [Advice Slip JSON API](https://api.adviceslip.com/). In addition to fetching advice, the app allows users to save their favorite advice messages in a list and export this list in various formats (JSON, CSV, and SQL). Built with HTML5, CSS3, and vanilla JavaScript, this app is lightweight, responsive, and easy to use.

## Features

- **Random Advice Fetching:** Retrieve a new piece of advice instantly by clicking the "Get Advice" button.
- **Save Advice:** Add the displayed advice to a saved list with the "Add to List" button.
- **Export Options:** Export your saved advice list as:
  - **JSON:** For data interchange.
  - **CSV:** Compatible with spreadsheets and data analysis tools.
  - **SQL:** Generates SQL `INSERT` statements for database integration.
- **Responsive Design:** A modern, responsive UI that works seamlessly across devices.

## How It Works

1. **Fetch Advice:** The app sends a request to the Advice Slip JSON API (`https://api.adviceslip.com/advice`) to retrieve a random piece of advice.
2. **Display and Save:** The advice is displayed on the screen. Users can then click "Add to List" to save a copy to an internal list.
3. **Export Data:** Export buttons allow users to download the saved advice list in JSON, CSV, or SQL format. The exported data is generated dynamically using JavaScript and delivered via a download prompt.

## APIs Used

- **Advice Slip JSON API:** Provides random advice slips in JSON format.  
  [Visit API Documentation](https://api.adviceslip.com/)

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **API:** Advice Slip JSON API

## How To Use

1. **Open the Web App:** Simply open the `index.html` file in your preferred web browser.
2. **Get Advice:** Click the **"Get Advice"** button to fetch a new advice message.
3. **Save Your Favorite Advice:** If you like the advice, press **"Add to List"** to store it.
4. **Export Your Saved Advices:** Use the export buttons to download your saved advice in JSON, CSV, or SQL format.

## Contributing

Contributions are welcome! If you'd like to improve the project, please fork the repository and submit a pull request. For issues or feature requests, please use the [GitHub Issues](https://github.com/bocaletto-luca/your-repo/issues) page.

---

This repository documents the **Random Advice Generator** app, a single‑page solution integrating dynamic advice retrieval and data export features using free APIs. Enjoy and happy coding!
