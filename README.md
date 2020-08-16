# Ebay Apollo Server
 Apollo Server running on express and consuming ebays deals feed
 
Demo: http://159.203.110.164:9002/graphql

## New Features!
  - Deals can have offsets, this will start the deal list at particular index
  - Ebay Apollo Server has been dockerized

```sh
    $ docker run -p 9002:9002 jam3snicholson/ebay-apollo-server
```

### GraphQL query

Fetch a group of deals via country and category with a limit.
```sh
  query deals($country: String!, $category: String, $limit: Int, $offset: Int) {
    deals(country: $country, category:$category, limit:$limit, offset: $offset) {
    		itemId,
    		title,
				price
      	image225
    }
  }

  {
    "country" : "EBAY-AU",
    "category": "260010",
    "limit": 2,
    "offset": 0
  }
```
  Fetch a group of deals via country  with a limit.
 ```sh
   query deals($country: String!, $limit: Int, $offset: Int) {
    deals(country: $country, limit:$limit, offset: $offset) {
    		itemId,
    		title,
				price
      	image225
    }
  }

  {
    "country" : "EBAY-AU",
    "limit": 2,
    "offset": 0
  }
```


A list of categories
 ```sh
{
  categories{
    id
    name
  }
}
```  

A list of countries
 ```sh
{
  countries{
    id
    name
  }
}
```  


Enjoy :)
