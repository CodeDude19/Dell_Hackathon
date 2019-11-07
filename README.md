## Team 6 - Improved Product Recommendation

### Project Overview
----------------------------------

### The Problem Statement is to Improve Product Recommendation and thereby increase Cart Conversion rates.
* We tried to approach the User Preference Problem by Collecting User Browsing Activity from Ad-Services.
* On the Collected Data we apply Use-Case based Content Filtering for Recommending Products.

### Solution Description
----------------------------------
* We are considering an Ad-Service which is present in the Dell.com Website (Example : Google-Ad Services).
* We Collect Data from the masked Ad-Service Injected in the Landing Page.
* The Collected data is sent to Node-Server and the Category,Price and other Specificatons of the Laptop is Recognized.
* The Node-Server then spawns Python which trains and test the preference data in Machine Learning Algorithms.
* The Machine Learning Algorithms predicts the relevant Data.
* The Data from the Machine Learning is sent to the Front-End from the Node Server.
* The Data is then rendered in the form of Laptops and Accessories.
* The User then gets to rate the Recommended Products or give feedback if the Products are not relevant.
* The Review data is then collected and sent to Backend for Analytics

#### Architecture Diagram
<br>
<a href="https://imgur.com/tdG89eo"><img src="https://i.imgur.com/tdG89eo.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/VRgJZ98"><img src="https://i.imgur.com/VRgJZ98.png" title="source: imgur.com" /></a>
<br><br>
<a href="https://imgur.com/OXLBm6K"><img src="https://i.imgur.com/OXLBm6K.png" title="source: imgur.com" /></a>


## Technical Description

### Technologies Used :
* HTML-CSS, Javascipt,Ajax
* NodeJS - v10.16.3
* Node Packages - Express,Ejs,Python-Shell
* Python - v3.7.4
* Python Packages - Numpy,Sci-kit Learn,Pandas

### Setup Instructions : 
* Install Node-Js and Python.
* Launch Terminal or CMD and move to Project Directory.
* Inside Project Directory type - `npm install express` , `npm install ejs` , `npm install python-shell`
* Inside Project Directory type - `pip install numpy` , `pip install sklearn` , `pip install pandas`
* After all installations, Launch Project by typing - `node server.js`
* Navigate to any browser and in address bar put url - `localhost:3000`

## Team Members
----------------------------------

### Yasser Arafat :
* Email - yasser.info.work@gmail.com
* Contribution - Front-End of Website , Backend with Node-JS, Integration of Machine Learning Engine with Backend.

### Palak Agarwal :
* Email - palakagarwal2864@gmail.com
* Contribution : Machine Learning Algorithms using Python for Product Recommendations.
