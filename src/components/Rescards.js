const Rescards = (props) => {
    const { resData } = props;
    return (
        <div id='outer'>
            <div>
                <img className='outer-img'
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                        + resData.card.card.info.cloudinaryImageId} />
            </div>
            <div className='info' >
                <h1>{resData.card.card.info.name}</h1>
                <h4>{resData.card.card.info.cuisines}</h4>
                <h4>{resData.card.card.info.sla.deliveryTime + " minutes"}</h4>
                <h4>{resData.card.card.info.avgRating}</h4>
            </div>
        </div>
    )
};

export default Rescards