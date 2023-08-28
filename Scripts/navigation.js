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
        id: 0,
        link : '#astonmartin',
        title : 'Aston Martin',
        submenu : []
    },
    {
        id: 1,
        link : '#audi',
        title : 'Audi',
        submenu : []
    },
    {
        id: 2,
        link : '',
        title : 'BMW',
        submenu : [
            {
                link : '#bmw-545e',
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
        id: 3,
        link : '#mercedes',
        title : 'Mercedes-Benz',
        submenu : []
    },
    {
        id: 4,
        link : '#porsche',
        title : 'Porsche',
        submenu : []
    },
    {
        id: 5,
        link : '#rangerover',
        title : 'Range Rover',
        submenu : []        
    },
    {
        id: 6,
        link : '#gallery',
        title : 'Galleri',
        submenu : []
    }
]


const linksContainer = document.querySelector('.navigation-links');
const nav = document.querySelector('.navigation');


const linkTmpl = (linkObj) => {

 return `<li><a href="${linkObj.link}">${linkObj.title}</a></li>`

}


let openSubmenu = null;

// Her rendere vi hele menuen hvis et menupunkt ikke har underpunkter så udskriver vi bare et list element med et link i.
linksArr.forEach((linkObj) => {

    // Hvis vi har en submenu så tilføjer vi en ny ul i vores list element.
    if(linkObj.submenu?.length !== 0)
    {
        // Hvis vi har en sub menu, så opretter vi et link med en ul inde i.
        // Vi fanger den ul og putter vores sub elementer deri.
        
        linksContainer.insertAdjacentHTML('beforeend', `<li><a href="${linkObj.link}" class="submenu subDown">${linkObj.title}</a><ul class="subMenuContainer" id="sub_${linkObj.id}"></ul></li>`)
        let subMenu = document.querySelector(`#sub_${linkObj.id}`);
        
        // Indsætter alle sub elementer i vores nye ul
        linkObj.submenu.forEach((subLinkObj) => {
            subMenu.innerHTML += `<li><a href="${subLinkObj.link}">${subLinkObj.title}</a></li>`
        })

    } else {
        // Udskriver links der ikke har en submenu
        linksContainer.insertAdjacentHTML('beforeend', linkTmpl(linkObj));
    }

    


    linksContainer.addEventListener('click', () => {
        nav.classList.remove('active');
    })
    

    
})

const navHandle = document.querySelector('.navigationHandle');
navHandle.addEventListener('click', () => {

    nav.classList.toggle('active');
})





const links = document.querySelectorAll('.navigation-links li a');

links.forEach((item) => {

    if(item.classList.contains('submenu')) {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            let subMenu = item.parentNode; 
            subMenu.classList.toggle('show');
        })

    } 


})