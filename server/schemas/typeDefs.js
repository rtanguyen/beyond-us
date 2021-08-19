//import the GQL
const { gql } = require('apollo-server-express');
//type def
const typeDefs = gql`
    type User {
        username: String,
        email: String
    }
    `
//export
module.exports = typeDefs;