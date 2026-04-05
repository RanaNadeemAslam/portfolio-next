import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import OutboundTracker from "@/components/outbound-tracker";
import { getBlogPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.date,
      images: post.metadata.cover ? [post.metadata.cover] : ["/assets/portrait.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: post.metadata.cover ? [post.metadata.cover] : ["/assets/portrait.png"],
    },
  };
}

const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [[rehypePrettyCode, { theme: "github-dark-dimmed" }]] as any,
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Nav />
      <OutboundTracker />

      <main id="main" className="flex-1 pt-[72px]">
        <article className="max-w-[720px] mx-auto px-10 py-20">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-accent transition-colors mb-10"
          >
            &larr; Back to blog
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-text-muted text-[0.82rem] mb-4">
              <time dateTime={post.metadata.date}>
                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="font-heading text-3xl md:text-[2.5rem] font-extrabold tracking-tight leading-[1.15] mb-4">
              {post.metadata.title}
            </h1>

            {post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-[0.75rem] font-medium text-text-muted bg-border-light rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {post.metadata.cover && (
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-border-light mb-2">
                <Image
                  src={post.metadata.cover}
                  alt={post.metadata.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Article content with typography styles */}
          <div
            className={[
              /* Headings */
              "[&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4",
              "[&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:mt-10 [&_h3]:mb-3",
              "[&_h4]:font-heading [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:mt-8 [&_h4]:mb-3",

              /* Paragraphs */
              "[&_p]:text-text-secondary [&_p]:leading-[1.8] [&_p]:mb-5",

              /* Links */
              "[&_a]:text-accent [&_a]:font-medium [&_a]:underline-offset-2 [&_a]:decoration-accent/30 hover:[&_a]:underline",

              /* Lists */
              "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:text-text-secondary [&_ul]:leading-[1.8]",
              "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:text-text-secondary [&_ol]:leading-[1.8]",
              "[&_li]:mb-1.5",

              /* Images */
              "[&_img]:rounded-xl [&_img]:w-full [&_img]:my-6",

              /* Blockquotes */
              "[&_blockquote]:border-l-4 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:py-1 [&_blockquote]:my-6 [&_blockquote]:italic [&_blockquote]:text-text-muted",

              /* Horizontal rules */
              "[&_hr]:border-border-light [&_hr]:my-10",

              /* Tables */
              "[&_table]:w-full [&_table]:text-sm [&_table]:my-6",
              "[&_th]:text-left [&_th]:font-semibold [&_th]:pb-2 [&_th]:border-b [&_th]:border-border",
              "[&_td]:py-2 [&_td]:border-b [&_td]:border-border-light [&_td]:text-text-secondary",

              /* Strong and emphasis */
              "[&_strong]:font-semibold [&_strong]:text-foreground",
            ].join(" ")}
          >
            <MDXRemote source={post.content} options={mdxOptions} />
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
