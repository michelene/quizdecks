# quizdecks
A simple flashcard app written in HTML/CSS/Javascript.

## Where to find this app:
* First, navigate to https://michelene.github.io/
* Then, click on the 'quizdecks' link.
* Or, you may go directly to the page via https://michelene.github.io/quizdecks/


## Technologies used

This simple app was written using Javascript (ES6), HTML, and CSS.
The CSS utilizes CSS Grid and CSS animations.
The data for the flashcards is stored in a separate file and included via HTML script include.
The app is hosted on Github Pages.

## Approach taken
Knowing that the CSS would be the most challenging aspect of this project for me, I started by working on the CSS, trying to get a basic page layout. Actually, I spent the entire first two days restyling the referring (Portfolio) page, https://michelene.github.io/, to generally match a concept I had in mind. Although it may change again in the future, for now I took a design from CSS Zen Garden as a starting point, and then adapted it for my Portfolio Page. As I intend the Portfolio Page to be my calling card in the future, I felt spending two days on making it look presentable was a good investment of my time.

I did most of the actual coding for this app on Wednesday. I knew the Javascript would take much less time for me to write, and in fact it did (it took 1/4 of the time as the CSS).

I struggled with placing the page elements in their correct positions via CSS. (Eventually, I ended up redoing the entire page layout using CSS Grid.) As I was working on the CSS, I knew I wanted to incorporate CSS animations. So, I researched and found out how to animate a card flip triggered by mouseover. The bonus of using this animation is that I was able to eliminate the 'flip' button and associated logic altogether. 

Then realizing the spec required me to keep a score, I changed the 'Previous' and 'Next' buttons to be 'Correct' and 'Incorrect'. The spec also wanted me to redisplay the missed cards, so I used the 'splice' command to rewrite the (working copy of the) data array in-place after each choice. (An alternative way to code this might be to use a linked list for the dataset, but 'splice' simplifies the code, making it a single-line op.)

The 'reset' button re-copies the static data array into the working array, using 'slice'.

Rather than using 'location.reload()' to reset the deck, I instead use the initalize() function, which surgically updates the 3 areas of the page which need updated, and also resets the global variables.


## Data persistence and data upload
Currently there is a static dataset, pre-loaded into a JS array which is read once when the page is loaded. 

Eventually I will add the ability to upload your own dataset, which will require a back end. When I add the upload feature  the user can upload a data file in JSON format. With Github Pages, you cannot host a back end, but there is a web service called Glitch which I will eventually incorporate into this project. Glitch hosting is free, and I can use a file-based database such as sqlite3-db or low-db to store the data. More info here:
https://glitch.com/@storage

## Resources
* https://gist.github.com/bendc/0193e99fa094baa7e4368b147e172c65
* https://davidwalsh.name/css-flip
* https://www.colourlovers.com/palette/443995/i_demand_a_pancake
