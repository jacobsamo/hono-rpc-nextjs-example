import type { AppType } from "../../api/src/";
import { hc } from "hono/client";

export const apiClient = hc<AppType>("http://172.24.176.1:8181", {
  headers: {
    Authorization: `Bearer testing123`,
  },
});
