/**
 * Created by MoldovichWin8.1x64 on 08.10.14.
 */
$( document ).ready(function() {
    //console.log( "theme_classic", theme_classic );
    //console.log( "themes", themes );

    $('#selection_color_bg').change(function() {
        $('.selection_color_example').css('background',($(this).val()));
    });
    $('#selection_color_text').change(function() {
        $('.selection_color_example').css('color',($(this).val()));
    });
    $('#current_found_bg').change(function() {
        $('.current_found_example').css('background',($(this).val()));
    });
    $('#current_found_text').change(function() {
        $('.current_found_example').css('color',($(this).val()));
    });
    $('#save').click(function() {
        save_options();
    });
    $('#ui_themes li').click(function() {
        ChangeTheme($(this));
    });



    //Load current color and theme settings
    LoadSettings();

});

function ChangeTheme(li){
    var banner = li.attr('banner');
    var choosen_theme_name = li.attr('name');
    $('#choosen_theme_banner').css('background','url('+ banner +')no-repeat');
    $('#choosen_theme').val(choosen_theme_name);
}

function LoadSettings(){
    chrome.storage.sync.get({
        selection_color_bg: "selection_color_bg",
        selection_color_text: "selection_color_text",
        current_found_bg: "current_found_bg",
        current_found_text: "current_found_text",
        choosen_theme_name: "choosen_theme_name"
    }, function(items) {
        var selection_color_bg = items.selection_color_bg;
        var selection_color_text = items.selection_color_text;
        var current_found_bg = items.current_found_bg;
        var current_found_text = items.current_found_text;
        var choosen_theme_name = items.choosen_theme_name;

        //apply text highlitning settings
        $('#selection_color_bg').val(selection_color_bg).trigger('change');
        $('#selection_color_text').val(selection_color_text).trigger('change');
        $('#current_found_bg').val(current_found_bg).trigger('change');
        $('#current_found_text').val(current_found_text).trigger('change');

        //apply UI theme banner
        $('#choosen_theme').attr('value',choosen_theme_name);
        var cur_banner = $( "li[name='"+choosen_theme_name+"']" ).attr('banner');
        $('#choosen_theme_banner').css('background','url('+cur_banner+')no-repeat 100%');


        console.log( "Sucsses LoadSettings " );
    });
}


// Saves options to chrome.storage
function save_options() {
    //Highlitning background color settings

    var selection_color_bg = $('#selection_color_bg').val();
    var selection_color_text = $('#selection_color_text').val();
    var current_found_bg = $('#current_found_bg').val();
    var current_found_text = $('#current_found_text').val();


    //UI theme settings
    var choosen_theme_name = $('#choosen_theme').attr('value');

    //sending data to chrome storage
    chrome.storage.sync.set({
        selection_color_bg: selection_color_bg,
        selection_color_text: selection_color_text,
        current_found_bg: current_found_bg,
        current_found_text: current_found_text,
        choosen_theme_name: choosen_theme_name
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });

    console.log( "Sucsses LoadSettings ");
}


