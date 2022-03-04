import {useState} from "react";

const Terminal = () => {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");

    const cdTo = (input) => {
        switch (input.toLowerCase()) {
            case 'home':
                //link code
                break;
            case 'portfolio':
                //link code
                break;
            case 'about' :
                //link code
                break;
            case 'contact':
                //link code
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
                                <label htmlFor="name" className="text-success"><span className='text-muted'>guest@userGuest~ %</span>Enter Your First
                                    Name: </label>
                                <div className="px-5">
                                    <input type="text" className="form-control border-success text-success" value={name}
                                           onChange={e => setName(e.target.value)}/>
                                </div>
                            </div>

                            {name.length >= 2 ? <p className='text-success'><span className='text-muted'>guest@user{name}~ %</span> Welcome {name} Nice To Meet You</p> : null}

                            {name.length >= 2 ?
                                <div className="form-group">
                                    <label htmlFor="input" className="text-success"><span className='text-muted'>$:</span> type 'help' for a list of available commands</label>
                                    <div className="px-5">
                                        <input type="text" className="form-control border-success text-success"
                                               value={input} onChange={e => setInput(e.target.value)}/>
                                        {input.toLowerCase() === 'help' || input.toLowerCase() === 'ls'? <p className='text-success'><span className='text-danger'>type any available command:</span><br/> home<br/>portfolio<br/>about<br/>contact</p> : null}
                                        <p className="text-success">{input.startsWith("cd ") ? input : 'cd  ' + input}</p>
                                    </div>
                                </div> : ''}
                        </form>
                </div>
            </div>




</>
)
    ;

}
export default Terminal;