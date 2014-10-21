// This function is called onload in the popup code
function getPageDetails(callback) {
    // Inject the content script into the current page
    /*var views = chrome.extension.getViews({type: "popup"});

        //console.log('views0 -', views[0]);*/


    //if(!$("div").is(".popup2_ewq532_fast-search.ewq532_fast-search.ewq532_fast-search"))
        chrome.tabs.executeScript(null, { file: 'content2.js' });
    /*else
        $('.popup2_ewq532_fast-search.ewq532_fast-search').show('slow');*/
    // Perform the callback when a message is received from the content script
chrome.runtime.onMessage.addListener(function (message) {
        $('.popup2_ewq532_fast-search').show();
        // Call the callback function
        callback(message);
    });
};


chrome.commands.onCommand.addListener(function (command) {
    //console.log('Command:', command);
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function (response) {
            //console.log(response.farewell);

        });
    });
});

// start our extension on PageLoad
chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        if (changeInfo.status === "complete" && tab.active) {
            chrome.tabs.executeScript(null, { file: 'content.js' });
            chrome.tabs.executeScript(null, { file: 'hilitor-yanosh.js' });

            /*chrome.tabs.executeScript(null, {file: 'jquery-ui.js'});*/
        }
    });

var func = function(choosen_theme_name){
    switch(choosen_theme_name) {
        case "classic":
            chrome.tabs.executeScript(null, {file: 'themes/theme_classic.js'});
            break;
        case "yellow":
            //loading theme_yellow.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_yellow.js'});
            break;
        case "metro":
            //loading theme_metro.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_metro.js'});
            break;
        case "blue":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_blue.js'});
            break;
        case "3d":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_3d.js'});
            break;
        case "coral":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_coral.js'});
            break;
        default:
            ;
    }

};

var func2 = function(choosen_theme_name){
    switch(choosen_theme_name) {
        case "classic":
            chrome.tabs.executeScript(null, {file: 'themes/theme_classic2.js'});
            break;
        case "yellow":
            //loading theme_yellow.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_yellow2.js'});
            break;
        case "metro":
            //loading theme_metro.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_metro2.js'});
            break;
        case "blue":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_blue2.js'});
            break;
        case "3d":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_3d2.js'});
            break;
        case "coral":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_coral2.js'});
            break;
        default:
            ;
    }

};

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "LoadYellowThemeScript") func('yellow');
        if(request.msg == "LoadClassicThemeScript") func('classic');
        if(request.msg == "LoadMetroThemeScript") func('metro');
        if(request.msg == "LoadBlueThemeScript") func('blue');
        if(request.msg == "Load3dThemeScript") func('3d');
        if(request.msg == "LoadCoralThemeScript") func('coral');

        if(request.msg == "LoadYellowTheme2Script") func2('yellow');
        if(request.msg == "LoadClassicTheme2Script") func2('classic');
        if(request.msg == "LoadMetroTheme2Script") func2('metro');
        if(request.msg == "LoadBlueTheme2Script") func2('blue');
        if(request.msg == "Load3dTheme2Script") func2('3d');
        if(request.msg == "LoadCoralTheme2Script") func2('coral');

        if(request.msg == "loadOptionsPage")
        {
            var optionsUrl = chrome.extension.getURL('options.html');

            chrome.tabs.query({url: optionsUrl}, function(tabs) {
                if (tabs.length) {
                    chrome.tabs.update(tabs[0].id, {active: true});
                } else {
                    chrome.tabs.create({url: optionsUrl});
                }
            });
        }

        if(request.msg == "loadExtensionsPage")
        {
            var Url = 'chrome://extensions/';

            chrome.tabs.create({url: Url});
        }

        if(request.msg == "goToMoldovich")
        {
            var Url = 'https://vk.com/moldovich';

            chrome.tabs.create({url: Url});
        }

        if(request.msg == "goToDavidKonikow")
        {
            var Url = 'https://vk.com/id18704721';

            chrome.tabs.create({url: Url});
        }



    }
);

