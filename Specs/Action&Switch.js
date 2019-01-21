describe('Actions demo',function()
{
	it('Open Posse website',function()
	{
		browser.get("https://posse.com/");
		//send keys
		element(by.model("userInputQuery")).sendKeys("river");
		//moving the mouse into that text box
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();		
		//keyboard arrow
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		//keyboard enter
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
		{
			browser.sleep(2000);
			//validate search result list to have 7 items
			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
			//click on first list item
			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			//click on the link of the first item
			element(by.css("a[ng-href*='London/River Island']")).click().then(function()
			{
				browser.sleep(2000);
			})
		})
	})
})