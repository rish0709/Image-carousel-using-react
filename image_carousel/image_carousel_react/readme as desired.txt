to run frontend part
(commands to be run on terminal (in image_carousel_react folder))
1. npm start


to run backend part
(command to be run on second splitted terminal in node_server folder)
1. npm run dev

project architecture


frontend
---------------------------------------------
frontend flow start from the directory image_carousel_react. in which app.js used to be called where Home component is getting rendered . <Home /> has been imported from "./Components/home.js". in home component, the <ImageCard /> component is being rendered which is in the same folder as home.js.

styling is done using the home.module.css file for home.js and imageCard.module.css for imageCard.module.css which are in the Components/css Files folder.

backend
------------------------------------------------

the code execution in backend starts from the index.js which is in the node_server folder. 
all the mongodb connection and configuration are imported in index.js to connect to database..
mongodb configuration is in node_Server/configurations/mongoose.config.js.
the required controllers are called from the index.js for specific routes.
controllers are in the contrllers folder
all the data manipulation has been done in repositories/user.repo.js file.

additonal instructions
--------------------------------------------
mongodb Atlas has been used for data management purposes. 









