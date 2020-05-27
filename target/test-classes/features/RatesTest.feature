Feature: Testing RATES APIs
  To test rates API which is a free service for current and historical foreign exchange rates

  @LatestEXR
  Scenario: Latest Foreign Exchange rates
    When user send request to the api to get "latest" rates
    Then validate status code returned is 200
    Then validate that INR with EUR is "82.927" dated "2020-05-26"

  @LatestEXR
  Scenario: Latest Foreign Exchange Rates with Symbols
    When user send request with "USD,INR,GBP" to get "latest" rates
    Then validate status code returned is 200
    Then validate that rates displayed are of "USD,INR,GBP"

  @LatestEXR
  Scenario: Latest Foreign Exchange Rates with Base
    When wanted to quote against a "INR" currency to get "latest" rates
    Then validate status code returned is 200
    Then validate that rates displayed are quoted wrt "INR"

  @LatestEXR
  Scenario: Latest Foreign Exchange Rates with Symbols and Base
    When wanted to quote against a "INR" currency with details of "USD,GBP" to get "latest" rates
    Then validate status code returned is 200
    Then validate that rates displayed are quoted wrt "INR"
    Then validate that rates displayed are of "USD,GBP"

  @PastEXR
  Scenario: Past Foreign Exchange rates
    When user send request to the api to get "2010-01-12" rates
    Then validate status code returned is 200
    Then validate that INR with EUR is "66.21" dated "2010-01-12"
    Then validate the data is of "2010-01-12" date

  @PastEXR
  Scenario: Past Foreign Exchange Rates with Symbols
    When user send request with "USD,INR,GBP" to get "2010-01-12" rates
    Then validate status code returned is 200
    Then validate that rates displayed are of "USD,INR,GBP"
    Then validate the data is of "2010-01-12" date

  @PastEXR
  Scenario: Past Foreign Exchange Rates with Base
    When wanted to quote against a "INR" currency to get "2010-01-12" rates
    Then validate status code returned is 200
    Then validate that rates displayed are quoted wrt "INR"
    Then validate the data is of "2010-01-12" date

  @PastEXR
  Scenario: Past Foreign Exchange Rates with Symbols and Base
    When wanted to quote against a "INR" currency with details of "USD,GBP" to get "2010-01-12" rates
    Then validate status code returned is 200
    Then validate that rates displayed are quoted wrt "INR"
    Then validate that rates displayed are of "USD,GBP"
    Then validate the data is of "2010-01-12" date

  @LatestEXR
  Scenario: Negative Scenario for Foreign Exchange Rates with invalid country code
    When user send request with "URR" to get "latest" rates
    Then validate status code returned is 400

  @PastEXR
  Scenario:  Negative Scenario for Past Foreign Exchange Rates with invalid dates
    When user send request with "USD,INR,GBP" to get "2010-13-13" rates
    Then validate status code returned is 400

  @PastEXR
  Scenario:  Negative Scenario for Past Foreign Exchange Rates with invalid country code
    When user send request with "YYY" to get "2010-13-13" rates
    Then validate status code returned is 400

  @PastEXR
  Scenario:  Negative Scenario for Past Foreign Exchange Rates with leap year date
    When user send request with "USD,INR,GBP" to get "2017-02-29" rates
    Then validate status code returned is 400

  @PastEXR
  Scenario:  Negative Scenario for Past Foreign Exchange Rates with future date
    When user send request with "USD,INR,GBP" to get "2021-01-29" rates
    Then validate status code returned is 200
    Then validate that INR with EUR is "82.927" dated "2020-05-26"
