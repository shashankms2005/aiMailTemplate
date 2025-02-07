import { v } from "convex/values";
import { mutation } from "./_generated/server";


export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    picture: v.string(),
  },
  handler: async (ctx, args) => {
    // Query the "users" table for an existing user with the given email
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    // If user does not exist, insert a new record
    if (user.length === 0) {
      const result = await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        picture: args.picture,
        credits: 3,
      });
      return result;
    }

    // Otherwise, return the existing user
    return user[0];
  },
});
