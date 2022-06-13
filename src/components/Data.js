import RECYCODE from '../img/GithubGen.png'
import WEATHERAPP from '../img/WeatherApp.png';
import MOVIEAPP from '../img/MovieApp.png';

export const about = {
    inverse: false,
    img: 'https://static.wixstatic.com/media/2be1ce_864567900845418ebfd61e297637464d~mv2.gif',
    alt: 'picture_of_me',
    title: 'About Me',
    content: ["I'm actually a music geek who is always looking to 'jamn' with other artists.", <br/>, <br/>,
        "I primarily play guitar with inspirations from John Mayer, BB-King, Jimi Hendrix, Stevie Ray Vaughn and Jimmy Page.",
        "I could talk your ears-off about music equipment and music theory", <br/>, <br/>,
        "I also served 4 years in the Navy as an Interior Communications Electrician",
        "Then one day, I decided that I wanted to create my own music software, and discovered a new passion for programming"
    ]
}
/*export const experience = {
    inverse: true,
    img: 'https://cdn.dribbble.com/users/1708950/screenshots/4188877/developer_med.gif',
    alt: 'cpp, java, javascript, logos',
    title: 'Experience',
    content: ['Programming is my passion, I like to create dynamic user experiences through my sites using: HTML, CSS, JS, React, Bootstrap.',
        <br/>, <br/>,
        'I also enjoy solving complex problems by developing new software ideas and applications using Java or C++']
}*/

export const recycode = {
    inverse: true,
    img: RECYCODE,
    alt: 'recycode thumbnail',
    title: 'Recycode',
    content: 'A website where users can create custom css code snippets and share them with other users in the community. Users can also rate other\'s code snippets and save them to their favorites',
    tools: 'Java Spring, Bootstrap, Thymeleaf, CSS, HTML, FileStack API, MySQL',
    link: '/',
    github: '/',
}
export const weatherApp = {
    inverse: false,
    img: WEATHERAPP,
    alt: 'Weather App Thumbnail',
    title: 'Weather App',
    content: 'A weather app that provided forward and reverse geolocation to allow users to track weather with pinpoint coordinate accuracy. ',
    tools: 'Mapbox API, Bootstrap, JQuery, CSS, HTML, Weather API',
    link: '/',
    github: '/',
}
export const movieApp = {
    inverse: true,
    img: MOVIEAPP,
    alt: 'Movie App Thumbnail',
    title: 'Movie App',
    content: 'An app where you can store movies stored in a small prebuild-server',
    tools: 'Bootstrap, JQuery, HTML, CSS',
    link: '/',
    github: '/',
}
export const experience = {
    title: 'Skills',
    content: '',
    alt: 'Photo of Mario Granados',
    skills: ['JavaScript', 'Java', 'C++', 'React.js', 'Spring', 'Thymeleaf', 'JQuery', 'Object-Oriented Programming Language', 'MySQL', 'HTML', 'CSS', 'Business Solutions'],
}
