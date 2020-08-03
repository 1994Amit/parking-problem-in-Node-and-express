Project Structure
:node_modules
:routes
  logic.js
  parkingticket.js
  unparkcar.js
:test
  node_modules
  api.test.js
  package.json
  package-lock.js
env
.gitignore
index.js
package.json
package-lock.json
README.md

Steps to run the project

go to the root directory
run npm install from cmd
run node index.js from cmd

open postman
select post and type this url http://localhost:{port}/parkingticket/add click on body then select raw from radiobutton and select json ...type { {
    "registratonNo" : "7885k"
}} click send ...this will give a slot for a car
select Get  and type this url http://localhost:{port}/parkingticket/add  this will give complete infor for car and slot
select Delete and type this url http://localhost:{port}/parkingticket/remove/{slot} will free up that slot
select Get  and type this url http://localhost:3000/parkingticket/find/{slot/regno} will find data for that slot 

maxslot is set in .env file
