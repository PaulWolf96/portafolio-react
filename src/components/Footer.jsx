import '../styles/footer.css';
import { motion } from 'framer-motion';
import WpLogo from '../img/whatsappLogo.png';
import LinkedinLogo from '../img/linkedinLogo.png';
import GithubLogo from '../img/githubLogo2.png';
import LogoFooter from './LogoFooter';
import LogoCV from '../img/cvLogo.png';
import CV from '../img/cv.pdf';



const Footer = () => {
  return (
    <footer>
      <motion.div
        className="container container-footer"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            type: "spring",
            duration: 2.5
          }
        }}
      >
        <LogoFooter>
          <motion.a
            className='a-footer'
            href='https://www.linkedin.com/in/pablo-lobo-1566b6238/'
            target='_blank'
          >
            <motion.img src={LinkedinLogo} className='logo-footer' alt='Logo linkedin' />
          </motion.a>
        </LogoFooter>


        <LogoFooter>
          <motion.a
            className='a-footer'
            href='https://github.com/PaulWolf96'
            target='_blank'
          >
            <motion.img src={GithubLogo} className='logo-footer' alt="logo github" />
          </motion.a>
        </LogoFooter>

        <LogoFooter>
          <motion.a
            className='a-footer'
            href='https://api.whatsapp.com/send?phone=+5493815632120&text=¡Hola%20Pablo!%20He%20visto%20tu%20portafolio...'
            target='_blank'
          >
            <motion.img src={WpLogo} className='logo-footer' alt="logo whatsapp" />
          </motion.a>
        </LogoFooter>

        <LogoFooter>
          <motion.a 
            className='a-footer'
            href={CV}
            target='_blank'
          >
            <motion.img src={LogoCV} className='logo-footer' alt='logo curriculum' />
          </motion.a>
        </LogoFooter>

      </motion.div>

    </footer>
  )
}

export default Footer;