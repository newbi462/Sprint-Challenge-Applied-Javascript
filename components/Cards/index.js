

const domArticlecards = document.querySelector('.cards-container'); // ???where do they want them???
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
      // Stduy the response data you get back, closely.
      console.log(response.data);

      let valuesObject = Object.values(response.data["articles"]);
      console.log(valuesObject);


      function makeCard(indexpass) {
        // <div class="card">
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        //   <div class="headline">{Headline of article}</div>
        const headlineDiv = document.createElement('div');
        headlineDiv.classList.add('headline');
        headlineDiv.textContent = indexpass.headline;
        cardDiv.appendChild(headlineDiv);

        //   <div class="author">
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('author');
        cardDiv.appendChild(authorDiv);

        //     <div class="img-container">
        const authorImgDiv = document.createElement('div');
        authorImgDiv.classList.add('img-container');
        authorDiv.appendChild(authorImgDiv);

        //       <img src={url of authors image} />
        const authorImg = document.createElement('img');
        authorImg.src = indexpass.authorPhoto;
        authorImgDiv.appendChild(authorImg);
        //     </div>

        //     <span>By {authors name}</span>
        const authSpan = document.createElement('span');
        authSpan.textContent = indexpass.authorName;
        cardDiv.appendChild(authSpan);


        //   </div>
        // </div>

        return cardDiv;
      };

      for (let i = 0; i < valuesObject.length; i++) {
        for (let x = 0; x < valuesObject[i].length; x++) {
          domArticlecards.appendChild(  makeCard(valuesObject[i][x])   );
        }
      }





      //toTheDom.appendChild( stepThree(response.data)  );
    })
    .catch(error => {
       console.log("The data was not returned", error)
    })


// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
