// 1. PENGGUNAAN VARIABEL DAN TIPE DATA (Array, Object, String, Number, Boolean)
const cafeProducts = [
        {
        id: 32,                  
        name: "Rendang",  
        category: "Makanan",
        description: "Rendang memiliki profil rasa yang sangat kaya, kompleks, dan mendalam karena dimasak dalam waktu lama (berjam-jam) menggunakan santan dan campuran rempah-rempah yang banyak.",
        imageURL: "https://i.pinimg.com/1200x/95/dc/34/95dc34cb1b729b5c37745d3eb0e1cf9b.jpg", 
        origin: "Sumatera Barat", 
        ingredients: [
            "Daging Sapi (1 Kg): Dipotong besar.", "Santan Kental: Diperlukan banyak (± 2 liter) untuk proses karamelisasi.", "Bumbu Halus: Cabai, Bawang Merah, Bawang Putih, Jahe, Kunyit, Kemiri.", 
            "Bumbu Aromatik: Serai, Lengkuas, Daun Kunyit, Daun Jeruk, Asam Kandis"
        ],
        tools: [
            "Wajan/Kuali Tebal: Penting untuk memasak dalam waktu lama tanpa gosong.", "Blender/Ulekan: Untuk menghaluskan bumbu.","Baskom","Piring","Pisau","dll"
        ],
        steps: [
            "Memasak Santan & Bumbu: Masukkan santan, bumbu halus, dan semua bumbu aromatik ke dalam wajan. Masak dan aduk terus hingga mendidih dan santan tidak pecah.",
            "Memasukkan Daging (Kalio): Setelah santan mulai mengental, masukkan daging. Kecilkan api dan masak hingga santan menyusut menjadi Kalio (rendang basah).",
            "Mengeringkan (Rendang): Terus masak dengan api sangat kecil selama 3–5 jam sambil sesekali diaduk. Angkat ketika bumbu sudah kering, berminyak, dan berwarna cokelat gelap."
        ]
    },
{
        id: 1,
        name: "Onde - Onde",
        category: "Cake",
        description: "Rasanya renyah dan gurih di luar, kenyal di kulitnya, dan manis serta lembut di bagian isinya.",
        imageURL: "https://media.istockphoto.com/id/1725163306/id/foto/close-up-onde-onde-indonesian-traditional-food-jajanan-pasar.jpg?s=612x612&w=0&k=20&c=rDM8Ajb5KtevGLjsku3uiIv97QIM6WQft8yMyR8IPwg=",
        origin: "Jawa Timur", 
        ingredients: [
            "250 gr tepung ketan", "50 gr tepung beras", "125 ml santan hangat", "50 gr gula pasir", "1/2 sdt garam",
            "100 gr kacang hijau kupas (isian)", "50 gr gula merah, sisir", "Biji wijen secukupnya"
        ],
        tools: [
            "Wajan", "Mangkuk adonan", "Panci kukusan (untuk isian)", "Spatula"
        ],
        steps: [
            "Buat isian: Kukus kacang hijau hingga empuk, haluskan, campur dengan gula merah. Bentuk bulatan kecil.",
            "Buat kulit: Campur tepung ketan, gula, santan, dan garam hingga adonan kalis.",
            "Bentuk adonan menjadi bola-bola, masukkan isian, lalu gulingkan di atas biji wijen.",
            "Goreng dalam minyak panas dengan api kecil hingga matang dan mengembang."
        ]
    },
      {
        id: 35,
        name: "Pempek",
        category: "Makanan",
        description: ".",
        imageURL: "https://i.pinimg.com/1200x/d6/ef/e5/d6efe50c7a08812c4507b980df57d4bf.jpg",
        origin: "", 
        ingredients: [
            "", "", "", "", 
            "", "", ""
        ],
        tools: [
            "", "", ""
        ],
        steps: [
            
        ]
    },
     {
        id: 36,
        name: "Sate",
        category: "Makanan",
        description: ".",
        imageURL: "https://i.pinimg.com/1200x/96/f8/35/96f83502946906ea66077e987b11e7cf.jpg",
        origin: "", 
        ingredients: [
            "500 gr Daging Ayam (bagian dada/paha), potong dadu.", "1 sdm air perasan Jeruk Limau.", "1 sdm Kecap Manis.", "200 gr Kacang Tanah Goreng","Kecap Manis (untuk olesan)","200 gr Kacang Tanah Goreng.", 
            "", "", ""
        ],
        tools: [
            "", "", ""
        ],
        steps: [
            
        ]
    },
      {
        id: 37,
        name: "Paspeda",
        category: "Makanan",
        description: ".",
        imageURL: "https://i.pinimg.com/1200x/f4/db/9f/f4db9f0f17722382b715ddd6c35a7dba.jpg",
        origin: "", 
        ingredients: [
            "", "", "", "", 
            "", "", ""
        ],
        tools: [
            "", "", ""
        ],
        steps: [
            
        ]
    },
     {
        id: 2,
        name: "Pisang Goreng",
        category: "Cake",
        description: "pisang goreng adalah kombinasi yang memuaskan antara manisnya pisang yang lembut di dalam dan gurihnya adonan renyah di luar..",
        imageURL: "https://i.pinimg.com/1200x/52/f1/7f/52f17f28556fda817459693f74911306.jpg",
        origin: "Indonesia (Umum)", 
        ingredients: [
            "10 buah pisang kepok/raja", "150 gr tepung terigu", "50 gr tepung beras", "1/2 sdt vanili", 
            "1 sdm gula", "1/4 sdt garam", "150 ml air dingin"
        ],
        tools: [
            "Wajan", "Spatula"
        ],
        steps: [
            "Campur semua bahan adonan tepung, gula, dan garam.",
            "Celupkan pisang ke adonan hingga merata.",
            "Goreng hingga kuning keemasan. Tiriskan."
        ]
    },
    {
        id: 3,
        name: "Kembang Goyang",
        category: "Cake",
        description: "Kue kering yang sangat renyah, manis, dan gurih, dengan aroma khas santan yang hangat.",
        imageURL: "https://i.pinimg.com/1200x/0e/5b/aa/0e5baa4af7014386a8ba9cedf82af421.jpg",
        origin: "Betawi", 
        ingredients: [
            "100 gr tepung beras", "25 gr tepung sagu", "2 butir telur", "75 gr gula pasir", 
            "150 ml santan kental", "1/4 sdt garam", "Minyak goreng"
        ],
        tools: [
            "Cetakan kembang goyang", "Wajan", "Mangkuk adonan"
        ],
        steps: [
            "Kocok telur dan gula hingga larut.",
            "Masukkan tepung beras, sagu, santan, dan garam. Aduk hingga licin.",
            "Panaskan minyak. Celupkan cetakan kembang goyang ke adonan.",
            "Goreng sambil goyangkan cetakan hingga kue terlepas. Goreng hingga matang dan renyah."
        ]
    },
    {
        id: 4,
        name: "Kue Wingko",
        category: "Cake",
        description:"Rasa wingko seperti cokelat,atau pandan,  yang menawarkan sensasi rasa tambahan, namun rasa kelapa original adalah yang paling tradisional dan populer.",
        imageURL:"https://i.pinimg.com/736x/cc/56/e9/cc56e91502a9a520d5ccf7e9c47b78a5.jpg",
        origin: "Babab, Jawa Tengah", 
        ingredients: [
            "250 gr tepung ketan", "200 gr kelapa parut (yang agak muda)", "200 gr gula pasir", 
            "150 ml santan kental hangat", "1 butir telur", "1/2 sdt vanili", "Sejumput garam"
        ],
        tools: [
            "Loyang (untuk dipanggang)", "Wadah adonan", "Oven atau teflon"
        ],
        steps: [
            "Campur kelapa parut, gula, garam, dan vanili.",
            "Masukkan tepung ketan dan telur. Aduk rata.",
            "Tuang santan hangat sambil diuleni hingga adonan kalis.",
            "Panggang dalam loyang atau cetak bulat di teflon hingga matang dan berwarna cokelat keemasan."
        ]
    },
     {
        id: 33,
        name: "Soto Ayam",
        category: "Makanan",
        description: ".",
        imageURL: "https://i.pinimg.com/1200x/da/8d/96/da8d96e31f94de350849adbee8591668.jpg",
        origin: "", 
        ingredients: [
            "", "", "", "", 
            "", "", ""
        ],
        tools: [
            "", "", ""
        ],
        steps: [
            
        ]
    },
    {
        id: 34,
        name: "Nasi Gudeg",
        category: "Makanan",
        description: ".",
        imageURL: "https://i.pinimg.com/736x/b8/85/45/b8854574a41e5f3a1dd917c8934774e4.jpg",
        origin: "", 
        ingredients: [
            "", "", "", "", 
            "", "", ""
        ],
        tools: [
            "", "", ""
        ],
        steps: [
            
        ]
    },
    {
        id: 5,
        name: "Putu Ayu",
        category: "Cake",
        description: "Perpaduan rasa manis-pandan yang aromatik dengan rasa gurih-asin dari kelapa parut di atasnya.",
        imageURL: "https://media.istockphoto.com/id/1373266182/id/foto/roti-kukus-yang-terbuat-dari-tepung-beras-dengan-latar-belakang-putih.jpg?s=612x612&w=0&k=20&c=FJXyt9dot1yik1ymBkCDEPD1WQKTNXCfHXUHDkV0h3c=",
        origin: "Jawa", 
        ingredients: [
            "2 butir telur", "150 gr gula pasir", "1/2 sdt SP/Ovalet", "150 gr tepung terigu", 
            "100 ml santan kental", "Pasta pandan secukupnya", "Kelapa parut (kukus dengan sedikit garam)"
        ],
        tools: [
            "Panci kukusan", "Mixer", "Cetakan kue mangkok"
        ],
        steps: [
            "Kocok telur, gula, dan SP hingga kental berjejak.",
            "Masukkan tepung terigu dan santan secara bergantian sambil diaduk rata.",
            "Tambahkan pasta pandan. Aduk rata.",
            "Padatkan kelapa parut di dasar cetakan, lalu tuang adonan di atasnya.",
            "Kukus selama 15-20 menit hingga matang."
        ]
    },
    {
        id: 6,
        name: "Lapis Legit",
        category: "Cake",
        description: "Lapis Legit adalah kue yang sangat manis, sangat gurih, creamy, dan beraroma rempah yang kuat, menjadikannya suguhan istimewa..",
        imageURL: "https://i.pinimg.com/1200x/b9/c6/9c/b9c69c9b90e6c41d7ef6c1e718452c85.jpg",
        origin: "Era Kolonial Belanda (Adaptasi Indonesia)", 
        ingredients: [
            "40 butir kuning telur", "500 gr mentega", "250 gr gula halus", 
            "100 gr tepung terigu", "Bumbu spekoek secukupnya"
        ],
        tools: [
            "Oven", "Loyang persegi", "Mixer"
        ],
        steps: [
            "Kocok mentega dan gula hingga mengembang. Kocok kuning telur di wadah terpisah.",
            "Campur kedua adonan, masukkan tepung dan bumbu spekoek.",
            "Panggang adonan selapis demi selapis. Setiap lapisan dipanggang dengan api atas."
        ]
    },
     {
        id: 7,
        name: "Kue Mangkok",
        category: "Cake",
        description: "Kue Mangkok adalah cemilan yang ringan dan lembut di mulut, dengan rasa manis yang menenangkan dan aroma yang harum..",
        imageURL: "https://i.pinimg.com/736x/58/4f/db/584fdb3ab3b3c6a882a8764a633048c5.jpg",
        origin: "Tionghoa (Fakao/Huat Kue)", 
        ingredients: [
            "250 gr tepung beras", "100 gr tepung terigu", "200 gr gula pasir", "300 ml air/santan", 
            "1/2 sdt ragi instan", "Pewarna makanan (merah/hijau)"
        ],
        tools: [
            "Panci kukusan", "Cetakan kue mangkok"
        ],
        steps: [
            "Campur gula, ragi, dan air/santan hangat. Diamkan hingga berbusa.",
            "Masukkan tepung beras dan terigu, aduk rata.",
            "Bagi adonan, beri pewarna. Tuang ke cetakan.",
            "Kukus dengan api besar selama 20 menit hingga merekah."
        ]
    },
     {
        id: 8,
        name: "Dadar Gulung",
        category: "Cake",
        description: "Perpaduan kelembutan dan wangi dari kulit pandan, diikuti oleh ledakan rasa manis-gurih yang hangat dari isian kelapa gula merah.",
        imageURL: "https://i.pinimg.com/736x/c3/96/95/c39695a0b84ec4eade19156641a65a51.jpg",
        origin: "Jawa dan Bali", 
        ingredients: [
            "Kulit: 150 gr tepung terigu, 1 butir telur, 350 ml santan/air perasan pandan",
            "Isian: 200 gr kelapa parut, 150 gr gula merah (sisir), 1/4 sdt garam"
        ],
        tools: [
            "Teflon datar", "Wadah adonan", "Wajan (untuk isian)"
        ],
        steps: [
            "Buat isian: Masak kelapa parut dan gula merah hingga air menyusut.",
            "Buat kulit: Campur semua bahan kulit, buat dadar tipis di teflon.",
            "Isi dadar dengan isian kelapa gula merah, lalu gulung rapi."
        ]
    },
    {
        id: 9,
        name: "Es Pisang Ijo",
        category: "Drink",
        description: "Es Pisang Ijo menawarkan rasa yang manis, gurih, creamy, dan segar, dengan perpaduan tekstur kenyal-lembut-dingin yang sangat nikmat di lidah.",
        imageURL: "https://i.pinimg.com/736x/22/e5/c8/22e5c81a42fb9821e3be8ec77fac2a64.jpg",
        origin: "Makassar, Sulawesi Selatan", 
        ingredients: [
            "Pisang raja yang matang", "Tepung beras/terigu (untuk kulit)", "Air perasan pandan/suji (pewarna hijau)", 
            "Bubur Sumsum: Santan, tepung beras, garam.", "Sirup Cocopandan", "Es batu"
        ],
        tools: [
            "Panci kukusan", "Panci kecil", "Mangkok saji"
        ],
        steps: [
            "Buat kulit ijo dan balut pisang yang sudah dikukus, lalu kukus kembali.",
            "Buat bubur sumsum.",
            "Sajikan: Potong-potong pisang ijo, tambahkan bubur sumsum, es batu, dan sirup."
        ]
    },
     {
        id: 10,
        name: "Kue Lapis",
        category: "Cake",
        description: "Kue basah yang manis-gurih dengan aroma pandan yang lembut, dan memiliki tekstur kenyal yang sangat khas.",
        imageURL: "https://i.pinimg.com/736x/cb/2b/6a/cb2b6ade3bdf5c6bf9768c0c05ab0adc.jpg",
        origin: "Jawa", 
        ingredients: [
            "200 gr tepung beras", "100 gr tepung tapioka", "250 gr gula pasir", "1 liter santan", 
            "1/2 sdt garam", "Daun pandan", "Pewarna makanan"
        ],
        tools: [
            "Panci kukusan", "Loyang persegi"
        ],
        steps: [
            "Masak santan, gula, garam, dan daun pandan hingga larut. Dinginkan.",
            "Campur tepung, tuang santan dingin, aduk rata.",
            "Bagi adonan, beri warna. Kukus adonan selapis demi selapis hingga matang."
        ]
    },
    {
        id: 11,
        name: "Kue Piscok",
        category: "Cake",
        description: "Pisang Cokelat adalah camilan yang memberikan rasa manis, rich cokelat, dengan tekstur yang renyah di luar dan lembut lumer di dalam.",
        imageURL: "https://i.pinimg.com/736x/e8/b4/27/e8b427a1e3ef70af610a2a69fa95fe6c.jpg",
        origin: "Jawa Barat", 
        ingredients: [
            "10 lembar kulit lumpia siap pakai", "5 buah pisang uli/tanduk", 
            "Cokelat meses atau DCC (Dark Cooking Chocolate) yang diserut", "Larutan terigu (untuk perekat)"
        ],
        tools: [
            "Wajan", "Spatula"
        ],
        steps: [
            "Letakkan pisang dan cokelat di atas kulit lumpia.",
            "Lipat dan gulung rapi, rekatkan ujungnya dengan larutan terigu.",
            "Goreng dalam minyak panas hingga berwarna cokelat keemasan."
        ]
    },
    {
        id: 12,
        name: "Kue Cucur",
        category: "Cake",
        description: "Rasa manis-legit dengan tekstur yang kenyal dan lembut secara bersamaan.",
        imageURL: "https://i.pinimg.com/736x/00/c0/a1/00c0a17855c8cf94c9ed0a4fe5c54833.jpg",
        origin: "Betawi dan Manado", 
        ingredients: [
            "125 gr tepung beras", "100 gr tepung terigu", "100 gr gula merah (sisir)", 
            "250 ml air", "1/4 sdt garam", "Daun pandan"
        ],
        tools: [
            "Wajan cekung kecil", "Wadah adonan"
        ],
        steps: [
            "Masak air, gula merah, dan pandan hingga larut. Dinginkan.",
            "Campur tepung beras dan terigu.",
            "Tuang larutan gula hangat ke campuran tepung sedikit demi sedikit sambil diuleni cepat hingga kalis dan berbusa.",
            "Diamkan adonan 30 menit. Goreng di wajan cekung hingga matang dan berserat."
        ]
    },
    {
        id: 13,
        name: "Klepon",
        category: "Cake",
        description: "Gurih-asin dari kelapa bertemu dengan tekstur kenyal dari kulitnya, dan diakhiri dengan ledakan manis yang harum dari gula merah cair di dalamnya.",
        imageURL: "https://i.pinimg.com/736x/47/f8/87/47f88713caabbacd2e2c58442805e6bd.jpg",
        origin: "Jawa", 
        ingredients: [
            "200 gr tepung ketan", "50 gr tepung beras", "150 ml air perasan daun suji/pandan", 
            "Gula merah, potong dadu kecil (isian)", 
            "Kelapa parut (kukus dengan sedikit garam)"
        ],
        tools: [
            "Panci rebusan", "Wadah adonan"
        ],
        steps: [
            "Uleni tepung ketan, tepung beras, dan air pandan hingga kalis.",
            "Ambil adonan, isi dengan gula merah, bulatkan.",
            "Rebus hingga mengapung. Angkat, lalu gulingkan di atas kelapa parut kukus."
        ]
    },{
        id: 14,
        name: "Kue Cubit",
        category: "Cake",
        description: "Cokelat Meses: Menambah rasa manis dan tekstur renyah dari cokelat.",
        imageURL: "https://i.pinimg.com/1200x/ae/28/ea/ae28ea671b3ab07dd80bacf592c6cd0a.jpg",
        origin: "Jakarta", 
        ingredients: [
            "100 gr tepung terigu", "2 butir telur", "75 gr gula pasir", "50 ml susu cair", 
            "1/2 sdt soda kue", "Toping meses/keju"
        ],
        tools: [
            "Cetakan kue cubit (teflon)", "Wadah adonan"
        ],
        steps: [
            "Kocok telur dan gula hingga larut.",
            "Masukkan tepung terigu dan soda kue, lalu tuang susu cair.",
            "Tuang adonan ke cetakan, masak hingga setengah matang, lalu beri toping."
        ]
    },
    {
        id: 15,
        name: "Kue Terang Bulan",
        category: "Cake",
        description: "Rasa manis, gurih, creamy, dengan tekstur yang lembut berserat dan disempurnakan oleh perpaduan rasa dari topping yang Anda pilih (seperti cokelat dan keju).",
        imageURL: "https://i.pinimg.com/736x/f1/e4/3c/f1e43c94fe1e5faee6669f7bab4c24e9.jpg",
        origin: "Bandung (Martabak Manis)", 
        ingredients: [
            "250 gr tepung terigu", "1/2 sdt ragi instan", "50 gr gula pasir", 
            "1/2 sdt soda kue", "300 ml air", "1 butir telur", "Topping: mentega, gula pasir, keju, cokelat meses."
        ],
        tools: [
            "Wajan/teflon cekung tebal"
        ],
        steps: [
            "Campur tepung, gula, dan ragi. Tuang air sambil diuleni. Diamkan 1 jam.",
            "Kocok telur dan soda kue, masukkan ke adonan.",
            "Panaskan teflon. Tuang adonan, tunggu hingga berlubang. Angkat, olesi mentega, dan beri topping."
        ]
    },
     {
        id: 16,
        name: "Pudding",
        category: "Cake",
        description: "Ketika dimakan, puding akan lumer dengan mudah di lidah, meninggalkan sensasi creamy.",
        imageURL: "https://i.pinimg.com/1200x/9c/73/ac/9c73acfab65bf135b0ea5d61aa8b87c7.jpg",
        origin: "Eropa (diadopsi di Indonesia)", 
        ingredients: [
            "1 bungkus agar-agar", "1 liter susu cair", "100 gr gula pasir", "Cokelat bubuk/perasa buah"
        ],
        tools: [
            "Panci", "Cetakan pudding"
        ],
        steps: [
            "Campur semua bahan dalam panci.",
            "Masak sambil terus diaduk hingga mendidih.",
            "Tuang ke dalam cetakan. Dinginkan."
        ]
    },
    {
        id: 17,
        name: "Es Cendol",
        category: "Drink",
        description: "Perpaduan yang harmonis antara manis gula merah yang pekat dan gurih santan yang creamy.",
        imageURL: "https://i.pinimg.com/1200x/46/32/02/463202ab86de4c1ece843b344c23cc5b.jpg",
        origin: "Sunda/Jawa Barat", 
        ingredients: [
            "Cendol: Tepung hunkwe/beras, air perasan daun suji/pandan.",
            "Saus Gula Merah: Gula merah, air, daun pandan.",
            "Saus Santan: Santan kental, garam, daun pandan.",
            "Pelengkap: Es batu."
        ],
        tools: [
            "Panci", "Cetakan cendol", "Mangkok saji"
        ],
        steps: [
            "Buat cendol: Masak semua bahan cendol, cetak adonan panas ke dalam air es.",
            "Buat saus gula merah: Masak gula merah dengan air dan pandan hingga mengental.",
            "Buat saus santan: Masak santan dengan garam dan pandan.",
            "Sajikan: Campur cendol, saus gula merah, santan, dan es batu."
        ]
    },
    {
        id: 18,
        name: "Nagasari",
        category: "Cake",
        description: "Gurih-asin dari kelapa bertemu dengan tekstur kenyal dari kulitnya, dan diakhiri dengan ledakan manis yang harum dari gula merah cair di dalamnya.",
        imageURL: "https://i.pinimg.com/736x/8c/dc/e0/8cdce0d0e53ab299e3c077920aa73120.jpg",
        origin: "Jawa", 
        ingredients: [
            "200 gr tepung beras", "750 ml santan", "100 gr gula pasir", "1/2 sdt garam", 
            "Pisang raja/kepok yang matang", "Daun pisang (untuk membungkus)"
        ],
        tools: [
            "Panci", "Panci kukusan"
        ],
        steps: [
            "Masak santan, gula, garam. Masukkan larutan tepung beras. Aduk hingga mengental.",
            "Bungkus adonan bubur dengan potongan pisang di tengah menggunakan daun pisang.",
            "Kukus selama 30 menit hingga matang."
        ]
    },
    {
        id: 19,
        name: "Kopi Susu Gula Aren",
        category: "Kopi",
        description: "Perpaduan kopi, susu creamy, dan manisnya gula aren alami. Favorit pelanggan!",
        imageURL: "https://images.pexels.com/photos/32461147/pexels-photo-32461147.jpeg?cs=srgb&dl=pexels-indraprojectsofficial-32461147.jpg&fm=jpg&_gl=1*1n543ah*_ga*MTAyNzg0NjQyLjE3NjM1Mjg0NjQ.*_ga_8JE65Q40S6*czE3NjM1Mjg0NjQkbzEkZzEkdDE3NjM1Mjg3OTAkajU5JGwwJGgw",
        origin: "Indonesia (Modern)", 
        ingredients: [
            "50 ml espresso/kopi hitam kental", "100 ml susu segar/UHT", 
            "30 ml sirup gula aren (atau gula aren cair)", "Es batu"
        ],
        tools: [
            "Mesin espresso/alat seduh kopi manual", "Gelas saji"
        ],
        steps: [
            "Siapkan sirup gula aren di dasar gelas.",
            "Tambahkan es batu.",
            "Tuang susu cair perlahan.",
            "Tuang espresso di atas lapisan susu. Sajikan dingin."
        ]
    },
     {
        id: 20,
        name: "Risoles",
        category: "Gorengan",
        description: "Camilan yang mengenyangkan dan menawarkan kontras tekstur yang sempurna antara krispi di luar dan lembut creamy di dalam, dengan rasa yang gurih-asin yang mendominasi.",
        imageURL: "https://i.pinimg.com/1200x/b1/1b/88/b11b8896a35b6ada3c8eb8d2ada4dc52.jpg",
        origin: "Belanda (Risolles)", 
        ingredients: [
            "Kulit: Tepung terigu, telur, susu cair.",
            "Isian: Daging ayam/sapi cincang, wortel, kentang, susu.",
            "Lapisan luar: Tepung panir, telur."
        ],
        tools: [
            "Teflon datar", "Wajan"
        ],
        steps: [
            "Buat kulit tipis di teflon. Buat isian.",
            "Isi kulit dengan adonan isian, lipat.",
            "Celupkan ke telur, gulingkan ke tepung panir. Goreng hingga kecokelatan."
        ]
    },
     {
        id: 21,
        name: "Kue Semprong",
        category: "Cake",
        description: "kue kering yang memberikan sensasi renyah, manis, dan gurih dengan aroma yang hangat dan khas di setiap gigitannya.",
        imageURL: "https://i.pinimg.com/1200x/6b/be/eb/6bbeeb4f2d85424375ffe00839bb0714.jpg",
        origin: "Tionghoa (Adaptasi Indonesia)", 
        ingredients: [
            "150 gr tepung beras", "50 gr tepung tapioka", "150 gr gula pasir", 
            "2 butir telur", "300 ml santan", "1/2 sdt garam"
        ],
        tools: [
            "Cetakan kue semprong (capitan)"
        ],
        steps: [
            "Kocok telur dan gula. Masukkan tepung, santan, dan garam. Aduk rata.",
            "Panaskan cetakan. Tuang adonan, panggang.",
            "Angkat cetakan, segera gulung/lipat kue selagi panas."
        ]
    },
    {
        id: 22,
        name: "Kue Rambut",
        category: "Cake",
        description: "Kue Rambut/Jawada adalah camilan yang renyah, manis, legit, dan gurih, sering disajikan hangat dan sangat cocok dinikmati bersama kopi.",
        imageURL: "https://i.pinimg.com/736x/4e/0d/47/4e0d47f51def0d6ca7002bfd5719327e.jpg",
        origin: "Nusa Tenggara Timur (NTT)", 
        ingredients: [
            "200 gr tepung beras", "200 gr gula merah", "100 ml air", "1/2 sdt garam"
        ],
        tools: [
            "Wajan", "Corong kecil/tempurung kelapa berlubang"
        ],
        steps: [
            "Masak gula merah, air, dan garam hingga mengental.",
            "Campur tepung beras dengan sirup gula merah hingga adonan kental.",
            "Tuang adonan ke dalam corong, lalu teteskan adonan ke dalam minyak panas membentuk serat. Goreng hingga matang."
        ]
    },
    {
        id: 23,
        name: "Kue Apem",
        category: "Cake",
        description: "Apem adalah camilan tradisional yang lezat, cocok dinikmati sebagai hidangan penutup atau kudapan.",
        imageURL: "https://i.pinimg.com/736x/ba/ce/0d/bace0d4f26da0a08de2f1fda55548162.jpg",
        origin: "Jawa", 
        ingredients: [
            "200 gr tepung beras", "50 gr tepung terigu", "1/2 bungkus ragi instan", 
            "150 gr gula merah (cairkan)", "300 ml santan hangat"
        ],
        tools: [
            "Panci kukusan", "Cetakan kue mangkok"
        ],
        steps: [
            "Campur tepung beras, terigu, dan ragi.",
            "Masukkan gula merah cair dan santan hangat, aduk rata.",
            "Diamkan adonan 1 jam hingga mengembang.",
            "Tuang ke cetakan, kukus hingga matang."
        ]
    },
    {
        id: 24,
        name: "Kue Apem Panggang",
        category: "Cake",
        description: "Kue ini populer sebagai jajanan pasar tradisional yang nikmat dan mengenyangkan",
        imageURL: "https://i.pinimg.com/1200x/43/3c/fa/433cfa8852d7dfdf20db93abeed8d4d7.jpg",
        origin: "Jawa", 
        ingredients: [
            "200 gr tepung beras", "50 gr tepung terigu", "1/2 bungkus ragi instan", 
            "150 gr gula merah (cairkan)", "300 ml santan hangat", "Toping: Nangka/keju"
        ],
        tools: [
            "Cetakan kue lumpur/apem panggang"
        ],
        steps: [
            "Campur tepung beras, terigu, dan ragi.",
            "Masukkan gula merah cair dan santan hangat. Diamkan 1 jam.",
            "Panaskan cetakan, tuang adonan, tutup. Panggang hingga matang. Beri toping."
        ]
    },
    {
        id: 25,
        name: "Lumpia",
        category:"Makanan",
        description:"Camilan yang sangat beraroma, dengan rasa gurih-manis-asin yang seimbang dari isiannya, dan tekstur renyah di luar, lalu lembut di dalam.",
        imageURL: "https://i.pinimg.com/1200x/bc/46/a2/bc46a26087ef7f3034dc249cea811922.jpg",
        origin: "Semarang, Jawa Tengah", 
        ingredients: [
            "10 lembar kulit lumpia", "200 gr rebung (cincang)", "100 gr udang/ayam cincang", 
            "Bawang putih, ebi, telur (untuk isian)"
        ],
        tools: [
            "Wajan", "Spatula"
        ],
        steps: [
            "Buat isian: Tumis bumbu, masukkan rebung, udang, dan telur. Masak hingga matang.",
            "Isi kulit lumpia, lipat dan gulung rapi.",
            "Goreng dalam minyak panas hingga berwarna cokelat keemasan."
        ]
    },
    {
        id: 26,
        name: "Es Teh",
        category: "Teh",
        description: "Rasa dasarnya adalah segar dan dingin karena adanya es. Rasa tehnya cenderung pahit dan kaya (earthy) dengan aroma khas daun teh.",
        imageURL: "https://unsplash.com/photos/yJwy8Bw5RD8/download?force=true",
        origin: "Indonesia (Umum)", 
        ingredients: [
            "1 kantong teh celup/2 sdt teh bubuk", "Air panas", "Gula pasir secukupnya", 
            "Es batu"
        ],
        tools: [
            "Gelas", "Sendok", "Ceret"
        ],
        steps: [
            "Seduh teh dengan air panas. Tambahkan gula, aduk hingga larut.",
            "Masukkan es batu hingga penuh. Sajikan dingin."
        ]
    },
    {
        id: 27,
        name: "Pastel",
        category: "Makanan",
        description: "camilan yang gurih, beraroma rempah, dan mengenyangkan, dengan sensasi renyah di luar dan lembut di bagian isinya. Rasanya terasa paling nikmat saat disajikan dalam keadaan hangat.",
        imageURL: "https://i.pinimg.com/736x/0d/0c/cf/0d0ccf0a478b7ce9b970a1d0d308d570.jpg",
        origin: "Belanda (Pastel de Vlees)", 
        ingredients: [
            "Kulit: Tepung terigu, mentega, air dingin.",
            "Isian: Wortel, kentang, daging ayam cincang, bumbu rempah."
        ],
        tools: [
            "Wadah adonan", "Rolling pin", "Wajan"
        ],
        steps: [
            "Buat isian: Tumis bumbu, masukkan semua bahan isian. Masak hingga matang.",
            "Buat kulit, cetak bulat, beri isian, lipat dan pilin ujungnya.",
            "Goreng dalam minyak panas hingga kecokelatan."
        ]
    },
     {
        id: 28,
        name: "Donat",
        category: "Cake",
        description: "Rasa manis dari gula/glaze, dengan sedikit sensasi renyah dari sprinkles.",
        imageURL: "https://i.pinimg.com/736x/c9/54/6c/c9546c24e5cc3006b09178ec1c9f35de.jpg",
        origin: "Eropa (diadopsi di Indonesia)", 
        ingredients: [
            "250 gr tepung terigu protein tinggi", "1 sdt ragi instan", "30 gr gula pasir", 
            "1 butir kuning telur", "125 ml susu cair dingin", "30 gr margarin"
        ],
        tools: [
            "Wadah adonan", "Wajan"
        ],
        steps: [
            "Campur semua bahan kering. Masukkan kuning telur dan susu, uleni.",
            "Masukkan margarin dan garam, uleni hingga kalis elastis.",
            "Diamkan 45 menit. Bentuk donat, diamkan lagi 15 menit.",
            "Goreng dalam minyak panas dengan api kecil. Beri toping setelah dingin."
        ]
    },
     {
        id: 29,
        name: "Kue Talam",
        category: "Cake",
        description: "Kue Talam menawarkan pengalaman rasa yang harmonis karena menggabungkan rasa manis, gurih, dan sedikit asin dalam satu gigitan..",
        imageURL: "https://i.pinimg.com/1200x/23/b2/a6/23b2a67fa70fbe654c22f60eb8355ff7.jpg",
        origin: "Sumatra/Melayu", 
        ingredients: [
            "Lapisan bawah (manis): Tepung beras, tepung tapioka, gula, air perasan pandan.",
            "Lapisan atas (gurih): Tepung beras, santan kental, garam."
        ],
        tools: [
            "Panci kukusan", "Cetakan talam"
        ],
        steps: [
            "Campur dan saring adonan lapisan bawah. Kukus hingga setengah matang.",
            "Campur dan saring adonan lapisan atas.",
            "Tuang adonan lapisan atas di atas lapisan bawah. Kukus hingga matang."
        ]
    },
    {
        id: 30,                  
        name: "Kacang Ijo",  
        category: "Bubur",
        description: "Rasa gurih alami yang tidak terlalu kuat, tetapi menjadi dasar rasa yang earthy dan sehat.",
        imageURL: "https://i.pinimg.com/736x/1c/a1/f5/1ca1f51710fdd130a363431a17ea8e75.jpg", 
        origin: "Indonesia (Umum)", 
        ingredients: [
            "250 gr kacang hijau", "100 gr gula merah (sisir)", "50 gr gula pasir", 
            "1 liter santan sedang", "2 ruas jahe (geprek)", "2 lembar daun pandan"
        ],
        tools: [
            "Panci", "Wadah perendaman"
        ],
        steps: [
            "Rendam kacang hijau 2 jam, lalu rebus hingga empuk.",
            "Masukkan gula merah, gula pasir, jahe, dan daun pandan. Aduk rata.",
            "Tuang santan. Masak dengan api kecil sambil terus diaduk agar santan tidak pecah."
        ]
    },
    {
        id: 31,
        name: "Kolak Pisang",
        category: "Bubur",
        description: "Rasa manis, gurih, dan hangat yang sangat nyaman di lidah, dengan tekstur pisang yang lembut berpadu dengan kuah santan karamel yang creamy.",
        imageURL: "https://i.pinimg.com/1200x/90/c6/3c/90c63cf8ef1c93a8f8a6dc23b7fe0ab7.jpg",
        origin: "Indonesia (Umum)", 
        ingredients: [
            "5 buah pisang kepok/tanduk (potong)", "100 gr gula merah (sisir)", "50 gr gula pasir", 
            "500 ml santan sedang", "2 ruas jahe (geprek)", "2 lembar daun pandan"
        ],
        tools: [
            "Panci"
        ],
        steps: [
            "Masak gula merah, gula pasir, jahe, dan daun pandan hingga gula larut.",
            "Masukkan pisang. Tuang santan. Masak dengan api kecil sambil terus diaduk."
        ]
    },
    
];

// Variabel dan fungsi harga (price) dihilangkan.

// ==========================================================
// FUNGSI UNTUK index.html (MENAMPILKAN DAFTAR PRODUK)
// ==========================================================

function renderProductList() {
    const listContainer = document.getElementById('menu-list-container');
    if (!listContainer) return; 

    listContainer.innerHTML = ''; 

    for (let i = 0; i < cafeProducts.length; i++) {
        const product = cafeProducts[i];
        
        // Logika Status/Promo dihilangkan
        
        const productCard = document.createElement('div');
        productCard.className = 'shopping-item';
        
        // Tampilan harga dan status dihilangkan
        productCard.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}" class="img-responsive">
            
            <h3>${product.name}</h3>
            <h4>${product.category}</h4>
            <button class="btn-detail" onclick="viewProductDetail(${product.id})">
                Lihat Resep
            </button>
        `;
        
        listContainer.appendChild(productCard);
    }
}

function viewProductDetail(productId) {
    // Menyimpan ID produk di Local Storage
    localStorage.setItem('selectedProductId', productId);
    
    // Redirect
    window.location.href = 'detail.html';
}


// ==========================================================
// FUNGSI UNTUK detail.html (DETAIL RESEP)
// ==========================================================

function displayProductDetail() {
    const detailContainer = document.getElementById('detail-content');
    if (!detailContainer) return;

    const selectedId = parseInt(localStorage.getItem('selectedProductId'));
    let selectedProduct = null;

    for (const product of cafeProducts) {
        if (product.id === selectedId) { 
            selectedProduct = product;
            break;
        }
    }

    if (selectedProduct) {
        
        // Fungsi utilitas untuk membuat daftar HTML dari array
        const createList = (items, ordered = false) => {
            if (!items || items.length === 0) return '<p>Informasi resep tidak tersedia.</p>';
            let listHtml = ordered ? '<ol>' : '<ul>';
            items.forEach(item => {
                listHtml += `<li>${item}</li>`;
            });
            listHtml += ordered ? '</ol>' : '</ul>';
            return listHtml;
        };
        
        // Konten HTML yang difokuskan pada resep
        detailContainer.innerHTML = `
            <h2>${selectedProduct.name}</h2>
            
            <img src="${selectedProduct.imageURL}" alt="${selectedProduct.name}" class="detail-img">
            
            <p><strong>Deskripsi Rasa:</strong> ${selectedProduct.description}</p>
            <p><strong>Asal Daerah:</strong> ${selectedProduct.origin || 'Tidak Diketahui'}</p>
            
            <hr>
            
            <h3> Bahan-bahan Yang Dibutuhkan:</h3>
            ${createList(selectedProduct.ingredients)}
            
            <h3> Alat-alat yang Dibutuhkan:</h3>
            ${createList(selectedProduct.tools)}
            
            <h3> Cara Membuat:</h3>
            ${createList(selectedProduct.steps, true)}
            
            <a href="index.html" class="btn-detail" style="display: block; width: fit-content; margin-top: 20px;">← Kembali ke Daftar Resep</a>
        `;
    } else {
        detailContainer.innerHTML = `<p>Resep tidak ditemukan.</p><a href="index.html" class="btn-detail">Kembali ke Daftar Menu</a>`;
    }
}

// Fungsi calculateTotal dihilangkan.

// KODE TAMBAHAN UNTUK VALIDASI FORM KONTAK (TETAP SAMA)
// ==========================================================
// ==========================================================
// LOGIKA UNTUK TOGGLE MENU MOBILE
// ==========================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggle (tambahkan/hapus) kelas 'active' pada nav-links
            navLinks.classList.toggle('active');
        });
    }
});
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function displayError(id, message) {
    document.getElementById(id).textContent = message;
}

function handleSubmit(event) {
    event.preventDefault(); // Mencegah submit form bawaan

    // Reset pesan
    document.getElementById('namaError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('pesanError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    
    let isValid = true;

    if (nama.length < 3) {
        displayError('namaError', 'Nama minimal harus 3 karakter.');
        isValid = false;
    }

    if (!validateEmail(email)) {
        displayError('emailError', 'Format email tidak valid.');
        isValid = false;
    }

    if (pesan.length < 10) {
        displayError('pesanError', 'Pesan minimal harus 10 karakter.');
        isValid = false;
    }

    if (isValid) {
        // Data yang akan dikirim ke PHP
        const formData = {
            nama: nama,
            email: email,
            pesan: pesan
        };

        // Mengirim data menggunakan Fetch API ke submit_contact.php
        fetch('submit_contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Tampilkan pesan sukses dari server
                document.getElementById('successMessage').textContent = data.message;
                // Reset formulir setelah sukses
                document.getElementById('contactForm').reset();
            } else {
                // Tampilkan pesan error dari server
                displayError('pesanError', 'Gagal: ' + data.message);
            }
        })
        .catch((error) => {
            // Tangani error koneksi atau fetch
            displayError('pesanError', 'Terjadi kesalahan koneksi saat mengirim pesan.');
            console.error('Error:', error);
        });
    }
}
// Penentu halaman: Panggil fungsi yang sesuai saat halaman dimuat
const isIndexPage = document.getElementById('menu-list-container');
const isDetailPage = document.getElementById('detail-content');
const contactForm = document.getElementById('contactForm');

if (isIndexPage) {
    renderProductList(); 
    if (contactForm) {
        // >>> PASTIKAN MENGGUNAKAN NAMA FUNGSI YANG BARU (handleSubmit) <<<
        contactForm.addEventListener('submit', handleSubmit); 
    }
} else if (isDetailPage) {
    displayProductDetail(); 
}
