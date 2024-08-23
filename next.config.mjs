/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/proxy-standard-target/_next/:path*',
          destination: 'https://proxy-standard-target-git-main-michael-kleemanns-projects.vercel.app/proxy-standard-target/_next/:path*',
        },
      ],
      afterFiles: [],
      fallback: [
        {
          source: '/proxy-standard-target',
          destination: 'https://proxy-standard-target-git-main-michael-kleemanns-projects.vercel.app/proxy-standard-target',
        },
        {
          source: '/proxy-standard-target',
          destination: 'https://proxy-standard-target-git-main-michael-kleemanns-projects.vercel.app/proxy-standard-target/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
