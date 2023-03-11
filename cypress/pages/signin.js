export class SignIN {
  elements = {
    userNameField: () => cy.contains("Select Username"),
    userPasswordField: () => cy.get("#password"),
    userName: (text)=> cy.get("#react-select-2-group-0-heading").next(),
    userPassword: ()=> cy.get("#react-select-3-option-0-0"),
    loginButton: ()=> cy.get("#login-btn")
  };

  populateUsername(userName){
    this.elements.userNameField().type(userName);
    this.elements.userName(userName).click()
  }

  populatePassword(){
    this.elements.userPasswordField().click();
    this.elements.userPassword().click({force: true})
  }

  clickLogin(){
    this.elements.loginButton().click()
  }

  login(userName){
    this.populateUsername(userName);
    this.populatePassword()
    this.clickLogin()
  }
}
