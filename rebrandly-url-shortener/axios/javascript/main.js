// information to reach API
const apiKey = 'f624e398959640518db7029fe5c95aad';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async() => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await axios.post(url,data,
      {
        headers: {
          'Content-type': 'application/json',
          'apikey': apiKey
        }
      })
      if (response.data) {
        renderResponse(response.data);
      }
  } catch(error){
    console.log(error)
  }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
