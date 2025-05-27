type Cookie = {
  name: string,
  value: string,
  expires: Date
}

export async function createCookie(name: string, value:string, expires: Date) {
  await fetch('https://127.0.0.1:8000/api/v1/set_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  //kommunikation über json
    credentials: 'include',  //cookie setzbar
    body: JSON.stringify({name, value, expires })
  });
}

export async function editCookieValue(keks: string, change: string) {
  await fetch('https://127.0.0.1:8000/api/v1/edit_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({name: keks,value: change,})
  })
}

export async function editCookieExpires(keks: string, change: Date) {
  await fetch('https://127.0.0.1:8000/api/v1/edit_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({name: keks, expires: change})
  })
}

export async function deleteCookie(keks: string) {
  await fetch('https://127.0.0.1:8000/api/v1/delete_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({name: keks})
  })
}

export async function logCookie() {
  console.log(await getCookies())
}

async function getCookies() {
  try {
    const cookies = (await (await fetch('https://127.0.0.1:8000/api/v1/get_cookies', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })).json())
    return cookies.data
  } catch (error) {
    console.log(error)
  }
}

export async function checkCookie(keks: string) {
  const cookies = Object.entries(await getCookies());
  switch (keks) {
    case "session":
      try {
        const value = cookies.find(([key, val]) => key === "session")?.[1];
        console.log("moin")
        return value != undefined;
      } catch (exception) {
        console.log(exception)
        return
      }
  }
}

