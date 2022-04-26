import fetch  from 'node-fetch'
export default function handler(request, response) { 
  const { region, summonerName } = request.query;
  
  const query = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.API_KEY}`
  const data = fetch(query)
  .then(res => res.json())
  .then(json => {
    response.send(json)
  })
  .catch(err => response.status(400).send("ERROR: "+err))

///  https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Birdwench?api_key=RGAPI-35037421-a30f-4868-a207-e43518666738
}

