let Games = {
  games: [
    { id: 1, title: "GTA V", genre: ["Action", "Open World"], year: 2013, rating: 9.8, file: ["Grand-Theft-Auto-V-by-Igruha.torrent"], img: ["https://avatars.mds.yandex.net/get-mpic/11375994/2a0000018c89915b7b60c9cb5c9b3459cdeb/orig"]},
    { id: 2, title: "GTA IV", genre: ["Action", "Open World"], year: 2008, rating: 9.5, file: ["grand-theft-auto-iv-by-xatab.torrent"],img: ["https://tse1.mm.bing.net/th/id/OIP.oNRDis7w_ESaS80_-SEYCgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"]   },
    { id: 3, title: "Mafia II", genre: ["Action", "Story"], year: 2010, rating: 9.2, file: ["Mafia-2-Digital-Deluxe-Edition-by-Igruha.torrent"],img:["https://th.bing.com/th/id/R.7fa568a2fb0ea968b7cb7e16a43dd35b?rik=Bn67lilUbhUeww&pid=ImgRaw&r=0"] },
    { id: 4, title: "Forza Horizon 5", genre: ["Racing", "Open World"], year: 2021, rating: 9.4, file: ["rutor.isforza_horizon_5_fitgirl_repack.torrent"],img:["https://th.bing.com/th/id/R.27d9f59aff9f14d94146a2e21bd45b91?rik=qVcewZT2VO52aA&pid=ImgRaw&r=0"] },
    { id: 5, title: "Red Dead Redemption 2", genre: ["Adventure"], year: 2018, rating: 9.9, file: ["red-dead-redemption-2.torrent"],img:["https://tse1.mm.bing.net/th/id/OIP.fiwOCvdnt2wQVM0G8It5dgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 6, title: "The Witcher 3: Wild Hunt", genre: ["RPG"], year: 2015, rating: 9.8, file: ["The Witcher 3 Wild Hunt Complete Edition by Igruha.torrent"],img:["https://th.bing.com/th/id/R.ef088bdab155160154141fa3898892af?rik=fFj3Q34goxm7Jg&pid=ImgRaw&r=0"]  },
    { id: 7, title: "Cyberpunk 2077", genre: ["RPG"], year: 2020, rating: 8.5, file: ["cyberpunk-2077.torrent"],img:["https://i.pcmag.com/imagery/articles/03daxuxcE5t7NHYGJwO1AyQ-1.fit_lim.size_1200x630.v1607957828.jpg"]  },
    { id: 8, title: "Assassin’s Creed II", genre: ["Action", "Stealth"], year: 2009, rating: 9.6, file: ["Assassins-Creed-2-by-Igruha.torrent"],img:["https://tse2.mm.bing.net/th/id/OIP.M8uG2A2jA8BZbPRY-JglWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 9, title: "Assassin’s Creed Valhalla", genre: ["RPG"], year: 2020, rating: 8.7, file: ["Assassins-Creed-Valhalla-by-Igruha.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.eBgCFxB-aTEMn_GgtZPRJQHaEs?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 10, title: "Far Cry 3", genre: ["Shooter"], year: 2012, rating: 9.4, file: ["Far-Cry-3-by-Igruha.torrent"],img:["https://th.bing.com/th/id/R.305700ad13b59cc8445b90abcb5e905d?rik=ZVAe5d78QRDRCw&pid=ImgRaw&r=0"]  },
    { id: 11, title: "Far Cry 5", genre: ["Shooter"], year: 2018, rating: 8.9, file: ["Far-Cry-5-by-Igruha.torrent"],img:["https://th.bing.com/th/id/R.b982a83be25b98d6866053e41601562a?rik=Th1%2fU5MQjEqMEA&pid=ImgRaw&r=0"]  },
    { id: 12, title: "Call of Duty: Modern Warfare 2", genre: ["Shooter"], year: 2009, rating: 9.7, file: ["Call-of-Duty-Modern-Warfare-2-by-Igruha.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.XHlsWp2UIRMmy1yjGn-KrgHaLH?w=800&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 13, title: "Call of Duty: Warzone", genre: ["Battle Royale"], year: 2020, rating: 9.0, file: ["call-of-duty-modern-warfare-2-2022.torrent"],img:["https://tse2.mm.bing.net/th/id/OIP.VToJpfaz1j5kkt23l0pGSAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 14, title: "Battlefield 3", genre: ["Shooter"], year: 2011, rating: 9.3, file: ["battlefield-3.torrent"],img:["https://wallpapers.com/images/hd/battlefield-3-video-game-llc1lqvtshgt029u.jpg"]  },
    { id: 15, title: "Battlefield 1", genre: ["Shooter"], year: 2016, rating: 9.1, file: ["Battlefield-1-by-Igruha.torrent"],img:["https://image.api.playstation.com/vulcan/img/rnd/202010/0612/B4pRK104PVoGPCh1zkb0gRTa.jpg"]  },
    { id: 16, title: "Need for Speed: Most Wanted", genre: ["Racing"], year: 2005, rating: 9.9, file: ["Need-for-Speed-Most-Wanted-Limited-Edition-by-Igruha.torrent"],img:["https://th.bing.com/th/id/OIP.xM7orbwtJuBaGtSEh-n-rgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 17, title: "Need for Speed: Heat", genre: ["Racing"], year: 2019, rating: 8.6, file: ["need-for-speed-heat.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.fTh_ATE2qq4aU1zCU9ceUQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 18, title: "Minecraft", genre: ["Sandbox"], year: 2011, rating: 9.8, file: ["Minecraft-by-Igruha.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.lyBzppeSfdgFRc2uRCWBJAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 19, title: "Terraria", genre: ["Sandbox"], year: 2011, rating: 9.2, file: ["Terraria-by-Igruha.torrent"],img:["https://gamersbiography.com/wp-content/uploads/2023/05/terraria.jpg"]  },
    { id: 20, title: "Half-Life 2", genre: ["Shooter"], year: 2004, rating: 9.9, file: ["half-life-2-20th-anniversary-2004-2007-2024.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.Sto8q8YQu2g-sNE5M-VongHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 21, title: "Portal 2", genre: ["Puzzle"], year: 2011, rating: 9.8, file: ["Portal-2-by-Igruha.torrent"],img:["https://tse1.mm.bing.net/th/id/OIP.MaihEBpmiiyPtrPGW50SaAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 22, title: "The Elder Scrolls V: Skyrim", genre: ["RPG"], year: 2011, rating: 9.7, file: ["The-Elder-Scrolls-V-Skyrim-Anniversary-Edition-by-Igruha.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.hRvqWzXjO8o0perYwwBqsAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 23, title: "Dark Souls III", genre: ["RPG"], year: 2016, rating: 9.3, file: ["Dark-Souls-III-by-Igruha.torrent"],img:["https://tse1.explicit.bing.net/th/id/OIP.H-ZJSQqR5-dM6_jLKSrGvgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 24, title: "Sekiro: Shadows Die Twice", genre: ["Action"], year: 2019, rating: 9.5, file: ["sekiro-shadows-die-twice-by-xatab.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.51uS9uqfLhM5-Pzm42SXXgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 25, title: "Resident Evil 4", genre: ["Horror"], year: 2005, rating: 9.6, file: ["Resident_Evil_4_Ultimate_HD_Edition_by_xatab.torrent"] ,img:["https://tse1.mm.bing.net/th/id/OIP.NaDlEppz8W6pcJ1Ry-n4UwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"] },
    { id: 26, title: "Resident Evil Village", genre: ["Horror"], year: 2021, rating: 9.0, file: ["resident-evil-village-deluxe-edition.torrent"],img:["https://tse4.mm.bing.net/th/id/OIP.PRdlcKVPXOK-eBlvoXwPsQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 27, title: "God of War", genre: ["Action"], year: 2018, rating: 9.9 , file: ["God-of-War-Collection.torrent"],img:["https://tse2.mm.bing.net/th/id/OIP.34ifvWuO5ajGDafLTlSZ5QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"] },
    { id: 28, title: "The Last of Us", genre: ["Story"], year: 2013, rating: 9.9, file: ["1737825629-The.Last.of.Usw.Part.I.v1.1.4.0-P2P.torrent"],img:["https://tse1.mm.bing.net/th/id/OIP.UEk-AcLgOdIxxAalQ4a_nAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 29, title: "Uncharted 4", genre: ["Adventure"], year: 2016, rating: 9.5, file: ["UNCHARTED-Legacy-of-Thieves-Collection-by-Igruha-3.torrent"],img:["https://tse1.mm.bing.net/th/id/OIP.oypyHl914l63RYsn97SePwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"]  },
    { id: 30, title: "Max Payne 2", genre: ["Shooter"], year: 2003, rating: 9.4, file: ["max-payne-2.torrent"],img:["https://tse3.mm.bing.net/th/id/OIP.DkLFrwVeUD2qLoiQHBUZvAHaF7?rs=1&pid=ImgDetMain&o=7&rm=3"]  } 
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

