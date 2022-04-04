# sequelize model:generate --name users \
#   --attributes firstName:string,lastName:string,email:string

sequelize model:generate --name blogs \
  --attributes title:string,body:string,userID:integer,isPublished:boolean