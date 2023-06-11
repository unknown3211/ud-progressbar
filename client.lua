local usedColor = Config.defaultColor

function progressbar(time, text, color)
    SendNUIMessage({
        action = 'progressbar',
        time = time,
        text = text,
        color = color or usedColor,
    })
end

function stop()
    SendNUIMessage({
        action = 'stop',
    })
end

exports('progressbar', progressbar)