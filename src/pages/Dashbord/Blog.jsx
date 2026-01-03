import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Top 10 Freelancing Skills in 2024",
      excerpt: "Discover the most in-demand skills that clients are looking for this year.",
      author: "Sarah Johnson",
      date: "Jan 15, 2024",
      category: "Career Advice",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "How to Write a Winning Proposal",
      excerpt: "Learn the secrets to crafting proposals that get you hired instantly.",
      author: "Mike Chen",
      date: "Jan 12, 2024",
      category: "Freelancing",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Managing Your Time Effectively",
      excerpt: "Tips and tools to boost your productivity while working from home.",
      author: "Emily Davis",
      date: "Jan 10, 2024",
      category: "Productivity",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Future of Remote Work",
      excerpt: "What trends should you expect in the remote work landscape?",
      author: "Alex Thompson",
      date: "Jan 05, 2024",
      category: "Trends",
      image: "https://i.ibb.co.com/9kpvjJtY/image.png"
    },
    {
      id: 5,
      title: "Financial Tips for Freelancers",
      excerpt: "How to manage your taxes, savings, and retirement as a freelancer.",
      author: "David Wilson",
      date: "Jan 02, 2024",
      category: "Finance",
      image: "https://i.ibb.co.com/Hy0Lk2V/image.png"
    },
    {
      id: 6,
      title: "Building Your Personal Brand",
      excerpt: "Stand out from the competition by building a strong personal brand.",
      author: "Lisa Anderson",
      date: "Dec 28, 2023",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="p-6 md:p-10 min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog & <span className="text-orange-500">Insights</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">
              Stay updated with the latest trends, tips, and stories from the freelancing world.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              View All Posts
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
