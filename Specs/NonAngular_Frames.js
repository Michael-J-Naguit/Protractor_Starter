describe('Protractor Frames handling',function()
{  
	it('Switch to Frames',function()
	{
		//non-angular site
		browser.waitForAngularEnabled(false);
		//maximize window
		browser.driver.manage().window().maximize();
		browser.get("http://qaclickacademy.com/practice.php");
		//switch focus to iframe
		browser.switchTo().frame("courses-iframe");
		//get and display sign_in text
		element(by.css("a[href*='sign_in']")).getText().then(function(text)
		{
			console.log(text);
		})
	})
})