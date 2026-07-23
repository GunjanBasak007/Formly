import { router } from "./trpc";
import { authRouter } from "./routes/auth/route";
import { formRouter } from './routes/form/route'
import { analyticsRouter } from './routes/analytics/route'
import { responseRouter } from "./routes/response/route";

export const serverRouter = router({
  auth: authRouter,
  form: formRouter,
  analytics: analyticsRouter,
  response: responseRouter,
});

export { createContext } from "./context";
export type ServerRouter = typeof serverRouter;
