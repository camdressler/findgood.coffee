import pandas as pd
from sklearn.linear_model import LinearRegression


df = pd.read_csv('data/cafes.csv')


# Handle missing values (if any)
data = df.dropna()

# Remove irrelevant columns
columns_to_keep = ['Wifi', 'Ambience', 'Seating', 'Music', 'Water', 'Bathrooms', 'Order-Ahead']
data = data[columns_to_keep]

# note regarding choosing a type of ML algo 

# Choose an appropriate ML algorithm for your task, 
# such as regression if you want to predict a numeric 
# rating or classification if you want to categorize the coffee shops.

model = LinearRegression()

# Fit the model to the data
model.fit(X, y)

# Make predictions
predictions = model.predict(X)
