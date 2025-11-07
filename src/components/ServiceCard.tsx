import React from "react";
import { Service } from "../types/servicios";
import { ClockIcon } from "./icons";

type Props = {
  service: Service;
};

const ServiceCard: React.FC<Props> = ({ service }) => {
  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-pink-100 hover:-translate-y-2 hover:border-pink-300 flex flex-col">
      <div className="relative h-52 bg-gradient-to-br from-pink-100 to-pink-50 overflow-hidden">
        {service.pictureUrl ? (
          <img
            src={service.pictureUrl}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-7xl">💅</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
          {service.name}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-grow">
          {service.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <div className="flex items-center gap-2 text-gray-700">
            <ClockIcon className="text-pink-600" size={18} />
            <span className="font-semibold text-sm">{service.duration} min</span>
          </div>

          <div className="text-pink-600 font-bold text-xl">
            ${service.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
