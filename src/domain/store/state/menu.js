import {
  Sitemap
} from 'domain/middleware/sitemap';

let Label = [],
  Menu = [],
  active = false,
  isOpen = false,
  isSelected = false,
  id = 0,
  label = '',
  sections = '',
  sectionTitle = '',
  contents = 'contents',
  title = '',
  url = '';

for (let i in Sitemap.CONTENT) {

  label = Sitemap.CONTENT[i].text;
  sections = Sitemap.CONTENT[i].list;

  Menu = [];

  for (let k in sections) {

    const text = sections[k].text;
    const url = sections[k].url;
    const disabled = sections[k].disabled;

    Menu.push({
      'id': id,
      'text': text,
      'isSelected': isSelected,
      'link': url,
      'active': active,
      'disabled': disabled
    });

    id++;
  }

  Label.push({
    'id': id,
    'text': label,
    'menu': Menu
  });

  id++;
}

export const MenuList = Label;
