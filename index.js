const keahlian = {
		frontEnd:[
			{
				tech: "HTML",
				id:291837,
				imgLogo:"./image/html.png"
			},
			{
				tech: "CSS",
				id:295811,
				imgLogo:"./image/css.png"
			},
			{
				tech: "JavaScript",
				id:928175,
				imgLogo:"./image/js.png"
			},
			{
				tech: "ReactJs",
				id:562712,
				imgLogo:"./image/react.png"
			},
			{
				tech: "TailwindCss",
				id:294821,
				imgLogo:"./image/tailwind.png"
			},
			{
				tech: "NextJs",
				id:291827,
				imgLogo:"./image/next.png"
			},
			{
				tech: "Typescript",
				id:294821,
				imgLogo:"./image/ts.png"
			}
		],
		backEnd:[
			{
				tech: "NodeJs",
				id:372846,
				imgLogo:"./image/nodejs.png"
			},
			{
				tech: "ExpressJs",
				id:384926,
				imgLogo:"./image/express.png"
			},
			{
				tech: "Sequelize",
				id:392840,
				imgLogo:"./image/sequelize.png"
			},
			{
				tech: "MySQL",
				id:382946,
				imgLogo:"./image/mysql.png"
			},
			{
				tech: "MongoDb",
				id:38472,
				imgLogo:"./image/mongo.png"
			}
		]
}

const getElementMySkills = document.querySelector('.chd-fnt');
const getElementForBackEnd = document.querySelector('.chd-bck');
const getElementPorto = document.querySelector('.prt-lnk');
const getElementPengalaman = document.querySelector('.prt-pnglm')
let count = 0;

keahlian.frontEnd.forEach((data, index) => {
	count++;
	if(count === 7) count = 0;
	let animateList = ["pop", "sld", "blr", "grw", "splt"];
	let createElement = document.createElement('div');
	createElement.classList.add(`cnt-skl`);
	createElement.classList.add(`delay-${count}`);
	
	let newElement = (`<div class="chd-skl-fnt"><img alt="logo pgrogramming front-end" src=${data.imgLogo} class="img-pgm"/><h3 class="tch-skl">${data.tech}</h3></div>`);
	createElement.innerHTML = newElement;
	getElementMySkills.appendChild(createElement);
})

keahlian.backEnd.forEach(data => {
	count++;
	if(count === 7) count = 0;
	let animateList = ["pop", "sld", "blr", "grw", "splt"];
	let createElement = document.createElement('div');
	createElement.classList.add(`cnt-skl`);
	createElement.classList.add(`delay-${count}`);
	let newElement = (`<div class="chd-skl-fnt"><img alt="logo pgrogramming back-end" src=${data.imgLogo} class="img-pgm"/><h3 class="tch-skl">${data.tech}</h3></div>`);
	createElement.innerHTML = newElement;
	getElementForBackEnd.appendChild(createElement);
})

const portofolio = [
	{
		title: "My-Ebooks",
		link: "./details/my-ebooks.html",
		id:2291021,
		image:"./image/newbooks.png",
		live:false,
		username:"Aryaa",
		password:"arya7272"
	},
	{
		title: "Movie List",
		link: "https://mymovielist.vercel.app/",
		id:2948201,
		image:"./image/movie.png",
		live: true,
		username: "-",
		password: "-"
	},
	{
		title: "Pangasari",
		link: "./details/pangasari.html",
		id:2928123,
		live: true,
		image:"./image/pangasari.png",
		username: "asdasd",
		password: "darkblack"
	},

]

portofolio.forEach(data => {
	let newElement = document.createElement('div');
	newElement.classList.add('prt-cnt');
	let elemntInf = (`<div class="prt-chd"><a target="_blank" class="lnk-prt" href=${data.link}><img alt="portofolio website" src=${data.image} class="img-prt"/><h3 class="txt-prt">${data.title}</h3><div class="usr-usn usr"><span>Username: ${data.username}</span><span class="usr-pwd usr">Password: ${data.password}</span></div></a></div>`);
	newElement.innerHTML = elemntInf;
	getElementPorto.appendChild(newElement)

})

const pengalaman = [
	{
		jenis:"Bekerja (PT. Alba Digital Teknologi)",
		tahun:"September 2022 - Now",
		detail:"Mengimplementasikan fitur-fitur atau mengembangkan website dari awal menggunakan teknologi React JS, Next Js, TailwindCss, Cahkar Ui, dan lainnya, memastikan pengembangan antarmuka yang interaktif, responsif, dan efisien. Mengoptimasikan kinerja web untuk meningkatkan kecepatan dan efisiensi website. ",
		teknologi:"NextJs, ReactJs, Typescript, React Query, Redux, dll."
	},
	{
		jenis: "Internship",
		tahun: "Maret 2022 - Juni 2022",
		detail: "Saya magang di perusahaan PT Teknovo Industri Digital sebagai seorang Front-end Developer, di sana saya dibimbing oleh ketua kelompok/senior fullstack di perusahaan Teknovo yang bertugas untuk membimbing para anggota Internship. Dalam sebuah kelompok yang memilki anggota 13 orang diberikan tugas untuk membuat website, dalam satu kelompok tersebut dibagi 2 bagian yaitu Front-end dan Back-end, saya masuk ke dalam bagian Front-end. Dan mendapatkan tugas untuk membuat Login, Register, dan Lost Password. Serta mengimplementasikan google login sebagai salah satu opsi untuk masuk.",
		teknologi: "NextJs, NextAuth, Typescript, CahkraUi, next-i18next, React Query"
	},
	{
		jenis:"Freelancer",
		tahun: "-",
		detail: "Ketika dalam proses belajar sebagai seorang web developer saya mencoba mengasah kemampuan saya dengan menjadi seorang freelancer. Saya mendapatkan tugas atau project untuk membuat website/page di salah satu pengembang teknologi NFT untuk game atau disebut wakaspace page yang saya buat adalah Dashboard, Marketplace, Detail Product, Streaming, Video, Events, Login, serta membuat bagian landing page dari wakaspace menjadi responsive.",
		teknologi: "Bootstrap, HTML"
	},
	{
		jenis:"Projek Pribadi",
		tahun:"-",
		detail: "Untuk meningkatkan kemampuan saya sebagai web developer saya mencoba untuk membuat projek pribadi, projek tersebut antaralain My Movie List, Pangasari, My Ebooks, dan Marketplae(Dalam Proses Pengembangan).",
		teknologi: "NextJs, ReactJs, NodeJs, Axios, MongoDb, MySQL, Sequelize, Redux, React-Router, Multer, Firestorage, TailwindCss."
	}
]
pengalaman.forEach(data => {
	let newElement = document.createElement('div');
	newElement.classList.add('prt-cnt-pnglm');
	let elemntInf = (`<div class="prt-chd-pnglm">
		<h3>${data.jenis}</h3>
		<span>Tahun: ${data.tahun}</span>
		<p>${data.detail}</p>
		<span>Teknologi: ${data.teknologi}</span>
	</div>`);
	newElement.innerHTML = elemntInf;
	getElementPengalaman.appendChild(newElement)
})
// Meng-animasikan element ketika scroll

const observer = new IntersectionObserver(entries => {
  	entries.forEach((entry, index) => {
    	const animate = entry.target.children;
   		
   		Array.from(animate).forEach(el => {
		    if (entry.isIntersecting) {
			    el.classList.add("anit");
			    el.classList.add(`flp`);
				return;
			}
			el.classList.remove('anit');
			el.classList.remove('flp');
		});
   		
	});
});

observer.observe(document.querySelector(".chd-fnt"));
observer.observe(document.querySelector(".chd-bck"));
observer.observe(document.querySelector(".abt-ctn"));



// Animate Text Blur


const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "T. Banta",
    "Karollah",
    "Front-End",
    "Web",
    "Developer"
];

const morphTime = 1;
const cooldownTime = 0.55;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}



function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


const tesds = "ha";
const lot = "bo"
console.log(tesds + lot)




const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);
