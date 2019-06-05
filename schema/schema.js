const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;


// types
// root query

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    olympian: {
      type: GraphQLList,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return axios.get(``)
      }
    }
  }
})
// mutations

module.exports = new GraphQLSchema({
  //export root query and mutations
});
