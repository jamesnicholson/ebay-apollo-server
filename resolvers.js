const Query = {
    deals: async(_source, {country, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.deals(country, limit)
    },
    countries: async(_source, { }, { dataSources }) => {
      return await dataSources.EbayAPI.countries()
    },
    categories: async(_source,{},{dataSources}) => {
      return await dataSources.EbayAPI.categories()
    },
    dealsByCategory: async(_source, { country, category, limit}, { dataSources }) => {
      return await dataSources.EbayAPI.dealsByCategory( country, category, limit)
    },
    dealsByOffset: async(_source, {country, limit, offset}, { dataSources }) => {
      return await dataSources.EbayAPI.dealsByOffset(country, limit, offset)
    },
    dealsByCategoryByOffset: async(_source, { country, category, limit, offset}, { dataSources }) => {
      return await dataSources.EbayAPI.dealsByCategoryByOffset( country, category, limit, offset)
    },
  }
module.exports = {Query}