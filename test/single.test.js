jest.setTimeout(30000);
const baseURL = process.env.TEST_BASE_URL || "http://localhost:3000";

const msgs = [];
// Show logs from the page inside labeled container.
const onPageConsole = (msg) => {
  console.log(
    `<LOG::page console.${msg.type()}>${msg.text().replace(/\n/g, "<:LF:>")}`
  );
  msgs.push(msg.text());
};


beforeEach(async () => {
  page.on("console", onPageConsole);
  page.on("pageerror", (err) => console.log(err));
  await page.goto(baseURL, { waitUntil: "load" });
});

describe("US-03: startGame() and gameOver()", () => {
  it("returns 'game stopped' if time = 0 // gameOver() function", async () => {
    const gameOver = await page.evaluate(() => {
      window.setDuration(0);
      return window.gameOver();
    });
    expect(gameOver).toContain("game stopped");
  });
});

describe("US-05: startTimer() and updateTimer()", () => {
  it("should update timer every 1000 milliseconds ", async () => {
    const startGame = await page.evaluate(() => {
      window.startGame();
    });
    await page.waitForTimeout(1000);
    const time = await page.evaluate(() => {
      console.log(document.querySelector("#timer").innerHTML);
      return document.querySelector("#timer").innerHTML;
    });
    expect(Number(time)).toBeGreaterThan(0);
  });
});
