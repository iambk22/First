package org.testr;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
// tags--> for grouping
//plugin--> to generate report(html,json,xml)
//pretty--> write feature file steps in console
//monochrome--> To make readable console,sometimes its not readable ,default value-->False,make it true for readable
//For json and xml we should add folder name and format in location
// For xml--> write junit in plugin
@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Sample.feature",glue="org.stepd",dryRun=false,monochrome=true,
tags= {"@Reg or @Sanity"},plugin= {"pretty","html:C:\\Users\\Rowdy\\eclipse-workspace\\Cucumber\\src\\test\\resources\\Report",
		"json:C:\\Users\\Rowdy\\eclipse-workspace\\Cucumber\\src\\test\\resources\\Report\\rep.json",
		"junit:C:\\Users\\Rowdy\\eclipse-workspace\\Cucumber\\src\\test\\resources\\Report\\rept.xml"})
public class TestRun {

}



//tags= {"@Reg or @Sanity"}