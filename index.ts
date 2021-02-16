function* range(start: number, end?: number) {
  if (end == null || end == Infinity) for (let i = start; ; i++) yield i;
  if (end == -Infinity) for (let i = start; ; i--) yield i;
  // null end means infinite range
  else {
    if (!end) {
      // falsey (0 or undefined) end means start at 0 and end at start.
      end = start;
      start = 0;
    }
    if (start > end) for (let i = start; i > end; i--) yield i;
    else for (let i = start; i < end; i++) yield i;
  }
}
