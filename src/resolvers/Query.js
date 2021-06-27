
const Query = {
     async collections(parent , args , { prisma , getSelectedObjects } , info) {
       const collections =  await prisma.collection.findMany({
           select : getSelectedObjects(info),
       })
       console.log(collections)
       return collections
    } ,
    async limitedCollections(parent , { take } , { prisma, getSelectedObjects } , info) {
        const selection = getSelectedObjects(info)
        selection.items.take = take
        const collections = await prisma.collection.findMany({
            select: selection,
        })
        return collections
    },

    async getCollection(parent , { routeName } , { prisma , getSelectedObjects } , info ) {
        const collection = await prisma.collection.findUnique({
            where : {
                routeName : routeName
            },
            select : getSelectedObjects(info)
        })
        return collection
    }
}           



            

export default Query          