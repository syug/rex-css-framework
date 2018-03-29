import { setIn } from 'domain/store/reduce/main';
import { Sitemap } from 'domain/middleware/sitemap';
import { Routes } from 'domain/middleware/routes';
import { root } from 'domain/middleware/routes';


export function updatePagination(state, route) {
  const sections = Sitemap.CONTENT;
  let footer = state.content.footer;
  let previous = state.content.footer.previous;
  let next = state.content.footer.next;
  let pagesArray = [];
  let currentIndex = null;
  let previousPage = null;
  let nextPage = null;

  if (route == `${root}`) {
    route = `${root}home`;
  }

  // loop over sitemap and create an ordered array of the pages
  sections.map(function (section, index) {
    const list = section.list;
    list.map(function (listItem, index) {
      pagesArray.push(listItem);
    });
  });

  next.active = false;
  pagesArray.map(function (page, index) {
    if (route == page.url) {
      if (index == 0) {
        previous.active = false;
      }
      if (index > 0) {
        previousPage = pagesArray[index - 1];
        previous.active = true;
        previous.link = previousPage.url;
        previous.text = previousPage.text;
      }
      if (index < pagesArray.length - 1) {
        nextPage = pagesArray[index + 1];
        next.active = true;
        next.link = nextPage.url;
        next.text = nextPage.text;
      }
      if (index > pagesArray.length - 1) {
        next.active = false;
      }
    }
  });

  return setIn(state, ['content', 'footer'], footer);
}
