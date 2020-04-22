describe("Click Counter", () => {
  beforeAll(async () => {
    await page.goto("https://www.packsize.com/");
  });

  it("should be titled", async () => {
    const expected = "Home - Packsize";
    await expect(page.title()).resolves.toMatch(expected);
  });

  it("should let us get a demo", async () => {
    await page.evaluate(() =>
      document.querySelector(".get-a-demo-link").click()
    );
    const form = await page.evaluate(() => document.querySelector("form"));
    expect(form).toBeDefined();
  });
});
