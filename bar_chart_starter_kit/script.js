const list = document.querySelector("ul");
const maxColumns = 20;
const valueArr = [];

setInterval(generateColumn, 1000);

function generateColumn() {
  const newValue = Math.round(Math.random() * 100);
  valueArr.push(newValue);

  if (valueArr.length > maxColumns) {
    valueArr.shift(); 
  }

  updateChart();
  console.log(valueArr);
}

function updateChart() {
  list.innerHTML = ""; 

  for (let i = 0; i < maxColumns; i++) {
    const li = document.createElement("li");
    const value = valueArr[i] || 0; 
    li.style.setProperty("--height", value);
    list.appendChild(li);
  }
}
