import cardImage from "../assets/image 87 1.png";

const ProductCard = () => {
    return (
        <div className="p-6 mb-4 bg-white border-2 rounded-md card-info">
            <img src={cardImage} alt="image" />
            <div className="flex items-center justify-between mt-4 description">
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                />
                <button className="bg-white cursor-pointer px-2 py-1.5 rounded-[100px] border border-blue-900 text-blue-900">
                    Entertainment
                </button>
            </div>
        </div>
    )
}

export default ProductCard