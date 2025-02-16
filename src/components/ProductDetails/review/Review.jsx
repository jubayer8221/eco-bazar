import Image from "next/image";

const Review = ({ name, avatar, rating, date, comment }) => {
  return (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <div className="flex items-center space-x-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <div className="text-yellow-500 text-sm">{"★".repeat(rating)}</div>
        </div>
        <span className="text-gray-500 text-sm ml-auto">{date}</span>
      </div>
      <p className="text-gray-600 mt-2">{comment}</p>
    </div>
  );
};

export default Review;
