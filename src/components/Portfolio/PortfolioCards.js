import './PortfolioCards.css'

const PortfolioCards = ({title, cardText, img, btnLink, btnLabel }) => {
    return (
        <>
            <div className="card glass_bg">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center">{title}</h5>
                    <p className="card-text text-center">{cardText}</p>
                    <div className='justify-content-center d-flex'>
                        <a href={btnLink} className="btn btn-primary">{btnLabel}</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PortfolioCards;