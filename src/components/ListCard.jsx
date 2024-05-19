import RedSocialImg from '../img/miniredsocial.png';
import MissiImg from '../img/missiImg.png';
import AppTareaImg from '../img/app-tarea.png';
import CineCalidadImg from '../img/cinecalidad.png';
import ClimappImg from '../img/climapp3.png';


const ListCard = () => {
  return (
    [
      {
        id: 1,
        img: MissiImg,
        title: "Missi",
        text: "App web full-stack para hacer pedidos online de comida. Panel administrador con multiples configuraciones. Hecha con React, Firebase, TailwindCSS y ContextAPI",
        linkDeploy: "https://tightfood-767b8.web.app/",
        linkCode: "https://github.com/PaulWolf96/missi"
      },
      {
        id: 2,
        img: CineCalidadImg,
        title: "Neci-Calidad",
        text: "Clon de la página de películas 'Cinecalidad'. Hecha con React, React-router-dom, contextAPI y usando la API pública Themoviedb.",
        linkDeploy: "https://neci-calidad.vercel.app/",
        linkCode: "https://github.com/PaulWolf96/Neci-Calidad"
      },
      {
        id: 3,
        img: ClimappImg,
        title: "Climapp",
        text: "App sencilla para consultar el clima de cualquier parte del mundo usando la api openweathermap. También muestra la hora local de la ubicación con timezoneDB.",
        linkDeploy: "https://climapp-tan.vercel.app/",
        linkCode: "https://github.com/PaulWolf96/app-clima"
      },
      {
        id: 4,
        img: AppTareaImg,
        title: "Mis Tareas",
        text: "App sencilla para crear tareas, con react y localStorage. Posibilidad para marcar como completadas y eliminarlas.",
        linkDeploy: "https://app-mistareas.vercel.app/",
        linkCode: "https://github.com/PaulWolf96/app-mistareas"
      },
      {
        id: 5,
        img: RedSocialImg,
        title: "Mini Red Social",
        text: "Mini red social con react, bootstrap y localStorage. Se puede crear usuarios, publicar imágenes y hacer comentarios",
        linkDeploy: "https://mini-red-social.vercel.app/",
        linkCode: "https://github.com/PaulWolf96/mini-red-social"
      }
    ]
  )
}

export default ListCard;