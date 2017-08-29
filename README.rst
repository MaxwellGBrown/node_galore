Node Galore
===========

This is an exploration of node.js!

In an effort to embrace JavaScript more and to diversify away from Python I've decided that it's time I begin understanding more portions of the language.

I've become comfortable with using frameworks like jQuery (ew!) & React, but I don't have the context of being familiar w/ node.



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
