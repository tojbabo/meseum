import {urls} from "@/urls"
export async function fetchExampleData(body: Object) {
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