import resList from "./resList";
import Rescards from "./Rescards";

const Rescontainer = () => {
    return (

        <div id='res-grids'>
            <Rescards resData={resList[0]} />
            <Rescards resData={resList[1]} />
            <Rescards resData={resList[2]} />
            <Rescards resData={resList[3]} />
            <Rescards resData={resList[4]} />
            <Rescards resData={resList[5]} />
            <Rescards resData={resList[6]} />
        </div>

        // ================or==================

        // <div>
        //     {
        //         resList.map((restaurant) => (
        //             <Rescards key={restaurant.card.card.info.id} resData={restaurant} />
        //         ))
        //     }
        // </div>

    )
}
 
export default Rescontainer;