import './Banner.css';
import {useState} from "react";
import {Button} from "./Button";

const Banner = () => {
    const [greeting, setGreeting] = useState('');
    const [greeting2, setGreeting2] = useState("");

    setTimeout(()=> {
        setGreeting("Hi I'm Mario");
    },2000);
    setTimeout(()=> {
        setGreeting2("Software Developer");
    },4000)

    return (
        <>
            <div className="banner">
                <div className="container">
                    <h1 className='header'>{greeting}</h1>
                    <h2 className='sub-header'>{greeting2}</h2>
                    <br/>
                    <Button
                    buttonSize='btn_medium'
                    buttonStyle='btn_outline'>Contact Me</Button>
                </div>
            </div>
        </>
    );

}
export default Banner;
