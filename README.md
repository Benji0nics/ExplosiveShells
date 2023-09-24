### ExplosiveShells
Repository containing the masterworks of the superstar group known as "Explosive Shells". 

## Table of Contents

- [About](#about)
- [Features](#features)
- [Prediction Flow Tag Table](#Prediction-flow-tag-table)
- [Who we are](#Who-we-are)

## About

The Explosive Shells team offers Python-based data analysis, visualization, and predictive modeling tools to explore and forecast the efficiency of University of Iowa Solar Cells

## Features

- **Data Retrieval and Integration:**
  - Fetches data from multiple remote sources using web APIs.
  - Integrates various datasets, including float efficiency, daily totals, weather conditions, and more, for comprehensive analysis.

- **Data Preprocessing and Cleaning:**
  - Conducts thorough data cleaning to ensure data quality.
  - Handles missing values and outliers to maintain data integrity.

- **Data Transformation and Time-Series Handling:**
  - Transforms and standardizes timestamps to facilitate consistent analysis.
  - Calculates statistical metrics to gain insights into the data, such as rolling averages and standard deviations.

- **Exploratory Data Analysis (EDA):**
  - Generates visualizations to explore the dataset's characteristics.
  - Includes Bollinger Bands and moving averages for trend analysis.

- **Machine Learning Modeling:**
  - Utilizes machine learning techniques, specifically linear regression.
  - Implements predictive models to understand and forecast the efficiency of explosive shells.

- **Model Evaluation and Performance Metrics:**
  - Evaluates the predictive models using industry-standard metrics like Mean Squared Error (MSE) and R-squared.
  - Assesses model accuracy and reliability for decision-making.

## Prediction Flow Tag Table
Train 90% and Test 10%
| **Electrical Vehicle**                | **Bus Car**                            |
|---------------------------------------|----------------------------------------|
|                Features               |                Features                |
| *Ridge Regression: r=78.26 score=0.27 | *Ridge Regression: r=38.03 score=0..34 |
| *Bayes Regression: r=78.31 score 0.27 | *Bayes Regression: r=38.08 score=0.34  |
| *Random Forest: r=24.55 score=0.77    | *Random Forest: r=18.59 score=0.68     |
|   *Decision Tree: r=48.83 score=0.55  |   *Decision Tree: r=35.43 score=0.38   |
|            Removed Features           |            Removed Features            |
| *Ridge Regression: r=81.98 score=0.24 | *Ridge Regression: r=40.61 score=0.29  |
| *Bayes Regression: r=81.94 score=0.24 | *Bayes Regression: r=40.58 score=0.29  |
| *Random Forest: r=52.55 score=0.51    | *Random Forest: r=30.31 score=0.47     |
| *Decision Tree: r=84.47 score=0.22    | *Decision Tree: r=56.21 score=0.02     |

## Who-we-are
[Ian Olmstead](https://www.linkedin.com/in/ubermensch/)</br>
[Colin Sampey](https://www.linkedin.com/in/colin-sampey/)</br>
[Michael Van](https://www.linkedin.com/in/atmichaelvan/)</br>
[Benjamin Burnham](https://www.linkedin.com/in/benjamin-j-burnham/)</br>
