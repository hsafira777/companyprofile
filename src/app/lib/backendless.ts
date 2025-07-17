import Backendless from "backendless";

Backendless.initApp(
  process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID!,
  process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY!
);

export default Backendless;