import { useState } from "react";
import '../../node_modules/animate.css';


const LinkAnimation = ({children, href}) => {

  const [hovered, setHovered] = useState(false);


  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const className = hovered ? 'nav-link fs-5 p-0 animate__animated animate__headShake' : 'nav-link fs-5 p-0';

  return (
    <a  
      className={className}
      aria-current="page" href={href} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        {children}
    </a>
  )
}

export default LinkAnimation;