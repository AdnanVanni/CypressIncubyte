import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import login from '../../PageObjects/Login';


const loginPage= new login()
Given('I am in login page',  () => {
    loginPage.goto()
   
  })

When ('I enter valid username and password', () => {
 loginPage.fillUsernamePassword()
  })

  When ('I click on login button', () => {
    
     loginPage.loginbuttonclick()
    })

  Then('I should be logged in and redirected to the logedin Home page', () => {
   loginPage.assertHomePage()
})
  
  
  