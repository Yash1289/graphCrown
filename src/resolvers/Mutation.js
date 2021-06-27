import { PrismaClient } from ".prisma/client"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient()

const Mutation = {
    async createCollection(parent, { data }, { prisma, getSelectedObjects} , info){
        const collection = await prisma.collection.create({
            data : data ,
            select : getSelectedObjects(info)
        })
        return collection
    }
}



export default Mutation