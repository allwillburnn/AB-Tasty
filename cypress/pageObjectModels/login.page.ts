class LoginPage {
    public emailField: string = "//input[@id='email']";
    public passwordField: string = "//input[@id='password']";
    public signInButton: string = "//button[@type='submit']";
    public forgotPasswordButton: string = "//a[@class='LoginForm-module__link___oH9Ss']";
}

export const loginPage: LoginPage = new LoginPage();
