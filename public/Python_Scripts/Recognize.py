import json
file = open('./public/Python_Scripts/Laptop_pool.csv', 'r')
file2 = open('./public/Python_Scripts/TestData.json')
jData = json.load(file2)
Price = jData["Data"][-1]
Laptop = jData["Data"][0]
Category = ""
Main_List = []
for i in file:
    u = list(i.split(","))
    Main_List.append(u)
for j in Main_List:
    if Laptop == j[0]:
        Category = j[1]
tFile = open('./public/Python_Scripts/Test.csv', 'r')
tList = []
for i in tFile:
    u = list(i.split(","))
    tList = u
tFile.close()
tList[-1] = Category
tList[-2] = Price
tFile = open('./public/Python_Scripts/Test.csv', 'w')
strdat = str(tList[0])+','+str(tList[1])+','+str(tList[2])+','+str(tList[3])+',' + \
    str(tList[4])+','+str(tList[5])
tFile.write(strdat)
tFile.close()
