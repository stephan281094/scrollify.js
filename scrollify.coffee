$.fn.scrollify = (parentElement = "body") ->
    $(@).hover () ->
        if $(@).get(0).scrollHeight > $(@).get(0).clientHeight
            $(parentElement).css "overflow-y": "hidden"
    ,() ->
        $(parentElement).css "overflow-y": "scroll"
