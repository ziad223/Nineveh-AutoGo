import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const generatePaginationItems = (
  currentPage: number,
  totalPages: number
) => {
  // إذا كان إجمالي الصفحات 7 أو أقل، نعرض كل الأرقام
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // إنشاء مصفوفة لعناصر الترقيم
  const items: (number | "ellipsis")[] = [];

  // دائماً نعرض الصفحة الأولى
  items.push(1);

  // إذا كانت الصفحة الحالية قريبة من البداية
  if (currentPage <= 3) {
    items.push(2, 3, 4, "ellipsis");
  }
  // إذا كانت الصفحة الحالية قريبة من النهاية
  else if (currentPage >= totalPages - 2) {
    items.push("ellipsis", totalPages - 3, totalPages - 2, totalPages - 1);
  }
  // إذا كانت الصفحة الحالية في المنتصف
  else {
    items.push(
      "ellipsis",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "ellipsis"
    );
  }

  // دائماً نعرض الصفحة الأخيرة
  items.push(totalPages);

  return items;
};

export const errorsHandling = (
  error: { data: any; status: number } | any,
  lang: string,
  client?: boolean
) => {
  console.log(error, 'from');

  // Get the current pathname including query string
  const currentPath =
    typeof window !== 'undefined'
      ? window.location.pathname + window.location.search
      : '/';

  const encodedCallbackUrl = encodeURIComponent(currentPath);

  if (error.status === 401) {
    console.log(error);
    if (client) {
      window.location.href = `/${lang}/login?callbackUrl=${encodedCallbackUrl}`;
    } else {
      redirect(`/${lang}/login?callbackUrl=${encodedCallbackUrl}`);
    }
  } else {
    if (client) {
      if (
        error.message === 'الرجاء تسجيل الدخول أولاً' ||
        error.message === 'please login first'
      ) {
        window.location.href = `/${lang}/login?callbackUrl=${encodedCallbackUrl}`;
      } else {
        // @ts-ignore
        toast.error(error?.message || error?.data?.message);
      }
    } else {
      throw error;
    }
  }
};

