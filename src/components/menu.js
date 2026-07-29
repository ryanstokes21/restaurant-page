const content = document.getElementById('content');

export default function loadMenu() {
  content.textContent = '';

  const menu = document.createElement('div');
  menu.classList.add('hero');

  const title = document.createElement('h1');
  title.textContent = 'Our Menu';

  const appetizers = document.createElement('div');
  appetizers.innerHTML = `
    <h2>Appetizers</h2>
    <p>Loaded Nachos - $9.99</p>
    <p>Buffalo Wings - $11.99</p>
    <p>Fried Pickles - $7.99</p>
  `;

  const entrees = document.createElement('div');
  entrees.innerHTML = `
    <h2>Main Courses</h2>
    <p>Iron Oak Burger - $14.99</p>
    <p>Smoked BBQ Ribs - $19.99</p>
    <p>Grilled Chicken Sandwich - $13.99</p>
  `;

  const drinks = document.createElement('div');
  drinks.innerHTML = `
    <h2>Drinks</h2>
    <p>House Old Fashioned - $10.99</p>
    <p>Craft Beer - $6.99</p>
    <p>Sweet Tea - $2.99</p>
  `;

  const desserts = document.createElement('div');
  desserts.innerHTML = `
    <h2>Desserts</h2>
    <p>Chocolate Lava Cake - $7.99</p>
    <p>New York Cheesecake - $6.99</p>
  `;

  menu.append(title, appetizers, entrees, drinks, desserts);
  content.appendChild(menu);
}
