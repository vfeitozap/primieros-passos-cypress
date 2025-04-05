import { access } from "graceful-fs"

class LoginPage {

    SelectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            dailogAlert: "[role='alert'] .oxd-alert-content--error",
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithAnyUser(username, password) {
        cy.get(this.SelectorsList().usernameField).type(username)
        cy.get(this.SelectorsList().passwordField).type(password)
        cy.get(this.SelectorsList().loginButton).click()
    } 
    wrongCredentials() {
        cy.get(this.SelectorsList().dailogAlert)
    }
}  
export default LoginPage