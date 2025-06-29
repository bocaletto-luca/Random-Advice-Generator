 "use strict";

    document.addEventListener("DOMContentLoaded", function () {
      const adviceDisplay = document.getElementById("adviceDisplay");
      const generateBtn = document.getElementById("generateBtn");
      const saveBtn = document.getElementById("saveBtn");
  
      const exportJSONBtn = document.getElementById("exportJSONBtn");
      const exportCSVBtn = document.getElementById("exportCSVBtn");
      const exportSQLBtn = document.getElementById("exportSQLBtn");
  
      // Array to store saved advices
      let savedAdvices = [];
  
      // Function to fetch random advice from the API
      function fetchAdvice() {
        fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
          .then(response => response.json())
          .then(data => {
            adviceDisplay.textContent = data.slip.advice ? `"${data.slip.advice}"` : "No advice found.";
          })
          .catch(err => {
            adviceDisplay.textContent = "Unable to fetch advice. Please try again.";
            console.error("Error fetching advice:", err);
          });
      }
  
      // Update the saved advice list UI
      function updateSavedList() {
        const savedList = document.getElementById("savedList");
        savedList.innerHTML = "";
        savedAdvices.forEach((advice, index) => {
          const li = document.createElement("li");
          li.textContent = advice;
          savedList.appendChild(li);
        });
      }
  
      // Add current advice to the saved list
      function saveCurrentAdvice() {
        const currentAdvice = adviceDisplay.textContent;
        // Only add if the advice is not empty and not the default prompt text
        if (currentAdvice && currentAdvice !== "Click the button below to receive advice!" && currentAdvice !== "Unable to fetch advice. Please try again.") {
          savedAdvices.push(currentAdvice);
          updateSavedList();
        }
      }
  
      // Download helper function
      function downloadExport(data, filename, type) {
        const blob = new Blob([data], { type: type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
  
      // Export saved advices as JSON
      function exportAsJSON() {
        const data = JSON.stringify(savedAdvices, null, 2);
        downloadExport(data, "advices.json", "application/json");
      }
  
      // Export saved advices as CSV
      function exportAsCSV() {
        let csv = "Advice\n";
        savedAdvices.forEach(advice => {
          // Escape quotes by doubling them up
          const safeAdvice = advice.replace(/"/g, '""');
          csv += `"${safeAdvice}"\n`;
        });
        downloadExport(csv, "advices.csv", "text/csv");
      }
  
      // Export saved advices as SQL insert statements
      function exportAsSQL() {
        let sql = "";
        savedAdvices.forEach(advice => {
          // Escape single quotes by replacing with two single quotes
          const safeAdvice = advice.replace(/'/g, "''");
          sql += `INSERT INTO advices (advice) VALUES ('${safeAdvice}');\n`;
        });
        downloadExport(sql, "advices.sql", "text/plain");
      }
  
      // Event Listeners
      generateBtn.addEventListener("click", fetchAdvice);
      saveBtn.addEventListener("click", saveCurrentAdvice);
      exportJSONBtn.addEventListener("click", exportAsJSON);
      exportCSVBtn.addEventListener("click", exportAsCSV);
      exportSQLBtn.addEventListener("click", exportAsSQL);
  
      // Optionally, fetch advice on load
      fetchAdvice();
    });
