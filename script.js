let previousPrices = {};

function addStock() {
  const stock = document.getElementById("stockName").value.toUpperCase();

  if (stock === "") {
    alert("Please enter a stock symbol!");
    return;
  }

  // Check if stock already exists
  if (document.getElementById(`stock-${stock}`)) {
    alert("This stock is already being tracked!");
    return;
  }

  const stocksList = document.getElementById("stocksList");
  const newStock = document.createElement("div");
  newStock.className = "stock-card";
  newStock.id = `stock-${stock}`;

  newStock.innerHTML = `
        <div class="stock-header">
            <h3>${stock}</h3>
            <button onclick="this.closest('.stock-card').remove()" class="delete-btn">Delete</button>
        </div>
        <div class="stock-info">
            <p id="${stock}-price">Price: $0.00 <span class="trend-indicator"></span></p>
            <div class="alert-section">
                <input type="number" id="${stock}-alert" placeholder="Alert price" step="0.01">
                <button onclick="setAlert('${stock}')" class="alert-btn">Set Alert</button>
            </div>
        </div>
    `;

  stocksList.appendChild(newStock);
  document.getElementById("stockName").value = "";

  // Start price updates
  previousPrices[stock] = 50; // Start at $50
  updatePrice(stock);
}

function updatePrice(stock) {
  setInterval(function () {
    const previousPrice = previousPrices[stock];
    // Generate a more realistic price change
    const change = (Math.random() - 0.5) * 2; // Max $1 change up or down
    const price = previousPrice + change;

    const priceElement = document.getElementById(`${stock}-price`);
    if (priceElement) {
      // Check if element still exists
      const trendIndicator = change >= 0 ? "↗" : "↘";
      const colorClass = change >= 0 ? "price-up" : "price-down";

      priceElement.className = colorClass;
      priceElement.innerHTML = `Price: $${price.toFixed(
        2
      )} <span class="trend-indicator">${trendIndicator}</span>`;

      // Check alert price
      const alertInput = document.getElementById(`${stock}-alert`);
      if (
        alertInput &&
        alertInput.value &&
        price >= parseFloat(alertInput.value)
      ) {
        showNotification(
          `${stock} has reached your target price of $${alertInput.value}!`
        );
        alertInput.value = ""; // Clear the alert after triggering
      }

      previousPrices[stock] = price;
    }
  }, 2000);
}

function setAlert(stock) {
  const alertInput = document.getElementById(`${stock}-alert`);
  const alertPrice = alertInput.value;

  if (!alertPrice) {
    showNotification("Please enter an alert price first!", "error");
    return;
  }

  const currentPrice = previousPrices[stock];
  if (parseFloat(alertPrice) <= currentPrice) {
    showNotification(
      "Alert price should be higher than current price!",
      "error"
    );
    return;
  }

  showNotification(`Alert set for ${stock} at $${alertPrice}`);
}

function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#2ecc71" : "#e74c3c"};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        animation: slideIn 0.5s ease-out;
        z-index: 1000;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.5s ease-out";
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}
