import './Footer.css'
import { Favorite } from '@material-ui/icons'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/rajshekhar26/cleanfolio'
      className='link footer__link'
    >
      Created by Matheus Gomes
    </a>
    <Favorite fontSize="small"/>
  </footer>
)

export default Footer
