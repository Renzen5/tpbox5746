gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDTappyBoxObjects1= [];
gdjs.GameCode.GDTappyBoxObjects2= [];
gdjs.GameCode.GDTappyBoxObjects3= [];
gdjs.GameCode.GDTappyBoxObjects4= [];
gdjs.GameCode.GDTappyBoxObjects5= [];
gdjs.GameCode.GDTopPillarObjects1= [];
gdjs.GameCode.GDTopPillarObjects2= [];
gdjs.GameCode.GDTopPillarObjects3= [];
gdjs.GameCode.GDTopPillarObjects4= [];
gdjs.GameCode.GDTopPillarObjects5= [];
gdjs.GameCode.GDBottomPillarObjects1= [];
gdjs.GameCode.GDBottomPillarObjects2= [];
gdjs.GameCode.GDBottomPillarObjects3= [];
gdjs.GameCode.GDBottomPillarObjects4= [];
gdjs.GameCode.GDBottomPillarObjects5= [];
gdjs.GameCode.GDFinalScoreObjects1= [];
gdjs.GameCode.GDFinalScoreObjects2= [];
gdjs.GameCode.GDFinalScoreObjects3= [];
gdjs.GameCode.GDFinalScoreObjects4= [];
gdjs.GameCode.GDFinalScoreObjects5= [];
gdjs.GameCode.GDCurrentScoreObjects1= [];
gdjs.GameCode.GDCurrentScoreObjects2= [];
gdjs.GameCode.GDCurrentScoreObjects3= [];
gdjs.GameCode.GDCurrentScoreObjects4= [];
gdjs.GameCode.GDCurrentScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDHighScoreChangedObjects1= [];
gdjs.GameCode.GDHighScoreChangedObjects2= [];
gdjs.GameCode.GDHighScoreChangedObjects3= [];
gdjs.GameCode.GDHighScoreChangedObjects4= [];
gdjs.GameCode.GDHighScoreChangedObjects5= [];
gdjs.GameCode.GDRestartButtonObjects1= [];
gdjs.GameCode.GDRestartButtonObjects2= [];
gdjs.GameCode.GDRestartButtonObjects3= [];
gdjs.GameCode.GDRestartButtonObjects4= [];
gdjs.GameCode.GDRestartButtonObjects5= [];
gdjs.GameCode.GDSubmitScoreButtonObjects1= [];
gdjs.GameCode.GDSubmitScoreButtonObjects2= [];
gdjs.GameCode.GDSubmitScoreButtonObjects3= [];
gdjs.GameCode.GDSubmitScoreButtonObjects4= [];
gdjs.GameCode.GDSubmitScoreButtonObjects5= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDFlashObjects5= [];
gdjs.GameCode.GDGameOverLabelObjects1= [];
gdjs.GameCode.GDGameOverLabelObjects2= [];
gdjs.GameCode.GDGameOverLabelObjects3= [];
gdjs.GameCode.GDGameOverLabelObjects4= [];
gdjs.GameCode.GDGameOverLabelObjects5= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDInstructionsObjects5= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDGroundObjects5= [];
gdjs.GameCode.GDCeilingObjects1= [];
gdjs.GameCode.GDCeilingObjects2= [];
gdjs.GameCode.GDCeilingObjects3= [];
gdjs.GameCode.GDCeilingObjects4= [];
gdjs.GameCode.GDCeilingObjects5= [];
gdjs.GameCode.GDBlackRectObjects1= [];
gdjs.GameCode.GDBlackRectObjects2= [];
gdjs.GameCode.GDBlackRectObjects3= [];
gdjs.GameCode.GDBlackRectObjects4= [];
gdjs.GameCode.GDBlackRectObjects5= [];
gdjs.GameCode.GDGameOverBackgroundObjects1= [];
gdjs.GameCode.GDGameOverBackgroundObjects2= [];
gdjs.GameCode.GDGameOverBackgroundObjects3= [];
gdjs.GameCode.GDGameOverBackgroundObjects4= [];
gdjs.GameCode.GDGameOverBackgroundObjects5= [];
gdjs.GameCode.GDPlayerNameInputObjects1= [];
gdjs.GameCode.GDPlayerNameInputObjects2= [];
gdjs.GameCode.GDPlayerNameInputObjects3= [];
gdjs.GameCode.GDPlayerNameInputObjects4= [];
gdjs.GameCode.GDPlayerNameInputObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRect"), gdjs.GameCode.GDBlackRectObjects1);
gdjs.copyArray(runtimeScene.getObjects("HighScoreChanged"), gdjs.GameCode.GDHighScoreChangedObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreChangedObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreChangedObjects1[i].hide();
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Gameover");
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Gameover", 0, 0, 0);
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "SubmitScore", 0, 0, 0);
}{for(var i = 0, len = gdjs.GameCode.GDBlackRectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlackRectObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.25, true);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10415556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.GameCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GamePlaying");
}{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects1[i].activateBehavior("EllipseMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects1[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.GameCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionsObjects1[i].hide();
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "NotStarted";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ceiling"), gdjs.GameCode.GDCeilingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.GameCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.GameCode.GDCeilingObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCeilingObjects1[i].setXOffset(gdjs.GameCode.GDCeilingObjects1[i].getXOffset() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "NotStarted";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "GamePlaying";
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects3);
{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects3[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTappyBoxObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDTappyBoxObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTappyBoxObjects3[k] = gdjs.GameCode.GDTappyBoxObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDTappyBoxObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTappyBoxObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects3[i].rotateTowardAngle(90, 150, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_wing.wav", false, 70, gdjs.randomFloatInRange(1.1, 1.3));
}{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects2[i].setAngle(320);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects3Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillarObjects3Objects = Hashtable.newFrom({"BottomPillar": gdjs.GameCode.GDBottomPillarObjects3});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe_spawn") > 2.5;
if (isConditionTrue_0) {
gdjs.GameCode.GDBottomPillarObjects3.length = 0;

gdjs.GameCode.GDTopPillarObjects3.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects3Objects, 900, gdjs.randomInRange(50, 110), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillarObjects3Objects, 900, (( gdjs.GameCode.GDTopPillarObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopPillarObjects3[0].getPointY("")) + 850, "");
}{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects3[i].setZOrder(1);
}
for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].setZOrder(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}{for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}{for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].getBehavior("Resizable").setSize(265, 587);
}
}{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects3[i].getBehavior("Resizable").setSize(265, 587);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBottomPillarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillarObjects2[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects2[i].addForce(-(100), 0, 0);
}
}}

}


};gdjs.GameCode.asyncCallback9775692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].setOutlineThickness(gdjs.GameCode.GDCurrentScoreObjects3[i].getOutlineThickness() - (5));
}
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].setY(gdjs.GameCode.GDCurrentScoreObjects3[i].getY() + (5));
}
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCurrentScoreObjects2) asyncObjectsList.addObject("CurrentScore", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameCode.asyncCallback9775692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDCurrentScoreObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setOutlineThickness(gdjs.GameCode.GDCurrentScoreObjects2[i].getOutlineThickness() + (5));
}
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setY(gdjs.GameCode.GDCurrentScoreObjects2[i].getY() - (5));
}
}
{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects2);
gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottomPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottomPillarObjects2[i].getX() < (( gdjs.GameCode.GDTappyBoxObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyBoxObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottomPillarObjects2[k] = gdjs.GameCode.GDBottomPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottomPillarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTopPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTopPillarObjects2[i].getX() < (( gdjs.GameCode.GDTappyBoxObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyBoxObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTopPillarObjects2[k] = gdjs.GameCode.GDTopPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTopPillarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottomPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottomPillarObjects2[i].getX() > (( gdjs.GameCode.GDTappyBoxObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyBoxObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottomPillarObjects2[k] = gdjs.GameCode.GDBottomPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottomPillarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTopPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTopPillarObjects2[i].getX() > (( gdjs.GameCode.GDTappyBoxObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTappyBoxObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTopPillarObjects2[k] = gdjs.GameCode.GDTopPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTopPillarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9772868);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_point.wav", false, 100, 1);
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTappyBoxObjects1Objects = Hashtable.newFrom({"TappyBox": gdjs.GameCode.GDTappyBoxObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDCeilingObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects1, "BottomPillar": gdjs.GameCode.GDBottomPillarObjects1, "Ceiling": gdjs.GameCode.GDCeilingObjects1, "Ground": gdjs.GameCode.GDGroundObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ceiling"), gdjs.GameCode.GDCeilingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("TappyBox"), gdjs.GameCode.GDTappyBoxObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTappyBoxObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDCeilingObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDTappyBoxObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Gameover");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_hit.wav", false, 100, 0.8);
}{for(var i = 0, len = gdjs.GameCode.GDTappyBoxObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTappyBoxObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10451196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}}

}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "GamePlaying";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.GameCode.GDFlashObjects2});
gdjs.GameCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects4);
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects4[i].getBehavior("Text").setText("Best: " + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDHighScoreChangedObjects3, gdjs.GameCode.GDHighScoreChangedObjects4);

{gdjs.evtTools.storage.writeNumberInJSONFile("save", "high_score", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreChangedObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreChangedObjects4[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameCode.GDPlayerNameInputObjects4);
{for(var i = 0, len = gdjs.GameCode.GDPlayerNameInputObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerNameInputObjects4[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerNameInputObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerNameInputObjects4[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.GameCode.GDPlayerNameInputObjects3);
{for(var i = 0, len = gdjs.GameCode.GDPlayerNameInputObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerNameInputObjects3[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


};gdjs.GameCode.asyncCallback9779572 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);
gdjs.copyArray(runtimeScene.getObjects("FinalScore"), gdjs.GameCode.GDFinalScoreObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("Flash"), gdjs.GameCode.GDFlashObjects3);

gdjs.copyArray(runtimeScene.getObjects("HighScoreChanged"), gdjs.GameCode.GDHighScoreChangedObjects3);
{for(var i = 0, len = gdjs.GameCode.GDFlashObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Gameover");
}{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreChangedObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreChangedObjects3[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDFinalScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFinalScoreObjects3[i].getBehavior("Text").setText("Score: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDFlashObjects2) asyncObjectsList.addObject("Flash", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.GameCode.asyncCallback9779572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9778908);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDFlashObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.GameCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRestartButtonObjects1[k] = gdjs.GameCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Gameover";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDTappyBoxObjects1.length = 0;
gdjs.GameCode.GDTappyBoxObjects2.length = 0;
gdjs.GameCode.GDTappyBoxObjects3.length = 0;
gdjs.GameCode.GDTappyBoxObjects4.length = 0;
gdjs.GameCode.GDTappyBoxObjects5.length = 0;
gdjs.GameCode.GDTopPillarObjects1.length = 0;
gdjs.GameCode.GDTopPillarObjects2.length = 0;
gdjs.GameCode.GDTopPillarObjects3.length = 0;
gdjs.GameCode.GDTopPillarObjects4.length = 0;
gdjs.GameCode.GDTopPillarObjects5.length = 0;
gdjs.GameCode.GDBottomPillarObjects1.length = 0;
gdjs.GameCode.GDBottomPillarObjects2.length = 0;
gdjs.GameCode.GDBottomPillarObjects3.length = 0;
gdjs.GameCode.GDBottomPillarObjects4.length = 0;
gdjs.GameCode.GDBottomPillarObjects5.length = 0;
gdjs.GameCode.GDFinalScoreObjects1.length = 0;
gdjs.GameCode.GDFinalScoreObjects2.length = 0;
gdjs.GameCode.GDFinalScoreObjects3.length = 0;
gdjs.GameCode.GDFinalScoreObjects4.length = 0;
gdjs.GameCode.GDFinalScoreObjects5.length = 0;
gdjs.GameCode.GDCurrentScoreObjects1.length = 0;
gdjs.GameCode.GDCurrentScoreObjects2.length = 0;
gdjs.GameCode.GDCurrentScoreObjects3.length = 0;
gdjs.GameCode.GDCurrentScoreObjects4.length = 0;
gdjs.GameCode.GDCurrentScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreChangedObjects1.length = 0;
gdjs.GameCode.GDHighScoreChangedObjects2.length = 0;
gdjs.GameCode.GDHighScoreChangedObjects3.length = 0;
gdjs.GameCode.GDHighScoreChangedObjects4.length = 0;
gdjs.GameCode.GDHighScoreChangedObjects5.length = 0;
gdjs.GameCode.GDRestartButtonObjects1.length = 0;
gdjs.GameCode.GDRestartButtonObjects2.length = 0;
gdjs.GameCode.GDRestartButtonObjects3.length = 0;
gdjs.GameCode.GDRestartButtonObjects4.length = 0;
gdjs.GameCode.GDRestartButtonObjects5.length = 0;
gdjs.GameCode.GDSubmitScoreButtonObjects1.length = 0;
gdjs.GameCode.GDSubmitScoreButtonObjects2.length = 0;
gdjs.GameCode.GDSubmitScoreButtonObjects3.length = 0;
gdjs.GameCode.GDSubmitScoreButtonObjects4.length = 0;
gdjs.GameCode.GDSubmitScoreButtonObjects5.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDFlashObjects5.length = 0;
gdjs.GameCode.GDGameOverLabelObjects1.length = 0;
gdjs.GameCode.GDGameOverLabelObjects2.length = 0;
gdjs.GameCode.GDGameOverLabelObjects3.length = 0;
gdjs.GameCode.GDGameOverLabelObjects4.length = 0;
gdjs.GameCode.GDGameOverLabelObjects5.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDCeilingObjects1.length = 0;
gdjs.GameCode.GDCeilingObjects2.length = 0;
gdjs.GameCode.GDCeilingObjects3.length = 0;
gdjs.GameCode.GDCeilingObjects4.length = 0;
gdjs.GameCode.GDCeilingObjects5.length = 0;
gdjs.GameCode.GDBlackRectObjects1.length = 0;
gdjs.GameCode.GDBlackRectObjects2.length = 0;
gdjs.GameCode.GDBlackRectObjects3.length = 0;
gdjs.GameCode.GDBlackRectObjects4.length = 0;
gdjs.GameCode.GDBlackRectObjects5.length = 0;
gdjs.GameCode.GDGameOverBackgroundObjects1.length = 0;
gdjs.GameCode.GDGameOverBackgroundObjects2.length = 0;
gdjs.GameCode.GDGameOverBackgroundObjects3.length = 0;
gdjs.GameCode.GDGameOverBackgroundObjects4.length = 0;
gdjs.GameCode.GDGameOverBackgroundObjects5.length = 0;
gdjs.GameCode.GDPlayerNameInputObjects1.length = 0;
gdjs.GameCode.GDPlayerNameInputObjects2.length = 0;
gdjs.GameCode.GDPlayerNameInputObjects3.length = 0;
gdjs.GameCode.GDPlayerNameInputObjects4.length = 0;
gdjs.GameCode.GDPlayerNameInputObjects5.length = 0;

gdjs.GameCode.eventsList18(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
