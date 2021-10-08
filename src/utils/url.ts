import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
import { useMemo } from "react";
import { cleanObj } from "utils";

export const useUrlSearchParam = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParam] = useSearchParams();
  return [
    useMemo(
      () =>
        keys.reduce((prev, key) => {
          return { ...prev, [key]: searchParams.get(key) || "" };
        }, {} as { [key in T]: string }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [searchParams]
    ),
    (params: Partial<{ [key in T]: unknown }>) => {
      const o = cleanObj({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParam(o);
    },
  ] as const;
};
