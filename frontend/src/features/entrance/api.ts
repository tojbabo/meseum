const API_URL = 'http://localhost:3000';
export async function fetchExampleData(body: any) {
  try {
    const response = await fetch(`${API_URL}/api/set`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("API-POST 요청 실패");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 오류:", error);
    throw error;
  }
}