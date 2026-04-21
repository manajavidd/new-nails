/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (Nail descriptions + titles)
let nails = [
  { 
    name : "Pink & White Stripes",
    vibe : "fun",
    color: "pink",
    length : "medium",
    shape : "square",
    image : "assets/nail1.jpg"
  },
  { 
    name : "Pink & Yellow Stripes",
    vibe : "fun",
    color: "pink",
    length : "medium",
    shape : "square",
    image : "assets/nail2.jpg"
  },
  { 
    name : "Pink Polka Chrome",
    vibe : "fun",
    color: "pink",
    length : "medium",
    shape : "almond",
    image : "assets/nail3.jpg"
  },
  { 
    name : "Pink Chrome",
    vibe : "classy",
    color: "pink",
    length : "medium",
    shape : "square",
    image : "assets/nail4.jpg"
  },
  { 
    name : "White Frenchies",
    vibe : "classy",
    color: "white",
    length : "long",
    shape : "square",
    image : "assets/nail5.jpg"
  },
  { 
    name : "Milky White",
    vibe : "simple",
    color: "white",
    length : "long",
    shape : "stiletto",
    image : "assets/nail6.jpg"
  },
  { 
    name : "Polka White",
    vibe : "classy",
    color: "white",
    length : "medium",
    shape : "almond",
    image : "assets/nail7.jpg"
  },
  { 
    name : "Simple White",
    vibe : "simple",
    color: "white",
    length : "short",
    shape : "square",
    image : "assets/nail8.jpg"
  },
  { 
    name : "Lace White",
    vibe : "fun",
    color: "white",
    length : "long",
    shape : "stiletto",
    image : "assets/nail9.jpg"
  },
  { 
    name : "Cheetah White",
    vibe : "fun",
    color: "white",
    length : "medium",
    shape : "square",
    image : "assets/nail10.jpg"
  },
  { 
    name : "French Pink Polka",
    vibe : "fun",
    color: "pink",
    length : "long",
    shape : "square",
    image : "assets/nail11.jpg"
  },
  { 
    name : "Glitter Pink",
    vibe : "fun",
    color: "pink",
    length : "long",
    shape : "stiletto",
    image : "assets/nail12.jpg"
  },
  { 
    name : "Nude Pink",
    vibe : "classy",
    color: "pink",
    length : "short",
    shape : "square",
    image : "assets/nail13.jpg"
  }
];



// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  const templateCard = document.querySelector(".card");

  cardContainer.innerHTML = "";

  for (let i = 0; i < nails.length; i++) {
    let nail = nails[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    
  

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, nail); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, nail) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = nail.name;

  const cardImage = card.querySelector("img");
  cardImage.src = nail.image;
  cardImage.alt = nail.name;

  const cardText = card.querySelector(".card-content p");

  if (cardText) {
    cardText.textContent = 
     `${nail.vibe} • ${nail.color} • ${nail.shape} • ${nail.length}`;
}
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", nail.name);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  nails.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
