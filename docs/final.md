**INST 377 Final Project**

**Pickup PG: Connor McDonald, Matt Clewley, Robert Moran, Awais Sheikh, Andrew Loredo**

Heroku Link: https://pickuppg.herokuapp.com/index.html

Littering is one of the many environmental problems in the United States, as decades worth of trash continues to pile up on many American parks, beaches and roadways. In the US alone, litter clean-up costs over $11 billion dollars a year in trying to keep American soil clean. In Prince George’s County alone, there are thousands of clean up efforts conducted by the government, private, and volunteer organizations that go unnoticed.

We created Pickup PG as a way to connect residents of Prince George's County to various clean-up efforts around the community. As a group, we saw an opportunity to optimize the current Prince George's County trash collection volunteer system, with an all-in-one site that provides users with both opportunities to easily view current and future clean-ups as well as connect with community clean-up sponsors. Stakeholders for this project include are citizens in the affected communities and organizations (government or nonprofit) that would use the application for change. Secondary stakeholders may include the workers tasked to remediate the issues, tax payers or donors who fund the clean-up efforts.

For our project we chose to use a dataset on the Prince George's County database website under the environment section called LitterTRAK(https://data.princegeorgescountymd.gov/Environment/LitterTRAK/9tsa-iner). In order to solve the problems we as a group saw with the pre-existing structure, our system acts as a tool that will visualize where littering is happening, and what types of items are being found in those areas. Providing this information then allows targeted efforts in both prevention planning and clean up.

Our group faced several difficulties over the course of constructing this project. Initially, we faced issues with our API where our dataset categorized locations of trash pickup by voting districts and not streets, neighborhoods, parks, or towns which we found to not be helpful. Additionally, the API Leaflet map slowed the site to a crawl. These issues were resolved by using filters in our JavaScript to reduce the amount of data being handled by our front-end. Next, we faced some issues with the Heroku where we struggled to get our website running efficiently until late in the development process. The are just some challenges we have faced however, we overcame Heroku and the API lag and they did not impact the final design. The only impact these problems had on our design was on the various demos we had to present along the course of this project.

For our technology stack, we chose to use Leaflet for our website's map as mentioned before along with Node.JS and Heroku to present our website in a live setting. 

****************************************************************************************************************************************

**Technical system decision rationale**

Our final system, when implemented in a live setting will succeed in providing an improved information to residents of Prince George's County regarding clean up events held in their community. Using the PG County API, our website can provide accurate, up-to-date information to those interested in getting involved with a good cause.

Further development for our website would be to continue to improve the CSS and overall cleanliness of our page. Additionally, our dataset contains data on cleanups that have mostly happened in the past. Ideally with more time we would like to reach out to the organizations already partnered with PG County to gain access to information on their future efforts. With time, we would like to increase the scalability of our website so that if we want to pitch our platform to other counties in Maryland, the transition would be as simple as inserting a dataset for that county.
