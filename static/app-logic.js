document.addEventListener('DOMContentLoaded', () => {
    // --- CACHE DOM ELEMENTS ---
    const form = document.getElementById('crop-form');
    const loadingSpinner = document.getElementById('loading-spinner');
    const dashboard = document.getElementById('recommendation-dashboard');
    const cropSelector = document.getElementById('crop-selector');
    const getCropInfoButton = document.getElementById('get-crop-info');
    const cropInfoDisplay = document.getElementById('crop-info-display');
    const phSlider = document.getElementById('ph');
    const phValue = document.getElementById('ph-value');
    const humiditySlider = document.getElementById('humidity');
    const humidityValue = document.getElementById('humidity-value');
    const weatherButton = document.getElementById('get-location-weather');
    const cropSearchInput = document.getElementById('crop-search-input');
    let suitabilityChart;
    let allCropsList = [];

    // --- CROP DATA ---
    const cropData = {
        'rice': { icon: 'fa-seedling', yieldPerAcre: 24, marketPrice: 2200 },
        'maize': { icon: 'fa-fan', yieldPerAcre: 20, marketPrice: 2000 },
        'chickpea': { icon: 'fa-leaf', yieldPerAcre: 8, marketPrice: 4800 },
        'kidneybeans': { icon: 'fa-seedling', yieldPerAcre: 10, marketPrice: 6000 },
        'pigeonpeas': { icon: 'fa-seedling', yieldPerAcre: 7, marketPrice: 6500 },
        'mothbeans': { icon: 'fa-leaf', yieldPerAcre: 4, marketPrice: 7000 },
        'mungbean': { icon: 'fa-seedling', yieldPerAcre: 5, marketPrice: 7200 },
        'blackgram': { icon: 'fa-seedling', yieldPerAcre: 6, marketPrice: 6800 },
        'lentil': { icon: 'fa-leaf', yieldPerAcre: 7, marketPrice: 6300 },
        'pomegranate': { icon: 'fa-apple-alt', yieldPerAcre: 80, marketPrice: 12000 },
        'banana': { icon: 'fa-apple-alt', yieldPerAcre: 300, marketPrice: 1500 },
        'mango': { icon: 'fa-apple-alt', yieldPerAcre: 40, marketPrice: 3000 },
        'grapes': { icon: 'fa-apple-alt', yieldPerAcre: 120, marketPrice: 4000 },
        'watermelon': { icon: 'fa-apple-alt', yieldPerAcre: 150, marketPrice: 1000 },
        'muskmelon': { icon: 'fa-apple-alt', yieldPerAcre: 100, marketPrice: 1200 },
        'apple': { icon: 'fa-apple-alt', yieldPerAcre: 100, marketPrice: 8000 },
        'orange': { icon: 'fa-apple-alt', yieldPerAcre: 120, marketPrice: 3500 },
        'papaya': { icon: 'fa-apple-alt', yieldPerAcre: 200, marketPrice: 2000 },
        'coconut': { icon: 'fa-fan', yieldPerAcre: 80, marketPrice: 4000 }, // Representing as a palm/fan
        'cotton': { icon: 'fa-fan', yieldPerAcre: 12, marketPrice: 6000 },
        'jute': { icon: 'fa-fan', yieldPerAcre: 18, marketPrice: 4500 },
        'coffee': { icon: 'fa-mug-hot', yieldPerAcre: 4, marketPrice: 25000 }
    };

    // --- API & DATA FETCHING ---
    async function fetchFromAPI(endpoint, options) {
        try {
            const response = await fetch(endpoint, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching from ${endpoint}:`, error);
            alert(`An error occurred while communicating with the server. Please check the console for details.`);
            return null;
        }
    }

    async function getRecommendation(data) {
        loadingSpinner.classList.remove('hidden');
        dashboard.classList.add('hidden');

        const result = await fetchFromAPI('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        loadingSpinner.classList.add('hidden');
        if (result) {
            displayResults(result);
            dashboard.classList.remove('hidden');
        }
    }

    async function populateCropSelector() {
        const data = await fetchFromAPI('/get_crop_names', { method: 'GET' });
        if (data && data.crop_names) {
            allCropsList = data.crop_names;
            cropSelector.innerHTML = '<option value="">-- Select a Crop --</option>';
            allCropsList.forEach(crop => {
                const option = document.createElement('option');
                option.value = crop;
                option.textContent = crop.charAt(0).toUpperCase() + crop.slice(1);
                cropSelector.appendChild(option);
            });
        }
    }

    async function getCropInfo(cropName) {
        const data = await fetchFromAPI('/get_crop_info', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ crop_name: cropName }),
        });

        if (data && data.guide) {
            displayCropInfo(data);
        }
    }


    // --- UI DISPLAY FUNCTIONS ---
    function displayResults(result) {
        // Top Crop
        document.getElementById('top-crop-name').textContent = result.top_crop.name;
        document.getElementById('top-crop-suitability').textContent = `${result.top_crop.suitability}%`;
        const topCropIcon = document.getElementById('crop-icon');
        topCropIcon.className = `fas ${cropData[result.top_crop.name.toLowerCase()]?.icon || 'fa-seedling'} text-7xl text-white`;

        // Other Crops
        const otherCropsList = document.getElementById('other-crops-list');
        otherCropsList.innerHTML = '';
        result.other_crops.forEach(crop => {
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center text-sm p-2 rounded-md bg-gray-100 dark:bg-gray-700';
            li.innerHTML = `
                <span><i class="fas ${cropData[crop.name.toLowerCase()]?.icon || 'fa-seedling'} mr-2 text-green-500"></i>${crop.name}</span>
                <span class="font-bold">${crop.suitability}%</span>`;
            otherCropsList.appendChild(li);
        });

        // Chart
        updateChart([result.top_crop, ...result.other_crops]);
        
        // Tips & Analysis
        displayTips(result.tips);
        
        // Profitability
        setupProfitabilityCalculator(result.top_crop.name);
    }
    
    function displayTips(tips) {
        // Analysis Details
        const analysisDetails = document.getElementById('analysis-details');
        analysisDetails.innerHTML = '';
        tips.analysis.forEach(item => {
            let statusColor = 'text-green-500';
            if (item.status === 'low') statusColor = 'text-yellow-500';
            if (item.status === 'high') statusColor = 'text-red-500';
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-700/50 rounded';
            li.innerHTML = `
                <div>
                    <span class="font-semibold">${item.parameter}</span>: 
                    <span class="text-gray-600 dark:text-gray-400">Your Value: ${item.user_value}, Ideal: ${item.ideal_value}</span>
                </div>
                <span class="font-bold text-sm ${statusColor}">${item.status.toUpperCase()}</span>`;
            analysisDetails.appendChild(li);
        });
        
        // Other tips
        document.getElementById('fertilizer-tip').textContent = tips.fertilizer;
        document.getElementById('irrigation-tip').textContent = tips.irrigation;
    }

    function displayCropInfo(data) {
        document.getElementById('crop-info-name').textContent = `Ideal Conditions for ${data.crop_name}`;
        const detailsContainer = document.getElementById('crop-info-details');
        detailsContainer.innerHTML = '';
        const details = [
            { icon: 'fa-vial', label: 'Nitrogen', value: `${data.guide.idealNitrogen} kg/ha` },
            { icon: 'fa-flask', label: 'Phosphorus', value: `${data.guide.idealPhosphorus} kg/ha` },
            { icon: 'fa-prescription-bottle', label: 'Potassium', value: `${data.guide.idealPotassium} kg/ha` },
            { icon: 'fa-balance-scale-right', label: 'pH', value: data.guide.idealPh },
            { icon: 'fa-thermometer-half', label: 'Temperature', value: `${data.guide.idealTemp} °C` },
            { icon: 'fa-tint', label: 'Humidity', value: `${data.guide.idealHumidity} %` },
            { icon: 'fa-cloud-rain', label: 'Rainfall', value: `${data.guide.idealRainfall} mm` }
        ];
        details.forEach(detail => {
            const div = document.createElement('div');
            div.className = 'bg-gray-100 dark:bg-gray-700 p-3 rounded-lg flex items-center';
            div.innerHTML = `<i class="fas ${detail.icon} w-6 text-center text-xl text-blue-500"></i><div class="ml-3"><p class="font-semibold">${detail.label}</p><p class="text-sm text-gray-600 dark:text-gray-400">${detail.value}</p></div>`;
            detailsContainer.appendChild(div);
        });
        cropInfoDisplay.classList.remove('hidden');
    }

    function updateChart(data) {
        const ctx = document.getElementById('suitability-chart').getContext('2d');
        const labels = data.map(crop => crop.name);
        const values = data.map(crop => crop.suitability);

        if (suitabilityChart) {
            suitabilityChart.destroy();
        }

        suitabilityChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Suitability %',
                    data: values,
                    backgroundColor: [
                        'rgba(52, 211, 153, 0.7)',
                        'rgba(96, 165, 250, 0.7)',
                        'rgba(167, 139, 250, 0.7)',
                        'rgba(251, 146, 60, 0.7)'
                    ],
                    borderColor: [
                        'rgba(52, 211, 153, 1)',
                        'rgba(96, 165, 250, 1)',
                        'rgba(167, 139, 250, 1)',
                        'rgba(251, 146, 60, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, max: 100 } },
                plugins: { legend: { display: false } }
            }
        });
    }
    
    function setupProfitabilityCalculator(topCropName) {
        const landSizeInput = document.getElementById('land-size');
        const marketPriceInput = document.getElementById('market-price');
        const calculateBtn = document.getElementById('calculate-profit');
        const resultDiv = document.getElementById('profit-result');
        const yieldSpan = document.getElementById('expected-yield');
        const profitSpan = document.getElementById('estimated-profit');
        
        const crop = cropData[topCropName.toLowerCase()];
        if (!crop) {
            resultDiv.classList.add('hidden');
            return;
        }

        // Set default market price for the top crop
        marketPriceInput.value = crop.marketPrice;

        calculateBtn.onclick = () => {
            const landSize = parseFloat(landSizeInput.value) || 0;
            const marketPrice = parseFloat(marketPriceInput.value) || 0;
            
            const expectedYield = crop.yieldPerAcre * landSize;
            const estimatedProfit = expectedYield * marketPrice;

            yieldSpan.textContent = expectedYield.toFixed(2);
            profitSpan.textContent = estimatedProfit.toLocaleString('en-IN', { maximumFractionDigits: 0 });
            resultDiv.classList.remove('hidden');
        };
        // Reset and hide on new recommendation
        resultDiv.classList.add('hidden');
    }


    // --- EVENT LISTENERS ---
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = {
            N: parseFloat(document.getElementById('nitrogen').value),
            P: parseFloat(document.getElementById('phosphorus').value),
            K: parseFloat(document.getElementById('potassium').value),
            ph: parseFloat(phSlider.value),
            temperature: parseFloat(document.getElementById('temperature').value),
            humidity: parseFloat(humiditySlider.value),
            rainfall: parseFloat(document.getElementById('rainfall').value),
        };
        getRecommendation(formData);
    });

    getCropInfoButton.addEventListener('click', () => {
        const selectedCrop = cropSelector.value;
        if (selectedCrop) {
            getCropInfo(selectedCrop);
        }
    });
    
    weatherButton.addEventListener('click', () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
            return;
        }

        const spinner = document.getElementById('weather-spinner');
        const buttonText = document.getElementById('weather-button-text');
        const originalText = buttonText.textContent;
        
        spinner.classList.remove('hidden');
        buttonText.textContent = 'Fetching...';

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // IMPORTANT: Replace with a real API key for production
            // Using a CORS proxy for development to bypass browser restrictions. For production, you'd call your own backend.
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            
            try {
                // NOTE: This OpenWeatherMap call may not work directly from a deployed site due to API key restrictions.
                // A better approach is to have a backend endpoint that fetches this data for the user.
                // As a fallback, we will use mock data for now.
                
                // Mock data since we can't securely use an API key on the frontend
                const mockWeatherData = {
                    main: { temp: 28 + (Math.random() * 5 - 2.5), humidity: 60 + (Math.random() * 20 - 10) },
                    // Assuming a mock rainfall value
                    rain: { '1h': Math.random() * 2 } 
                };
                
                document.getElementById('temperature').value = mockWeatherData.main.temp.toFixed(1);
                humiditySlider.value = Math.round(mockWeatherData.main.humidity);
                humidityValue.textContent = `${Math.round(mockWeatherData.main.humidity)}%`;
                updateSliderBackground(humiditySlider);

                // Rainfall is harder to get accurately, using a plausible random value
                document.getElementById('rainfall').value = (100 + Math.random() * 150).toFixed(1);
                
            } catch (error) {
                console.error('Error fetching weather data:', error);
                alert('Could not fetch weather data. Please enter manually.');
            } finally {
                 spinner.classList.add('hidden');
                 buttonText.textContent = originalText;
            }
        }, () => {
            alert('Unable to retrieve your location. Please enter manually.');
            spinner.classList.add('hidden');
            buttonText.textContent = originalText;
        });
    });

    phSlider.addEventListener('input', (e) => {
        phValue.textContent = parseFloat(e.target.value).toFixed(1);
        updateSliderBackground(e.target);
    });

    humiditySlider.addEventListener('input', (e) => {
        humidityValue.textContent = `${e.target.value}%`;
        updateSliderBackground(e.target);
    });

    cropSearchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCrops = allCropsList.filter(crop => crop.toLowerCase().includes(searchTerm));
        
        cropSelector.innerHTML = '<option value="">-- Select a Crop --</option>';
        filteredCrops.forEach(crop => {
            const option = document.createElement('option');
            option.value = crop;
            option.textContent = crop.charAt(0).toUpperCase() + crop.slice(1);
            cropSelector.appendChild(option);
        });
    });


    // --- UI HELPER FUNCTIONS ---
    function updateSliderBackground(slider) {
        const min = slider.min;
        const max = slider.max;
        const val = slider.value;
        const percentage = (val - min) * 100 / (max - min);
        const color = `linear-gradient(90deg, #4f46e5 ${percentage}%, #ddd ${percentage}%)`;
        slider.style.background = color;
    }
    
    function setupAccordion() {
        document.querySelectorAll('.accordion-button').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('.accordion-icon');
                
                // Optional: Close other accordions
                document.querySelectorAll('.accordion-content').forEach(c => {
                    if (c !== content) {
                        c.classList.add('hidden');
                    }
                });
                document.querySelectorAll('.accordion-icon').forEach(ic => {
                    if (ic !== icon) {
                        ic.classList.remove('rotate-180');
                    }
                });
                
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
    }

    function setupWelcomeModal() {
        const modal = document.getElementById('welcome-modal');
        const backdrop = document.getElementById('welcome-modal-backdrop');
        const closeButton = document.getElementById('close-welcome-modal');

        if (!modal || !backdrop || !closeButton) return; // Exit if elements don't exist

        const closeModal = () => {
            modal.classList.add('hidden');
            backdrop.classList.add('hidden');
            localStorage.setItem('hasSeenWelcomeModal', 'true');
        };

        closeButton.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);

        if (!localStorage.getItem('hasSeenWelcomeModal')) {
            modal.classList.remove('hidden');
            backdrop.classList.remove('hidden');
        }
    }


    // --- Run initial setup functions ---
    populateCropSelector();
    setupAccordion();
    updateSliderBackground(phSlider);
    updateSliderBackground(humiditySlider);
    setupWelcomeModal();
});
