export const formatChart = <T extends Record<string, any>>(
  rawData: T[],
  dataKeys: Array<{ key: keyof T; name: string; color?: string }>
) => {
  const categories = rawData.map((item) => item.label);

  const series = dataKeys.map((item) => ({
    name: item.name,
    data: rawData.map((d) => d[item.key]),
    ...(item.color && { color: item.color }),
  }));

  return { categories, series };
};
