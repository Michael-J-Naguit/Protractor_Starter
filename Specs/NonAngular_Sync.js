describe('Synchronization for Non-Angular sites',function()
{
	it('Wait for element to become invisible',function()
	{
		//non-angular site
		browser.waitForAngularEnabled(false);
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		
		element(by.css("a[href*='loadAjax']")).click();
		//Reference: https://www.protractortest.org/#/api?view=ProtractorExpectedConditions
		var EC = protractor.ExpectedConditions;
		
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);
		element(by.id("results")).getText().then(function(text)
		{
			console.log(text);
		})
		
	})
})