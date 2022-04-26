import fetch  from 'node-fetch'
export default function handler(request, response) { 
  const {summonerId} = request.query;
  const query = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${process.env.API_KEY}`
  
  const data = fetch(query)
  .then(res => res.json())
  .then(json => {
    response.send(JSON.stringify(json))
  })
  .catch(console.error)

///  https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Birdwench?api_key=RGAPI-35037421-a30f-4868-a207-e43518666738
}


