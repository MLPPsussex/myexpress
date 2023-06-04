const express = require('express');
const app = express();
var count=0
// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define an API endpoint to retrieve data
app.get('/api/data', (req, res) => {
    // Simulated data from the backend server
    count++
    const data = { message: 'Hello!'+count };

    setTimeout( ()=>res.json(data), 100);
});

app.post('/api/data', (req, res) => {
  var leoApiKey='693a5c60-f266-4bf7-934f-3db55cd5c5f6'
  const option1 = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: `Bearer ${leoApiKey}`
  },
  body: JSON.stringify({prompt: 'dog'} ),
  modelId:"b820ea11-02bf-4652-97ae-9ac0cc00593d", width: dims, height: dims,
  scheduler: "LEONARDO", num_inference_steps: 30, sd_version: 'v2'})
};
leo=""
fetch('https://cloud.leonardo.ai/api/rest/v1/generations', option1)
  .then(response => response.json())
  .then(data => {leo=data.sdGenerationJob.generationId
                res.json( {id: leo}) }
       )
  .catch(err => {res.json( {id: 'APIerror'}) } );
     
}


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

