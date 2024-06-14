import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/test',
]
)

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) {
    return auth.allowUnauthenticated();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

