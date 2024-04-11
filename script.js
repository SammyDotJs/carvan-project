
const categoryImages = [
    {
    source: "assets/coupes.png",
    name: "coupe's"
  },
    {
    source: "assets/italian-suit-ghia.png",
    name: "sedan's"
  },
  {
    source: "assets/range-rover-side-view.png",
    name: "suv's"
  }

]
const categories = document.querySelector('.categories')

const category = categoryImages.forEach(item => {
  const cat = `<div class="category">
          <div class="category_wrap">
            <img src="${item.source}" alt="">
            <h2>${item.name}</h2>
          </div>
        </div>`
  categories.insertAdjacentHTML('afterbegin', cat)
  
  return 
})

const navLinks = document.querySelector('.nav_links')
console.log(navLinks)
navLinks.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
const contact = document.querySelector('.contact')
contact.addEventListener('click', e => {
  e.preventDefault();
    if (e.target.classList.contains('contact-us')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav__li'); // Select the li elements

const options = {
  root: null, // Observe the viewport
  threshold: 0.5 // Consider a section "in view" when 50% or more is visible
};

const observer = new IntersectionObserver(handleIntersection, options);

function handleIntersection(entries) {
  entries.forEach(entry => {
    const section = entry.target;
    const navLinkId = section.id; // Assuming section IDs match nav link IDs (remove "#" if not used)
    const activeNavItem = document.querySelector(`.nav__li a[href="#${navLinkId}"]`).parentElement; // Find li using link's href

    if (entry.isIntersecting) {
      navItems.forEach(item => item.classList.remove('nav_active'));
      if (activeNavItem) {
        activeNavItem.classList.add('nav_active');
      }
    }
  });
}

sections.forEach(section => observer.observe(section));

const openMenu = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close_menu')

const nav = document.querySelector('nav')

openMenu.addEventListener('click', () => {
  nav.classList.remove('hidden')
})
closeMenu.addEventListener('click', () => {
  nav.classList.add('hidden')
})
