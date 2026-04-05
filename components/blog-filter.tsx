"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type BlogPost = {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    cover?: string;
    tags: string[];
    featured?: boolean;
  };
  readingTime: string;
};

type Props = {
  posts: BlogPost[];
  tags: string[];
};

function PostCard({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block rounded-2xl border border-border bg-background-white overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg hover:-translate-y-1 ${
        large ? "" : ""
      }`}
    >
      {/* Cover */}
      {post.metadata.cover ? (
        <div className={`relative w-full overflow-hidden ${large ? "aspect-[2.2/1]" : "aspect-video"}`}>
          <Image
            src={post.metadata.cover}
            alt={post.metadata.title}
            fill
            className="object-cover"
            sizes={large ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          />
        </div>
      ) : (
        <div className={`w-full ${large ? "aspect-[2.2/1]" : "aspect-video"} bg-gradient-to-br from-accent/5 to-accent/10`} />
      )}

      <div className={`${large ? "p-8" : "p-5"}`}>
        {/* Date + reading time */}
        <div className="flex items-center gap-3 text-text-muted text-[0.78rem] mb-2">
          <time dateTime={post.metadata.date}>
            {new Date(post.metadata.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h2
          className={`font-bold tracking-tight mb-2 group-hover:text-accent transition-colors ${
            large ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {post.metadata.title}
        </h2>

        {/* Description */}
        <p className={`text-text-secondary leading-relaxed mb-4 ${large ? "text-base line-clamp-3" : "text-sm line-clamp-2"}`}>
          {post.metadata.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.metadata.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.7rem] font-medium text-text-muted bg-border-light rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function BlogFilter({ posts, tags }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const featuredPost = posts.find((p) => p.metadata.featured);
  const filteredPosts = activeTag
    ? posts.filter((p) => p.metadata.tags.includes(activeTag))
    : posts;

  // If filtering, show all filtered (including featured). If not filtering, exclude featured from grid.
  const gridPosts = activeTag
    ? filteredPosts
    : filteredPosts.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <>
      {/* Tag filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            activeTag === null
              ? "bg-accent text-white"
              : "bg-border-light text-text-secondary hover:bg-border"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer capitalize ${
              activeTag === tag
                ? "bg-accent text-white"
                : "bg-border-light text-text-secondary hover:bg-border"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Featured post (only when not filtering) */}
      {!activeTag && featuredPost && (
        <div className="mb-10">
          <PostCard post={featuredPost} large />
        </div>
      )}

      {/* Post grid */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-text-muted text-lg">
            No articles found for &ldquo;{activeTag}&rdquo;
          </p>
          <button
            onClick={() => setActiveTag(null)}
            className="mt-4 text-accent font-semibold text-sm hover:underline cursor-pointer"
          >
            Show all articles
          </button>
        </div>
      )}
    </>
  );
}
