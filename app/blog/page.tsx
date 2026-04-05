import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import OutboundTracker from "@/components/outbound-tracker";
import { getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on Android development, Kotlin, Swift, and mobile app architecture by Nadeem Aslam.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <Nav />
      <OutboundTracker />

      <main id="main" className="flex-1 pt-[72px]">
        <div className="max-w-[1200px] mx-auto px-10 py-20">
          {/* Page header */}
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Blog
          </h1>
          <p className="text-text-secondary text-lg mb-14 max-w-[600px]">
            Thoughts on Android, iOS, Kotlin, Swift, and building mobile apps
            that people love.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">
                Coming soon — new articles are on the way.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-border-light bg-background-white overflow-hidden transition-all hover:border-border hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
                >
                  {/* Cover image or gradient placeholder */}
                  {post.metadata.cover ? (
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                      <Image
                        src={post.metadata.cover}
                        alt={post.metadata.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full rounded-t-xl bg-gradient-to-br from-accent/5 to-accent/10" />
                  )}

                  <div className="p-6">
                  {/* Date and reading time */}
                  <div className="flex items-center gap-3 text-text-muted text-[0.8rem] mb-3">
                    <time dateTime={post.metadata.date}>
                      {new Date(post.metadata.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-lg font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                    {post.metadata.title}
                  </h2>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.metadata.description}
                  </p>

                  {/* Tags */}
                  {post.metadata.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.metadata.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-block text-[0.7rem] font-medium text-text-muted bg-border-light rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
