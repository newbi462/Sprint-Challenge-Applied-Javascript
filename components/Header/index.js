// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const getheaderbox = document.querySelector('.header-container');
function Header() {


  //  <div class="header">
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
//  getheaderbox.appendChild(headerDiv);

  //    <span class="date">SMARCH 28, 2019</span>
  const spanBox = document.createElement('span');
  spanBox.classList.add('date');
  spanBox.textContent = `SMARCH 28, 2019`;
  headerDiv.appendChild(spanBox);

  //    <h1>Lambda Times</h1>
  const h1Box = document.createElement('h1');
  h1Box.textContent = `Lambda Times`;
  headerDiv.appendChild(h1Box);

  //    <span class="temp">98°</span>
  const spanBox2 = document.createElement('span');
  spanBox2.classList.add('temp');
  spanBox2.textContent = `98°`;
  headerDiv.appendChild(spanBox2);

  //  </div >
  // And add it to the DOM in the .header-container component

  return headerDiv

}

getheaderbox.appendChild( Header() );
