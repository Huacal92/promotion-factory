var tpj=jQuery;		
var revapi490;
tpj(document).ready(function() {
    if(tpj("#rev_slider_490_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_490_1");
    }else{
revapi490 = tpj("#rev_slider_490_1").show().revolution({
sliderType:"hero",
jsFileLocation:"revolution/js/",
sliderLayout:"fullwidth",
dottedOverlay:"none",
delay:9000,
navigation: {
},
responsiveLevels:[1200,900,778,480],
visibilityLevels:[1200,900,778,480],
lazyType:"none",
parallax: {
    type:"mouse",
    origo:"slidercenter",
    speed:4000,
    levels:[2,3,4,5,24,7,12,16,10,50,46,47,48,49,50,55],
    type:"mouse",
},
shadow:0,
spinner:"off",
gridwidth: [1080,992,576,480],
gridheight: [860,760,630,560],
fullwidth: "on",
autoHeight:"on",
disableProgressBar:"on",
hideThumbsOnMobile:"off",
hideSliderAtLimit:0,
hideCaptionAtLimit:0,
hideAllCaptionAtLilmit:0,
debugMode:false,
fallbacks: {
    simplifyAll:"off",
    disableFocusListener:false,
}
});
}
});	/*ready*/