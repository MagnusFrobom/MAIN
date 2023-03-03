import NextAuth from "next-auth";
import { authOptions } from "livechat/server/auth";

export default NextAuth(authOptions);
