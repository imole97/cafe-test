import { useCallback } from "react";
import { useRouter } from "next/router";

const useGoBack = (defaultPath = "/") => {
  const router = useRouter();

  const goBack = useCallback(() => {
    const prevPath = window?.sessionStorage?.getItem("prevPath");

    const pathname = window?.location?.pathname;

    if (prevPath === pathname) {
      router.push(defaultPath);
    } else {
      router.back();
    }
  }, [router, defaultPath]);

  const monitorPath = useCallback(() => {
    const storage = window?.sessionStorage;
    if (!storage) return;

    const prevPath = storage.getItem("currentPath");

    storage.setItem("prevPath", prevPath ?? "/dashboard");

    const pathname = router?.asPath ?? window?.location?.pathname;

    storage.setItem("currentPath", pathname);
  }, [router]);

  return { goBack, monitorPath };
};

export default useGoBack;
