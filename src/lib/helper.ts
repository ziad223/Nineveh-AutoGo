import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const errorsHandling = (
  error: { data: any; status: number } | any,
  lang: string,
  client?: boolean
) => {
  const path =
    typeof window !== "undefined"
      ? window.location.pathname
      : "/";

  // Avoid redirect loops on the localized home page.
  if (path === `/${lang}` || path === `/${lang}/`) {
    console.warn("Prevented redirect loop on home page", error);
    return null;
  }

  // 401 → redirect to the localized home page.
  if (error?.status === 401) {
    if (client) {
      window.location.href = `/${lang}`;
    } else {
      // Keep server components from crashing the whole page on auth-only data.
      // redirect(`/${lang}`);
    }
    return null;
  }

  if (client) {
    if (
      error?.message === "الرجاء تسجيل الدخول أولاً" ||
      error?.message === "please login first"
    ) {
      window.location.href = `/${lang}`;
    } else {
      toast.error(error?.message || error?.data?.message || "حدث خطأ ما");
    }
    return null;
  }

  // In production, throwing inside a Server Component replaces the page with
  // Next.js' generic error screen. Log the error and let the caller render
  // safe fallback data instead.
  console.error("Server action API error", error);
  return null;
};
