package service;

import com.google.gson.Gson;
import com.jayway.restassured.response.Response;
import java.util.logging.Logger;
import static com.jayway.restassured.RestAssured.given;

/**
 * @author Jyoti Pareek
 * Service class for calling API and contains business logic
 */
public class Service {

    private static  String  url = "https://api.exchangeratesapi.io/";
    private static Gson gson = new Gson();
    private static Logger logger = Logger.getLogger(Service.class.getName());
    private static Response response;


    //To send get request to the latest of rates API
    public static Response getLatestExchangeRates(String value) {
        String finalUrl = url + value;
        response = given().relaxedHTTPSValidation().get(finalUrl);
        return response;
    }

    //To trasform the response into Rates Response
    public static RatesResponse transformToRatesResponse() {
        RatesResponse ratesResponse;
        if (response.statusCode() != 200) {
            throw new RuntimeException("Application response status code " + response.statusCode() + " and exception as " + response.getBody());
        } else {
            String json = response.body().asString();
            logger.info("Response Json" + json);
            ratesResponse = gson.fromJson(json, RatesResponse.class);
        }
        return ratesResponse;
    }

    //To status code of API response
    public static int validateStatusCode() {
        return response.statusCode();
    }

    //To send get request to the latest of rates API with query param as country code for symbols
    public static Response getLatestExchangeRatesOfCountriesWithSymbols(String countrycodes, String value) {

        logger.info("Sending get request for countries " + countrycodes);
        String finalUrl = url + value;
        logger.info("Sending request to " + finalUrl);
        response = given()
                .queryParam("symbols", countrycodes)
                .get(finalUrl);
        return response;
    }

    //To send get request to the latest of rates API with query param as country code for base
    public static Response getLatestExchangeRatesQuotedAgainstDifferentCurrency(String countrycodes, String value) {
        RatesResponse ratesResponse;
        logger.info("Sending get request comparision against country: " + countrycodes);
        String finalUrl = url + value;
        response = given()
                .queryParam("base", countrycodes)
                .get(finalUrl);
        return response;
    }

    //To send get request to the latest of rates API with query param as country code for base and symbol
    public static Response getLatestExchangeRatesWithBaseAndSymbols(String base, String symbols, String value) {
        RatesResponse ratesResponse;
        logger.info("Sending request to get rates with base " + base + " and details of " + symbols);
        String finalUrl = url + value;
        response = given()
                .queryParam("base", base)
                .queryParam("symbols", symbols)
                .get(finalUrl);
        return response;
    }

}
