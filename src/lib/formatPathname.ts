export const formatPathnameToTitle = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];

  return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
};
