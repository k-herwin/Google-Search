# Google-Search

AdministrationThe test automation part is on the master branch.
I used Selenium technology coupled with protractor, an end2end test framework for angularJs.
SetUp
-npm install -g protractor

This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.
The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:
-webdriver-manager update

Now start up a server with:
-webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs. 
Your Protractor test will send requests to this server to control a local browser. 
You can see information about the status of the server at http://localhost:4444/wd/hub.
Select chrome. Make sure it is the rigth chrome version

Open a new terminal in the rigth folder, Then run: 
-protractor conf.js

For more information, refer to: https://www.protractortest.org/#/

Test Case
For the test Case part, I used the Gherkin


