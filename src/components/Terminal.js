import {useState} from "react";

const Terminal = () => {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");


    return (
        <>
            <div className="vh-100 bg-dark">
                <div className="container">
                    <form className='justify-content-center d-flex align-items-center'>
                        <div className="form-group row">
                            <label htmlFor="name" className="text-success">guest@guestUser~ % Enter Your Name: </label>
                            <div className="px-5">
                                <input type="text" className="form-control bg-dark border-success text-success" value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>
                    </form>
                    <p className="text-success">{name.length > 3 ? `guest@${name}User~ % Welcome ${name} Nice To Meet You` :  "" }</p>
                    {name.length > 3 ?
                        <div className="form-group row">
                        <label htmlFor="input" className="text-success">$: Where would you like to go? </label>
                        <div className="px-5">
                            <p className='text-success lead-text'>$: Home Portfolio Contact About </p>
                            <input type="text" className="form-control bg-dark border-success text-success" value={input} onChange={e => setInput(e.target.value)}/>

                            <p className="text-success">{input.startsWith("cd ") ? input : 'cd  ' + input}</p>
                        </div>
                    </div> : ''}
                </div>
            </div>
        </>
    );

}
export default Terminal;