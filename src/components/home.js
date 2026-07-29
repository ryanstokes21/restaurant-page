const content = document.getElementById('content');

export default function loadHome() {
  content.textContent = '';

  const hero = document.createElement('div');
  hero.classList.add('hero');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Iron Oak Tavern';

  const headline = document.createElement('h3');
  headline.textContent = 'Where Every Night Feels Like Friday';

  const description = document.createElement('p');
  description.textContent =
    'At Iron Oak Tavern, we believe great food and great people belong together. Enjoy juicy burgers, crispy wings, local craft beer, and live music every weekend. Come hungry, leave happy, and make yourself at home.';

  hero.append(restaurantName, headline, description);

  content.appendChild(hero);
}
