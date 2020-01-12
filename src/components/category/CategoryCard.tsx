import React, { FunctionComponent } from 'react';

type CatalogItemCardProps = {
  label: string;
  thumbnail: string;
  onClick: (category: string) => void;
};

const CatalogItemCard: FunctionComponent<CatalogItemCardProps> = ({
  label,
  thumbnail,
  onClick,
}) => {
  const handleClick = () => {
    onClick(label);
  };

  return (
    <button className="text-center outline-none" onClick={handleClick}>
      <div
        className="w-20 h-20 bg-cover bg-center bg-no-repeat border border-gray-300 rounded-full shadow-md"
        style={{ backgroundImage: `url('${thumbnail}')` }}
      ></div>
      <div className="mt-3">{label}</div>
    </button>
  );
};

export default CatalogItemCard;
