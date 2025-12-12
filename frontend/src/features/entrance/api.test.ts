import {getTodayCount} from "@/features/entrance/api"

describe("getTodayCount", () => {
  it("정상 응답이면 문자열을 반환한다", async () => {
    // fetch Mock
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      text: () => Promise.resolve("123"),
    } as any);

    const result = await getTodayCount();
    expect(result).toBe("123");
  });

  it("응답이 ok=false 이면 null 반환", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
    } as any);

    const result = await getTodayCount();
    expect(result).toBe(null);
  });
});
