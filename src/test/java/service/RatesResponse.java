package service;

/**
 * @author Jyoti Pareek
 Rates Runner POJO class
 */
public class RatesResponse {

    Rates rates;
    private String base;
    private String date;

    public Rates getRates() {
        return rates;
    }

    public RatesResponse setRates(Rates rates) {
        this.rates = rates;
        return this;
    }

    public String getBase() {
        return base;
    }

    public RatesResponse setBase(String base) {
        this.base = base;
        return this;
    }

    public String getDate() {
        return date;
    }

    public RatesResponse setDate(String date) {
        this.date = date;
        return this;
    }
}
