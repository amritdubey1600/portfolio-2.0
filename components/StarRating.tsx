import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex justify-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={14}
          className={`${
            star <= rating
              ? 'fill-orange-400 text-orange-400'
              : 'fill-slate-600 text-slate-600'
          }`}
        />
      ))}
    </div>
  );
};
