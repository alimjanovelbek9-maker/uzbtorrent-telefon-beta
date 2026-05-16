let Games = {
  games: [
    { id: 1, title: "PES 2013", genre: ["Football", "Sports"], year: 2012, rating: 9.8, file: ["PES-2013-Pro-Evolution-Soccer-2013.torrent"], img: ["https://main-cdn.sbermegamarket.ru/big2/hlr-system/-18/490/605/181/011/120/100071163527b7.jpg"] },
  { id: 2, title: "PES 2017", genre: ["Football", "Sports"], year: 2016, rating: 9.7, file: ["PES-2017-RePack-Mechanics.torrent"], img: ["https://files.vgtimes.ru/games_header_images/50155/pro-evolution-soccer-2017-geympley-mobilnoy-versii_video_21310.jpg"] },
  { id: 3, title: "PES 2016", genre: ["Football", "Sports"], year: 2015, rating: 9.6, file: ["PES-2016.torrent"], img: ["https://gaming-cdn.com/images/products/834/orig-fallback-v1/pro-evolution-soccer-2016-pc-game-steam-europe-cover.jpg?v=1744101891"] },
  { id: 4, title: "PES 2019", genre: ["Football", "Sports"], year: 2018, rating: 9.5, file: ["PES-2019.torrent"], img: ["https://trashbox.ru/ifiles2/983283_795fd6_pro_evolution_soccer_2019_20180829132955.jpg_min.jpg/pes-2019-review-57.webp"] },
  { id: 5, title: "PES 2018", genre: ["Football", "Sports"], year: 2017, rating: 9.4, file: ["PES-2018-RePack-Mehaniki.torrent"], img: ["https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/592580/capsule_616x353.jpg?t=1543425596"] },
  { id: 6, title: "eFootball PES 2021", genre: ["Football", "Sports"], year: 2020, rating: 9.3, file: [""], img: [""] },
  { id: 7, title: "FIFA 14", genre: ["Football", "Sports"], year: 2013, rating: 9.6, file: [""], img: [""] },
  { id: 8, title: "FIFA 15", genre: ["Football", "Sports"], year: 2014, rating: 9.5, file: [""], img: [""] },
  { id: 9, title: "FIFA 16", genre: ["Football", "Sports"], year: 2015, rating: 9.4, file: [""], img: [""] },
  { id: 10, title: "FIFA 17", genre: ["Football", "Sports"], year: 2016, rating: 9.5, file: [""], img: [""] },
  { id: 11, title: "FIFA 18", genre: ["Football", "Sports"], year: 2017, rating: 9.6, file: [""], img: [""] },
  { id: 12, title: "FIFA 19", genre: ["Football", "Sports"], year: 2018, rating: 9.3, file: [""], img: [""] },
  { id: 13, title: "FIFA 20", genre: ["Football", "Sports"], year: 2019, rating: 9.2, file: [""], img: [""] },
  { id: 14, title: "FIFA 21", genre: ["Football", "Sports"], year: 2020, rating: 9.1, file: [""], img: [""] },
  { id: 15, title: "FIFA 22", genre: ["Football", "Sports"], year: 2021, rating: 9.0, file: [""], img: [""] },
  { id: 16, title: "FIFA 23", genre: ["Football", "Sports"], year: 2022, rating: 9.3, file: [""], img: [""] },

  ]
    
  
  };

let cards = document.getElementById (`cards`)
let inp = document.getElementById (`input`)
function game(data) {

    cards.innerHTML = ''
    
    data.map((gaming) => {
        let div = document.createElement('div')
        div.classList.add('card')

        div.innerHTML = `
        <img src="${gaming.img}">
        <h3><b>${gaming.title}</b></h3>
        <h5>${gaming.genre}</h5>
        <p>${gaming.year}</p>
        <p>${gaming.rating}</p>
        <button><a href="${gaming.file}" download>Yuklash</a></button>
        `

        cards.appendChild(div)
    })
}


game(Games.games)

inp.addEventListener('input', () => {

  let filterdata = Games.games.filter((item) =>
    item.title.toLowerCase().includes(inp.value.toLowerCase())
  )

  game(filterdata)
})



function btn() {
  
  alert(`  Agar siz tutorial ko'rib organgan bolsangiz 
  yuklangan faylni 2 marta bosangiz torrent yuklanish
  oynasiga otasiz ! `)

}

