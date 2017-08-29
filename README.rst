Node Galore
===========

This is an exploration of node.js as a back end service.

I've been reluctant to begin exploring this because I *really* like Python.
But it's probably about time I try learning more about JavaScript than just React.

Development Quickstart
----------------------

1. Build the Docker container

   ::

     $ docker build -t node_galore .

2. Run the node server

   ::

     $ docker run -p <local>:80 -v $(pwd):/node_galore --name node_galore -d node_galore


Running The Script
------------------

Node can also be used to run scripts.

::

  $ docker run -v $(pwd):/node_galore node_galore node ./scripts/hello.js World


Potential Features
------------------

* Demo-ing POST requests
* Reading/writing to a data store
   
  * Postgres?

  * Mongo?


Resources
---------

* `StackOverflow getting started with node.js <https://stackoverflow.com/documentation/node.js/340/getting-started-with-node-js#t=201708230005090196811>`__
* `Tutorials Point Node.js tutorial <https://www.tutorialspoint.com/nodejs>`__
