import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from 'next-auth/providers/email'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // name: "credentials",

      // credentials: {
      //   email: { label: "Email", type: "email", placeholder: "messme@example.com" },
      //   password: { label: "Password", type: "password" }
      // },
      // async authorize(credentials, req) {
      //   // Add logic here to look up the user from the credentials supplied
      //   // const user = { id: "1", email: "root@root.net", password: "abc" }
      //   console.log(credentials);
      //   console.log(req);
      //   const sendData = {
      //     email: credentials.email,
      //     password: credentials.password,
      //   }
      //   const res = await fetch('http://localhost:3000/login', { method:"POST", headers: {
      //     method: 'POST',
      //     body: JSON.stringify(sendData),
      //     headers:    {
      //       "Content-Type": "application/json; charset=UTF-8",
      //       "api-key": "c9b652c6c3a02b34c1d1fc197b99656e6347bb58f0e713e5014c5470d58e7a35709de8aecfa1e8b170b76c2ae4f8f042b30e0e29663138ef427e85dabd315f9c"
      //       }
      //   }})
      //   const user = await res.json()
      //   console.log(user);
  
      //   if (user) {
      //     // Any object returned will be saved in `user` property of the JWT
      //     return user
      //   } else {
      //     // If you return null then an error will be displayed advising the user to check their details.
      //     return new Error('Failed to Log In via credentials')
  
      //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter

      //   }
      // }
    }),
    // EmailProvider({
    //   name: "email",
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM
    // }),
    GoogleProvider({
      name: "google",
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    
    }),
    GithubProvider({
      name: "github",
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)