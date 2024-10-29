import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import CreateAccount from '../../PageObjects/CreateAccount';

const accpage = new CreateAccount();

Given('I am in signup page', () => {
  
 accpage.goto();
});

When('I enter valid details in fields', () => {
  accpage.filldetails();
});

When('I click on Create Account button', () => {
 accpage.submit();
});

Then('I should be logged in and redirected to Home page', () => {
  accpage.assertHomePage()
});

