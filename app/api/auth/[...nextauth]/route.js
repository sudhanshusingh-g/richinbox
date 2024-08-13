import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import User from '@/models/user';

export default NextAuth({
    providers: [
        Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    database: process.env.DATABASE_URL,
    callbacks: {
        async signIn(user, account, profile) {
        if (account.provider === 'google') {
            const { email, name, picture } = profile;
            const user = await User.findOne({ email });
    
            if (!user) {
            await User.create({
                email,
                username: name,
                image: picture,
            });
            }
        }
        return true;
        },
    },
    });
    