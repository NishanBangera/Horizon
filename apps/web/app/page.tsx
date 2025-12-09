"use client";

import { Button } from "@workspace/ui/components/button"
import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../../../packages/backend/convex/_generated/api";

export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <>
      <Authenticated>
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Hello World</h1>
            <Button size="sm">Button</Button>
            {JSON.stringify(users)}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <p>Please log in to see the content.</p>
      </Unauthenticated>
    </>
  )
}
