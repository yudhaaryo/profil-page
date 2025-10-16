import React from "react";
import { MapPin, User } from "lucide-react";

const NameDisplay = ({ name, gender, city }) => {
  return (
    <div className="text-center sm:text-left space-y-1">
      <p className="text-2xl font-semibold text-green-700">
        {name.title} {name.first} {name.last}
      </p>
      <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
        <User className="w-4 h-4" />
        <span className="capitalize">{gender}</span>
      </div>
      <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
        <MapPin className="w-4 h-4" />
        <span>{city}</span>
      </div>
    </div>
  );
};
export default NameDisplay;
