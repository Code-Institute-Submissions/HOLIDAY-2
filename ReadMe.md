Holiday Heaven

My project is for a website called “Holiday Heaven”. This is a website intended to help people find places to go on holiday. 
I designed it with the idea that they will see a destination that they liked the look of and then it would show them where the place
is so they can plan a holiday. My design gives them a simple way to locate the destination as they simply click the map button for the selected location 
and it will present you with a map and marker.

Features

Existing Features:

The homepage is a simple layout that features 3 images, one for the title of the page and the other two are for the background of the page links. These page links will
take the user to the corresponding page when clicked on. Also, they have a darker overlay when hovered over, so the page is not too static, and the user has visual feedback on which link is being selected.
On both holiday pages there are bootstrap carousels which host the slideshows of images. This is used to display the images of the holidays so that the user gets a
visual representation of what each area looks like. The slideshows auto scroll across so an inactive user will eventually see all the photos, or there are arrows either side
of the slideshows to select the previous or next image. The carousels also change layout and size depending on screen size to make them visible on all sizes.
At the bottom of both holiday pages is a plain map, this map is the Google Maps JavaScript API. This map is used to allow the user to see the location of the selected holiday. 
The map changes size using the bootstrap grid method to fit the size of the screen, allowing it to be readable at different screen sizes. 
Beneath the carousels are buttons that link to the map. When pressed the user will be moved down to the map and the button will call the script which will place a marker on the map at the 
location of the specific holiday. It does this by passing the objects of lat and lng into the function. 
The map markers also have a function when clicked. They belong to the same function to the map on the JavaScript file but when the marker is clicked a box with some information about the place 
is opened so the user can learn a bit about the area. Also, in the box is a reference to where the information was taken from and a link to the photos on the carousel if they required credit.
In the top left of the holiday pages is a navigation link, it is a simple box with a Font Awesome home icon within it. This allows the user to easily navigate back to the homepage of the website. 
The button changes colours when hovered over to give the user visual feedback on when they can click it.
I used the column and row feature from the bootstrap grid layout to help structure the pages. This helped when the screen size was changed as the page could respond to the new size. 
The main area I implemented this was on the map.

Features to implement in the future:

Once I have more knowledge on JavaScript there are some features that I would like to implement to make the website more interactive.

-	Including more APIs: I was limited by time as to what I could add to the map as it took a while to figure out how to get the markers to work properly. 
If I had more time, I would like to add more APIs such as the Directions API and the Places API. This would make the map have far much more information to give the user more detail on the locations. 
The Directions API would help them find out how to get to the area and what methods can be used to travel there. The Places API would give the map more information on what is in an area, for example 
what restaurants were in a city and what activities were near.
-	A search bar: I would like to add a search bar for the map. This way I wouldn’t have to manually add locations to the webpage and put them in the slideshow. The user would be able to search a location 
and pull it up on the map. This would give the user the option to look anywhere on the map rather than the set locations of the carousels. 
-	More pages: Due to the length of time it took to gather the information and find non copyrighted images to use on the carousels I had to cut down the scale of the website so I could focus on finishing 
two pages to a good enough standard. If I had the search bar feature, I would be able to add more pages which focused on other areas such as cities. This is because the information would be contained within the map API.
This would allow me to just suggest areas to visit rather than decide specific locations for the user, then the user would search locations within a suggested area.
-	A way to book a holiday: An API that would allow the user to book a hotel/flight/activity through the website. This will stop the user having to look on separate websites for this as they can do it all through the API 
once the location is decided upon.

Technologies used:

-	Bootstrap: https://getbootstrap.com/ 
This is used to help with the structure of the page itself and was used for the carousels which display the images.
-	Font Awesome: https://fontawesome.com/
This is used for the home icon of the navigation link.
-	Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript/tutorial
This is used for the script of the map, it allows the map to be displayed on the website which gives the area for which markers can be placed.
-	jQuery: https://jquery.com/
Bootstrap used jQuery within the script.
-	Google Fonts: https://fonts.google.com/
This was used for the font of the text and titles.
-	Latitude and Longitude Finder: https://www.latlong.net/
I used this to find the lat and lng for locations which were then used in the map api.
-	Google Developer Tools: This was used to test the website and find bugs.

Photo References:
For some of the photos I gathered them directly from the websites, some required permission from the photographers and others required me to label credit of the photos. 
The credit is given where needed in the marker text boxes of the locations when the markers are clicked. 

Vinaros photos

http://www.catalonia-valencia.com/vinaros-spain-travel-guide.html
Lake District Photos
https://www.lakedistrict.gov.uk/visiting/webcams-videos-and-photos/freephotos
Broads Photos
https://www.broads-authority.gov.uk/news/photo-gallery
Cairngorms Photos
https://cairngorms.co.uk/photo-posts/map/
Yorkshire Dales Photos by ANDY KAY
https://photos.yorkshiredales.org.uk/

Pixabay: I collected a few photos from here but none of them require credit:

HOME PAGE AND TITLE CARD PHOTOS

https://pixabay.com/photos/sunset-evening-romantic-sun-2180346/
https://pixabay.com/photos/island-palm-sunset-sunrise-2722471/
https://pixabay.com/photos/travel-adventure-camping-night-2604981/

Map Background photos

https://pixabay.com/photos/hintersee-bergsee-mountains-ramsau-3601004/
https://pixabay.com/photos/beach-boat-idyllic-island-lagoon-1867026/

Tenerife photos

https://pixabay.com/photos/sea-tenerife-water-nature-4267121/
https://pixabay.com/photos/tenerife-people-orotava-palms-4516773/
https://pixabay.com/photos/puerto-cruz-tenerife-bay-houses-4799174/

Santorini photos

https://pixabay.com/photos/oia-santorini-village-greece-416136/
https://pixabay.com/photos/santorini-evening-sunset-greece-3873530/

Porto photos

https://pixabay.com/photos/porto-portugal-river-douro-sunset-4688929/
https://pixabay.com/photos/church-porto-garden-crystal-palace-4408246/
https://pixabay.com/photos/portugal-porto-city-travel-sky-4608940/

Testing:

To test the website, I would use the static preview panel provided within Gitpod and the google developer tools. Each time I was working on a part of the webpage 
I would constantly be using these two tools to find bugs and help solve issues I faced with styling and layout. I did not wait until I finished a specific part to 
test it as sometimes by changing one style in CSS it would move the whole webpage layout.
One of the main issues I faced during testing was getting the map markers to work correctly. I had problems with my script where the marker would not place, the 
map would not load or the incorrect text box would open at each marker, sometimes no box would open at all. This took a very look time to solve which consisted 
of trial and error, then completely changing how I wrote the function. Sometimes the error was caused by a small typo or misplaced punctuation but other times it was 
just due to me using the methods incorrectly. I had to refer back to my notes to help fix these issues. My mentor also helped by giving advice on how to go about how to 
lay out the map and what would be the best way to get the markers to work properly.
The homepage used to have the images in a fixed position so that when the page was scrolled or changed size the images would look as if they moved to suit that. I had to 
remove this feature as when I tested the website on mobile devices it caused the page to be very slow and unresponsive. So now the only fixed images are the title images to give the page livelier.
Another issue was that the images within the carousels are different sizes, this caused issues when the screen size was changed as the boxes would change sizes and ruin the layout 
of the screen. To fix this I had to set the width of the boxes so that they would remain constant when the images transitioned between each other.

Testing the Homepage:
1.	Hover over the page links “summer vacation” and “wildlife escape”.
2.	The images should darken.
3.	Click anywhere on the image that corresponds to the link.
4.	The user will be taken to the corresponding page.

Testing the Carousels:
1.	Once loaded, do not hover over the carousel boxes.
2.	The carousels show auto scroll unless being hovered over in which case they will stop scrolling.
3.	Press the arrow on the left side of each carousel. 
4.	The carousel should change to the previous image.
5.	Press the arrow on the right side of each carousel.
6.	The carousel should change to the next image.
7.	Resize the page to replicate different size screens.
8.	The carousels should appear in two columns and two rows when on large screens.
9.	On medium and small screens the carousels show be in one column.

Testing the “Show on map” buttons:
1.	Hover over the “SHOW ON MAP” button beneath the image.
2.	The button text should change colour to black.
3.	Click the button.
4.	It should scroll the page down to the map and place a marker on the map.
5.	The marker should be on the correct location.
6.	When a different “SHOW ON MAP” button is clicked, the map will reload and place a new marker so that it does not keep the old markers on there.

Testing the map markers:
1.	Click on the marker on the map.
2.	An information window will open above the marker for the correct location.
3.	The information window should contain a title, text and links for the corresponding location.

Testing the map:
1.	Load the webpage.
2.	The map should appear within the black border near the bottom of the page.
3.	The map should function and be interactive when clicked on/dragged.

Testing the links within the information window:
1.	Click the link within the window.
2.	It will open the page in a new tab so that the user is not directed away from the website.

Testing the navigation button:
1.	Hover over the navigation button.
2.	The background colour should change to grey and the home icon should change to white.
3.	Click the button.
4.	It should take the user to the homepage.

Directory Structure and File Naming:

I named my files so that they were easy to identify. I created an assets folder which contains all of the different images in specific folders for each of the different pages/carousels. 
The CSS, JS and HTML files were not put into folders as when using the google developer tools it could not find the files when in folders, even if the href was correct.

Version Control:
I initially had an issue with Gitpod not having the permissions to upload to my GitHub repository, but once this was solved, I was able to start implementing version control. 
Every time I completed a significant part of the project, I would push that version to GitHub so that it was saved in case when trying to make further changes I caused a significant error that would need undoing. 
I would label each version with the part completed so I could identify the stages of the website easily.

Deployment Process:

First, create a repository in GitHub, then launch Gitpod through GitHub. This will make sure that the remote origin for the push to GitHub is already added – allowing you to 
push your files to your repository without having to add the remote origin manually.
When the project is first stated you need to create a local repository, this is where changes that are made locally are saved to. From this you push them to a repository 
that is created in GitHub, this is where all the versions that have been uploaded in the past and where the final webpage is saved. You can then access the code for each time you have pushed to this repository.
To do this you have to use commands in the terminal of Gitpod.

1.	Git init (to create the local repository).
2.	Git status (to check which files are not tracked/have been changed or removed).
3.	Git add “example.html” (to add the file to the repository).
4.	Git commit -m “version name” (to save your changes to the local repository).
5.	Git push (to upload the local repository to the remote repository on GitHub).

To run my code locally you can visit the website "https://github.com/LaDawson/HOLIDAY-2" which takes you to the repository for my project. Here you will be able to see the latest version I have uploaded. 
The most recent version will be the first few files you can see, you can open these to see my code. There is also an option to download or clone my code.
You can clone the repository to GitHub Desktop by clicking the "Open in Desktop" button after clicking the "Clone or Download" button.

If you copy the link provided when you click the clone/download button, then follow these steps to run it locally:

1.	Open Git Bash
2.	Change the current working directory to the location where you want the cloned directory to be made.
3.	Type git clone, and then paste the URL you copied.
4.	Press enter and your local clone will be created.


