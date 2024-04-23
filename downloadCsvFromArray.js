function arrayToCSV(data) {
  let csvContent = "";

  // Iterate over the array and format each row as a comma-separated string
  data.forEach((row) => {
    const rowStr = row.map((cell) => `"${cell}"`).join(",");
    csvContent += rowStr + "\n";
  });

  return csvContent;
}

function downloadCSV(data, filename) {
  // Convert array data to CSV format
  const csvContent = arrayToCSV(data);

  // Create a Blob object with the CSV content
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  // Create a temporary URL for the Blob
  const url = window.URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename || "data.csv");
  link.style.display = "none";

  // Append the link to the body and click it to trigger the download
  document.body.appendChild(link);
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}

// Example usage:
const data = [
  ["Name", "Age", "City"],
  ["John", 30, "New York"],
  ["Alice", 25, "London"],
  ["Bob", 35, "Paris"],
];

// Download the array data as a CSV file named 'people.csv'
downloadCSV(data, "people.csv");
