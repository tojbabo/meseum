import {urls} from "@/urls"
export async function setEntranceLocation(body: Object) {
  try {
    const response = await fetch(`${urls.apiurl}/api/set`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      method: "GET"
    });

    if (!response.ok) {
      return null
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
  }
}