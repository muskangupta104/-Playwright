class Login {
    constructor(page) {
        this.page = page;
        this.username = "#username";
        this.password = "#password";
        this.loginbutton = "#submit";
    }

    async loginApplication() {
        await this.page.fill(this.username, "student");
        await this.page.fill(this.password, "Password123");
        await this.page.click(this.loginbutton);
    }
}

module.exports = Login;