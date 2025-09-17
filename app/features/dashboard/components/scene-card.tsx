import React from "react";
import Image from "next/image";

interface SceneCardProps {
  imageSrc: string;
  title: string;
  description: string;
  alt: string;
}

export function SceneCard({
  imageSrc,
  title,
  description,
  alt,
}: SceneCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-card soft-shadow transition-all hover:soft-shadow-lg">
      <Image
        alt={alt}
        className="h-40 w-full object-cover"
        src={imageSrc}
        width={400}
        height={160}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}
