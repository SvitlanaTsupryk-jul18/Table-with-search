# [Click to open table]( https://svitlanatsupryk-jul18.github.io/Table-with-search/)

( You can uncommited for seenig the result)

**IzTest**
  

You are required to create a table that will display data provided by api.

Api data served as JSON.

Structure is: {

data : array of Person,

count: amount of hits with your search

}

Person : {

id: int,

name: string,

email: string,

funds: string,

city: string,

phone: string

}

Api has following query options :

  

localhost:8080:

GET / : {

limit: string,

offset: string,

name: string,

city: string,

email: string,

funds: string (if 100 will return every hit > 100, if negative < 100),

phone: string

}

PUT /update/:id : {

name: string,

city: string,

email: string,

funds: string,

phone: string

}

  

I suggest you use https://www.npmjs.com/package/axios as your http library.

You might want to use Postman or Insomnia http clients to see how those apis work

**Table should be paginated, and you should be able to search for all columns at the same time.**

**It should be possible to change values in table, by using put request, response will be new value for that Person.**
  
**To start a server you will need to run "npm install" and "npm start" in root folder of this project**
