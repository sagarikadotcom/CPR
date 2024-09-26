const axios = require('axios');
let data = JSON.stringify({
  "emails": [
    {
      "to": "sagarika.katikam@gmail.com",
      "subject": "Hello from Node!",
      "text": "This is the text part",
      "html": "<b>This is HTML</b>",
      "attachments": []
    },
    {
      "to": "sagarika.katikam@gmail.com",
      "subject": "Another Email",
      "text": "Different text content",
      "html": "<i>Different HTML content</i>",
      "attachments": []
    }
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://intense-basin-14503-973a3419579b.herokuapp.com/send-emails',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
