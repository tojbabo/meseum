import {urls} from "@/urls"
export async function getTodayCount() {
  try {
    const response = await fetch(`${urls.apiurl}/api/get/count`, {
      method: "GET",
      credentials: "include"
    });

    if (!response.ok) return null

    
    const data = await response.text();
    return data;
  } catch (error) {} 
}
export async function setEntranceLocation(body: Object) {
  try {
    const response = await fetch(`${urls.apiurl}/api/set`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("API-POST 요청 실패");
    }

    const data = await response.text();

    return data;
  } catch (error) {
  }
}
export async function getEntranceLocation() {
  try {
    const response = await fetch(`${urls.apiurl}/api/get`, {
      method: "GET",
      credentials: "include"
    });

    if (!response.ok) {
      return null
    }

    const data = await response.json();
    return data;
  } catch (error) {
  }
}