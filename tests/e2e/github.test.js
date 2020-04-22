describe("Github Click", () => {
  beforeAll(async () => {
    await page.goto("https://github.com/ginavasiloff");
  });

  it("should be titled", async () => {
    const expected = "ginavasiloff (Gina)";
    await expect(page.title()).resolves.toMatch(expected);
  });

  it("should let us see a repo", async () => {
    const [repoLink] = await page.$x("//a[contains(., 'Repositories')]");
    await repoLink.click();
    await page.waitFor(500);
    const reposTitle = "ginavasiloff (Gina) / Repositories · GitHub";
    await expect(page.title()).resolves.toMatch(reposTitle);
  });
});
