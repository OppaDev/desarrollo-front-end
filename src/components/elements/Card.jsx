import PropTypes from "prop-types";

export const Card = ({srcImg, productName, price}) => {
  return (
    <div className="w-60 h-100 bg-gray-800 p-3 flex flex-col gap-1 rounded-br-3xl">
      <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-slate-600 via-blue-700 to-indigo-600  hover:contrast-100">
        <img
          src={ srcImg }
          alt= { productName }
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <span className="text-xl text-gray-50 font-bold">{ productName }</span>
          </div>
          <span className="font-bold  text-gray-50">$ { price } </span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
    srcImg: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    };