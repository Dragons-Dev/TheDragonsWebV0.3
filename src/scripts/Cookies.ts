export function createCookie(name: string, value:string, expires: Date, secure: boolean = true) {
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax; ${secure ? 'Secure' : ''}`;
}

export function editCookie(keks: string, change: string) {
  createCookie(keks, change, new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), false);
}// TODO: Change secure to true in production!

export function deleteCookie(keks: string) {
  createCookie(keks, '', new Date(0));
}

export function logCookie() {
  console.log(getCookies())
}

export function getCookies(): Record<string, string> {
  return document.cookie
      .split('; ')
      .filter(cookie => cookie.length > 0)
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => {
        acc[key] = decodeURIComponent(value ?? '');
        return acc;
      }, {} as Record<string, string>);
}

export function getCookie(keks: string): string | undefined {
  const cookies = getCookies();
  return cookies[keks];
}

export function checkCookie(keks: string) {
  const cookies = Object.entries(getCookies());
  switch (keks) {
    case "session":
        const value = cookies.find(([key, val]) => key === "session")?.[1];
        return value !== undefined && value !== '';
    default:
      return false
  }
}

