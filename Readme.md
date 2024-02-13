# Creating Docker image from Node + Express Application

### Create Node Express Application https://github.com/Ashitathukral/C0885078_class_Assignment_3/
### Create DockerFile in the project and copy the following code in the file
```
# syntax=docker/dockerfile:1
FROM node:18-alpine
LABEL maintainer "ashitathukra123@gmail.com"
LABEL build_date "2024-02-13"
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
```
### Create Docker image using following commands
```                                                                                                     
docker build --tag c0885078-node-assignment3 .                                                                           
docker images
```
### Run the created image using below       
```
docker run --detach --publish 3000:3000 c0885078-node-assignment3                                                        
docker run --detach --publish 3001:3000 c0885078-node-assignment3                                                         
docker ps
```
### Stop container using below commands
```
docker stop silly_shannon                                                                                                
docker stop dazzling_ride                                                                                                
docker ps
docker ps -a
```
### Remove Existing container using below commands
```                                                                                                                
docker rm d4bd055b350d                                                                                                   
docker rm 0ef47414b3cf                                                                                                   
docker ps                                                                                                                
docker ps -a              
```
### Run the container using Environment variable
```                                                                        
docker run --detach --publish 3000:80 -e PORT=80 c0885078-node-assignment3:latest                                        
docker run --detach --publish 3001:8080 -e PORT=8080 -e NAME=c1 c0885078-node-assignment3:latest
```
### Run the containers using Environment variables using file
```
docker run --detach --publish 3000:3000 --env-file my-env.txt c0885078-node-assignment3:latest
```