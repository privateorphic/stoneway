/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "stoneway-testing-home.netlify.app", pathname: "/images/**" }],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy-Report-Only", value: "default-src 'self'; img-src 'self' data: https:; media-src 'self' https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self' https:; font-src 'self' data: https:; frame-src https://maps.google.com https://www.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://wa.me" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/living-room-tiles", destination: "/collection/living-room-tiles", permanent: false },
      { source: "/kitchen-tiles", destination: "/collection/kitchen-tiles", permanent: false },
      { source: "/bathroom-tiles", destination: "/collection/bathroom-tiles", permanent: false },
      { source: "/bedroom-tiles", destination: "/collection/bedroom-tiles", permanent: false },
      { source: "/outdoor-tiles", destination: "/collection/outdoor-tiles", permanent: false },
    ]
  },
}

export default nextConfig

