import { userData } from "./data.js";

let data = userData;
let savedTableData = localStorage.getItem('tableData');

if(savedTableData){
  data = savedTableData;
}

const tableHeadElement = document.getElementById("table-head");
const tableBodyElement = document.getElementById("table-body");
const previousButton = document.getElementById("previous-btn");
const nextButton = document.getElementById("next-btn");
const pageNoText = document.getElementById("page-no");

let currentPage = 1;
let dataLimit = 20;
let filteredData = [];
const URL = "https://jsonplaceholder.typicode.com/photos";

function getPaginatedData(data) {
  const startIndex = (currentPage - 1) * dataLimit;
  const endIndex = Math.min(startIndex + dataLimit, data.length);
  console.log(startIndex, endIndex);
  return data.slice(startIndex, endIndex);
}

function handleSearchInput(inputKey) {
  const searchInputValue = document.getElementById(
    `${inputKey}-search-input`
  ).value;
  const filterData = userData.filter((rowData) =>
    String(rowData[inputKey])
      .toLowerCase()
      .includes(String(searchInputValue).toLowerCase())
  );
  filteredData = filterData;
  currentPage = 1;
  pageNoText.innerText = currentPage;
  const paginatedFilterData = getPaginatedData(filteredData);
  createTableBody(paginatedFilterData);
}

function createTableHeader(tableData) {
  tableHeadElement.innerHTML = "";
  const tableHeaderKeys = Object.keys(tableData[0]);

  tableHeaderKeys.forEach((headerKey) => {
    const tableHeaderKeyElement = document.createElement("th");
    const searchInputElement = document.createElement("input");
    const searchInputId = `${headerKey}-search-input`;

    searchInputElement.setAttribute("type", "search");
    searchInputElement.setAttribute("placeholder", `Search ${headerKey}`);
    searchInputElement.setAttribute("id", searchInputId);
    searchInputElement.addEventListener("keyup", () =>
      handleSearchInput(headerKey)
    );

    tableHeaderKeyElement.innerText = headerKey;
    tableHeaderKeyElement.appendChild(searchInputElement);
    tableHeadElement.appendChild(tableHeaderKeyElement);
  });
}

function createTableBody(tableData) {
  tableBodyElement.innerHTML = "";

  tableData.forEach((rowData) => {
    const tableRowElement = document.createElement("tr");
    const tableRowValues = Object.values(rowData);
    tableRowValues.forEach((descriptionText) => {
      const tableDescriptionElement = document.createElement("td");
      tableDescriptionElement.innerText = descriptionText;
      tableRowElement.appendChild(tableDescriptionElement);
    });
    tableBodyElement.appendChild(tableRowElement);
  });
}

previousButton.addEventListener("click", () => {
  const currentData = filteredData.length ? filteredData : userData;

  currentPage = currentPage > 1 ? currentPage - 1 : 1;
  pageNoText.innerText = currentPage;
  createTableBody(getPaginatedData(currentData));
});

nextButton.addEventListener("click", () => {
  const currentData = filteredData.length ? filteredData : userData;

  const totalPages = Math.ceil(currentData.length / dataLimit);
  currentPage = currentPage < totalPages ? currentPage + 1 : totalPages;
  pageNoText.innerText = currentPage;
  createTableBody(getPaginatedData(currentData));
});

pageNoText.innerText = currentPage;

const fetchTableData = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.slice(0, 200);
};

fetchTableData()
  .then((data) => {
    localStorage.setItem('tableData', JSON.stringify(data))
    createTableHeader(data);
    createTableBody(getPaginatedData(data));
  })
  .catch((error) => {
    console.log(error);
  });