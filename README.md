# Automation Testing Tool With AI

## What is this repository all about?
As we has already knew about automation testing, the QA engineer have to define their steps into BDD source all the times and sometimes it's kinda waste time a bit because there are several projects didn't have their own test cases, so the automation QA have to define by themselves. 

So for this one, we are thinking about making a system like that, using with AI to generate the test BDD based on the scenario we want to have. It's going to be crazy

## Current things are having so far on this repository

### Date Note

#### April 18th, 2024
Define and separate into 2 folders
* automation-testing-framework:
    * Init automation project - using Typescript as the main programming language, Playwright as the automation framework
    * Define source code structure using POM model
   
* backend-service-to-integrate-with-ai (which going to work on that later to integrate with AI stuffs)

#### May 8th, 2024
So far, our repository will have 3 folder:
* automation-framework: place to practice to use the Playwright framework for other members in the team
* backend-service-to-integrate-with-ai: integrate with AI service and automation framework for BE services to build the tool in future
* playwright-framework-sample: pure playwright round but will remove to use with codeceptjs since it's already support to use with AI

How to work on the automation-framework folder
* Clone the project
* Run command `npm install` to install all of the necessary resoures
* Run command `npm test` to run the whole test project from automation-framework folder