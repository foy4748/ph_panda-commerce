/*1.
 * Connect JS file to HTML
 *
 */
console.log("Connected to HTML");

/* 2.
 * Select all h2 tags and make the
 * text color lightblue
 *
 */

//Grabbing h2
const h2Collection = document.getElementsByTagName("h2");

//Adding class for making text lightblue
for (let singleh2 of h2Collection) {
  singleh2.classList.add("text-color-lightblue");
}

/* 3.
 * Make backpack section's
 * background color tomato
 *
 */
//Grabbing Backpack Section
const backPackSection = document.getElementById("backpack");
backPackSection.style.backgroundColor = "tomato";
backPackSection.style.borderRadius = "30px";
backPackSection.style.padding = "20px";

const h1OfBackPackSection = backPackSection.getElementsByTagName("h1");

h1OfBackPackSection[0].style.color = "white";

/* 4.
 * Make all card element's
 * border-radius: 30px
 *
 */
const cardCollection = document.getElementsByClassName("card");

//Adding class for border radius 30px
for (let singleCard of cardCollection) {
  singleCard.classList.add("border-radius-30px");
}

/* 5.
 * Write a function
 * which console.log
 * something onclick
 * a button
 *
 */

//Writing that function
function clickResponse() {
  console.log("Button was clicked");
}

//Now by clicking the
// "Buy Now" button
// will trigger this
// clickResponse fuction

/* 6. Removing "Buy Now"
 * Buttons by clicking
 * on them
 */

//Grabbing sections for putting EventListeners
const main = document.getElementsByTagName("main");
const sections = main[0].getElementsByTagName("section");

for (let section of sections) {
  //Putting eventListeners on each sections
  section.addEventListener("click", function (e) {
    //Checking if clicked thing is
    //a Buy Now button
    if (e.target.classList.contains("buy-button")) {
      //Preventing default to prevent
      //going next page ("#")
      e.preventDefault();

      //Grabbing the button's parent
      const parent = e.target.parentNode;
      //Now deleting button from it's parent
      parent.removeChild(e.target);
    }
  });
}
