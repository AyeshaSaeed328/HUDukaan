

const ProdCard = (props) => {
    const { prodData } = props;
    const { name, image, new_price } = prodData;

    return (
        <div className="p-2 m-5 bg-white w-[300px] h-[350px] hover:shadow-2xl hover:cursor-pointer hover:scale-95 transition-transform duration-300 ease-in-out">
            <img className=" w-full h-[200px] object-cover" src={image} />
            <h3 className="p-2 m-2  font-bold">{name}</h3>
            <p className="rest-desc px-2 mx-2">{new_price}</p>
            

            {/* <p className="px-2 mx-2">{rating.rate}</p> */}

        </div>)
}



export default ProdCard;