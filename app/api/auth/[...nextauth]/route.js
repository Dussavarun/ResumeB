import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../../lib/mongodb";
import User from "../../../../models/User";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });
        if (!user) return null;

        const valid = await bcrypt.compare(
          credentials?.password || "",
          user.password
        );

        if (!valid) return null;

        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
