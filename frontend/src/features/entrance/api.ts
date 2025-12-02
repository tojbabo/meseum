export async function fetchExampleData() {
  try {
    const response = await fetch("/api/example", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("API 요청 실패");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 오류:", error);
    throw error;
  }
}