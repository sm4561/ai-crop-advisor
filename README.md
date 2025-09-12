# AI Crop Advisor 🌾

An intelligent web application designed to help farmers make data-driven decisions. By analyzing soil and climatic conditions, this tool uses a machine learning model to recommend the most suitable crops for a specific piece of land, aiming to enhance agricultural productivity and sustainability.

---

## ✨ Key Features

* **Smart Crop Recommendation**: By inputting soil parameters (Nitrogen, Phosphorus, Potassium levels, and pH) and local climate conditions (Temperature, Humidity, and Rainfall), the core AI engine provides an instant recommendation for the most viable crop.

* **Detailed Suitability Analysis**: The application presents not just one, but a ranked list of the top four most suitable crops, each with a calculated suitability score to help users understand the confidence of the recommendation.

* **Pro-Tips Dashboard**: For the top recommended crop, the system generates a dashboard with actionable insights, including:
    * **Soil Health Comparison**: An analysis of the user's input data against the ideal conditions for that crop.
    * **Fertilizer Guidance**: Practical tips on fertilizer use based on the soil's nutrient profile.
    * **Irrigation Strategy**: Advice on water management tailored to the crop's needs.

* **Interactive User Experience**: The application includes several user-friendly features:
    * **Multi-language Support**: An interface that can be switched between English and several regional Indian languages.
    * **Geolocation for Weather**: A "Use My Location" feature to automatically fetch real-time local weather data.
    * **Crop Information Guide**: A searchable guide to look up the ideal growing conditions for any crop included in the database.
    * **Dynamic Theming**: A toggle for switching between light and dark modes for user comfort.

---

## 🛠️ Technology & Tools Used

This project was built using a combination of data science, backend, and frontend technologies to create a seamless, full-stack application.

* **Backend & Machine Learning**:
    * **Python**: The primary language for the backend logic and machine learning model.
    * **Flask**: A lightweight web framework used to build the server and API endpoints.
    * **Scikit-learn**: The core machine learning library used to train the crop recommendation model (a Random Forest Classifier).
    * **Pandas**: Used for data manipulation and handling the crop dataset during model training and analysis.
    * **Gunicorn**: A production-grade WSGI server used to run the Python application on the deployment platform.

* **Frontend**:
    * **HTML5**: The structure of the web application.
    * **Tailwind CSS**: A utility-first CSS framework for creating the modern and responsive design.
    * **JavaScript**: Powers all the client-side interactivity, including API calls to the backend, dynamic UI updates, and features like theme switching and language translation.

* **Deployment**:
    * **Git & GitHub**: Used for version control and source code management.
    * **Render**: The cloud platform used for deploying and hosting the live web application.
