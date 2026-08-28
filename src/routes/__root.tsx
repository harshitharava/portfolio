import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Harshith Arava | UX Designer" },
        {
          name: "description",
          content:
            "Harshith Arava is a UX Designer focused on Human-Technology Interaction, UX research, and AI.",
        },
        { name: "author", content: "Harshith Arava" },
        { property: "og:site_name", content: "Harshith Arava" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@Lovable" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "icon",
          href: `${import.meta.env.BASE_URL}favicon.ico`,
          type: "image/x-icon",
        },
        { rel: "preconnect", href: "https://api.fontshare.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          // Fontshare's f[] param silently drops every font but one when
          // multiple are requested in a single call (confirmed: combining
          // clash-display + satoshi in one URL always returns only one of
          // them — whichever, not consistently the first). Satoshi was the
          // one going missing here, which is why body copy fell back to
          // system-ui/-apple-system everywhere, not just on mobile — it
          // just reads as a bigger difference on iOS's San Francisco than
          // on most desktop fallback fonts. Split into two requests.
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap",
        },
        {
          // PlayPal case study only: its artboards are set in Zalando Sans.
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Zalando+Sans:ital,wght@0,300..900;1,300..900&display=swap",
        },
        {
          // CityLoop case study only: Kanit is its own display headings
          // (h2, hero wordmark, intro h1), and DM Sans is the literal font
          // named in its Typography card's own "Body" specimen. Neither
          // was actually loaded anywhere before — both silently relied on
          // the visitor's system already having them installed, so they
          // rendered correctly by chance rather than reliably for everyone.
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  // The site footer belongs to the home page only — every other route
  // (about, and every case study) supplies its own ending.
  const showSiteFooter = (pathname.replace(/\/$/, "") || "/") === "/";

  return (
    <QueryClientProvider client={queryClient}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteNav />
      {/* Sitewide grain: one fixed layer for every page, homepage through
          both case studies. Sits above content but never blocks clicks. */}
      <div className="site-grain" aria-hidden="true" />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      {showSiteFooter && <SiteFooter />}
    </QueryClientProvider>
  );
}
