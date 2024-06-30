let companyName = 'My Sick Website'

const mainColor = '#9667a8';
const secondaryColor = '#47F913';

function loadHeader() {
    let doc = document;
    let header = document.getElementById('header');
    let companyNameElement = doc.createElement('p')
    companyNameElement.textContent = companyName;
    companyNameElement.id = 'companyNameElement';
    companyNameElement.style.color = secondaryColor;
    companyNameElement.style.fontSize = '24px';
    companyNameElement.style.fontWeight = 'bold';
    companyNameElement.style.textShadow = '2px 0 black'
    header.appendChild(companyNameElement)

    let navLinksDiv = doc.createElement('div')
    header.appendChild(navLinksDiv)
    navLinksDiv.id = 'navLinksDiv'

    let navItems = []
    for (let i = 0; i < navItems.length; i++) {
        let newNavLink = doc.createElement('p')
        newNavLink.innerHTML = navItems[i]
        newNavLink.id = 'navLink'
        navLinksDiv.appendChild(newNavLink)
    }

}

function test() {
    location.replace('./ProjectsPage.html')
}