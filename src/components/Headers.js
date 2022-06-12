export const Headers = ({children}) => {

    return (
        <div className="headers">
            <h2 className='title'>{children}</h2>
            <div className='content'>
                <hr/>
            </div>
        </div>
    );
}
