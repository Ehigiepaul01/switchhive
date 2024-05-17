import { check, filter, plus } from "../../assets/icons";
// import plus from "../../assets/icons";
// import filter from "../../assets/icons";

const RewardFilter = () => {
  return (
    <div
      id="sidebar"
      className="flex flex-col p-4 mr-4 text-gray-700 bg-white border-2 border-gray-100 rounded-md w-72"
    >
      <button className="px-4 py-2 mb-4 text-white bg-blue-500 border border-transparent rounded-md">
        <span><img src={filter} alt="" className="absolute inset-0 my-auto pl-3" /></span>
        Filter By
      </button>
      <h4 className="mb-2">Products</h4>

      <div className="mb-6 section">
        <div className="relative w-[43.4%] min-w-52">
          <h3 className="mb-2 text-blue-500">
            <span className="pr-10">
              <img
                src={check}
                alt=""
                className="absolute inset-0 my-auto pl-3"
              />
            </span>
            Gift Card
          </h3>
        </div>

        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Food
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Sports
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Towel
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Bitcoin
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Gaming
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Clothing
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Shopping
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Streaming
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Electronics
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Restaurant
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Mobile Phone
        </label>

        <div className="relative w-[43.4%] min-w-52">
          <p className="flex items-center mt-2">
            <span className="pr-10">
              <img
                src={plus}
                alt=""
                className="absolute inset-0 my-auto pl-3"
              />
            </span>
            New Category
          </p>
        </div>
      </div>

      <div className="mb-6 section">
        <div className="relative w-[43.4%] min-w-52">
          <h3 className="mb-2 text-blue-500">
            <span className="pr-10">
              <img
                src={check}
                alt=""
                className="absolute inset-0 my-auto pl-3"
              />
            </span>
            Mobile Top Up
          </h3>
        </div>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Data
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Bundles
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Airtime
        </label>

        <div className="relative w-[43.4%] min-w-52">
          <p className="flex items-center mt-2">
            <span className="pr-10">
              <img
                src={plus}
                alt=""
                className="absolute inset-0 my-auto pl-3"
              />
            </span>
            New Category
          </p>
        </div>
      </div>

      <div className="mb-6 section">
        <div className="relative w-[43.4%] min-w-52">
          <h3 className="mb-2 text-blue-500">
            <span className="pr-10">
              <img
                src={check}
                alt=""
                className="absolute inset-0 my-auto pl-3"
              />
            </span>
            Bill Payment
          </h3>
        </div>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Electricity Bill
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Water Bill
        </label>
        <label className="flex items-center subsection">
          <input type="checkbox" className="mr-2" /> Betting
        </label>
        <div className="relative w-[43.4%] min-w-52">
          <p className="flex items-center mt-2">
            <span className="pr-10">
              <img
                src={plus}
                alt=""
                className="absolute inset-0 my-auto pl-3"
              />
            </span>
            New Category
          </p>
        </div>
      </div>

      <button className="px-4 py-2 text-white bg-blue-500 border border-transparent rounded-md">
        Apply
      </button>
    </div>
  );
};

export default RewardFilter;