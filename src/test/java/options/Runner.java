package options;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 *
 * @author Jyoti Pareek
 * Main class for cucumber framework execution.
 * Contains plugins, feature file location and step definitions
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/cucumber-report"},
        glue = {"stepdefs"},
        features = {"src/test/resources/features"},
        strict = true, monochrome = true,
        tags = {"@PastEXR"}

)
// Main class
public class Runner {
}
