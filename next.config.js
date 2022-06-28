/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const createNextPluginPreval = require("next-plugin-preval/config");
const withNextPluginPreval = createNextPluginPreval();

module.exports = {
  nextConfig,
};

module.exports = withNextPluginPreval(/* optionally add a next.js config */);
