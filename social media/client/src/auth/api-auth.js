const ROOT_URL = process.env.API_URI || 'http://localhost:8000';
const signin = async (user) => {
  try {
    let response = await fetch(`${ROOT_URL}/auth/signin/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(user)
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const signout = async () => {
  try {
    let response = await fetch(`${ROOT_URL}/auth/signout/`, { method: 'GET' })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

export {
  signin,
  signout
}
