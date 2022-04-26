export async function getSummonerInformation(region='na1',summonerName=''){
    if(!summonerName) return null;
    let data = await fetch(`/api/query/summoner/getSummoner?region=${region}&summonerName=${summonerName}`)
    try{ 
        let json = await data.json();
        return json;
    }catch(e){
        return e
    }
}

export async function getMastery(summonerId){
    if(!summonerId) return null;
    let data = await fetch(`/api/query/summoner/getMastery?summonerId=${summonerId}`)
    try{ 
        let json = await data.json();
        return json;
    }catch(e){
        return e
    }
}

