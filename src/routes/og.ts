import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "workers-og";

export const Route = createFileRoute("/og")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const url = new URL(request.url);
        const title = url.searchParams.get("title") || "MiniClue";

        const html = `
          <div style="display: flex; flex-direction: column; width: 100%; height: 100%; align-items: center; justify-content: center; background: white;">
            <div style="display: flex; flex-direction: row; width: 100%; align-items: center; justify-content: space-between; padding: 32px;">
              <h2 style="display: flex; flex-direction: column; font-size: 36px; font-weight: 700; letter-spacing: -0.02em; text-align: left; margin: 0;">
                ${title}
              </h2>
            </div>
          </div>
        `;

        return new ImageResponse(html, {
          width: 1200,
          height: 630,
        });
      },
    },
  },
});
