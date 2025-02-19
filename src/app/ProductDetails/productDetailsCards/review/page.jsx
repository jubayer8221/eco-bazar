import Review from "./Review";

export default function ReviewPage() {
  const reviews = [
    {
      name: "Kristin Watson",
      avatar: "/avatar1.jpg", // Replace with your image path
      rating: 5,
      date: "2 min ago",
      comment: "Duis at ullamcorper nulla, eu dictum eros.",
    },
    {
      name: "Jane Cooper",
      avatar: "/avatar2.jpg",
      rating: 5,
      date: "30 Apr, 2021",
      comment:
        "Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to 'bolt' or go to seed...",
    },
    {
      name: "Jacob Jones",
      avatar: "/avatar3.jpg",
      rating: 5,
      date: "2 min ago",
      comment:
        "Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.",
    },
    {
      name: "Ralph Edwards",
      avatar: "/avatar4.jpg",
      rating: 5,
      date: "2 min ago",
      comment:
        "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica...",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 sm:p-8 md:p-10 lg:p-12">
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
      <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 w-full sm:w-auto">
        Load More
      </button>
    </div>
  );
}
