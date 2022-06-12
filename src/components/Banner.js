import './Banner.css';
import {useState} from "react";

const Banner = () => {
    const [greeting, setGreeting] = useState('');
    const [greeting2, setGreeting2] = useState("");
    setTimeout(()=> {
        setGreeting("Hello my name is Mario Granados");
    },2000);
    setTimeout(()=> {
        setGreeting2("I am A Software Developer");
    },4000)

    return (
        <>
            <div className="banner">
                <h3>{greeting}</h3>
                <h4>{greeting2}</h4>
            </div>
        </>
    );

}
export default Banner;
