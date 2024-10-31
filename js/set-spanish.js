import { aboutContent, aboutNav, aboutTitle, apiDocumentations, balancerContent, balancerTitle, binwusDescription, binwusRole, educationNav, educationTitle, experienceNav, experienceTitle, gameContent, gameLinks, gameTitle, labContent, labTitle, projectsContent, projectsNav, projectsTitle, redieluzDescription, redieluzRole, role, rottenContent, rottenTitle, sourceCodes, technologiesNav, technologiesTitle, uruCareer, videos } from "./dom.js"

export const setSpanish = () => {
    aboutNav.innerText = 'Sobre mí'
    experienceNav.innerText = 'Experiencia'
    projectsNav.innerText = 'Proyectos'
    technologiesNav.innerText = 'Tecnologías'
    educationNav.innerText = 'Educación'
    role.innerText = 'Desarrollador web'
    aboutTitle.innerText = 'Sobre mí'
    aboutContent.innerText = 'Soy un ingeniero en computación dedicado al desarrollo web y bases de datos. Mis objetivos son: crecer profesionalmente y aportar valor en el entorno empresarial, y pienso cumplirlos desarrollando aplicaciones escalables, comprensibles y documentadas, de la mano de la adaptabilidad, disciplina, trabajo en equipo y aprendizaje continuo.'
    experienceTitle.innerText = 'Experiencia'
    binwusRole.innerText = 'Desarrollador pasante (06/2024-07/2024)'
    binwusDescription.innerText = 'Colaboré en el desarrollo y documentación de APIs REST, haciendo uso de Node.js (con Javascript y Typescript), Express y Swagger. Asimismo, diseñé e implementé bases de datos PostgreSQL y Redis.'
    redieluzRole.innerText = 'Ponente en el V Encuentro Iberoamericano de Estudiantes Investigadores (09/10/2024)'
    redieluzDescription.innerText = 'Ponencia realizada: "Aplicación web para la simulación de un laboratorio dirigido al aprendizaje de la electrónica digital".'
    projectsTitle.innerText = 'Proyectos'
    projectsContent.innerText = 'Algunos de mis proyectos personales y académicos...'
    rottenTitle.innerText = 'API REST de Rotten Tomatoes'
    rottenContent.innerText = 'Servicio web que se conecta a la API pública “The Movie Database” para obtener datos de cine y permite a los usuarios visualizarlos. Asimismo, se conecta a una base de datos relacional para que los usuarios puedan realizar ratings, comentarios, entre otros.'
    apiDocumentations.forEach(element => {
        element.innerText = 'Documentación de la API'
    })
    sourceCodes.forEach(element => {
        element.innerText = 'Código fuente'
    })
    videos.forEach(element => {
        element.innerText = 'Video de demostración'
    })
    labTitle.innerText = 'Laboratorio virtual de electrónica digital'
    labContent.innerText = 'Entorno virtual en el que profesor y estudiantes transmiten en tiempo real audio y simulaciones de circuitos lógicos gracias a la implementación de los protocolos WebRTC y WebSocket. Este es prototipo resultante de mi trabajo especial de grado para optar por el título de Ingeniería en Computación.'
    balancerTitle.innerText = 'Balanceador de carga'
    balancerContent.innerText = 'Servicio web que se conecta a tres microservicios conectados a una base de datos relacional que devuelven la misma información y que elige a cual pedirle los datos en base al rendimiento en tiempo real de cada uno (RAM, CPU, etc.).'
    gameTitle.innerText = 'Juego web'
    gameContent.innerText = 'Juego desarrollado para la web que consiste en presionar en el teclado el número correspondiente de cada bomba para que no impacte en la casa.'
    gameLinks.forEach(element => {
        element.innerText = 'Link al juego'
    })
    technologiesTitle.innerText = 'Tecnologías'
    educationTitle.innerText = 'Educación'
    uruCareer.innerText = 'Ingeniería en computación (2024)'
}