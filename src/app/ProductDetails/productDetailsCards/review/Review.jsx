import Image from "next/image";

const Review = ({ name, avatar, rating, date, comment }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <div className="text-yellow-500 text-sm">{"★".repeat(rating)}</div>
        </div>
        <span className="text-gray-500 text-sm sm:ml-auto">{date}</span>
      </div>
      <p className="text-gray-600 mt-2">{comment}</p>
    </div>
  );
};

export default Review;
