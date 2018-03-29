import { setIn } from 'domain/store/reduce/main';
import { Routes } from 'domain/middleware/routes';
import { flatMapDeep } from 'lodash'
export function updateSearchText(state, text) {
  const search = state.content.search;
  if (text.length > 0){
    search.searchString = text;
  } else {
    search.searchString = '';
    search.isOpen = false;
  }
  return setIn(state,['content', 'search'], search);
}
export function clearSearch(state){
  const search = state.content.search;
  search.isOpen = false;
  search.searchString = '';
  if(document){
    const input = document.querySelector('#searchfield input');
    input.value = '';
    input.text = '';
  }
  return setIn(state,['content', 'search'], search);
}

export function updateSearchResults(state) {
  const DataSource = require.context('assets/json', true, /\.json$/);
  const search = state.content.search;
  const searchString = search.searchString;
  const currentLang = state.content.localization.currentLang;
  let lang = null;
  switch (currentLang) {
    case '日本語':
        lang = 'jp';
      break;
    default:
        lang = 'en';
      break;
  }
  if(searchString.length > 1){
  if(search.siteText === null){
    const siteText = {};
    Object.keys(Routes).map((key) => {
      let contentSource;
      const routeKey = Routes[key];
      let jsonFile = '.' + routeKey + '.json';
      let result = [];

      jsonFile = jsonFile.replace('/.json', '.json');
      try { contentSource = DataSource(jsonFile); }
      catch(e) { contentSource = false }
      if(contentSource !== false) {
      contentSource.map((section) => {
        if(typeof section.data !== 'undefined'){
          section.data.map((component) => {
            const text = typeof component.text !== 'undefined' ? component.text : false;
            if(text !== false) {
              result.push(text);
            }
          });
        } else {
          const text = typeof section.component.text !== 'undefined' ? section.component.text : false;
          if(text !== false) {
          result.push(text);
          }
        }
      });
        siteText[routeKey] = result;
      }
    })
    // Return sitetext to the state
    search.siteText = siteText;
  }

  // Actualy Search part
  search.searchData = [];
  Object.keys(search.siteText).map((text) => {
    const sectionText = search.siteText[text];
    sectionText.map((subtext) => {
      const haystack = subtext[lang].toLowerCase();
      const needle = searchString.toLowerCase();
      if(haystack.indexOf(needle) > -1){
        const returnText = haystack.length > 100 ? `${subtext[lang].substring(0,100)}...`: subtext[lang];
        // change key to be make of page so it automatically sorts results
        search.searchData.push({
          "link": text,
          "level1Result": sectionText[0][lang],
          "level2Result": [
            {
              "text": returnText
            }
          ]
        })
      }
    })
  })


  search.isOpen = true;
  }
  return setIn(state,['content', 'search'], search);
}