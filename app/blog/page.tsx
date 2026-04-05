import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import OutboundTracker from "@/components/outbound-tracker";
import BlogFilter from "@/components/blog-filter";
import { getBlogPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Android & Kotlin Development Articles",
  description:
    "In-depth articles on Android development, Kotlin, Jetpack Compose, Swift, and mobile app architecture. Tips, tutorials, and best practices by Nadeem Aslam, Senior Android Developer.",
  keywords: [
    "Android development blog",
    "Kotlin tutorials",
    "Jetpack Compose guide",
    "mobile development articles",
    "Android developer tips",
    "Swift iOS development",
    "Kotlin Coroutines",
    "Android architecture",
    "MVVM Android",
  ],
  openGraph: {
    title: "Blog — Android & Kotlin Development Articles",
    description:
      "In-depth articles on Android development, Kotlin, Jetpack Compose, and mobile architecture by Nadeem Aslam.",
    url: "https://nadeemaslam.dev/blog",
  },
};

const jsonLdBlog = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Nadeem Aslam — Android Development Blog",
  description:
    "Articles on Android development, Kotlin, Jetpack Compose, Swift, and mobile app architecture.",
  url: "https://nadeemaslam.dev/blog",
  author: {
    "@type": "Person",
    name: "Nadeem Aslam",
    url: "https://nadeemaslam.dev",
    jobTitle: "Senior Android Developer",
  },
  publisher: {
    "@type": "Person",
    name: "Nadeem Aslam",
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const tags = getAllTags();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlog) }}
      />

      <Nav />
      <OutboundTracker />

      <main id="main" className="flex-1 pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-10 py-20">
          {/* Page header */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Blog
          </h1>
          <p className="text-text-secondary text-lg mb-10 max-w-[600px]">
            In-depth articles on Android development, Kotlin, Swift, and
            building mobile apps that scale.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                Coming soon — new articles are on the way.
              </p>
            </div>
          ) : (
            <BlogFilter posts={posts} tags={tags} />
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
