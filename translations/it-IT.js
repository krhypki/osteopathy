import { it as home } from './pages/home'
import { it as about } from './pages/about'
import { it as offer } from './pages/offer'
import { it as sections } from './pages/global'
import { it as policy } from './pages/policy-privacy'
import { it as osteopathy } from './pages/osteopathy'
import { it as contact } from './pages/contact'
import { it as meta } from './utils/meta'
import { it as images } from './utils/images'

export default {
  navItems: {
    home: 'homepage',
    about: 'chi sono',
    offer: 'offerta',
    contact: 'contatti'
  },
  home,
  about,
  offer,
  sections,
  policy,
  osteopathy,
  contact,
  meta,
  images
}
