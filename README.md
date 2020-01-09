# quizdecks
A flashcard deck inspired by Quizlet.com

## Where to find this app:
* First, navigate to https://michelene.github.io/
* Then, click on the 'quizdecks' link.
* Or, you may go directly to the page via https://michelene.github.io/quizdecks/


## Technologies used

This simple app was written using Javascript (ES6), HTML, and CSS.
The CSS utilizes Flexbox and animations.
The data for the flashcards is stored in a separate file and included via HTML script include.
The app is hosted on Github Pages.

## Approach taken
Knowing that the CSS would be the most challenging aspect of this project for me, I started by working on the CSS, trying to get a basic page layout. Actually, I spent the entire first two days restyling the referring (Portfolio) page, https://michelene.github.io/, to generally match a concept I had in mind. Although it may change again in the future, for now I took a design from CSS Zen Garden as a starting point, and then adapted it for my Portfolio Page. As I intend the Portfolio Page to be my calling card in the future, I felt spending two days on making it look presentable was a good investment of my time.

I did most of the actual coding for this app on Wednesday. I knew the Javascript would take much less time for me to write, and in fact it did (it took 1/4 of the time as the CSS).

I struggled with placing the page elements in their correct positions via CSS. Eventually, Flexbox saved the day (or at least, my footer placement). As I was working on the CSS, I knew I wanted to incorporate CSS animations. So, I researched and found out how to animate a card flip triggered by mouseover. Once I added that, the CSS was more or less done. The bonus of using this animation is that I was able to eliminate the 'flip' button and associated logic altogether. 

Then realizing the spec required me to keep a score, I decided to change the 'Previous' and 'Next' buttons to be 'Correct' and 'Incorrect'. It also wanted me to redisplay the missed cards, so I will be using the 'splice' command to rewrite the data array after each choice. An alternative way to code this might be to use a linked list for the dataset.

## Data persistence and data upload
Currently the dataset is pre-loaded into a JS array; when I add the upload feature I will be converting this to JSON, so that the user can upload a JSON file.

If I have time (after coding all the minimum requirements), I'd like to add the ability to upload your own dataset, and also add a back end. I did spend some time researching this. With Github Pages, you cannot host a back end, but there is a web service called Glitch which I will eventually incorporate into this project. Glitch hosting is free, and I can use a file-based database such as sqlite3-db or low-db to store the data. More info here:
https://glitch.com/@storage

## Resources
* https://css-tricks.com/books/volume-i/holy-grail-layout-5-lines-css/
* https://davidwalsh.name/css-flip
