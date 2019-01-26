package Bind;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Base {
    public WebDriver driver;

    @FindBy(id="s")
    WebElement SearchBox;

    @FindBy(id = "internal-page-content")
    WebElement SearchResults;

}
