var dashboardX;
var key;
function start()
{
    require(["https://174.142.115.228/NafsiTest/iframeResizer.min.js"], function (ok) {
        $('iframe').iFrameResize({
            log: false,                  // Enable console logging
            enablePublicMethods: true,                  // Enable methods within iframe hosted page
            enableInPageLinks: true,
            resizedCallback: function (messageData) {

            },
            messageCallback: function (messageData) {

                statusMessage(messageData.message.Message, { keepMessage: messageData.message.isPerminant, zIndex: 1001, showFast: true, type: messageData.message.Type });
            },
            closedCallback: function (id) { // Callback fn when iFrame is closed					
            }
        });
    });
}

function sthdgdghsdfgh(v1,v2,v3,v4,v5,v6)
{
    key = v1;
}

function init()
{
    $("iframe").attr("width", "100%");
    $("iframe").attr("scrolling", "no");
    var theme = "default";
    if ($("#primary-css").attr("href").indexOf("theme=dark") > -1) {
        theme = "dark";
    }
    $("iframe").attr("src", "https://174.142.115.228/NafsiAdmin/?theme=" + theme + "&user=" + key);    
}

function statusMessage(msg, config)
{
    if ($status) $status.stop().hide();

    var $target = $("body");

    if (!$status) {
        $status = $("<div class='status-message'>").append($("<span class='status-inner-message'>")).appendTo($target);
    }

    $status.find(".status-inner-message").html(msg);
    $status.css({
        left: ($target.width() / 2) - ($status.width() / 2),
        'z-index': (config && config.zIndex ? config.zIndex : "")
    });

    if (config && config.type) {
        if (config.type === "error")
        {
            $status.css("background-color", "#ffe0d9");
            $status.css("color", "#ef470a");
            $status.css("border-color", "#ffb7a8");           
        }
        else if (config.type === "success") {
           
            $status.css("background-color", "#eaf7ec");
            $status.css("color", "#349946");
            $status.css("border-color", "#c3e8ca");
        }
        else if (config.type === "warning")
        {

            $status.css("background-color", "#fff4d9");
            $status.css("color", "#0487c4");
            $status.css("border-color", "#fff0c8");

        }
        else if (config.type === "info") {
            $status.css("background-color", "#e5f5fa");
            $status.css("color", "#0487c4");
            $status.css("border-color", "#b7e1f0");

        }
        else {

            $status.css("background-color", "#D3EAB0");
            $status.css("color", "#2F3D19");
            $status.css("border-color", "#80A14E");

        }
    }
    else {

        $status.css("background-color", "#D3EAB0");
        $status.css("color", "#2F3D19");
        $status.css("border-color", "#80A14E");
    }

    if (config && config.showFast) {
        $status.css({
            top: "-6px",
            opacity: 1
        }).show();
    } else {
        $status.css({
            top: "-30px",
            opacity: 0
        }).show().animate({ top: "+=24px", opacity: 1 }, 500);
    }

    if (!(config && config.keepMessage)) hideStatus();
}

PubSub.subscribe("theme_change", function (evtid, args)
{
    init();
});

