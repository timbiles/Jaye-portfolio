const resolvers = {
    Query: {
      events: async (parent, args, context) => {
        let result = await context.req.app.get('db').jaye_calendar.find();
        return result;
      },
      bio: async (parent, args, context) => {
        let bio = await context.req.app.get('db').bios.findOne({id: 1})
        return bio
      }
    },
    Mutation: {
      addEvent: async(parent, args, context) => {
          let event = await context.req.app.get('db').jaye_calendar.insert(args.event)
          return event;
      },
      removeEvent: async(parent, args, context) => {
          let remove = await context.req.app.get('db').jaye_calendar.destroy(args)
          return remove
      },
      editBio: async(parent, args, context) => {
        let edit = await context.req.app.get('db').bios.save({id: 1, biography: args.biography})
        return edit
      }
    }
  };
  
  module.exports = { resolvers };
  