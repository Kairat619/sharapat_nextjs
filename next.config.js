const isProd = process.env.NODE_ENV === 'production'
 
module.exports = { 


  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://sharapat-next.vercel.app' : undefined,
}

  // module.exports = {eslint:{ ignoreDuringBuilds:true,},}