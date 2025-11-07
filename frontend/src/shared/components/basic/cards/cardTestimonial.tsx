import React from "react";

interface TestimonialCardProps {
  name: string;
  profession: string;
  text: string;
  image?: string;
}

export default function TestimonialCard({
  name,
  profession,
  text,
  image = "https://via.placeholder.com/150"
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-white shadow-sm borders border-[#00b7cb] md:px-14 rounded-2xl md:py-8">
      <p className="text-lg leading-normal text-gray-800">
        {text}
      </p>

      <div className="flex items-center mt-8 space-x-3">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
          <img
            alt={name}
            src={image}
            loading="lazy"
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <div className="text-lg font-medium text-gray-800">{name}</div>
          <div className="text-gray-600">{profession}</div>
        </div>
      </div>
    </div>
  );
}

