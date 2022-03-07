import {useState} from "react";
import "./Terminal.css"
import {Link} from "react-router-dom";

const Terminal = () => {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");

    let https = (siteName) => {
        window.location.href = `https://www.${siteName}.com`;
    }



    const cdTo = (input) => {
        switch (input.toLowerCase()) {
            case 'home':
                https('google');
                break;
            case 'portfolio':
                https('facebook');
                break;
            case 'about' :
               https('linkedin');
                break;
            case 'contact':
                https('github');
                break;
            case 'linkedin':
                https('linkedin');
                break;
            case 'github':
                https('github');
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className="container-terminal py-5">
                <div className="card terminal">
                    <div className="card-header terminal-header">
                        Terminal
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="text-success"><span className='text-muted'>guest@userGuest~ %</span>Enter
                                Your First
                                Name: </label>
                            <div className="px-5">
                                <input type="text" className="form-control border-success text-success terminal-bg"
                                       value={name}
                                       onChange={e => setName(e.target.value)}/>
                            </div>
                        </div>

                        {name.length >= 2 ? <p className='text-success'><span
                            className='text-muted'>guest@user{name}~ %</span> Welcome {name} Nice To Meet You
                        </p> : null}

                        {name.length >= 2 ?
                            <div className="form-group">
                                <label htmlFor="input" className="text-success"><span
                                    className='text-muted'>$:</span> type 'help' for a list of available
                                    commands</label>
                                <div className="px-5">
                                    <input type="text" className="form-control border-success text-success terminal-bg"
                                           value={input} onChange={e => {
                                        setInput(e.target.value);
                                        cdTo(e.target.value)
                                    }
                                    }/>
                                    {input.toLowerCase() === 'help' || input.toLowerCase() === 'ls' ?
                                        <p className='text-success'><span className='text-danger'>type any available command:</span><br/> home<br/>portfolio<br/>about<br/>contact
                                        </p> : null}

                                    <p className="text-success">{input.startsWith("cd ") ? input : 'cd  ' + input} </p>
                                </div>
                            </div> : null}

                    </form>
                </div>
            </div>


        </>
    )
        ;

}
export default Terminal;