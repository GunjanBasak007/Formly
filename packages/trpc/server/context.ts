import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'
import { createCookieFactory, getCookieFactory, clearCookieFactory } from './utils/cookie'

export interface TRPCCtxUser {
    id: string
}

export interface TRPCContext {
    createCookie: ReturnType<typeof createCookieFactory>,
    getCookie: ReturnType<typeof getCookieFactory>,
    clearCookie: ReturnType<typeof clearCookieFactory>,

    user?: TRPCCtxUser

}

export async function createContext({ req, res }: CreateExpressContextOptions) {
    console.log("Cookies:", req.cookies);
    console.log("Cookie Header:", req.headers.cookie);

    const ctx = {
        createCookie: createCookieFactory(res),
        getCookie: getCookieFactory(req),
        clearCookie: clearCookieFactory(res),
        user: undefined,
    };

    return ctx;
}
export type Context = Awaited<ReturnType<typeof createContext>>;

