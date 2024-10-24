# 📈 Stock Price Tracker

A simple, elegant web application for tracking real-time stock prices with customizable price alerts. Built with vanilla JavaScript, HTML, and CSS, this application provides a clean interface for monitoring multiple stocks simultaneously.

## 🚀 Features

- **Real-time Price Updates**: Monitor stock prices that update every 2 seconds
- **Multiple Stock Tracking**: Add and track multiple stocks simultaneously
- **Price Alerts**: Set custom price alerts for each stock
- **Visual Indicators**: Color-coded price changes with trend arrows
- **Responsive Design**: Works seamlessly across different screen sizes
- **Intuitive Interface**: Simple and user-friendly design
- **Animated Notifications**: Beautiful slide-in notifications for alerts and updates

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/stock-price-tracker.git
```

2. Navigate to the project directory:

```bash
cd stock-price-tracker
```

3. Open `index.html` in your preferred web browser.

## 💻 Usage

1. Enter a stock symbol in the input field
2. Click "Add Stock" to start tracking
3. Set price alerts by entering a target price and clicking "Set Alert"
4. Remove stocks by clicking the "Delete" button on the stock card

## 🏗️ Project Structure

```
stock-price-tracker/
│
├── index.html          # Main HTML file
├── styles.css         # CSS styles
├── script.js         # JavaScript functionality
└── README.md        # Project documentation
```

## 🎯 Key Components

### HTML Structure

- Responsive container layout
- Input section for adding new stocks
- Dynamic stock cards generation
- Footer with credits

### CSS Features

- Gradient background
- Card hover effects
- Smooth animations
- Responsive design
- Price change indicators

### JavaScript Functionality

- Real-time price simulation
- Price alert system
- Dynamic DOM manipulation
- Notification system
- Price trend visualization

## ⚙️ Technical Details

### Price Updates

- Prices update every 2 seconds
- Simulated price changes using random fluctuations
- Visual indicators for price movement (↗ for increase, ↘ for decrease)

### Alert System

- Custom price targets for each stock
- Visual and text notifications
- Automatic alert clearing after triggering

## 🎨 Customization

You can customize the application by modifying:

- Update interval in `updatePrice()` function (currently 2000ms)
- Price change range in the random calculation
- CSS variables for colors and animations
- Notification duration in `showNotification()` function

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rishit**

- Made with ❤️
- Track your favorite stocks in real-time!

## 🔮 Future Enhancements

- Integration with real stock market API
- Historical price charts
- Multiple alert levels
- Portfolio tracking
- Mobile app version
- Data persistence
- User accounts
