class LoginPage {
    public emailField: string = "//input[@id='email']";
    public passwordField: string = "//input[@id='password']";
    public signInButton: string = "//button[@type='submit']";
}

export const loginPage: LoginPage = new LoginPage();
