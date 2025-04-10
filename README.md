<h1 align="center">☀️ Welcome to WeatherPulse App 🌦</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
</p>

<p align="center">A real-time weather application built with HTML, CSS, JavaScript, and OpenWeatherMap API</p>

---

## 🌟 Overview

WeatherPulse is a simple and interactive weather application that enables users to check the weather of any city in real-time.  
Built with HTML, CSS, and JavaScript, it fetches data from the OpenWeatherMap API and presents users with live weather updates.

### 🌍 **Live Demo** (If hosted)

👉 **Frontend:** [Click here](https://weather-pulse-psi.vercel.app/)  

---

## 🚀 Features

✔️ **Live Weather Data:** Users can enter a city name and fetch current weather details  
✔️ **Temperature Display:** Shows temperature in Celsius  
✔️ **Weather Icons:** Displays icons representing weather conditions  
✔️ **Humidity & Wind Speed:** Provides additional weather details  
✔️ **Error Handling:** Alerts users for incorrect city names or API issues  
✔️ **Responsive Design:** Works on mobile & desktop screens  

---

## 🛠️ Technologies Used

<div align="center">

### **Frontend**
<img src="https://img.shields.io/badge/HTML5-000000?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">

### **API**
<img src="https://img.shields.io/badge/OpenWeatherMap_API-FFA500?style=for-the-badge&logo=openweathermap&logoColor=white" alt="OpenWeatherMap">

### **Development Tools**
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">

</div>

---

## 📌 Installation Steps

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/yourusername/weatherpulse.git
cd weatherpulse
```

### **2️⃣ Install dependencies (if using Vite)**
```bash
npm install
```

### **3️⃣ Set up environment variables**  
Create a `.env` file in the project root:
```
VITE_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
```

### **4️⃣ Start the development server**
```bash
npm run dev
```

---

## 📂 Project Structure

```
weatherpulse/
├── index.html
├── style.css
├── main.js
├── .env
├── assets/
│   ├── favicon.ico
│   ├── weather-icons/
```

---

## 🔗 API Integration

WeatherPulse uses the **OpenWeatherMap API** to fetch real-time weather updates.  
The API Key is stored securely using the `.env` file.  

Example API Call:
```bash
https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=YOUR_API_KEY
```

---

## 🛠️ Error Handling

✔️ **Invalid city name:** Displays `City not found. Please check spelling.`  
✔️ **API issues:** Shows `Failed to fetch weather data.`  

---

## 🔮 Future Enhancements

✅ Add **5-day weather forecasts**  
✅ Allow users to **switch between Celsius & Fahrenheit**  
✅ Introduce **dark mode UI** for better experience  

---

## 🤝 Contribution

Contributions are **welcome**!  
To contribute, follow these steps:

1️⃣ **Fork the repository**  
2️⃣ **Create your feature branch (`git checkout -b feature-xyz`)**  
3️⃣ **Commit your changes (`git commit -m 'Added XYZ feature'`)**  
4️⃣ **Push to the branch (`git push origin feature-xyz`)**  
5️⃣ **Submit a pull request**  

---

## 📄 License

WeatherPulse is **MIT Licensed** – Free for personal & commercial use.  

---

<h1 align="center">☀️ Thank You for Using WeatherPulse App! 🚀</h1>

---

