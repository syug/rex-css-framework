const links = document.getElementsByClassName('page-link');

const href = window.location.href;
for (const index in links) {
  const element = links[index];
  const pageLink = element.getAttribute('href');
  if (href.indexOf(pageLink) > -1) {
    element.className += ' active';
  }
  console.log(pageLink);
}
