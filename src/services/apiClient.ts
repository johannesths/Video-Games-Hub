/**
 * apiClient.ts
 *
 * The API client to fetch from the RAWG.io API.
 * API Keys are available at rawg.io for free.
 */

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "",
  },
});

// Note: all previously used API Keys are deactivated.
