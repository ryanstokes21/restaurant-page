const content = document.getElementById('content');

export default function loadAbout() {
  content.textContent = '';

  const about = document.createElement('div');
  about.classList.add('hero');

  const title = document.createElement('h1');
  title.textContent = 'About Us';

  const storyTitle = document.createElement('h2');
  storyTitle.textContent = 'Our Story';

  const story = document.createElement('p');
  story.textContent =
    'Iron Oak Tavern was founded with one goal in mind: to create a place where friends, families, and neighbors could come together over great food and cold drinks. From handcrafted burgers to locally inspired favorites, every meal is made with quality ingredients and served with genuine hospitality.';

  const missionTitle = document.createElement('h2');
  missionTitle.textContent = 'Our Mission';

  const mission = document.createElement('p');
  mission.textContent =
    'We believe the best memories are made around the dinner table. Whether you are celebrating a special occasion, watching the big game, or simply grabbing dinner after work, our team is committed to making every visit feel like home.';

  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = 'Hours';

  const hours = document.createElement('p');
  hours.innerHTML = `
    Monday - Thursday: 11:00 AM - 10:00 PM<br>
    Friday - Saturday: 11:00 AM - 12:00 AM<br>
    Sunday: 12:00 PM - 9:00 PM
  `;

  about.append(
    title,
    storyTitle,
    story,
    missionTitle,
    mission,
    hoursTitle,
    hours,
  );

  content.appendChild(about);
}
