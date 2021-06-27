import graphqlFields from "graphql-fields"

const getSelectedObjects = (info) => {
    const selectedFields = graphqlFields(info)
    Object.keys(selectedFields).forEach(field => {
        if (field === "items") {
            const keys = Object.keys(selectedFields.items)
            selectedFields.items = {}
            selectedFields.items.select = {}
            keys.forEach(field => {
                selectedFields.items.select[field] = true
            })
        } else {
            selectedFields[field] = true
        }
    })
    return selectedFields
}
       
export default getSelectedObjects