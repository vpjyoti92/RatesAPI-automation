package stepdefs;

import com.fasterxml.jackson.databind.ObjectMapper;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import service.RatesResponse;
import service.Service;

import java.time.LocalDate;
import java.time.ZoneOffset;

/**
 * @author Jyoti Pareek
 * Step definition.
 */
public class RatesStepDefinition {

    RatesResponse response;

    @When("^user send request to the api to get \"([^\"]*)\" rates$")
    public void user_send_get_request_to_the_api(String value) throws Throwable {
        Service.getLatestExchangeRates(value);
    }


    @Then("^validate that INR with EUR is \"([^\"]*)\" dated \"([^\"]*)\"$")
    public void iValidateThatINRWithEURIsDated(String value, String date) throws Throwable {
        response = Service.transformToRatesResponse();
        String actualDate = response.getDate();
        Float actualValue = response.getRates().getINR();
        Assert.assertTrue(actualDate.equals(date));
        Assert.assertTrue(actualValue.toString().equals(value));
    }

    @Then("^validate the data is of \"([^\"]*)\" date$")
    public void iValidateTheDataIsOfLatestDate(String value) {
        if (value.equals("latest")) {
            String actualDate = response.getDate();
            LocalDate localDate = LocalDate.now(ZoneOffset.UTC);
            System.out.println("Local Date:" + localDate);
            Assert.assertTrue(actualDate.equals(localDate.toString()));
        } else {
            String actualDate = response.getDate();
            Assert.assertTrue(actualDate.equals(value));
        }
    }

    @When("^user send request with \"([^\"]*)\" to get \"([^\"]*)\" rates$")
    public void userSendGetRequestToTheApiWith(String countryCodes, String value) throws Throwable {
        Service.getLatestExchangeRatesOfCountriesWithSymbols(countryCodes, value);
    }

    @Then("^validate that rates displayed are of \"([^\"]*)\"$")
    public void iValidateThatRatesDisplayedAreOf(String countries) throws Throwable {
        response = Service.transformToRatesResponse();
        ObjectMapper mapper = new ObjectMapper();
        String jsonString = mapper.writeValueAsString(response);
        String str[] = countries.split(",");
        for (int i = 0; i <= str.length - 1; i++) {
            Assert.assertTrue(jsonString.contains(str[i].toLowerCase()));
        }
    }

    @When("^wanted to quote against a \"([^\"]*)\" currency to get \"([^\"]*)\" rates$")
    public void wantedToQuoteAgainstACurrency(String countryCodes, String value) throws Throwable {
        Service.getLatestExchangeRatesQuotedAgainstDifferentCurrency(countryCodes, value);
    }

    @Then("^validate that rates displayed are quoted wrt \"([^\"]*)\"$")
    public void validateThatRatesDisplayedAreQuotedWrt(String currency) throws Throwable {
        response = Service.transformToRatesResponse();
        Assert.assertTrue(response.getBase().equals("INR"));
    }

    @When("^wanted to quote against a \"([^\"]*)\" currency with details of \"([^\"]*)\" to get \"([^\"]*)\" rates$")
    public void wantedToQuoteAgainstACurrencyWith(String base, String currency, String value) throws Throwable {
        Service.getLatestExchangeRatesWithBaseAndSymbols(base, currency, value);
    }

    @Then("^validate status code returned is (\\d+)$")
    public void validateStatusCodeReturnedIs(int statusCode) {
        int receivedStatusCode = Service.validateStatusCode();
        Assert.assertTrue(receivedStatusCode == statusCode);
    }

}
