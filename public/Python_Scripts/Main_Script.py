from sklearn.model_selection import train_test_split
import numpy as np
import pandas as pd
import sklearn
import json
from sklearn.preprocessing import LabelEncoder, OneHotEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import confusion_matrix
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
import warnings
warnings.simplefilter('ignore')

testset = pd.read_csv('./public/Python_Scripts/Test.csv', header=None)
dataset = pd.read_csv('./public/Python_Scripts/Dataset.csv', header=None)
dataset = pd.concat([dataset, testset])

pd.options.display.max_columns = 1000
pd.options.display.max_rows = 1000
dataset = dataset.iloc[1:, :]

y = dataset.iloc[:-1, -1:]
dataset = dataset.iloc[:, :-1]
x = dataset.values

le_1 = LabelEncoder()
le_2 = LabelEncoder()
le_3 = LabelEncoder()
le_4 = LabelEncoder()

x[:, 0] = le_1.fit_transform(x[:, 0])
x[:, 2] = le_2.fit_transform(x[:, 2])
x[:, 3] = le_3.fit_transform(x[:, 3])
x[:, 5] = le_4.fit_transform(x[:, 5])

he_1 = OneHotEncoder(categorical_features=[5])
x = he_1.fit_transform(x).toarray()
df = pd.DataFrame(x)

dataset_train = x
dataset_traintest = dataset_train[:-1]
y_train = y
x_train, x_test, y_train, y_test = train_test_split(
    dataset_traintest, y, test_size=0.3, random_state=0)
ss = StandardScaler()
x_train = ss.fit_transform(x_train)
x_test = ss.transform(x_test)
df2 = pd.DataFrame(x_train)
models = []
models.append(('Logistic Regression', LogisticRegression()))
models.append(('K-Nearest Neighbour', KNeighborsClassifier()))
for name, model in models:
    classifier = model
    classifier.fit(x_train, y_train)
    y_pred = classifier.predict(x_test)

x_test = dataset_train[-1:, :]
x_train = dataset_train[:-1, :]
y_train = y
ss = StandardScaler()
x_train = ss.fit_transform(x_train)
x_test = ss.transform(x_test)
df2 = pd.DataFrame(x_train)
models = []
models.append(('Logistic Regression', LogisticRegression()))
models.append(('K-Nearest Neighbour', KNeighborsClassifier()))
resultList = []
for name, model in models:
    classifier = model
    classifier.fit(x_train, y_train)
    y_pred = classifier.predict(x_test)
    resultList.append(y_pred[0])
commonr = max(set(resultList), key=resultList.count)
file = open('./public/Python_Scripts/datadell.csv', 'r')
filej = open('./public/Python_Scripts/laptops.json', 'w')
main_data = {}
for i in file:
    u = list(i.split(","))
    u[-1] = int(u[-1])
    u[-1] = str(u[-1])
    if u[-1] == commonr:
        temp_data = {u[0]: [u[1], u[2], u[3], u[4]]}
        main_data.update(temp_data)
json.dump(main_data, filej)
filej.close()
file.close()
