# RatesAPI-Automation project deals with testing rates api
   https://api.ratesapi.io/api/

# Installation and setUp
1. Clone the repository
2. Run mvn clean install
3. Validate the completed installation by running the scenarios

# Running the feature
1. Now run command mvn test - Dcucumber.options="--help" on command prompt. Running this will print all available options.
2. To run the specific tags only, run the command mvn test -Dcucumber.options="--tags @PastEXR" on command prompt
3. In order to change the format of the result, run the command mvn test -Dcucumber.options="--plugin junit:target/cucumber-junit-report.xml" on command prompt

# Reports
1. Once suit runs validate the reports at "H:\RatesAPI-automation\target\cucumber-reports"