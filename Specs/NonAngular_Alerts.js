describe('Protractor Alert handling',function()
{  
	it('Dismiss Alert',function()
	{
		browser.waitForAngularEnabled(false);
		browser.get("http://qaclickacademy.com/practice.php");
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().dismiss().then(function()
		{
			browser.sleep(5000);
		})
	})
})