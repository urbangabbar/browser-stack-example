/// <reference types="cypress" />

import { HomePage } from "../pages/home"
import { SignIN } from "../pages/signin";

describe('SignIn Signout flow', () => {
  it('test basic demouser signin', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.signIn()

    const newSigninPage = new SignIN();
    newSigninPage.login("demouser");
  })

  it('test basic signout', () => {
    const homePage = new HomePage();
    homePage.visit();
    homePage.signIn()

    const newSigninPage = new SignIN();
    newSigninPage.login("demouser");
    homePage.logout();
  })

  // it('test basic fav_user signin', () => {
  //   const homePage = new HomePage();
  //   homePage.visit();
  //   homePage.signIn()

  //   const newSigninPage = new SignIN();
  //   newSigninPage.login("fav_user");
  // })

  // it('test basic fav_user signin', () => {
  //   const homePage = new HomePage();
  //   homePage.visit();
  //   homePage.signIn()

  //   const newSigninPage = new SignIN();
  //   newSigninPage.login("existing_orders_user");
  // })
})