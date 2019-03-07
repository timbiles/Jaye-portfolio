const resolvers = {
    Query: {
      events: async (parent, args, context) => {
        let result = await context.req.app.get('db').jaye_calendar.find();
        return result;
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
      }
    }
  };
  
  module.exports = { resolvers };
  