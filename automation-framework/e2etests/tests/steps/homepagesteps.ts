import { Given, When } from "@cucumber/cucumber";

Given(/(.*) is on (.*)/, function (actor: string, page: string) {
    console.log('Home')
});

When(/(.*) at (.*) page/, function (actor: string, page: string) {
    // Step implementation for When User at login page
    console.log('Login')
});