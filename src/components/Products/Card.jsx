import cardImage from "@/assets/image 87 1.png";
import { Button } from "../ui";
import { useState } from "react";
import { CustomCheckbox } from "../custom";

const ProductCard = ({ category, product }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`p-2 bg-white border-2 rounded-md card-info ${isChecked ? 'border-blue-900' : ''}`} role="button" onClick={handleCheckboxChange}>
            <img src={cardImage} alt="image" />
            <div className="flex items-center justify-between mt-4">
                <CustomCheckbox
                    type="checkbox"
                    name="check"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    value={category+product}
                />
                <span className="px-2 py-0.5 text-xs rounded-[100px] border border-blue-900 text-blue-900">Entertainment</span>
            </div>
        </div>
    )
}
export default ProductCard
