gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDPlaneObjects1= [];
gdjs.MenuCode.GDPlaneObjects2= [];
gdjs.MenuCode.GDPlaneObjects3= [];
gdjs.MenuCode.GDBlackRectangleObjects1= [];
gdjs.MenuCode.GDBlackRectangleObjects2= [];
gdjs.MenuCode.GDBlackRectangleObjects3= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGroundObjects3= [];
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRectangle"), gdjs.MenuCode.GDBlackRectangleObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}{for(var i = 0, len = gdjs.MenuCode.GDBlackRectangleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackRectangleObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartObjects2[k] = gdjs.MenuCode.GDStartObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRectangle"), gdjs.MenuCode.GDBlackRectangleObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\sfx_swooshing.wav", 1, false, 80, 0.9);
}{for(var i = 0, len = gdjs.MenuCode.GDBlackRectangleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackRectangleObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "easeInQuad", 1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackRectangle"), gdjs.MenuCode.GDBlackRectangleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBlackRectangleObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBlackRectangleObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBlackRectangleObjects1[k] = gdjs.MenuCode.GDBlackRectangleObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBlackRectangleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.MenuCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGroundObjects1[i].setXOffset(gdjs.MenuCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDPlaneObjects1.length = 0;
gdjs.MenuCode.GDPlaneObjects2.length = 0;
gdjs.MenuCode.GDPlaneObjects3.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects1.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects2.length = 0;
gdjs.MenuCode.GDBlackRectangleObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
