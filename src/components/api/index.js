const baseUrl = 'https://fitnesstrac-kr.herokuapp.com/api'

  
  export const testAuthentication = async (token) => {
    const url = `${baseUrl}/test/me`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const json = await response.json();
    if (json.success) {
      return json;
    } else {
      alert(`${json.error.message}`)
    }
  }
  
  
  
  export const registerUser = async (userObject) => {
    const url = `${baseUrl}/users/register`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    });
    const json = await response.json();
    if (json.success) {
      return json.data.token;
    } else {
      alert(`${json.error.message}`);
    }
  };
  
  
  export const loginAsUser = async (userObject) => {
    const url = `${baseUrl}/users/login`;
  
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject),
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('access_token', json.data.token);
      return json.data.token;
    } else {
      alert(`${json.error.message}`)
    }
  }
  
  
  
  export const getUserData = async () => {
    const url = `${baseUrl}/users/me`;
  
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("access_token")}`
      }
    });
    const json = await response.json();
    if (json.success) {
      return json.data.messages;
    } else {
      alert(`${json.error.message}`)
    }
  }
  
  
  
  
  
  
  
  
  