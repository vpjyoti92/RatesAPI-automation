$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RatesTest.feature");
formatter.feature({
  "line": 1,
  "name": "Testing RATES APIs",
  "description": "To test rates API which is a free service for current and historical foreign exchange rates",
  "id": "testing-rates-apis",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 30,
  "name": "Past Foreign Exchange rates",
  "description": "",
  "id": "testing-rates-apis;past-foreign-exchange-rates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user send request to the api to get \"2010-01-12\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "validate status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "validate that INR with EUR is \"66.21\" dated \"2010-01-12\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "validate the data is of \"2010-01-12\" date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2010-01-12",
      "offset": 37
    }
  ],
  "location": "RatesStepDefinition.user_send_get_request_to_the_api(String)"
});
formatter.result({
  "duration": 2520171600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 2842900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "66.21",
      "offset": 31
    },
    {
      "val": "2010-01-12",
      "offset": 45
    }
  ],
  "location": "RatesStepDefinition.iValidateThatINRWithEURIsDated(String,String)"
});
formatter.result({
  "duration": 24018000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010-01-12",
      "offset": 25
    }
  ],
  "location": "RatesStepDefinition.iValidateTheDataIsOfLatestDate(String)"
});
formatter.result({
  "duration": 53500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Past Foreign Exchange Rates with Symbols",
  "description": "",
  "id": "testing-rates-apis;past-foreign-exchange-rates-with-symbols",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "user send request with \"USD,INR,GBP\" to get \"2010-01-12\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "validate status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "validate that rates displayed are of \"USD,INR,GBP\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "validate the data is of \"2010-01-12\" date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "USD,INR,GBP",
      "offset": 24
    },
    {
      "val": "2010-01-12",
      "offset": 45
    }
  ],
  "location": "RatesStepDefinition.userSendGetRequestToTheApiWith(String,String)"
});
formatter.result({
  "duration": 148916700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 218000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD,INR,GBP",
      "offset": 38
    }
  ],
  "location": "RatesStepDefinition.iValidateThatRatesDisplayedAreOf(String)"
});
formatter.result({
  "duration": 284935600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010-01-12",
      "offset": 25
    }
  ],
  "location": "RatesStepDefinition.iValidateTheDataIsOfLatestDate(String)"
});
formatter.result({
  "duration": 70500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Past Foreign Exchange Rates with Base",
  "description": "",
  "id": "testing-rates-apis;past-foreign-exchange-rates-with-base",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "wanted to quote against a \"INR\" currency to get \"2010-01-12\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "validate status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "validate that rates displayed are quoted wrt \"INR\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "validate the data is of \"2010-01-12\" date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 27
    },
    {
      "val": "2010-01-12",
      "offset": 49
    }
  ],
  "location": "RatesStepDefinition.wantedToQuoteAgainstACurrency(String,String)"
});
formatter.result({
  "duration": 132939800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 212600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 46
    }
  ],
  "location": "RatesStepDefinition.validateThatRatesDisplayedAreQuotedWrt(String)"
});
formatter.result({
  "duration": 5091500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010-01-12",
      "offset": 25
    }
  ],
  "location": "RatesStepDefinition.iValidateTheDataIsOfLatestDate(String)"
});
formatter.result({
  "duration": 115700,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Past Foreign Exchange Rates with Symbols and Base",
  "description": "",
  "id": "testing-rates-apis;past-foreign-exchange-rates-with-symbols-and-base",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "wanted to quote against a \"INR\" currency with details of \"USD,GBP\" to get \"2010-01-12\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "validate status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "validate that rates displayed are quoted wrt \"INR\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "validate that rates displayed are of \"USD,GBP\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "validate the data is of \"2010-01-12\" date",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 27
    },
    {
      "val": "USD,GBP",
      "offset": 58
    },
    {
      "val": "2010-01-12",
      "offset": 75
    }
  ],
  "location": "RatesStepDefinition.wantedToQuoteAgainstACurrencyWith(String,String,String)"
});
formatter.result({
  "duration": 164942300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 171100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INR",
      "offset": 46
    }
  ],
  "location": "RatesStepDefinition.validateThatRatesDisplayedAreQuotedWrt(String)"
});
formatter.result({
  "duration": 1218900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD,GBP",
      "offset": 38
    }
  ],
  "location": "RatesStepDefinition.iValidateThatRatesDisplayedAreOf(String)"
});
formatter.result({
  "duration": 5432200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010-01-12",
      "offset": 25
    }
  ],
  "location": "RatesStepDefinition.iValidateTheDataIsOfLatestDate(String)"
});
formatter.result({
  "duration": 67800,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Negative Scenario for Past Foreign Exchange Rates with invalid dates",
  "description": "",
  "id": "testing-rates-apis;negative-scenario-for-past-foreign-exchange-rates-with-invalid-dates",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "user send request with \"USD,INR,GBP\" to get \"2010-13-13\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "validate status code returned is 400",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "USD,INR,GBP",
      "offset": 24
    },
    {
      "val": "2010-13-13",
      "offset": 45
    }
  ],
  "location": "RatesStepDefinition.userSendGetRequestToTheApiWith(String,String)"
});
formatter.result({
  "duration": 412389700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 151200,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Negative Scenario for Past Foreign Exchange Rates with invalid country code",
  "description": "",
  "id": "testing-rates-apis;negative-scenario-for-past-foreign-exchange-rates-with-invalid-country-code",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "user send request with \"YYY\" to get \"2010-13-13\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "validate status code returned is 400",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "YYY",
      "offset": 24
    },
    {
      "val": "2010-13-13",
      "offset": 37
    }
  ],
  "location": "RatesStepDefinition.userSendGetRequestToTheApiWith(String,String)"
});
formatter.result({
  "duration": 2333964800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 234900,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Negative Scenario for Past Foreign Exchange Rates with leap year date",
  "description": "",
  "id": "testing-rates-apis;negative-scenario-for-past-foreign-exchange-rates-with-leap-year-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 73,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "user send request with \"USD,INR,GBP\" to get \"2017-02-29\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "validate status code returned is 400",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "USD,INR,GBP",
      "offset": 24
    },
    {
      "val": "2017-02-29",
      "offset": 45
    }
  ],
  "location": "RatesStepDefinition.userSendGetRequestToTheApiWith(String,String)"
});
formatter.result({
  "duration": 504145700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 192900,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Negative Scenario for Past Foreign Exchange Rates with future date",
  "description": "",
  "id": "testing-rates-apis;negative-scenario-for-past-foreign-exchange-rates-with-future-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 78,
      "name": "@PastEXR"
    }
  ]
});
formatter.step({
  "line": 80,
  "name": "user send request with \"USD,INR,GBP\" to get \"2021-01-29\" rates",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "validate status code returned is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "validate that INR with EUR is \"82.927\" dated \"2020-05-26\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "USD,INR,GBP",
      "offset": 24
    },
    {
      "val": "2021-01-29",
      "offset": 45
    }
  ],
  "location": "RatesStepDefinition.userSendGetRequestToTheApiWith(String,String)"
});
formatter.result({
  "duration": 158612700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "RatesStepDefinition.validateStatusCodeReturnedIs(int)"
});
formatter.result({
  "duration": 256500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "82.927",
      "offset": 31
    },
    {
      "val": "2020-05-26",
      "offset": 46
    }
  ],
  "location": "RatesStepDefinition.iValidateThatINRWithEURIsDated(String,String)"
});
formatter.result({
  "duration": 2652800,
  "status": "passed"
});
});