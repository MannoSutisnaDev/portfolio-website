export function debounce<T extends Function>(cb: T, wait = 100) {
  let h: NodeJS.Timeout;
  let callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<any>callable);
}
