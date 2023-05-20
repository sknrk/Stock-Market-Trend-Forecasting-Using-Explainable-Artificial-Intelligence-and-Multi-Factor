'use client'
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown'

const Home = () => {


    return (
        <div className="relative  w-full px-3 py-2 mt-2 transition-all shadow-none bg-gray-950/80 duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start">
            <ReactMarkdown># Stock Market Trend Forecasting Using Explainable Artificial Intelligence and Multi-Factor</ReactMarkdown>
            
           
            <ReactMarkdown>## Abstract</ReactMarkdown>
            <ReactMarkdown>The objective of this project is to develop a comprehensive framework for forecasting stock market trends by integrating traditional time series analysis with multi-factor analysis using external data sources. We explore the predictive power of various machine learning algorithms, including ARIMA, ETS, Random Forest, Gradient Boosting, Linear Regression, Support Vector Regression, Decision Tree, K-Nearest Neighbors, XGBoost, Ridge Regression, and ElasticNet. Additionally, we employ explainable artificial intelligence (XAI) models such as SHAP, LIME, SHAPASH, and explainerdashboard to enhance the interpretability of our predictions. Our approach combines historical stock prices, Google Trends data, and daily news scores as input factors for improved forecasting accuracy.</ReactMarkdown>
            <ReactMarkdown>## Introduction</ReactMarkdown>
            <ReactMarkdown>Accurate stock market trend forecasting is crucial for investors and financial institutions to make informed decisions. Traditional approaches rely solely on historical price data, neglecting the valuable insights that can be gained from external factors. In this project, we propose a novel methodology that leverages the adj Close value of tickers alongside Google Trends data and daily news scores. By incorporating multi-factor analysis, we aim to enhance the predictive power of our models and provide a more comprehensive understanding of the underlying market dynamics.</ReactMarkdown>
            <ReactMarkdown>## Methods</ReactMarkdown>
            <ReactMarkdown>We begin by collecting historical stock price data, which serves as the primary input for our models. Additionally, we acquire Google Trends data related to the selected tickers to capture public interest and sentiment. Furthermore, we incorporate daily news scores to account for the impact of news events on stock market trends. The combination of these factors provides a richer feature set for forecasting.

                To evaluate the performance of various machine learning algorithms, we implement and compare a range of models, including ARIMA, ETS, Random Forest, Gradient Boosting, Linear Regression, Support Vector Regression, Decision Tree, K-Nearest Neighbors, XGBoost, Ridge Regression, and ElasticNet. We assess the accuracy and robustness of each model using appropriate evaluation metrics and cross-validation techniques.</ReactMarkdown>
            <ReactMarkdown>## Results</ReactMarkdown>
            <ReactMarkdown>Our experiments reveal that different models perform differently based on the dataset and context. After careful evaluation, we select the best-performing model based on its overall accuracy and consistency. The chosen model is then integrated with various XAI techniques, including SHAP, LIME, SHAPASH, and explainerdashboard, to provide interpretability and insights into the factors driving the predictions.</ReactMarkdown>
            <ReactMarkdown>## Installation</ReactMarkdown>
            <ReactMarkdown>- For Python modules</ReactMarkdown>
            <ReactMarkdown>```
                pip install -r requirements.txt
                ```
            </ReactMarkdown>
            <ReactMarkdown>- For frontend Nextjs UI</ReactMarkdown>
            <ReactMarkdown>```
                cd .\frontend\marketapp\```</ReactMarkdown><ReactMarkdown>```
                npm i
                ```
            </ReactMarkdown>
            <ReactMarkdown>## Usage</ReactMarkdown>
            <ReactMarkdown>**Warning**</ReactMarkdown>
            <ReactMarkdown>Make sure that your localhost 8050, 3000 and 5000 ports are empty and available.</ReactMarkdown>
            <ReactMarkdown>- First, home directory of project run backend</ReactMarkdown>
            <ReactMarkdown>```
                flask run
                ```
            </ReactMarkdown>
            <ReactMarkdown>Some Python version(s) might occur standart library's ImportModule error. You can use Python with version **3.9.6** if any error of them occurs.</ReactMarkdown>
            <ReactMarkdown>- Then you can run frontend and can go on browser with localhost:3000 port.</ReactMarkdown>
            <ReactMarkdown>```
                cd .\frontend\marketapp\```</ReactMarkdown><ReactMarkdown>```
                npm run dev
                ```
            </ReactMarkdown>
            <ReactMarkdown>## Conclusion</ReactMarkdown>
            <ReactMarkdown>In this project, we propose a comprehensive framework for stock market trend forecasting that incorporates multi-factor analysis and explainable artificial intelligence. By combining historical stock prices with Google Trends data and daily news scores, we enhance the predictive power of our models and gain deeper insights into the underlying factors driving market trends. The integration of XAI techniques further enhances the interpretability of our predictions, enabling investors and financial institutions to make well-informed decisions based on transparent and explainable forecasting models.

                Overall, our project contributes to the field of stock market forecasting by demonstrating the importance of multi-factor analysis and XAI in improving prediction accuracy and interpretability.</ReactMarkdown>

        </div>
    );
};

export default Home;
