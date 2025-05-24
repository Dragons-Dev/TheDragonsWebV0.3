type Cookie = {
  name: string,
  value: string,
  expires: Date
}

export async function createCookie(name: string, value:string, expires: Date) {
  await fetch('https://26.220.13.21:8000/api/v1/set_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },  //kommunikation über json
    credentials: 'include',  //cookie setzbar
    body: JSON.stringify({name, value, expires })
  });
}

export async function editCookieValue(keks: Cookie, change: string) {
  await fetch('https://26.220.13.21:8000/api/v1/edit_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({name: keks.name,value: change,expires: keks.expires})
  })
}

export async function editCookieExpires(keks: Cookie, change: Date) {
  await fetch('https://26.220.13.21:8000/api/v1/edit_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({name: keks.name,value: keks.value,expires: change})
  })
}

export async function deleteCookie() {
  await fetch('https://26.220.13.21:8000/api/v1/delete_cookie', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({name: keks.name,value: change,expires: keks.expires})
  })
}

export async function logCookie() {
  console.log(await getCookies())
}

async function getCookies() {
  try {
    const cookies = (await (await fetch('https://26.220.13.21:8000/api/v1/get_cookies', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })).json())
    return cookies.data
  } catch (error) {
    console.log(error)
  }

}

export function checkCookie(type: string) {
  const cookies = document.cookie;
  switch (type) {
    case login:
      if(cookies.includes("login")) {

      }
  }
}
