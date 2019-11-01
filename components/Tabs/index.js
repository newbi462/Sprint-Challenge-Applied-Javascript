// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

const gettopicstitlebox = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
      // Once the data is returned console.log it and review the structure.
      console.log(response.data);

      function loopoutdivs(index) {
        //<div class="tab">topic here</div>
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('tab');
        makeDiv.textContent = index;

        return makeDiv;
      };

      for (let i = 0; i < response.data["topics"].length; i++) {
          gettopicstitlebox.appendChild( loopoutdivs( response.data["topics"][i]  ) );
      }

    })
    .catch(error => {
       console.log("The data was not returned", error)
    })


// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
