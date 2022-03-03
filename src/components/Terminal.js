import {useState} from "react";

const Terminal = () => {
    const [name, setName] = useState("");


    return (
        <>
            <div className="vh-100 bg-dark">
                <div className="container">
                    <form className='justify-content-center d-flex align-items-center'>
                        <div className="form-group row">
                            <label htmlFor="name" className="text-success">Enter Your Name: </label>
                            <div className="px-5">
                                <input type="text" className="form-control bg-dark border-success text-success" value={name} onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>
                    </form>
                    <p className="text-success">{name.length > 3 ? `Welcome ${name} Nice To Meet You` :  "" }</p>
                </div>
            </div>
        </>
    );

}
export default Terminal;