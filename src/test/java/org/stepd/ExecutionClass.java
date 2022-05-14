package org.stepd;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ExecutionClass {
	public static WebDriver driver;

	@Given("User Launch facebook web application")
	public void user_Launch_facebook_web_application() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");

	}

	@Then("User verify facebook login page is displayed")
	public void user_verify_facebook_login_page_is_displayed() {
		String text = driver.findElement(By.xpath("//h2[contains(text(),'Facebook')]")).getText();
		boolean loginPage = text.contains("Facebook");
		System.out.println(loginPage);
	}

	@When("User enters valid {string} and valid {string}")
	public void user_enters_valid_and_valid(String string, String string2) {
		driver.findElement(By.id("email")).sendKeys(string);
		driver.findElement(By.id("pass")).sendKeys(string2);

	}

	@When("User Click Login Button")
	public void user_Click_Login_Button() {
		driver.findElement(By.name("login")).click();

	}
	@Then("User verify Home Page is Displayed")
	public void user_verify_Home_Page_is_Displayed() {
		String text = driver.findElement(By.xpath("//span[contains(text(),'mind')]")).getText();
		boolean loginPage = text.contains("mind");
		System.out.println(loginPage);
	}



	@When("User enters invalid {string} and valid {string}")
	public void user_enters_invalid_and_valid(String string, String string2) {
		driver.findElement(By.id("email")).sendKeys(string);
		driver.findElement(By.id("pass")).sendKeys(string2);

	}

	@Then("User verify Error Message is Displayed")
	public void user_verify_Error_Message_is_Displayed() {

	}

	@When("User enters valid {string} and invalid {string}")
	public void user_enters_valid_and_invalid(String string, String string2) {
		driver.findElement(By.id("email")).sendKeys(string);
		driver.findElement(By.id("pass")).sendKeys(string2);

	}

	@When("User enters invalid {string} and invalid {string}")
	public void user_enters_invalid_and_invalid(String string, String string2) {
		driver.findElement(By.id("email")).sendKeys(string);
		driver.findElement(By.id("pass")).sendKeys(string2);

	}

}
