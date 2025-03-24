"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const newsPosts = [
  {
    id: 1,
    title: "Global Climate Summit 2023",
    content: "World leaders gather to discuss urgent climate action...",
    excerpt:
      "The 28th United Nations Climate Change Conference (COP28), held in Dubai from November 30 to December 13, 2023, marked a critical juncture in global climate action.  Concluding the first Global Stocktake, COP28 assessed collective progress towards the Paris Agreement goals, focusing on key areas like energy transition, climate finance, adaptation, and inclusivity.  Discussions centered around tripling renewable energy capacity by 2030 and phasing down fossil fuels, alongside operationalizing the Loss and Damage Fund for vulnerable nations.  The summit aimed to accelerate action through negotiated outcomes, action agendas, and calls to action, emphasizing inclusivity by engaging youth, women, and indigenous communities.  COP28 served as a platform for countries to showcase commitments, launch initiatives, and collaborate on climate solutions, representing a significant step in addressing the climate crisis",
    admin: "Climate Admin",
    comments: 65,
    category: "Food",
    date: "2023-10-15",
    image: "/news/newscover.png",
  },
  {
    id: 2,
    title: "Renewable Energy Advances",
    content: "New technologies in renewable energy are emerging...",
    excerpt:
      "Renewable energy is rapidly advancing, with solar photovoltaic technology leading the charge through increased efficiency and decreased costs. Wind energy is also making significant contributions, particularly with the rise of larger, more powerful turbines and the development of offshore wind farms. Addressing the intermittency challenge, energy storage solutions like batteries and pumped hydro are becoming more sophisticated and reliable. Green hydrogen, produced from renewable sources, is emerging as a crucial energy carrier for sectors difficult to electrify. Additionally, advancements in bioenergy, including sustainable biofuel production, are enhancing its efficiency and environmental friendliness. These combined advancements are propelling the world towards a more sustainable and cleaner energy landscape.",
    admin: "Energy Admin",
    comments: 45,
    category: "Energy",
    date: "2023-10-16",
    image: "/news/renewable.png",
  },
  {
    id: 3,
    title: "Sustainable Agriculture Practices",
    content: "Farmers are adopting sustainable practices to improve...",
    excerpt:
      "Sustainable agriculture encompasses a range of practices aimed at producing food and fiber in a way that minimizes environmental impact, supports economic viability, and enhances social well-being. These practices often involve integrating natural processes like nutrient cycling and biological pest control, reducing reliance on external inputs such as synthetic fertilizers and pesticides. Conservation tillage, crop rotation, and cover cropping are some key techniques that help maintain soil health, prevent erosion, and enhance biodiversity. Sustainable agriculture also emphasizes efficient water management, responsible livestock practices, and the preservation of genetic resources. By adopting these holistic approaches, farmers can ensure long-term productivity while safeguarding the environment and contributing to a more resilient and equitable food system.",
    admin: "Agriculture Admin",
    comments: 30,
    category: "Agriculture",
    date: "2023-10-17",
    image: "/news/agriculture.png",
  },
  {
    id: 4,
    title: "Ocean Conservation Efforts",
    content: "Efforts to conserve marine life are gaining momentum...",
    excerpt:
      "Ocean conservation efforts are crucial for safeguarding the health and biodiversity of our planet's oceans. These efforts encompass a wide range of initiatives, from establishing marine protected areas to regulate fishing and other human activities, to restoring damaged ecosystems like coral reefs and mangroves. Combating pollution, including plastic waste and agricultural runoff, is another critical aspect, as is addressing the impacts of climate change, such as ocean acidification and rising sea levels. International cooperation, scientific research, and community engagement are all essential components of effective ocean conservation strategies, working together to ensure the long-term health and productivity of these vital ecosystems",
    admin: "Marine Admin",
    comments: 20,
    category: "Marine",
    date: "2023-10-18",
    image: "/news/ocean.png",
  },
  {
    id: 5,
    title: "Urban Green Spaces Tracking System",
    content:
      "Researchers tested the system in Karachi, Pakistan's largest city where several team members are based....",
    excerpt:
      "A research team led by Rumi Chunara — an NYU associate professor with appointments in both the Tandon School of Engineering and the School of Global Public Health — has unveiled a new artificial intelligence (AI) system that uses satellite imagery to track urban green spaces more accurately than prior methods, critical to ensuring healthy cities. To validate their approach, the researchers tested the system in Karachi, Pakistan's largest city where several team members are based. Karachi proved an ideal test case with its mix of dense urban areas and varying vegetation conditions. Accepted for publication by the ACM Journal on Computing and Sustainable Societies, the team’s analysis exposed a stark environmental divide: some areas enjoy tree-lined streets while many neighborhoods have almost no vegetation at all. Cities have long struggled to track their green spaces precisely, from parks to individual street trees, with traditional satellite analysis missing up to about 37% of urban vegetation. As cities face climate change and rapid urbanization, especially in Asia and Africa, accurate measurement has become vital. Green spaces can help reduce urban temperatures, filter air pollution, and provide essential spaces for exercise and mental health. But these benefits may be unequally distributed. Low-income areas often lack vegetation, making them hotter and more polluted than tree-lined wealthy neighborhoods.",
    admin: "Urban Admin",
    comments: 50,
    category: "Urban",
    date: "2023-10-19",
    image: "/news/urbangreen.png",
  },
  {
    id: 6,
    title: "Wildlife Protection Initiatives",
    content: "New initiatives are being launched to protect wildlife...",
    excerpt:
      "Wildlife protection initiatives are vital for preserving the incredible diversity of life on Earth. These initiatives encompass a broad spectrum of actions, from establishing protected areas and wildlife reserves to combatting poaching and illegal wildlife trade. Habitat restoration and conservation are also crucial, as is mitigating human-wildlife conflict.  Furthermore, community involvement and education play a key role in fostering coexistence and promoting sustainable practices.  Scientific research and monitoring provide essential data to inform conservation strategies and assess their effectiveness.  Ultimately, wildlife protection initiatives strive to safeguard vulnerable species and their habitats, ensuring the balance and health of ecosystems for generations to come.",
    admin: "Wildlife Admin",
    comments: 40,
    category: "Wildlife",
    date: "2023-10-20",
    image: "/news/wildlife.png",
  },
  {
    id: 7,
    title: "Clean Water Projects Expansion",
    content: "Efforts to provide clean water to communities are expanding...",
    excerpt:
      "Expanding access to clean water is crucial for global health and well-being.  These projects involve constructing and improving water treatment and distribution systems, often alongside implementing rainwater harvesting and other localized solutions.  Sustainable water management practices, like efficient irrigation and wastewater treatment, are key to ensuring long-term water availability.  Community involvement is essential, fostering ownership and promoting responsible water use.  Effective projects often rely on partnerships between governments, non-profits, and local communities to secure funding, technical expertise, and local support.",
    admin: "Water Admin",
    comments: 35,
    category: "Water",
    date: "2023-10-21",
    image: "/news/cleenwater.png",
  },
  {
    id: 8,
    title: "Air Quality Improvements",
    content: "Cities are implementing measures to improve air quality...",
    excerpt: "Donec sollicitudin molestie malesuada.",
    admin: "Air Admin",
    comments: 25,
    category: "Air",
    date: "2023-10-22",
    image: "/news/air.png",
  },
  {
    id: 9,
    title: "Recycling Programs Expansion",
    content: "New recycling programs are being introduced to reduce waste...",
    excerpt:
      "Expanding recycling programs is crucial for minimizing waste, conserving resources, and promoting a circular economy.  This involves increasing access to recycling facilities and collection points, while also educating the public about proper recycling practices.  Improving sorting and processing technologies is essential for handling a wider range of materials and increasing recycling efficiency.  Furthermore, promoting the use of recycled materials in manufacturing and product development creates market demand and strengthens the recycling loop.  Effective recycling programs often require collaboration between governments, businesses, and communities to establish comprehensive and sustainable waste management systems.",
    admin: "Recycling Admin",
    comments: 55,
    category: "Recycling",
    date: "2023-10-23",
    image: "/news/recycling.png",
  },
  {
    id: 10,
    title: "Sustainable Fashion Trends",
    content: "Fashion industry is moving towards sustainable practices...",
    excerpt:
      "Sustainable fashion is gaining momentum as consumers become more aware of the environmental and social impacts of their clothing choices. This trend encompasses a shift towards durable, high-quality garments made from eco-friendly materials like organic cotton, recycled fibers, and innovative plant-based alternatives.  Upcycling and repurposing existing clothes are also gaining popularity, reducing textile waste and promoting a circular economy.  Furthermore, consumers are increasingly seeking transparency in supply chains, demanding information about where and how their clothes are made, ensuring fair labor practices and environmental responsibility.  Slow fashion, which emphasizes buying fewer, better-quality pieces, is also on the rise, encouraging a more mindful and sustainable approach to consumption.",
    admin: "Fashion Admin",
    comments: 60,
    category: "Fashion",
    date: "2023-10-24",
    image: "/news/fashion.png",
  },
  {
    id: 11,
    title: "Cybercrime on the Rise: How to Stay Safe",
    content: "Cybercrime is increasing at an alarming rate...",
    excerpt:
      "With the rise of digital transactions and online activities, cybercrime has become a major concern. Hackers are using sophisticated techniques such as phishing, ransomware, and identity theft to exploit individuals and businesses. Governments and cybersecurity experts are urging people to take precautionary measures, including using strong passwords, enabling two-factor authentication, and staying informed about potential threats.",
    admin: "Crime Watch",
    comments: 78,
    category: "Crime",
    date: "2024-02-18",
    image: "/news/cybercrime.png",
  },
  {
    id: 12,
    title: "The Future of Plant-Based Foods",
    content: "The food industry is witnessing a major shift...",
    excerpt:
      "As consumers become more health-conscious, plant-based foods are gaining popularity. Companies are investing in innovative meat alternatives made from soy, pea protein, and even lab-grown meat. This shift not only caters to vegetarians and vegans but also contributes to reducing environmental impact and improving global food sustainability.",
    admin: "Food Insider",
    comments: 56,
    category: "Food",
    date: "2024-02-14",
    image: "/news/food.png",
  },
  {
    id: 13,
    title: "Industrial Growth in the Post-Pandemic Era",
    content: "Industries are experiencing rapid transformation...",
    excerpt:
      "After the pandemic, industries worldwide have adapted to new trends such as automation, AI-driven manufacturing, and sustainable production methods. Countries are focusing on self-sufficiency, reducing reliance on imports, and investing in local industrial growth. The use of smart factories and robotics is also contributing to increased efficiency and productivity.",
    admin: "Analyst",
    comments: 64,
    category: "Industrial Growth",
    date: "2024-02-20",
    image: "/news/industrial.png",
  },
  {
    id: 14,
    title: "The Impact of Organized Crime on Global Trade",
    content: "Organized crime groups are infiltrating global markets...",
    excerpt:
      "From drug trafficking to counterfeit goods, organized crime has a significant influence on global trade. Authorities are struggling to combat illegal trade networks that impact economies and businesses worldwide. Governments are implementing stricter policies to curb smuggling, fraud, and money laundering.",
    admin: "Crime Reporter",
    comments: 92,
    category: "Crime",
    date: "2024-02-10",
    image: "/news/organizedcrime.png",
  },
  {
    id: 15,
    title: "How AI is Changing the Food Industry",
    content: "Artificial Intelligence is reshaping food production...",
    excerpt:
      "AI-driven technologies are transforming the food industry by optimizing supply chains, reducing food waste, and improving quality control. Smart agriculture, automated food processing, and AI-driven food recommendations are helping companies enhance efficiency while minimizing environmental impact.",
    admin: "Tech Foodie",
    comments: 48,
    category: "Food",
    date: "2024-02-12",
    image: "/news/foodindustrywithai.png",
  },
  {
    id: 16,
    title: "Rising Industrial Automation: Pros and Cons",
    content: "The push for automation is reshaping industries...",
    excerpt:
      "Industrial automation is leading to increased efficiency, lower production costs, and enhanced precision in manufacturing. However, concerns about job displacement and reliance on AI-driven systems raise ethical and economic questions. Experts debate whether automation will create new job opportunities or widen the gap between skilled and unskilled workers.",
    admin: "AI Expert",
    comments: 71,
    category: "Industrial Growth",
    date: "2024-02-15",
    image: "/news/industrialautomation.png",
  },
  {
    id: 17,
    title: "Dark Web Marketplaces: A Growing Threat",
    content: "The dark web continues to be a hub for illegal activities...",
    excerpt:
      "Despite global crackdowns, dark web marketplaces remain a major concern for law enforcement. From illicit drug sales to cybercrime services, these underground platforms facilitate illegal transactions anonymously. Authorities are leveraging advanced tracking technologies to dismantle these networks and reduce their impact on global security.",
    admin: "Security Analyst",
    comments: 85,
    category: "Crime",
    date: "2024-02-17",
    image: "/news/darkweb.png",
  },
  {
    id: 18,
    title: "The Future of Lab-Grown Meat",
    content: "Lab-grown meat is set to revolutionize the food industry...",
    excerpt:
      "Scientists and food companies are investing heavily in lab-grown meat technology, offering an ethical and sustainable alternative to traditional meat production. While regulatory hurdles and public acceptance remain challenges, lab-grown meat has the potential to reduce environmental impact and improve food security globally.",
    admin: "Food Scientist",
    comments: 59,
    category: "Food",
    date: "2024-02-19",
    image: "/news/labmeat.png",
  },
];

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 12;

  // Pagination calculations
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = newsPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(newsPosts.length / postsPerPage);

  // Add/remove no-scroll class to body when modal is open/closed
  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedPost]);

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-5xl">
      {/* Latest News Section */}
      <section className="mb-12">
        <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden">
          <Image
            src="/news/newspapers.png"
            alt="Latest News"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Breaking News: Global Climate Summit Updates
            </h1>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <h2 className="text-2xl font-bold mb-6 px-2 sm:px-0">Latest Posts</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-0">
        {currentPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative aspect-video font-semibold">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm mb-3">
                <span className="text-[#00B207] font-medium">
                  {post.category}
                </span>
                <span className="text-gray-400 hidden xs:inline">•</span>
                <span className="text-gray-600">{post.admin}</span>
                <span className="text-gray-400 hidden sm:inline">•</span>
                <span className="text-gray-600">{post.comments} Comments</span>
              </div>
              <h3 className="font-bold text-lg mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {post.excerpt}
              </p>
              <button
                onClick={() => setSelectedPost(post)}
                className="w-full bg-[#00B207] hover:bg-[#049904] text-white px-4 py-2 rounded-md transition-colors text-sm sm:text-base"
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm sm:text-base disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base ${
              currentPage === i + 1
                ? "bg-[#00B207] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 sm:px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm sm:text-base disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="relative aspect-video mb-6">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-6">
                <span>By {selectedPost.admin}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.comments} Comments</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{selectedPost.excerpt}</p>
                <p className="text-gray-600">{selectedPost.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
