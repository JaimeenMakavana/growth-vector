"use client";

import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  image,
}: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative w-full h-64 md:h-80 bg-gray-100">
        <Image
          src={image}
          alt={`${name}, ${role}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
        />
      </div>
      <div className="p-xl md:p-2xl">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-sm md:mb-md font-montserrat">
          {name}
        </h3>
        <p className="text-base md:text-lg text-rose-600 font-medium mb-md font-montserrat">
          {role}
        </p>
        <p className="text-sm md:text-base text-gray-600 font-montserrat leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}
