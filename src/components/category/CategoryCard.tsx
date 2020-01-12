import React, { FunctionComponent } from 'react';

type CatalogItemCardProps = {
  label: string;
  thumbnail: string;
};
const CatalogItemCard: FunctionComponent<CatalogItemCardProps> = ({
  label,
  thumbnail,
}) => {
  return (
    <div className="text-center">
      <div
        className="w-20 h-20 bg-cover bg-center bg-no-repeat border border-gray-300 rounded-full shadow-md"
        style={{ backgroundImage: `url('${thumbnail}')` }}
      ></div>
      <div className="mt-3">{label}</div>
    </div>
  );
};

export default CatalogItemCard;
