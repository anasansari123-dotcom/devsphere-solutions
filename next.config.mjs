/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  // Lets a production build go to a separate folder (e.g. NEXT_DIST_DIR=.next-check) while `next dev` uses .next
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Old local landing page was removed; send existing links/search results to the home page
  async redirects() {
    return [{ source: "/it-company-in-muzaffarnagar", destination: "/", permanent: true }];
  },
};
export default nextConfig;
