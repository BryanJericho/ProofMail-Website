"use client";

import { blogPosts, categories } from "@/static/blogData";
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaGraduationCap,
  FaArrowRight,
  FaClock,
  FaSearch,
} from "react-icons/fa";

export const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.level.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 md:py-28 lg:py-32 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-6 md:mb-12">
        <h2 className="font-bold mb-4 text-[#111827]">Latest from Our Blog</h2>
        <p className="subHeading text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stay updated with the latest insights on email security, blockchain
          technology, and best practices for protecting your digital
          communications.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisiblePosts(6);
            }}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 text-[#111827]"
            style={{
              focusRingColor: "#3B82F6",
              borderColor: searchQuery ? "#3B82F6" : "#e5e7eb",
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-6 md:mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setVisiblePosts(6);
            }}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor:
                category === activeCategory ? "#3B82F6" : "transparent",
              color: category === activeCategory ? "white" : "#111827",
              border:
                category === activeCategory ? "none" : "2px solid #e5e7eb",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {(searchQuery || activeCategory !== "All") && (
        <div className="text-center mb-6">
          <p className="text-gray-600">
            {filteredPosts.length === 0
              ? "No articles found"
              : `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? "s" : ""}`}
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== "All" && ` in ${activeCategory}`}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: "#3B82F6" }}
                >
                  {post.category}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor:
                      post.level === "Beginner"
                        ? "#10B981"
                        : post.level === "Intermediate"
                          ? "#F59E0B"
                          : "#EF4444",
                    color: "white",
                  }}
                >
                  {post.level}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3
                className="text-xl font-bold mb-3 line-clamp-2 transition-colors duration-200"
                style={{ color: "#111827" }}
              >
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <FaGraduationCap className="text-xs" />
                  <span>{post.level}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock className="text-xs" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 font-semibold transition-all duration-200 hover:gap-2 text-[#3B82F6]">
                <span>Read More</span>
                <FaArrowRight className="text-sm" size={14} />
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length > visiblePosts && (
        <div className="text-center">
          <button
            onClick={() => setVisiblePosts((prev) => prev + 6)}
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#3B82F6" }}
          >
            Load More Articles
          </button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FaSearch className="mx-auto text-6xl mb-4" />
          </div>
          <h3
            className="text-xl font-semibold mb-2"
            style={{ color: "#111827" }}
          >
            No articles found
          </h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search terms or browse different categories.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
              setVisiblePosts(6);
            }}
            className="px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "transparent",
              color: "#3B82F6",
              border: "2px solid #3B82F6",
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
