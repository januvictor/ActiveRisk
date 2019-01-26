package Bind;

import com.sun.org.apache.xpath.internal.operations.Bool;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.security.sasl.SaslServer;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;


public class ActiveSteps extends Base {

    private Base Base;

    public ActiveSteps(Base base) {
        this.Base = base;
    }

    WebElement element;
    List<WebElement> elements = null;
    Boolean ready;
    WebDriverWait wait;
    String Parent_Url = "https://www.sword-activerisk.com/";


    @Given("^The URL in QA Test Environment$")
    public void theURLInQATestEnvironment() {
        Base.driver.get(Parent_Url);
    }

    @When("^Search for the string \"([^\"]*)\"$")
    public void searchForTheString(String Search_Term) throws Throwable {
        try {
            PageFactory.initElements(Base.driver, this);
            SearchBox.sendKeys(Search_Term);
            SearchBox.submit();
            wait = new WebDriverWait(Base.driver, 30);
            elements = SearchResults.findElements(By.tagName("a"));
            wait.until(ExpectedConditions.visibilityOfAllElements(elements));
        } catch (Exception Ex) {
            Ex.printStackTrace();
        }
    }

    @Then("^check the links work fine and pages loaded properly$")
    public void checkTheLinksWorkFineAndPagesLoadedProperly() {
        if (elements.size() > 1) {
            System.out.println("There are " + elements.size() + " links found");
            for (WebElement element : elements) {
                element.click();

                //Child window link works fine
                ArrayList<String> win_counts = new ArrayList<String>(Base.driver.getWindowHandles());
                String Child_Window_Url = Base.driver.switchTo().window(win_counts.get(1)).getCurrentUrl();
                Assert.assertNotEquals(Parent_Url,Child_Window_Url);

                //Test Page Loaded Correctly

                ready=((JavascriptExecutor) Base.driver).executeScript("return document.readyState").equals("loading");
                Assert.assertEquals(ready,true);
                Base.driver.close();
                Base.driver.switchTo().window(win_counts.get(0));
            }
        } else {
            System.out.println("There is no additional links [except homepage" + elements.size() + "] link found");
        }
    }
}