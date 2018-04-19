import { setIn } from 'domain/store/reduce/main';
import { Routes } from 'domain/middleware/routes';
const DataSource = require.context('assets/json', true, /\.json$/);
import { root } from 'domain/middleware/routes';

export function setContentRoute(state, route) {
  const jsonSource = route.split(root)[1] ? `/${route.split(root)[1]}` : '/home';
  let contentSource = '';

  let jsonFile = '.' + jsonSource + '.json';
  jsonFile = jsonFile.replace('/.json', '.json');

  try {
    contentSource = DataSource(jsonFile);
  } catch (e) {
    contentSource = DataSource('./error.json');
  }

  const routeNew = {
    'url': route,
    'contentSource': contentSource
  };


  return setIn(state, ['content', 'route'], routeNew);
}
