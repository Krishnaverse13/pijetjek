
import React from 'react';
import { StarIcon as StarIconSolid } from './icons/HeroIcons'; // Solid star
import { StarIcon as StarIconOutline } from './icons/HeroIconsOutline'; // Outline star

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5; // Not implementing half-star visuals for simplicity, just rounding up
  const emptyStars = maxStars - fullStars - (rating % 1 > 0 && !halfStar ? 1 : 0); // simplified

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarIconSolid key={`full-${i}`} className="w-5 h-5 text-amber-400" />
      ))}
      {/* For simplicity, not showing half stars. Could be added with more complex SVG logic or a dedicated half-star icon */}
       {[...Array(Math.max(0, maxStars - fullStars))].map((_, i) => (
        <StarIconOutline key={`empty-${i}`} className="w-5 h-5 text-amber-400" />
      ))}
    </div>
  );
};

export default StarRating;
