export function formatDate(date: Date, format: string) {
  const map = {
    mm: date.getMonth() + 1 < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear(),
  };

  return format.replace(/mm|dd|yyyy|yy/gi, (matched) => {
    return String(map[matched as keyof typeof map]);
  });
}
