export function getImageUrl(image?: string | null, fallback = "/images/logo.png") {
  const value = typeof image === "string" ? image.trim() : "";

  if (!value) return fallback;

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  // Dynamic image paths returned by the API are usually relative, e.g. /images/...
  // They must be loaded from the API domain, not from the Next.js public folder.
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "https://api.ninevehautogo.com/v1/";
  let origin = "https://api.ninevehautogo.com";

  try {
    origin = new URL(apiURL).origin;
  } catch {
    // Keep the production image origin fallback above.
  }

  return `${origin}/${value.replace(/^\/+/, "")}`;
}
