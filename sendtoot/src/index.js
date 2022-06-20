// DON'T FORGET to update the domain name below to your instance's host!
const MASTODON_INSTANCE = 'mastodon.example';
// Add your access token in here
const MASTODON_ACCESS_TOKEN = '';

// We want to use the HTTP client API
import { http } from "@suborbital/runnable";

// The runtime will invoke the exported "run" function to run our logic
export const run = (input) => {
  // The message we want to send in the status update
  // We will just hardcode this for now, and get it from Twitter in a later step!
  let message = `Hello from WebAssembly!`;

  // The Mastodon API endpoint we need to call to post a new status update
  let url = `https://${MASTODON_INSTANCE}/api/v1/statuses`;

  // We configure some headers to authenticate our request and set the request type to that expected by the Mastodon API
  let headers = {
      'Authorization': 'Bearer '+MASTODON_ACCESS_TOKEN,
      'Content-Type': 'application/x-www-form-urlencoded'
  };

  // This Mastodon API uses classic "HTTP form" encoding (and not e.g. JSON) so we encode our POST data in the correct format
  let body = 'status='+encodeURIComponent(message);

  // Toot away!
  http.post(url, body, headers);

  // The result of our function
  return 'ok';
};
