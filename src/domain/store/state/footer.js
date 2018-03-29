import { root } from 'domain/middleware/routes';

let routes = {
  previous: {
    active: false,
    link: '',
    text: ''
  },
  next: {
    active: true,
    link: `${root}rex/overview/ux-metaphor/`,
    text: 'UX Metaphor'
  }
}

export const Footer = routes;