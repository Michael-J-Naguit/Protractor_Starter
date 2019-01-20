describe('Protractor Element Demo',function() 
{  
	function Calc(a, b, operator)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element.all(by.tagName("option")).each(function(item)
		{
			item.getAttribute("value").then(function(values)
			{
				if (values == operator)
					item.click();
			})
		})
		
		element(by.id("gobutton")).click();
	}

	it('Locators',function()
	{
		//browser.waitForAngularEnabled(false); /*Used for non-angular sites*/
		browser.get('http://juliemr.github.io/protractor-demo/');
	
		Calc(2, 3, "ADDITION");
		Calc(4, 3, "MULTIPLICATION");
	
		element.all(by.repeater("result in memory")).each(function(item)
		{
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
				console.log(text);
			})
		})
    })
})