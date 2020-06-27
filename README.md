# Ebay Apollo Server
 Apollo Server running on express and consuming ebays deals feed
 
Demo: http://159.203.110.164:9002/graphql

## New Features!

  - Ebay Apollo Server has been dockerized

```sh
    $ docker run -p 9002:9002 jam3snicholson/ebay-apollo-server
```

### GraphQL query

Fetch a group of deals via country with a limit.

```sh
{
    deals(countries : "EBAY-AU", limit:2) {
    	itemId,
    	title,
			price,
    }
}
```
 Fetch a group of deals by category with a limit
 ```sh
{
  dealsByCategory(category:"260010" countries : "EBAY-AU", limit:3) {
    itemId,
    title,
    price,
  }
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
