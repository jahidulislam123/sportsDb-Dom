const allPlayers = () => {
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
         <button onclick="details(${player.idPlayer})" class="btn btn-success">details</button>
    </div>
</div>
</div>`;
    parent.appendChild(div);

    }
    // console.log(players);
}

const details=(info)=>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => console.log(data));

    // console.log("ok boss",info);

}