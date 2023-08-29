class ResetPage {
    public emailField: string = "//input[@name='email']";
    public sendResetLinkButton: string = "//button[@type='submit']";
    public successEmailMessage: string = "//div[contains(@class, 'Notification-module__success___C2AqR')]";
}

export const resetPage: ResetPage = new ResetPage();
