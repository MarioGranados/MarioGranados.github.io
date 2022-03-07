
let Hero = ({inverse, img, alt, title, content}) => {

    let cols = () => {
        if (inverse) {
            return (<>
                <div className="col text-success">
                    {content}
                </div>
                <div className="col text-success">
                    <img src={img} alt={alt}/>
                </div>
            </>);
        } else {
            return (
                <>
                <div className="col text-success">
                    <img src={img} alt={alt}/>
                </div>
                <div className="col text-success">
                    {content}
                </div>
            </>
            );
        }
    }

    return (
        <>
            <div className="container border my-5 py-2">
                <div className="text-center display-4">{title}</div>
                <div className="row justify-content-around p-5">
                    {cols(inverse)}
                </div>
            </div>
        </>
    );

}
export default Hero;