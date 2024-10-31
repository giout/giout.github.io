import { aboutContent, aboutNav, aboutTitle, apiDocumentations, balancerContent, balancerTitle, binwusDescription, binwusRole, educationNav, educationTitle, experienceNav, experienceTitle, gameContent, gameLinks, gameTitle, labContent, labTitle, projectsContent, projectsNav, projectsTitle, redieluzDescription, redieluzRole, role, rottenContent, rottenTitle, sourceCodes, technologiesNav, technologiesTitle, uruCareer, videos } from "./dom.js"

export const setEnglish = () => {
    aboutNav.innerText = 'About'
    experienceNav.innerText = 'Experience'
    projectsNav.innerText = 'Projects'
    technologiesNav.innerText = 'Technologies'
    educationNav.innerText = 'Education'
    role.innerText = 'Web developer'
    aboutTitle.innerText = 'About'
    aboutContent.innerText = 'I am a computer engineer dedicated to web development and databases. My goals are to grow professionally and contribute value to the business environment. I plan to achieve these goals by developing scalable, understandable, and well-documented applications, through adaptability, discipline, teamwork, and continuous learning.'
    experienceTitle.innerText = 'Experience'
    binwusRole.innerText = 'Developer intern (06/2024-07/2024)'
    binwusDescription.innerText = 'I contributed on the development and documentation of REST APIs using Node.js (Javascript/Typescript), Express and Swagger. I also designed and implemented PostgreSQL and Redis databases.'
    redieluzRole.innerText = 'Speaker at "V Encuentro Iberoamericano de Estudiantes Investigadores" (10/09/2024)'
    redieluzDescription.innerText = 'Presentation: "Aplicación web para la simulación de un laboratorio dirigido al aprendizaje de la electrónica digital".'
    projectsTitle.innerText = 'Projects'
    projectsContent.innerText = 'Some of my personal and academic projects...'
    rottenTitle.innerText = 'Rotten Tomatoes API REST'
    rottenContent.innerText = 'Web service that is connected to "The Movie Database" (public API) to retrieve cinema data and allows users to visualize it. Also, it is connected to a relational database so users can do ratings, comments, etc.'
    apiDocumentations.forEach(element => {
        element.innerText = 'API documentation'
    })
    sourceCodes.forEach(element => {
        element.innerText = 'Source code'
    })
    videos.forEach(element => {
        element.innerText = 'Video demo'
    })
    labTitle.innerText = 'Virtual laboratory for digital electronics'
    labContent.innerText = 'Virtual environment where professor and students share real time audio and logic circuit simulations through a WebRTC and WebSocket implementation. This is the prototype of my Computer Engineering special degree project.'
    balancerTitle.innerText = 'Load balancer'
    balancerContent.innerText = 'Web service that connects to three microservices linked to a relational database, each returning the same information, and selects which one to request data from based on their real-time performance (RAM, CPU, etc.).'
    gameTitle.innerText = 'Web game'
    gameContent.innerText = 'Web-based game that consists on clicking on the keyboard the correspondent number of each bomb to prevent it from hitting the house.'
    gameLinks.forEach(element => {
        element.innerText = 'Game link'
    })
    technologiesTitle.innerText = 'Technologies'
    educationTitle.innerText = 'Education'
    uruCareer.innerText = 'Computer engineering (2024)'
}