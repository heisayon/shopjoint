import { Rating } from "flowbite-react";
import PropTypes from "prop-types";
function Ratings({ ratings }) {
  return (
    <Rating>
      <Rating.Star />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {ratings}
      </p>
    </Rating>
  );
}

Ratings.propTypes = {
  ratings: PropTypes.string,
};

export default Ratings;
