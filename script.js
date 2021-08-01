Hooks.on('renderActorSheet', removeTitleBarButtonText);

function removeTitleBarButtonText(app, html, data) {
	// Get the actor sheet title bar
	let titleBarElement = html.closest('.app').find('.window-title').parent();
	
	// Loop through the <a> tags in the title bar
	titleBarElement.children("a").each(function () {
		// If it has an icon tag (all the ones in my game are inside <i> tags, but apparently some are in <span> tags also)
		if (this.innerHTML.includes('>'))
		{
			// Get the text without the <i> tags
			let buttonName = this.innerHTML.split('>').pop();
			
			// Remove the text from the button
			this.innerHTML = this.innerHTML.replace(buttonName, '');
			
			// Set it as the title (hover text)
			this.title = buttonName;
		};
	});
};
