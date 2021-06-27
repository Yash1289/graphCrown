import "@babel/polyfill"
import { GraphQLServer } from "graphql-yoga";
import Query from "./resolvers/query";
import Mutation from "./resolvers/Mutation";
import { PrismaClient } from ".prisma/client"
import { v4 as uuidv4 } from "uuid"
import getSelectedObjects from "./utils/getSelectedObjects";

const prisma = new PrismaClient()

const resolvers = {
    Query,
    Mutation
}

const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql" ,
    resolvers ,
    context :{
         prisma ,
         getSelectedObjects
    }
})

server.start({ port : process.env.PORT || 4000 } , () => {
    console.log("The graphql server is up and running")
})