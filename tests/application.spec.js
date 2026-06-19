

const {test,expect}=require('@playwright/test');
const Login=require("../pages/Login");

/**test("firest test",async function ({page}){
 expect(12).toBe(12)
})

test.skip("second test",async function ({page}){
 expect(120).toBe(112)
})
test.only("third test",async function ({page}){
 expect("Muskan g").toContain("g")
})
test("forth test",async function ({page}){
 expect(false).toBeFalsy()
})
test("fifth test",async function ({page}){
 expect(true).toBeTruthy()
})
test("sixth test",async function ({page}){
 expect("Muskan Gupta".includes("Gupta")).toBeTruthy()
})**/



test("Login test", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
     const loginpage = new Login(page);
     await loginpage.loginApplication();
});