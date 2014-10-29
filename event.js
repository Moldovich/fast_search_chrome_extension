// This function is called onload in the popup code
function getPageDetails(callback) {

        chrome.tabs.executeScript(null, { file: 'content2.js' }, function(result) {
            if (chrome.runtime.lastError) { // or if (!result)
                // Get the error message via chrome.runtime.lastError.message

                return chrome.runtime.lastError.message;
            }
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
            chrome.tabs.executeScript(null, { file: 'content.js' }, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            chrome.tabs.executeScript(null, { file: 'hilitor-yanosh.js' }, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });

            /*chrome.tabs.executeScript(null, {file: 'jquery-ui.js'});*/
        }
    });

var func = function(choosen_theme_name){

    switch(choosen_theme_name) {
        case "classic":
            chrome.tabs.executeScript(null, {file: 'themes/theme_classic.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "yellow":
            //loading theme_yellow.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_yellow.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "metro":
            //loading theme_metro.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_metro.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "blue":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_blue.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "3d":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_3d.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "coral":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_coral.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        default:
            ;
    }



};

var func2 = function(choosen_theme_name){
    switch(choosen_theme_name) {
        case "classic":
            chrome.tabs.executeScript(null, {file: 'themes/theme_classic2.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "yellow":
            //loading theme_yellow.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_yellow2.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "metro":
            //loading theme_metro.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_metro2.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "blue":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_blue2.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "3d":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_3d2.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
            break;
        case "coral":
            //loading theme_blue.js
            chrome.tabs.executeScript(null, {file: 'themes/theme_coral2.js'}, function(result) {
                if (chrome.runtime.lastError) { // or if (!result)
                    // Get the error message via chrome.runtime.lastError.message
                    return chrome.runtime.lastError.message;
                }
            });
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

function copyToClipboard(text) {
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);
}

function copyFromClipboard() {
    var copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = text;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Paste", false, null);
    var text = copyDiv.innerHTML;
    document.body.removeChild(copyDiv);
    return text;
}






















