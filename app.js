const allPlayers = () => {
    document.getElementById
    const searchValue = document.getElementById('search-box').value;
    // console.log(searchValue);
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player));

};

const showPlayerDetails = (players) => {
    for (const player of players) {
    //   console.log(player);
    const parent = document.getElementById('player-container');
    const div = document.createElement('div');
    div.innerHTML = ` <div class="card border p-5">
<div class="pro-pic">
    <img class="w-50" src="${player.strThumb}" alt="">
    <h2>Name: ${player.strPlayer}</h2>
    <h5>${player.strNationality}</h5>
    <p>description</p>
    <div class="allButtion">
        <button " class="btn btn-danger">Delete</button>
         <button onclick="details('${player.idPlayer}')" class="btn btn-success">details</button>
    </div>
</div>
</div>`;
    parent.appendChild(div);

    }
    // console.log(players);
}

const details=(id)=>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => setDetails(data.players[0]));

    // console.log("ok boss",info);

}

const setDetails =(info)=>{
    // console.log(info);
    // console.log(info.strGender);
    if(info.strGender=="male"){
        document.getElementById("male").style.display="block";
        document.getElementById("female").style.display="none";
    }
    else{
        document.getElementById("male").style.display="none";
        document.getElementById("female").style.display="block";

    }
    document.getElementById("details-container").innerHTML=`
    <div>
    <img src="" alt="">
    <h1>Name:${info.strPlayer} </h1>
    </div>
    `;

}