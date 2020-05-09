OK_STATUS_CODE = 0;
ERR_STATUS_CODE = 1;

function color_name_to_span(colors_json, color_name){

    let hex_color_code = colors_json[color_name];
    if( !hex_color_code )
        return null;

    var span = $('<span></span>');
    span.html(color_name);
    span.css({'color':hex_color_code})
    return span;
}

function append_color_span_to_div(html_div_id, colors_json, color_name){
    let color_name_lower = color_name.toLowerCase();
    let span = color_name_to_span(colors_json, color_name_lower);
    if(span){
        span.appendTo("#"+html_div_id);
        return OK_STATUS_CODE;
    }
    else {
        return ERR_STATUS_CODE;
    }
}



function append_white_space_to_div(html_div_id){
    let white_space = $('<span> </span>');
    white_space.appendTo('#'+html_div_id);
}

function text_to_colors_div(html_div_id, colors_json, text){
    console.log("processing text");

    let text_formatted = text.replace(/[^a-zA-Z ]/g, " ");
    let words = text_formatted.split(" ");
    console.log(words);
    var i = 0;
    for( i = 0; i < words.length; i++ ){
        append_color_span_to_div(html_div_id, colors_json, words[i]);
        append_white_space_to_div(html_div_id);
    }
}