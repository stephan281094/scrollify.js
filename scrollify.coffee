disable = (parentElement) ->
    $(parentElement).css({"overflow-y": "hidden"});

enable = (parentElement) ->
    $(parentElement).css({"overflow-y": "scroll"});

$.fn.scrollify = (parentElement = "body") ->
    $(@).hover () ->
        if $(@).get(0).scrollHeight > $(@).get(0).clientHeight
            disable(parentElement)
    ,() ->
        enable(parentElement)
