import { renderToString } from "react-dom/server";
import { Router, Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Biografia from "@/pages/Biografia";
import Shows from "@/pages/Shows";

function makeStaticHook(path: string) {
  const hook = () => [path, () => {}] as [string, (to: string) => void];
  return hook;
}

export function render(url: string): string {
  const queryClient = new QueryClient();
  const hook = makeStaticHook(url);

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router hook={hook} base="">
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/biografia" component={Biografia} />
              <Route path="/shows" component={Shows} />
            </Switch>
          </Layout>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>,
  );

  return html;
}
