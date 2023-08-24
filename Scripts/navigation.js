// Opretter en variable, som indeholder en template med html tags til min burger-menu

let navTmpl = `
<div class="navigationHandle "><i class='fa-solid fa-bars-staggered'></i></div>
<div class="navigation">
    <div class="menus">
    <div class="navigation-links"></div>
</div>
</div>`

const navContainer = document.querySelector('#nav-container');
navContainer.insertAdjacentHTML('beforeend', navTmpl);



// Opretter et array, som indeholder mine menupunkter, og deres destination

let linksArr = [
    {
        link : '#astonmartin',
        title : 'Aston Martin',
        submenu : []
    },
    {
        link : '#audi',
        title : 'Audi',
        submenu : []
    },
    {
        link : '#bmw',
        title : 'BMW',
        submenu : [
            {
                link : '#545e',
                title : '545e'
            },
            {
                link : '#m550i',
                title : 'M550i'
            },
            {
                link : '#m5',
                title : 'M5'
            }
        ]
    },
    {
        link : '#mercedes',
        title : 'Mercedes-Benz',
        submenu : []
    },
    {
        link : '#porsche',
        title : 'Porsche',
        submenu : []
    },
    {
        link : '#rangerover',
        title : 'Range Rover',
        submenu : []
    },
    {
        link : '#gallery',
        title : 'Galleri',
        submenu : []
    }
]


const linksContainer = document.querySelector('.navigation-links');

const nav = document.querySelector('.navigation');

linksArr.forEach((linkObj) => {

    

    linksContainer.insertAdjacentHTML('beforeend', `<ul><a href="${linkObj.link}">${linkObj.title}</a><li><a href="${linkObj.submenu.link}">${linkObj.submenu.title}</li></ul>`);

    

	// Sørger for at menuen lukker, efter der er blevet trykket på et menupunkt

    linksContainer.addEventListener('click', () => {
        nav.classList.remove('active');
    })
})

const navHandle = document.querySelector('.navigationHandle');
navHandle.addEventListener('click', () => {

    nav.classList.toggle('active');
})