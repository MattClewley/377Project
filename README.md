**Pickup PG**

INST 377 Final Group Project: Trash Collection in PG County

#Description of Project#

Our project is dedicated to introduce an interactive website to assist in helping decrease the carbon footprint in Prince George's County.

Littering costs Americans over $11 billion annually and wreaks havoc on streets, forests, and the environment globally. In PG County alone, thousands of clean up efforts go unnoticed due to a lack of a proper network and central hub for sharing data relevant to this cause.

Our aim is to introduce an interactive website to be able to: offer visibility to the local community as to where clean-ups are occurring, aid with transparency, informing the community of who is conducting these clean-ups, and how one can get involved

Our Target Browsers: Google Chrome, Mozilla Firefox, Microsoft Edge, iOS and Safari, Android.

We wanted to target the three main web browsers for PC and the two main web browsers for Smart Phones. We want most people in the United States, if not all, to be able to access this site. More specifically, everyone in Prince George's County. All 5 work properly and exceptionally well.

Heroku Page: https://pickuppg.herokuapp.com/

User Manual: /377Project/docs/user.md

Developer Manual: /377Project/README.md



****************************************************************************************************************************************


**Developer Manual**

Installation Instructions:

Welcome to Pickup PG, the all in one solution to connecting residents of Prince George’s County to organized community clean-up efforts. 

In order to get started with operating out website, first clone our files from our GitHub page at https://github.com/MattClewley/377Project. Additionally, you should be sure to check that our dataset API is still being supported and is available at https://data.princegeorgescountymd.gov/Environment/LitterTRAK/9tsa-iner.

To run our application on a server make sure you have node js downloaded on your local computer. Navigate to the clone directory in your terminal (example would be: cd /Users/yourusername/foldername/GitHub/377Project) and then run node server.js in order to start your server on a port (typically 5000). Then load up the application in your preferred browser by navigating to localhost:5000 and you should see the site.

Known Bugs:
-Leaflet map on "Where we Clean" will sometimes be slow to load and time out the page. 
-Images in index.html and about.html will sometimes not load onto the page when the site is run on Heroku. 
Future Work:
-Have map cover more counties in Maryland or possibly even East Coast states. 
-More filter options
-Connecting the Organizations Contact information when you select the organization pickup from the leaflet map pinpoints. 
