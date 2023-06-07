// next js API for both backend and front end

import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from "next-auth/react";
import { connectToDB } from "@utils/database";
import User from "@models/user";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {
       const sessionUser = await User.findOne({
        email: session.User.email
       })

       session.User.id = sessionUser._id.toString();
       return session;
    },
    async signIn({profile}) {
        try {
          await connectToDB(); 
           // check if a user already exist
           const userExists = await User.findOne({
            email: profile.email
           })
           // if not, create a new user
           if (!userExists) {
            await User.create({
                email: profile.email,
                username: profile.name.replace(" "," ").toLowerCase(),
                image: profile.picture
            })
           }
           return true;
        } catch (error) {
          console.log(error);
          return false;
        }
    }
})

export {handler as GET, handler as POST};