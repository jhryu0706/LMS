import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  '/test',
]
)

export default clerkMiddleware((auth, req) => {
  console.log('middleware', req.url);
  if (isPublicRoute(req)) {
    return;
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

