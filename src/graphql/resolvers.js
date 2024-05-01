
// https://sample-walmart.free.beeceptor.com/
const resolvers = {
  Query: {
    users: async () => {},
    searchUser: async (_, { value }) => {
      try {
        const response = await fetch(`${process.env.URL_API}/search?q=${value}`)
        const data = await response.json()

        return data.users.map(u => {
          return {
            id: u.id,
            firstName: u.firstName,
            lastName: u.lastName,
            email: u.email,
            username: u.username,
            image: u.image
          }
        })
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}

export default resolvers