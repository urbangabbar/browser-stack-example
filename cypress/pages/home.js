export class HomePage {
  elements = {
    signInButton: () => cy.get("#signin"),
    logOutBtn : () => cy.get("#logout")
  };
  url= "https://bstackdemo.com/";

  visit() {
    cy.visit(this.url);
  }

  signIn(){
    this.elements.signInButton().click()
  }

  logout(){
    this.elements.logOutBtn().click()
  }
}