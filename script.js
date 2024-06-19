document.getElementById('nickname-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const realName = document.getElementById('real-name').value;
    const nickname = generateNickname(realName);
    const description = generateDescription(nickname);
    const imageSources = generateImage(nickname);
    
    document.getElementById('result').textContent = `Teknik kutukan Anda adalah: ${nickname}`;
    document.getElementById('description').textContent = description;
    const imageContainer = document.getElementById('image');
    imageContainer.innerHTML = '';

    imageSources.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = nickname;
        imageContainer.appendChild(img);
    });
});

function generateNickname(name) {
    const adjectives = ['Si'];
    const nouns = ['Tukang Nyantet', 'Tukang Nyumpahin', 'Tukang Bakar-bakar', 'Tukang Summon', 'Tukang Bunga', 'Tukang Sembelih', 'Tukang Nelen Roh', 'Paling Kuat', 'Tukang Bedah', 'Tukang Copy-Paste'];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
}

function generateDescription(nickname) {
    const descriptions = {
        'Si Tukang Nyantet': 'Kamu pasti orangnya pemalu di real life, soalnya kalau kemana-mana pasti selalu bawa palu (tidak lupa dengan boneka dan pakunya). Pakunya kecil saja ya biar gampang dibawa, jangan bawa paku tenda nanti kamu pegal-pegal.',
        'Si Tukang Nyumpahin': 'Kamu pasti sering nyumpahin musuhmu untuk diare setiap nonton bioskop. Tidak apa-apa, lanjutkan dan kembangkanlah bakatmu hingga kamu membuka jasa yang dibayar 100 ribu setiap sumpahannya menjadi nyata.',
        'Si Tukang Bakar-bakar': 'Kamulah yang bertanggung jawab atas arang, jepitan bakaran, dan bumbu oles setiap tahun baru. Teman-teman kamu pasti memanggil kamu dengan sebutan "Gunung Krakatau" soalnya kata mereka kepalamu mirip gunung berapi.',
        'Si Tukang Summon': 'Kamu adalah orang yang dikit-dikit summon temannya. Di-chat lawan jenis sedikit, langsung kamu screenshot ke grup sirkel-mu untuk dimintai pendapat balasan apa yang harus kamu berikan. Asal jangan sambil mengepalkan kedua tangan, ya.',
        'Si Tukang Bunga': 'Kamu adalah orang yang paling pertama muncul di benak teman-temanmu ketika ada orang terdekat mereka yang sedang seminar proposal, seminar hasil, ataupun sidang akhir. Kamu sangat pandai dalam merangkai bunga. Tenang, mata kamu bukan ranting, kok.',
        'Si Tukang Sembelih': 'Antara dua: kamu orang yang tidak suka lembur, atau kamu adalah sepuh yang sudah hidup selama ribuan tahun dan bertangan 4. Kalau kamu yang pertama, berarti kamu ganteng aih tolong jadi pacarku? Kalau kamu yang kedua, saya ada pertanyaan, kamu kapan kalahnya di manga? Btw, selamat istirahat setelah panitiaan potong sapi kemarin, ya.',
        'Si Tukang Nelen Roh': 'Selain roh, pasti kamu juga suka menelan teh. Kamu kalau capek, cerita ke teman-temanmu, ya. Jangan buat gebrakan baru, nanti kamu jadi buron lalu dibedah, lho. Jangan lupa rajin haircare-an, ya, rambut panjangmu itu sulit dirawatnya.',
        'Si Paling Kuat': 'Alah, paling kuat, paling kuat. Akhirnya jadi among us half body juga, memangnya kamu kira kamu commission? Half-body segala. Tapi tidak apa-apa, kamu memang paling kuat sampai-sampai masih harus bekerja hingga akhir hidupmu. Sabar ya, kalau kata pamannya Spider-Man, "with great power comes great responsibility."',
        'Si Tukang Bedah': 'Antara dua: kamu perokok berat, atau kamu ngeselin. Kalau kamu yang pertama, stop merokok, soalnya tidak baik. Kamu juga sepertinya kesepian terus, ya? Tidak apa-apa, masih ada aku, kiw. Kalau kamu yang kedua, rasain tuh kesepian.',
        'Si Tukang Copy-Paste': 'Skripsimu turnitin-nya 90%, ya? Tidak apa-apa, sih, soalnya kamu setia. Kamu kuat, dan masuk sekolah lewat orang dalam soalnya kamu masih satu keluarga jauh dengan gurumu. Gapapa copy-paste kalau terinspirasi idenya sedikit aja, asal jangan jiplak dan ganti nama doang, ya.'
    };

    return descriptions[nickname] || 'You have a unique and special nickname!';
}

function generateImage(nickname) {
    const images = {
        'Si Tukang Nyantet': ['https://i.pinimg.com/736x/ba/02/cc/ba02cccbd012c195676c8a24973fd551.jpg'],
        'Si Tukang Nyumpahin': ['https://i.pinimg.com/564x/95/44/85/9544850b67460406a2b3ddcb3aaff084.jpg'],
        'Si Tukang Bakar-bakar': ['https://i.pinimg.com/564x/db/5c/0a/db5c0a340a42777db60163c3e7b19a2b.jpg'],
        'Si Tukang Summon': ['https://i.pinimg.com/564x/a3/18/3e/a3183ed8a3cbeff0cd6392fd38d73461.jpg'],
        'Si Tukang Bunga': ['https://i.pinimg.com/564x/05/10/15/05101523ec4487e4493744ea87c5f5fe.jpg'],
        'Si Tukang Sembelih': [
            'https://i.pinimg.com/564x/70/7a/b7/707ab73e95c6fa68628be1469dc2009a.jpg',
            'https://i.pinimg.com/736x/30/b9/67/30b967b7f06d4757516f7df3e521450f.jpg'
        ],
        'Si Tukang Nelen Roh': [
            'https://i.pinimg.com/564x/01/4c/0d/014c0d54012f5578d57759bb998592a5.jpg',
            'https://i.pinimg.com/564x/72/2b/2f/722b2f19e25a6f6ba6a5481d0aac7f06.jpg'
        ],
        'Si Paling Kuat': ['https://i.ytimg.com/vi/fOpM_qtgJlM/maxresdefault.jpg'],
        'Si Tukang Bedah': [
            'https://i.pinimg.com/736x/1e/d3/6b/1ed36ba499f87cad0ac2b4d29deef1ed.jpg',
            'https://i.pinimg.com/564x/7f/17/75/7f177558d759fb18baab0adb7ef5efff.jpg'
        ],
        'Si Tukang Copy-Paste': ['https://i.pinimg.com/564x/d9/a1/2e/d9a12e690634768234f805657aa9c177.jpg']
    };

    return images[nickname] || ['images/default.jpg'];
}
