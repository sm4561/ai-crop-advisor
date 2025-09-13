document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            title: "AI Crop Advisor", enterFarmData: "Enter Farm Data", soilParameters: "Soil Parameters (per kg)",
            nitrogen: "Nitrogen (N) Content", phosphorus: "Phosphorus (P) Content", potassium: "Potassium (K) Content",
            ph: "Soil pH (0-14)", climaticConditions: "Climatic Conditions", useMyLocation: "Use My Location",
            temperature: "Temperature (°C)", humidity: "Humidity (%)", rainfall: "Rainfall (mm)",
            getRecommendation: "Get Recommendation", cropInfoGuide: "Crop Information Guide", searchCrop: "Search Crop",
            selectCrop: "Select a Crop", topRecommendation: "Top Recommendation", suitability: "Suitability",
            otherCrops: "Other Suitable Crops", suitabilityAnalysis: "Suitability Analysis", analysisAndTips: "Analysis & Pro Tips",
            soilHealthAnalysis: "Soil Health Analysis", fertilizerTip: "Fertilizer Tip", irrigationTip: "Irrigation Tip",
            profitabilityEstimator: "Profitability Estimator", landSize: "Land Size (in acres)",
            marketPrice: "Expected Market Price (per quintal)", calculate: "Calculate", expectedYield: "Expected Yield",
            estimatedProfit: "Estimated Profit", welcomeTitle: "Welcome to the AI Crop Advisor!",
            welcomeSubtitle: "Your personal guide to smarter farming.",
            welcomeMethod1Title: "Method 1: Get a Recommendation",
            welcomeMethod1Desc: "Don't know what to plant? Enter your farm's soil and climate data on the left, and our AI will recommend the most suitable crops for you.",
            welcomeMethod2Title: "Method 2: Crop Information Guide",
            welcomeMethod2Desc: "Already know which crop you're interested in? Use the guide on the left to select a crop and instantly see its ideal growing conditions.",
            welcomeButton: "Get Started",
        },
        hi: {
            title: "एआई फसल सलाहकार", enterFarmData: "खेत का डेटा दर्ज करें", soilParameters: "मृदा पैरामीटर (प्रति किलो)",
            nitrogen: "नाइट्रोजन (N) सामग्री", phosphorus: "फॉस्फोरस (P) सामग्री", potassium: "पोटेशियम (K) सामग्री",
            ph: "मिट्टी का पीएच (0-14)", climaticConditions: "जलवायु की स्थिति", useMyLocation: "मेरा स्थान उपयोग करें",
            temperature: "तापमान (°C)", humidity: "नमी (%)", rainfall: "वर्षा (मिमी)", getRecommendation: "सिफारिश प्राप्त करें",
            cropInfoGuide: "फसल सूचना गाइड", searchCrop: "फसल खोजें", selectCrop: "एक फसल चुनें", topRecommendation: "शीर्ष सिफारिश",
            suitability: "उपयुक्तता", otherCrops: "अन्य उपयुक्त फसलें", suitabilityAnalysis: "उपयुक्तता विश्लेषण",
            analysisAndTips: "विश्लेषण और प्रो टिप्स", soilHealthAnalysis: "मृदा स्वास्थ्य विश्लेषण", fertilizerTip: "उर्वरक टिप",
            irrigationTip: "सिंचाई टिप", profitabilityEstimator: "लाभप्रदता अनुमानक", landSize: "भूमि का आकार (एकड़ में)",
            marketPrice: "अपेक्षित बाजार मूल्य (प्रति क्विंटल)", calculate: "गणना करें", expectedYield: "अपेक्षित उपज",
            estimatedProfit: "अनुमानित लाभ", welcomeTitle: "एआई फसल सलाहकार में आपका स्वागत है!",
            welcomeSubtitle: "स्मार्ट खेती के लिए आपका व्यक्तिगत गाइड।",
            welcomeMethod1Title: "विधि 1: एक सिफारिश प्राप्त करें",
            welcomeMethod1Desc: "पता नहीं क्या लगाना है? बाईं ओर अपने खेत की मिट्टी और जलवायु डेटा दर्ज करें, और हमारा एआई आपके लिए सबसे उपयुक्त फसलों की सिफारिश करेगा।",
            welcomeMethod2Title: "विधि 2: फसल सूचना गाइड",
            welcomeMethod2Desc: "पहले से ही पता है कि आप किस फसल में रुचि रखते हैं? एक फसल का चयन करने के लिए बाईं ओर गाइड का उपयोग करें और तुरंत इसकी आदर्श बढ़ती स्थितियों को देखें।",
            welcomeButton: "शुरू हो जाओ",
        },
        bn: {
            title: "এআই ফসল উপদেষ্টা", enterFarmData: "খামারের ডেটা প্রবেশ করান", soilParameters: "মাটির প্যারামিটার (প্রতি কেজি)",
            nitrogen: "নাইট্রোজেন (N) সামগ্রী", phosphorus: "ফসফরাস (P) সামগ্রী", potassium: "পটাসিয়াম (K) সামগ্রী",
            ph: "মাটির পিএইচ (0-14)", climaticConditions: "জলবায়ু পরিস্থিতি", useMyLocation: "আমার অবস্থান ব্যবহার করুন",
            temperature: "তাপমাত্রা (°C)", humidity: "আর্দ্রতা (%)", rainfall: "বৃষ্টিপাত (মিমি)", getRecommendation: "সুপারিশ পান",
            cropInfoGuide: "ফসল তথ্য গাইড", searchCrop: "ফসল অনুসন্ধান করুন", selectCrop: "একটি ফসল নির্বাচন করুন", topRecommendation: "শীর্ষ সুপারিশ",
            suitability: "উপযুক্ততা", otherCrops: "অন্যান্য উপযুক্ত ফসল", suitabilityAnalysis: "উপযুক্ততা বিশ্লেষণ",
            analysisAndTips: "বিশ্লেষণ এবং প্রো টিপস", soilHealthAnalysis: "মাটির স্বাস্থ্য বিশ্লেষণ", fertilizerTip: "সার টিপ",
            irrigationTip: "সেচ টিপ", profitabilityEstimator: "লাভজনকতা অনুমানকারী", landSize: "জমির আকার (একর)",
            marketPrice: "প্রত্যাশিত বাজার মূল্য (প্রতি কুইন্টাল)", calculate: "গণনা করুন", expectedYield: "প্রত্যাশিত ফলন",
            estimatedProfit: "আনুমানিক লাভ", welcomeTitle: "এআই ফসল উপদেষ্টাতে স্বাগতম!",
            welcomeSubtitle: "স্মার্ট চাষের জন্য আপনার ব্যক্তিগত গাইড।",
            welcomeMethod1Title: "পদ্ধতি 1: একটি সুপারিশ পান",
            welcomeMethod1Desc: "কী রোপণ করবেন জানেন না? বাম দিকে আপনার খামারের মাটি এবং জলবায়ু ডেটা প্রবেশ করান, এবং আমাদের এআই আপনার জন্য সবচেয়ে উপযুক্ত ফসলের সুপারিশ করবে।",
            welcomeMethod2Title: "পদ্ধতি 2: ফসল তথ্য গাইড",
            welcomeMethod2Desc: "আপনি কোন ফসলে আগ্রহী তা ইতিমধ্যে জানেন? একটি ফসল নির্বাচন করতে বাম দিকের গাইডটি ব্যবহার করুন এবং অবিলম্বে এর আদর্শ ক্রমবর্ধমান অবস্থা দেখুন।",
            welcomeButton: "এবার শুরু করা যাক",
        },
        mr: {
            title: "एआय पीक सल्लागार", enterFarmData: "शेतीची माहिती प्रविष्ट करा", soilParameters: "मातीचे मापदंड (प्रति किलो)",
            nitrogen: "नायट्रोजन (N) सामग्री", phosphorus: "फॉस्फरस (P) सामग्री", potassium: "पोटॅशियम (K) सामग्री",
            ph: "मातीचा पीएच (0-14)", climaticConditions: "हवामान परिस्थिती", useMyLocation: "माझे स्थान वापरा",
            temperature: "तापमान (°C)", humidity: "आर्द्रता (%)", rainfall: "पर्जन्यमान (मिमी)", getRecommendation: "शिफारस मिळवा",
            cropInfoGuide: "पीक माहिती मार्गदर्शक", searchCrop: "पीक शोधा", selectCrop: "एक पीक निवडा", topRecommendation: "सर्वोत्तम शिफारस",
            suitability: "योग्यता", otherCrops: "इतर योग्य पिके", suitabilityAnalysis: "योग्यता विश्लेषण",
            analysisAndTips: "विश्लेषण आणि व्यावसायिक टिप्स", soilHealthAnalysis: "मातीचे आरोग्य विश्लेषण", fertilizerTip: "खत सल्ला",
            irrigationTip: "सिंचन सल्ला", profitabilityEstimator: "नफा अंदाज", landSize: "जमिनीचा आकार (एकर मध्ये)",
            marketPrice: "अपेक्षित बाजारभाव (प्रति क्विंटल)", calculate: "गणना करा", expectedYield: "अपेक्षित उत्पन्न",
            estimatedProfit: "अंदाजित नफा", welcomeTitle: "एआय पीक सल्लागारमध्ये आपले स्वागत आहे!",
            welcomeSubtitle: "स्मार्ट शेतीसाठी आपले वैयक्तिक मार्गदर्शक.",
            welcomeMethod1Title: "पद्धत 1: शिफारस मिळवा",
            welcomeMethod1Desc: "कोणते पीक घ्यायचे हे माहित नाही? डावीकडे आपल्या शेताची माती आणि हवामान माहिती प्रविष्ट करा, आणि आमचे एआय आपल्यासाठी सर्वात योग्य पिकांची शिफारस करेल.",
            welcomeMethod2Title: "पद्धत 2: पीक माहिती मार्गदर्शक",
            welcomeMethod2Desc: "आपल्याला कोणत्या पिकात रस आहे हे आधीच माहित आहे का? पीक निवडण्यासाठी डावीकडील मार्गदर्शकाचा वापर करा आणि त्याच्या वाढीसाठीच्या आदर्श परिस्थिती त्वरित पहा.",
            welcomeButton: "सुरू करा",
        },
        pa: {
            title: "ਏਆਈ ਫਸਲ ਸਲਾਹਕਾਰ", enterFarmData: "ਖੇਤ ਦਾ ਡਾਟਾ ਦਰਜ ਕਰੋ", soilParameters: "ਮਿੱਟੀ ਦੇ ਮਾਪਦੰਡ (ਪ੍ਰਤੀ ਕਿਲੋ)",
            nitrogen: "ਨਾਈਟ੍ਰੋਜਨ (N) ਸਮੱਗਰੀ", phosphorus: "ਫਾਸਫੋਰਸ (P) ਸਮੱਗਰੀ", potassium: "ਪੋਟਾਸ਼ੀਅਮ (K) ਸਮੱਗਰੀ",
            ph: "ਮਿੱਟੀ ਦਾ pH (0-14)", climaticConditions: "ਜਲਵਾਯੂ ਹਾਲਾਤ", useMyLocation: "ਮੇਰਾ ਸਥਾਨ ਵਰਤੋ",
            temperature: "ਤਾਪਮਾਨ (°C)", humidity: "ਨਮੀ (%)", rainfall: "ਬਾਰਿਸ਼ (ਮਿਲੀਮੀਟਰ)", getRecommendation: "ਸਿਫਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ",
            cropInfoGuide: "ਫਸਲ ਜਾਣਕਾਰੀ ਗਾਈਡ", searchCrop: "ਫਸਲ ਲੱਭੋ", selectCrop: "ਇੱਕ ਫਸਲ ਚੁਣੋ", topRecommendation: "ਪ੍ਰਮੁੱਖ ਸਿਫਾਰਸ਼",
            suitability: "ਯੋਗਤਾ", otherCrops: "ਹੋਰ ਢੁਕਵੀਂ ਫਸਲਾਂ", suitabilityAnalysis: "ਯੋਗਤਾ ਵਿਸ਼ਲੇਸ਼ਣ",
            analysisAndTips: "ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਪ੍ਰੋ ਸੁਝਾਅ", soilHealthAnalysis: "ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ", fertilizerTip: "ਖਾਦ ਸੁਝਾਅ",
            irrigationTip: "ਸਿੰਚਾਈ ਸੁਝਾਅ", profitabilityEstimator: "ਮੁਨਾਫਾ ਅਨੁਮਾਨਕ", landSize: "ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ (ਏਕੜ ਵਿੱਚ)",
            marketPrice: "ਉਮੀਦ ਕੀਤੀ ਬਜ਼ਾਰ ਕੀਮਤ (ਪ੍ਰਤੀ ਕੁਇੰਟਲ)", calculate: "ਗਣਨਾ ਕਰੋ", expectedYield: "ਉਮੀਦ ਕੀਤੀ ਝਾੜ",
            estimatedProfit: "ਅਨੁਮਾਨਿਤ ਮੁਨਾਫਾ", welcomeTitle: "ਏਆਈ ਫਸਲ ਸਲਾਹਕਾਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ!",
            welcomeSubtitle: "ਸਮਾਰਟ ਖੇਤੀ ਲਈ ਤੁਹਾਡਾ ਨਿੱਜੀ ਗਾਈਡ।",
            welcomeMethod1Title: "ਵਿਧੀ 1: ਇੱਕ ਸਿਫਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ",
            welcomeMethod1Desc: "ਕੀ ਬੀਜਣਾ ਹੈ ਪਤਾ ਨਹੀਂ? ਖੱਬੇ ਪਾਸੇ ਆਪਣੇ ਖੇਤ ਦੀ ਮਿੱਟੀ ਅਤੇ ਜਲਵਾਯੂ ਡਾਟਾ ਦਰਜ ਕਰੋ, ਅਤੇ ਸਾਡਾ ਏਆਈ ਤੁਹਾਡੇ ਲਈ ਸਭ ਤੋਂ ਢੁਕਵੀਂ ਫਸਲਾਂ ਦੀ ਸਿਫਾਰਸ਼ ਕਰੇਗਾ।",
            welcomeMethod2Title: "ਵਿਧੀ 2: ਫਸਲ ਜਾਣਕਾਰੀ ਗਾਈਡ",
            welcomeMethod2Desc: "ਪਹਿਲਾਂ ਹੀ ਪਤਾ ਹੈ ਕਿ ਤੁਸੀਂ ਕਿਸ ਫਸਲ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਦੇ ਹੋ? ਇੱਕ ਫਸਲ ਦੀ ਚੋਣ ਕਰਨ ਲਈ ਖੱਬੇ ਪਾਸੇ ਗਾਈਡ ਦੀ ਵਰਤੋਂ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਇਸਦੀ ਆਦਰਸ਼ ਵਧਣ ਦੀਆਂ ਸਥਿਤੀਆਂ ਵੇਖੋ।",
            welcomeButton: "ਸ਼ੁਰੂ ਕਰੋ",
        },
        as: {
            title: "এআই শস্য উপদেষ্টা", enterFarmData: "খেতিৰ তথ্য প্ৰবিষ্ট কৰক", soilParameters: "মাটিৰ বৈশিষ্ট্য (প্ৰতি কিলোগ্ৰামত)",
            nitrogen: "নাইট্ৰ’জেন (N)ৰ পৰিমাণ", phosphorus: "ফছফৰাছ (P)ৰ পৰিমাণ", potassium: "পটাছিয়াম (K)ৰ পৰিমাণ",
            ph: "মাটিৰ পি এইচ (0-14)", climaticConditions: "জলবায়ুৰ অৱস্থা", useMyLocation: "মোৰ অৱস্থান ব্যৱহাৰ কৰক",
            temperature: "উষ্ণতা (°C)", humidity: "আৰ্দ্ৰতা (%)", rainfall: "বৰষুণ (মিমি)", getRecommendation: "পৰামৰ্শ লওক",
            cropInfoGuide: "শস্য তথ্য সহায়িকা", searchCrop: "শস্য বিচাৰক", selectCrop: "এটা শস্য বাছক", topRecommendation: "শীৰ্ষ পৰামৰ্শ",
            suitability: "উপযুক্ততা", otherCrops: "অন্যান্য উপযুক্ত শস্য", suitabilityAnalysis: "উপযুক্ততা বিশ্লেষণ",
            analysisAndTips: "বিশ্লেষণ আৰু বিশেষজ্ঞৰ টিপচ", soilHealthAnalysis: "মাটিৰ স্বাস্থ্য বিশ্লেষণ", fertilizerTip: "সাৰৰ টিপচ",
            irrigationTip: "জলসিঞ্চনৰ টিপচ", profitabilityEstimator: "লাভজনকতা নিৰ্ধাৰক", landSize: "মাটিৰ পৰিমাণ (একৰত)",
            marketPrice: "সম্ভাব্য বজাৰ মূল্য (প্ৰতি কুইণ্টল)", calculate: "গণনা কৰক", expectedYield: "সম্ভাব্য উৎপাদন",
            estimatedProfit: "আনুমানিক লাভ", welcomeTitle: "এআই শস্য উপদেষ্টালৈ স্বাগতম!",
            welcomeSubtitle: "স্মাৰ্ট কৃষিৰ বাবে আপোনাৰ ব্যক্তিগত সহায়িকা।",
            welcomeMethod1Title: "পদ্ধতি ১: পৰামৰ্শ লওক",
            welcomeMethod1Desc: "কি খেতি কৰিব নাজানে? বাওঁফালে আপোনাৰ খেতিৰ মাটি আৰু জলবায়ুৰ তথ্য দিয়ক, আমাৰ এআই-এ আপোনাৰ বাবে উপযুক্ত শস্যৰ পৰামৰ্শ দিব।",
            welcomeMethod2Title: "পদ্ধতি ২: শস্য তথ্য সহায়িকা",
            welcomeMethod2Desc: "আপুনি কোনটো শস্যৰ প্ৰতি আগ্ৰহী সেইটো আগতেই জানে? বাওঁফালৰ সহায়িকা ব্যৱহাৰ কৰি শস্য বাছক আৰু তাৰ আদৰ্শ খেতিৰ পৰিস্থিতি চাওক।",
            welcomeButton: "আৰম্ভ কৰক",
        },
        ml: {
            title: "എഐ വിള ഉപദേഷ്ടാവ്", enterFarmData: "ഫാം ഡാറ്റ നൽകുക", soilParameters: "മണ്ണിന്റെ ഘടകങ്ങൾ (കിലോയ്ക്ക്)",
            nitrogen: "നൈട്രജൻ (N) അളവ്", phosphorus: "ഫോസ്ഫറസ് (P) അളവ്", potassium: "പൊട്ടാസ്യം (K) അളവ്",
            ph: "മണ്ണിന്റെ പിഎച്ച് (0-14)", climaticConditions: "കാലാവസ്ഥാ സാഹചര്യങ്ങൾ", useMyLocation: "എന്റെ സ്ഥലം ഉപയോഗിക്കുക",
            temperature: "താപനില (°C)", humidity: "ഈർപ്പം (%)", rainfall: "മഴ (മില്ലീമീറ്റർ)", getRecommendation: "ശുപാർശ നേടുക",
            cropInfoGuide: "വിള വിവര ഗൈഡ്", searchCrop: "വിള തിരയുക", selectCrop: "ഒരു വിള തിരഞ്ഞെടുക്കുക", topRecommendation: "പ്രധാന ശുപാർശ",
            suitability: "അനുയോജ്യത", otherCrops: "മറ്റുള്ള അനുയോജ്യമായ വിളകൾ", suitabilityAnalysis: "അനുയോജ്യതാ വിശകലനം",
            analysisAndTips: "വിശകലനവും വിദഗ്ദ്ധോപദേശങ്ങളും", soilHealthAnalysis: "മണ്ണിന്റെ ആരോഗ്യ വിശകലനം", fertilizerTip: "വളപ്രയോഗത്തിനുള്ള നിർദ്ദേശം",
            irrigationTip: "ജലസേചനത്തിനുള്ള നിർദ്ദേശം", profitabilityEstimator: "ലാഭക്ഷമത കണക്കാക്കൽ", landSize: "സ്ഥലത്തിന്റെ വലുപ്പം (ഏക്കറിൽ)",
            marketPrice: "പ്രതീക്ഷിക്കുന്ന വിപണി വില (ക്വിന്റലിന്)", calculate: "കണക്കാക്കുക", expectedYield: "പ്രതീക്ഷിക്കുന്ന വിളവ്",
            estimatedProfit: "ഏകദേശ ലാഭം", welcomeTitle: "എഐ വിള ഉപദേഷ്ടാവിലേക്ക് സ്വാഗതം!",
            welcomeSubtitle: "മികച്ച കൃഷിക്കായുള്ള നിങ്ങളുടെ വ്യക്തിഗത വഴികാട്ടി.",
            welcomeMethod1Title: "രീതി 1: ഒരു ശുപാർശ നേടുക",
            welcomeMethod1Desc: "എന്ത് നടണം എന്ന് അറിയില്ലേ? ഇടതുവശത്ത് നിങ്ങളുടെ മണ്ണിന്റെയും കാലാവസ്ഥയുടെയും ഡാറ്റ നൽകുക, ഞങ്ങളുടെ എഐ നിങ്ങൾക്ക് ഏറ്റവും അനുയോജ്യമായ വിളകൾ ശുപാർശ ചെയ്യും.",
            welcomeMethod2Title: "രീതി 2: വിള വിവര ഗൈഡ്",
            welcomeMethod2Desc: "നിങ്ങൾക്ക് ഏത് വിളയിലാണ് താല്പര്യമെന്ന് ഇതിനകം അറിയാമോ? ഇടതുവശത്തുള്ള ഗൈഡ് ഉപയോഗിച്ച് ഒരു വിള തിരഞ്ഞെടുത്ത് അതിന്റെ അനുയോജ്യമായ വളർച്ചാ സാഹചര്യങ്ങൾ തൽക്ഷണം കാണുക.",
            welcomeButton: "തുടങ്ങുക",
        },
        kn: {
            title: "ಎಐ ಬೆಳೆ ಸಲಹೆಗಾರ", enterFarmData: "খামারের ডেটা প্রবেশ করান", soilParameters: "ಮಣ್ಣಿನ ನಿಯತಾಂಕಗಳು (ಪ್ರತಿ ಕೆಜಿಗೆ)",
            nitrogen: "ಸಾರಜನಕ (N) ಅಂಶ", phosphorus: "ರಂಜಕ (P) ಅಂಶ", potassium: "ಪೊಟ್ಯಾಸಿಯಮ್ (K) ಅಂಶ",
            ph: "ಮಣ್ಣಿನ pH (0-14)", climaticConditions: "ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳು", useMyLocation: "ನನ್ನ ಸ್ಥಳವನ್ನು ಬಳಸಿ",
            temperature: "ತಾಪಮಾನ (°C)", humidity: "ತೇವಾಂಶ (%)", rainfall: "ಮಳೆ (ಮಿಮೀ)", getRecommendation: "ಶಿಫಾರಸು ಪಡೆಯಿರಿ",
            cropInfoGuide: "ಬೆಳೆ ಮಾಹಿತಿ ಮಾರ್ಗದರ್ಶಿ", searchCrop: "ಬೆಳೆ ಹುಡುಕಿ", selectCrop: "ಒಂದು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", topRecommendation: "ಉತ್ತಮ ಶಿಫಾರಸು",
            suitability: "ಸೂಕ್ತತೆ", otherCrops: "ಇತರ ಸೂಕ್ತ ಬೆಳೆಗಳು", suitabilityAnalysis: "ಸೂಕ್ತತೆ ವಿಶ್ಲೇಷಣೆ",
            analysisAndTips: "ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ತಜ್ಞರ ಸಲಹೆಗಳು", soilHealthAnalysis: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವಿಶ್ಲೇಷಣೆ", fertilizerTip: "ಗೊಬ್ಬರ ಸಲಹೆ",
            irrigationTip: "ನೀರಾವರಿ ಸಲಹೆ", profitabilityEstimator: "ಲಾಭದಾಯಕತೆ ಅಂದಾಜುಗಾರ", landSize: "ಭೂಮಿಯ ಗಾತ್ರ (ಎಕರೆಗಳಲ್ಲಿ)",
            marketPrice: "ನಿರೀಕ್ಷಿತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ (ಪ್ರತಿ ಕ್ವಿಂಟಾಲ್‌ಗೆ)", calculate: "ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ", expectedYield: "ನಿರೀಕ್ಷಿತ ಇಳುವರಿ",
            estimatedProfit: "ಅಂದಾಜು ಲಾಭ", welcomeTitle: "ಎಐ ಬೆಳೆ ಸಲಹೆಗಾರರಿಗೆ ಸ್ವಾಗತ!",
            welcomeSubtitle: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿಗಾಗಿ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶಿ.",
            welcomeMethod1Title: "ವಿಧಾನ 1: ಶಿಫಾರಸು ಪಡೆಯಿರಿ",
            welcomeMethod1Desc: "ಏನು ಬೆಳೆಯಬೇಕೆಂದು ತಿಳಿದಿಲ್ಲವೇ? ಎಡಭಾಗದಲ್ಲಿ ನಿಮ್ಮ ಜಮೀನಿನ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನದ ಡೇಟಾವನ್ನು ನಮೂದಿಸಿ, ಮತ್ತು ನಮ್ಮ ಎಐ ನಿಮಗಾಗಿ ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಬೆಳೆಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ.",
            welcomeMethod2Title: "ವಿಧಾನ 2: ಬೆಳೆ ಮಾಹಿತಿ ಮಾರ್ಗದರ್ಶಿ",
            welcomeMethod2Desc: "ನೀವು ಯಾವ ಬೆಳೆಯಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೀರಿ ಎಂದು ಈಗಾಗಲೇ ತಿಳಿದಿದೆಯೇ? ಒಂದು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ಎಡಭಾಗದಲ್ಲಿರುವ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಬಳಸಿ ಮತ್ತು ಅದರ ಆದರ್ಶ ಬೆಳೆಯುವ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ತಕ್ಷಣವೇ ನೋಡಿ.",
            welcomeButton: "ಪ್ರಾರಂಭಿಸಿ",
        },
        gu: {
            title: "એઆઈ પાક સલાહકાર", enterFarmData: "ખેતરનો ડેટા દાખલ કરો", soilParameters: "જમીનના પરિમાણો (પ્રતિ કિલો)",
            nitrogen: "નાઇટ્રોજન (N) સામગ્રી", phosphorus: "ફોસ્ફરસ (P) સામગ્રી", potassium: "પોટેશિયમ (K) સામગ્રી",
            ph: "જમીનનું pH (0-14)", climaticConditions: "આબોહવાની પરિસ્થિતિઓ", useMyLocation: "મારું સ્થાન વાપરો",
            temperature: "તાપમાન (°C)", humidity: "ભેજ (%)", rainfall: "વરસાદ (મિમિ)", getRecommendation: "ભલામણ મેળવો",
            cropInfoGuide: "પાકની માહિતી માર્ગદર્શિકા", searchCrop: "પાક શોધો", selectCrop: "એક પાક પસંદ કરો", topRecommendation: "શ્રેષ્ઠ ભલામણ",
            suitability: "યોગ્યતા", otherCrops: "અન્ય યોગ્ય પાકો", suitabilityAnalysis: "યોગ્યતા વિશ્લેષણ",
            analysisAndTips: "વિશ્લેષણ અને નિષ્ણાત ટિપ્સ", soilHealthAnalysis: "જમીન આરોગ્ય વિશ્લેષણ", fertilizerTip: "ખાતર ટિપ",
            irrigationTip: "સિંચાઈ ટિપ", profitabilityEstimator: "નફાકારકતા અંદાજક", landSize: "જમીનનું કદ (એકરમાં)",
            marketPrice: "અપેક્ષિત બજાર ભાવ (પ્રતિ ક્વિન્ટલ)", calculate: "ગણતરી કરો", expectedYield: "અપેક્ષિત ઉપજ",
            estimatedProfit: "અંદાજિત નફો", welcomeTitle: "એઆઈ પાક સલાહકારમાં આપનું સ્વાગત છે!",
            welcomeSubtitle: "સ્માર્ટ ખેતી માટે તમારી વ્યક્તિગત માર્ગદર્શિકા.",
            welcomeMethod1Title: "પદ્ધતિ 1: ભલામણ મેળવો",
            welcomeMethod1Desc: "શું રોપવું તે ખબર નથી? ડાબી બાજુએ તમારા ખેતરની જમીન અને આબોહવાનો ડેટા દાખલ કરો, અને અમારું એઆઈ તમારા માટે સૌથી યોગ્ય પાકોની ભલામણ કરશે.",
            welcomeMethod2Title: "પદ્ધતિ 2: પાકની માહિતી માર્ગદર્શિકા",
            welcomeMethod2Desc: "તમને કયા પાકમાં રસ છે તે પહેલેથી જ ખબર છે? પાક પસંદ કરવા માટે ડાબી બાજુની માર્ગદર્શિકાનો ઉપયોગ કરો અને તરત જ તેની આદર્શ વૃદ્ધિની પરિસ્થિતિઓ જુઓ.",
            welcomeButton: "શરૂ કરો",
        },
        te: {
            title: "AI పంట సలహాదారు", enterFarmData: "పొలం డేటాను నమోదు చేయండి", soilParameters: "నేల పారామితులు (ఒక కిలోకు)",
            nitrogen: "నత్రజని (N) కంటెంట్", phosphorus: "భాస్వరం (P) కంటెంట్", potassium: "పొటాషియం (K) కంటెంట్",
            ph: "నేల pH (0-14)", climaticConditions: "వాతావరణ పరిస్థితులు", useMyLocation: "నా స్థానాన్ని ఉపయోగించండి",
            temperature: "ఉష్ణోగ్రత (°C)", humidity: "తేమ (%)", rainfall: "వర్షపాతం (మిమీ)", getRecommendation: "సిఫార్సును పొందండి",
            cropInfoGuide: "పంట సమాచార గైడ్", searchCrop: "పంటను శోధించండి", selectCrop: "ఒక పంటను ఎంచుకోండి", topRecommendation: "అగ్ర సిఫార్సు",
            suitability: "అనుకూలత", otherCrops: "ఇతర అనుకూలమైన పంటలు", suitabilityAnalysis: "అనుకూలత విశ్లేషణ",
            analysisAndTips: "విశ్లేషణ & నిపుణుల చిట్కాలు", soilHealthAnalysis: "నేల ఆరోగ్య విశ్లేషణ", fertilizerTip: "ఎరువుల చిట్కా",
            irrigationTip: "నీటిపారుదల చిట్కా", profitabilityEstimator: "లాభదాయకత అంచనా", landSize: "భూమి పరిమాణం (ఎకరాలలో)",
            marketPrice: "ఆశించిన మార్కెట్ ధర (ఒక క్వింటాల్‌కు)", calculate: "లెక్కించండి", expectedYield: "ఆశించిన దిగుబడి",
            estimatedProfit: "అంచనా లాభం", welcomeTitle: "AI పంట సలహాదారుకు స్వాగతం!",
            welcomeSubtitle: "స్మార్ట్ వ్యవసాయం కోసం మీ వ్యక్తిగత గైడ్.",
            welcomeMethod1Title: "పద్ధతి 1: ఒక సిఫార్సును పొందండి",
            welcomeMethod1Desc: "ఏమి నాటలో తెలియదా? ఎడమ వైపున మీ పొలం యొక్క నేల మరియు వాతావరణ డేటాను నమోదు చేయండి, మరియు మా AI మీ కోసం అత్యంత అనుకూలమైన పంటలను సిఫార్సు చేస్తుంది.",
            welcomeMethod2Title: "పద్ధతి 2: పంట సమాచార గైడ్",
            welcomeMethod2Desc: "మీకు ఏ పంటపై ఆసక్తి ఉందో ఇప్పటికే తెలుసా? ఒక పంటను ఎంచుకోవడానికి ఎడమ వైపున ఉన్న గైడ్‌ను ఉపయోగించండి మరియు దాని ఆదర్శ పెరుగుతున్న పరిస్థితులను తక్షణమే చూడండి.",
            welcomeButton: "ప్రారంభించండి",
        },
        ta: {
            title: "AI பயிர் ஆலோசகர்", enterFarmData: "பண்ணை தரவை உள்ளிடவும்", soilParameters: "மண் அளவுருக்கள் (கிலோ ஒன்றுக்கு)",
            nitrogen: "நைட்ரஜன் (N) உள்ளடக்கம்", phosphorus: "பாஸ்பரஸ் (P) உள்ளடக்கம்", potassium: "பொட்டாசியம் (K) உள்ளடக்கம்",
            ph: "மண் pH (0-14)", climaticConditions: "காலநிலை நிலைமைகள்", useMyLocation: "எனது இருப்பிடத்தைப் பயன்படுத்து",
            temperature: "வெப்பநிலை (°C)", humidity: "ஈரப்பதம் (%)", rainfall: "மழைப்பொழிவு (மிமீ)", getRecommendation: "பரிந்துரையைப் பெறுங்கள்",
            cropInfoGuide: "பயிர் தகவல் வழிகாட்டி", searchCrop: "பயிரைத் தேடு", selectCrop: "ஒரு பயிரைத் தேர்ந்தெடுக்கவும்", topRecommendation: "சிறந்த பரிந்துரை",
            suitability: "பொருத்தம்", otherCrops: "மற்ற பொருத்தமான பயிர்கள்", suitabilityAnalysis: "பொருத்த பகுப்பாய்வு",
            analysisAndTips: "பகுப்பாய்வு மற்றும் நிபுணர் குறிப்புகள்", soilHealthAnalysis: "மண் சுகாதார பகுப்பாய்வு", fertilizerTip: "உரக் குறிப்பு",
            irrigationTip: "நீர்ப்பாசனக் குறிப்பு", profitabilityEstimator: "இலாப மதிப்பீட்டாளர்", landSize: "நில அளவு (ஏக்கரில்)",
            marketPrice: "எதிர்பார்க்கப்படும் சந்தை விலை (குவிண்டால் ஒன்றுக்கு)", calculate: "கணக்கிடு", expectedYield: "எதிர்பார்க்கப்படும் விளைச்சல்",
            estimatedProfit: "மதிப்பிடப்பட்ட இலாபம்", welcomeTitle: "AI பயிர் ஆலோசகருக்கு வரவேற்கிறோம்!",
            welcomeSubtitle: "புத்திசாலித்தனமான விவசாயத்திற்கான உங்கள் தனிப்பட்ட வழிகாட்டி.",
            welcomeMethod1Title: "முறை 1: ஒரு பரிந்துரையைப் பெறுங்கள்",
            welcomeMethod1Desc: "என்ன நடுவது என்று தெரியவில்லையா? இடதுபுறத்தில் உங்கள் பண்ணையின் மண் மற்றும் காலநிலை தரவை உள்ளிடவும், எங்கள் AI உங்களுக்காக மிகவும் பொருத்தமான பயிர்களைப் பரிந்துரைக்கும்.",
            welcomeMethod2Title: "முறை 2: பயிர் தகவல் வழிகாட்டி",
            welcomeMethod2Desc: "நீங்கள் எந்த பயிரில் ஆர்வமாக உள்ளீர்கள் என்று ஏற்கனவே தெரியுமா? இடதுபுறத்தில் உள்ள வழிகாட்டியைப் பயன்படுத்தி ஒரு பயிரைத் தேர்ந்தெடுத்து அதன் சிறந்த வளர்ச்சி நிலைமைகளை உடனடியாகக் காணுங்கள்.",
            welcomeButton: "தொடங்கவும்",
        }
    };

    const languageSelector = document.getElementById('language-selector');
    
    // Exit if element isn't found
    if (!languageSelector) {
        console.error('Language selector element not found!');
        return;
    }
    
    window.setLanguage = (language) => {
        localStorage.setItem('language', language);
        languageSelector.value = language;
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            } else {
                if (translations['en'] && translations['en'][key]) {
                    element.textContent = translations['en'][key];
                }
            }
        });
    };

    languageSelector.addEventListener('change', (event) => {
        window.setLanguage(event.target.value);
    });

    const savedLanguage = localStorage.getItem('language') || 'en';
    window.setLanguage(savedLanguage);
});
