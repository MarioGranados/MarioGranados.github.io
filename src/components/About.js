import './About.css';

const About = ({title, content, alt, skills}) => {
    console.log(skills)
    let html = [];
    for (let i = 0; i < skills.length; i++) {
        html.push(<li>{skills[i]}</li>)
    }
    return (
        <>
            <section className='about'>
                <div className="container about_container">
                    <div className="row">
                        <div className="col">
                            <h3>{title}</h3>
                            <p>{content}</p>
                            <ul>
                                {html}
                            </ul>
                        </div>
                        <div className="col">
                            <img src="/" alt={alt}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;
