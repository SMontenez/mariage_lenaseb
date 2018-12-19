const config = {
  siteEnConstruction: process.env.REACT_APP_SITE_EN_CONSTRUCTION === 'true',
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000',
  },
};

export default config;
