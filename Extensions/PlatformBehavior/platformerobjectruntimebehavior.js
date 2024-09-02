var gdjs;(function(n){const u=class extends n.RuntimeBehavior{constructor(e,t,i){super(e,t,i);this._ignoreTouchingEdges=!0;this._slopeClimbingFactor=1;this._canGoDownFromJumpthru=!1;this._currentSpeed=0;this._requestedDeltaX=0;this._requestedDeltaY=0;this._lastDeltaY=0;this._currentFallSpeed=0;this._canJump=!1;this._lastDirectionIsLeft=!1;this._leftKey=!1;this._rightKey=!1;this._ladderKey=!1;this._upKey=!1;this._downKey=!1;this._jumpKey=!1;this._releasePlatformKey=!1;this._releaseLadderKey=!1;this._dontClearInputsBetweenFrames=!1;this._ignoreDefaultControlsAsSyncedByNetwork=!1;this._wasLeftKeyPressed=!1;this._wasRightKeyPressed=!1;this._wasLadderKeyPressed=!1;this._wasUpKeyPressed=!1;this._wasDownKeyPressed=!1;this._wasJumpKeyPressed=!1;this._wasReleasePlatformKeyPressed=!1;this._wasReleaseLadderKeyPressed=!1;this._hasReallyMoved=!1;this._hasMovedAtLeastOnePixel=!1;this._gravity=t.gravity,this._maxFallingSpeed=t.maxFallingSpeed,this._ladderClimbingSpeed=t.ladderClimbingSpeed||150,this._acceleration=t.acceleration,this._deceleration=t.deceleration,this._maxSpeed=t.maxSpeed,this._jumpSpeed=t.jumpSpeed,this._canGrabPlatforms=t.canGrabPlatforms||!1,this._canGrabWithoutMoving=t.canGrabWithoutMoving,this._yGrabOffset=t.yGrabOffset||0,this._xGrabTolerance=t.xGrabTolerance||10,this._jumpSustainTime=t.jumpSustainTime||0,this._ignoreDefaultControls=t.ignoreDefaultControls,this._useLegacyTrajectory=t.useLegacyTrajectory===void 0?!0:t.useLegacyTrajectory,this._canGoDownFromJumpthru=t.canGoDownFromJumpthru,this._slopeMaxAngle=0,this.setSlopeMaxAngle(t.slopeMaxAngle),this._potentialCollidingObjects=[],this._overlappedJumpThru=[],this._manager=n.PlatformObjectsManager.getManager(e),this._falling=new w(this),this._onFloor=new v(this),this._jumping=new j(this),this._grabbingPlatform=new F(this),this._onLadder=new M(this),this._state=this._falling}getNetworkSyncData(){return this._dontClearInputsBetweenFrames=!1,this._ignoreDefaultControlsAsSyncedByNetwork=!1,{...super.getNetworkSyncData(),props:{cs:this._currentSpeed,rdx:this._requestedDeltaX,rdy:this._requestedDeltaY,ldy:this._lastDeltaY,cfs:this._currentFallSpeed,cj:this._canJump,ldl:this._lastDirectionIsLeft,lek:this._wasLeftKeyPressed,rik:this._wasRightKeyPressed,lak:this._wasLadderKeyPressed,upk:this._wasUpKeyPressed,dok:this._wasDownKeyPressed,juk:this._wasJumpKeyPressed,rpk:this._wasReleasePlatformKeyPressed,rlk:this._wasReleaseLadderKeyPressed,sn:this._state.toString(),ssd:this._state.getNetworkSyncData()}}}updateFromNetworkSyncData(e){super.updateFromNetworkSyncData(e);const t=e.props;if(t.cs!==this._currentSpeed&&(this._currentSpeed=t.cs),t.rdx!==this._requestedDeltaX&&(this._requestedDeltaX=t.rdx),t.rdy!==this._requestedDeltaY&&(this._requestedDeltaY=t.rdy),t.ldy!==this._lastDeltaY&&(this._lastDeltaY=t.ldy),t.cfs!==this._currentFallSpeed&&(this._currentFallSpeed=t.cfs),t.cj!==this._canJump&&(this._canJump=t.cj),t.ldl!==this._lastDirectionIsLeft&&(this._lastDirectionIsLeft=t.ldl),t.lek!==this._leftKey&&(this._leftKey=t.lek),t.rik!==this._rightKey&&(this._rightKey=t.rik),t.lak!==this._ladderKey&&(this._ladderKey=t.lak),t.upk!==this._upKey&&(this._upKey=t.upk),t.dok!==this._downKey&&(this._downKey=t.dok),t.juk!==this._jumpKey&&(this._jumpKey=t.juk),t.rpk!==this._releasePlatformKey&&(this._releasePlatformKey=t.rpk),t.rlk!==this._releaseLadderKey&&(this._releaseLadderKey=t.rlk),t.sn!==this._state.toString())switch(t.sn){case"Falling":this._setFalling();break;case"OnFloor":break;case"Jumping":this._setJumping();break;case"GrabbingPlatform":break;case"OnLadder":this._setOnLadder();break;default:console.error("Unknown state name: "+t.sn+".");break}t.sn===this._state.toString()&&this._state.updateFromNetworkSyncData(t.ssd),this._dontClearInputsBetweenFrames=!0,this._ignoreDefaultControlsAsSyncedByNetwork=!0}updateFromBehaviorData(e,t){return e.gravity!==t.gravity&&this.setGravity(t.gravity),e.maxFallingSpeed!==t.maxFallingSpeed&&this.setMaxFallingSpeed(t.maxFallingSpeed),e.acceleration!==t.acceleration&&this.setAcceleration(t.acceleration),e.deceleration!==t.deceleration&&this.setDeceleration(t.deceleration),e.maxSpeed!==t.maxSpeed&&this.setMaxSpeed(t.maxSpeed),e.jumpSpeed!==t.jumpSpeed&&this.setJumpSpeed(t.jumpSpeed),e.canGrabPlatforms!==t.canGrabPlatforms&&this.setCanGrabPlatforms(t.canGrabPlatforms),e.canGrabWithoutMoving!==t.canGrabWithoutMoving&&(this._canGrabWithoutMoving=t.canGrabWithoutMoving),e.yGrabOffset!==t.yGrabOffset&&(this._yGrabOffset=t.yGrabOffset),e.xGrabTolerance!==t.xGrabTolerance&&(this._xGrabTolerance=t.xGrabTolerance),e.jumpSustainTime!==t.jumpSustainTime&&this.setJumpSustainTime(t.jumpSustainTime),e.useLegacyTrajectory!==t.useLegacyTrajectory&&(this._useLegacyTrajectory=t.useLegacyTrajectory),e.canGoDownFromJumpthru!==t.canGoDownFromJumpthru&&(this._canGoDownFromJumpthru=t.canGoDownFromJumpthru),!0}doStepPreEvents(e){const t=37,i=38,r=39,s=40,a=1016,o=2016,f=32,l=this.owner,h=this.owner.getElapsedTime()/1e3;this._requestedDeltaX=0,this._requestedDeltaY=0;const _=e.getGame().getInputManager();this._leftKey||(this._leftKey=!this.shouldIgnoreDefaultControls()&&_.isKeyPressed(t)),this._rightKey||(this._rightKey=!this.shouldIgnoreDefaultControls()&&_.isKeyPressed(r)),this._jumpKey||(this._jumpKey=!this.shouldIgnoreDefaultControls()&&(_.isKeyPressed(a)||_.isKeyPressed(o)||_.isKeyPressed(f))),this._ladderKey||(this._ladderKey=!this.shouldIgnoreDefaultControls()&&_.isKeyPressed(i)),this._upKey||(this._upKey=!this.shouldIgnoreDefaultControls()&&_.isKeyPressed(i)),this._downKey||(this._downKey=!this.shouldIgnoreDefaultControls()&&_.isKeyPressed(s)),this._releasePlatformKey||(this._releasePlatformKey=!this.shouldIgnoreDefaultControls()&&_.isKeyPressed(s)),this._requestedDeltaX+=this._updateSpeed(h),this._leftKey!==this._rightKey&&(this._lastDirectionIsLeft=this._leftKey),this._state.beforeUpdatingObstacles(h),this._onFloor._oldHeight=l.getHeight(),this._updatePotentialCollidingObjects(Math.max(this._requestedDeltaX,this._maxFallingSpeed*h)),this._updateOverlappedJumpThru();const g=this._state;this._state.checkTransitionBeforeX(),this._state.beforeMovingX(),this._separateFromPlatforms(this._potentialCollidingObjects,!0)&&(this._canJump=!0);const d=l.getX();this._moveX();const c=l.getX()!==d+this._requestedDeltaX,p=this._state;this._state.checkTransitionBeforeY(h),this._state.beforeMovingY(h,d);const P=l.getY();this._moveY();const Y=this._state;this._state!==this._onLadder&&this._checkTransitionOnFloorOrFalling(),c&&this._state===g&&this._state===p&&this._state===Y&&this._state!==this._onFloor&&(this._currentSpeed=0),this._wasLeftKeyPressed=this._leftKey,this._wasRightKeyPressed=this._rightKey,this._wasLadderKeyPressed=this._ladderKey,this._wasUpKeyPressed=this._upKey,this._wasDownKeyPressed=this._downKey,this._wasJumpKeyPressed=this._jumpKey,this._wasReleasePlatformKeyPressed=this._releasePlatformKey,this._wasReleaseLadderKeyPressed=this._releaseLadderKey,this._dontClearInputsBetweenFrames||(this._leftKey=!1,this._rightKey=!1,this._ladderKey=!1,this._upKey=!1,this._downKey=!1,this._jumpKey=!1,this._releasePlatformKey=!1,this._releaseLadderKey=!1),this._hasReallyMoved=Math.abs(l.getX()-d)>u.epsilon||Math.abs(l.getY()-P)>u.epsilon,this._hasMovedAtLeastOnePixel=Math.abs(l.getX()-d)>=1||Math.abs(l.getY()-P)>=1,this._lastDeltaY=l.getY()-P}doStepPostEvents(e){}_updateSpeed(e){const t=this._currentSpeed;if(this._leftKey!==this._rightKey&&(this._leftKey?this._currentSpeed<=0?this._currentSpeed-=this._acceleration*e:this._currentSpeed-=Math.max(this._acceleration,this._deceleration)*e:this._rightKey&&(this._currentSpeed>=0?this._currentSpeed+=this._acceleration*e:this._currentSpeed+=Math.max(this._acceleration,this._deceleration)*e)),this._leftKey===this._rightKey){const i=this._currentSpeed>0;this._currentSpeed-=this._deceleration*e*(i?1:-1),i&&this._currentSpeed<0&&(this._currentSpeed=0),!i&&this._currentSpeed>0&&(this._currentSpeed=0)}return this._currentSpeed>this._maxSpeed&&(this._currentSpeed=this._maxSpeed),this._currentSpeed<-this._maxSpeed&&(this._currentSpeed=-this._maxSpeed),(this._currentSpeed+t)*e/2}_moveX(){const e=this.owner,t=e.getX();if(this._requestedDeltaX!==0){let i=this._onFloor.getFloorPlatform()!==null?this._onFloor.getFloorPlatform().owner.id:null;e.setX(e.getX()+this._requestedDeltaX);let r=!0;for(;this._isCollidingWithOneOf(this._potentialCollidingObjects,i,!0,this._onFloor.getFloorPolygon());){if(this._requestedDeltaX>0&&e.getX()<=t||this._requestedDeltaX<0&&e.getX()>=t){e.setX(t);break}r?(e.setX(Math.round(e.getX())),r=!1):e.setX(Math.round(e.getX())+(this._requestedDeltaX>0?-1:1))}}}_moveY(){const e=this.owner;if(this._requestedDeltaY!==0)if(this._requestedDeltaY>0){const{highestGroundPlatform:t}=this._findHighestFloorAndMoveOnTop(this._potentialCollidingObjects,0,this._requestedDeltaY);t||e.setY(e.getY()+this._requestedDeltaY)}else{let t=e.getY();for(e.setY(e.getY()+this._requestedDeltaY);this._requestedDeltaY<0&&this._isCollidingWithOneOf(this._potentialCollidingObjects,null,!0)||this._requestedDeltaY>0&&this._isCollidingWithOneOfExcluding(this._potentialCollidingObjects,this._overlappedJumpThru);){if(this._state===this._jumping&&this._setFalling(),this._requestedDeltaY>0&&e.getY()<=t||this._requestedDeltaY<0&&e.getY()>=t){e.setY(t);break}e.setY(Math.floor(e.getY())+(this._requestedDeltaY>0?-1:1))}}}_setFalling(){this._state.leave();const e=this._state;this._state=this._falling,this._falling.enter(e)}_setOnFloor(e,t){this._state.leave(),this._state=this._onFloor,this._onFloor.enter(e,t)}_setJumping(){this._state.leave();const e=this._state;this._state=this._jumping,this._jumping.enter(e)}_setGrabbingPlatform(e){this._state.leave(),this._state=this._grabbingPlatform,this._grabbingPlatform.enter(e)}_setOnLadder(){this._state.leave(),this._state=this._onLadder,this._onLadder.enter()}_checkTransitionOnLadder(){this._ladderKey&&this._isOverlappingLadder()&&this._setOnLadder()}_checkTransitionJumping(){this._canJump&&this._jumpKey&&this._setJumping()}_checkGrabPlatform(){const e=this.owner;let t=e.getX();e.setX(e.getX()+(this._requestedDeltaX<0||this._requestedDeltaX===0&&this._lastDirectionIsLeft?-this._xGrabTolerance:this._xGrabTolerance));const i=n.staticArray(u.prototype._checkGrabPlatform);i.length=0;for(const s of this._potentialCollidingObjects)this._isCollidingWith(s)&&this._canGrab(s)&&i.push(s);e.setX(t);let r=e.getY();for(const s of i){if(e.setY(s.owner.getY()+s.getYGrabOffset()-this._yGrabOffset),!this._isCollidingWithOneOf(this._potentialCollidingObjects,null,!0)){this._setGrabbingPlatform(s),this._requestedDeltaY=0,i.length=0;return}e.setY(r)}i.length=0}_checkTransitionOnFloorOrFalling(){const e=this.owner,t=e.getY(),i=this._requestedDeltaY>=0,{highestGroundPlatform:r,highestGroundPolygon:s}=this._findHighestFloorAndMoveOnTop(this._potentialCollidingObjects,-1,1);this._state===this._onFloor?!r||!s?this._setFalling():r===this._onFloor.getFloorPlatform()&&s===this._onFloor.getFloorPolygon()?this._onFloor.updateFloorPosition():this._setOnFloor(r,s):r&&s&&i?this._setOnFloor(r,s):e.setY(t)}_fall(e){const t=this._currentFallSpeed;this._currentFallSpeed+=this._gravity*e,this._currentFallSpeed>this._maxFallingSpeed&&(this._currentFallSpeed=this._maxFallingSpeed),this._useLegacyTrajectory?this._requestedDeltaY+=this._currentFallSpeed*e:this._requestedDeltaY+=(this._currentFallSpeed+t)/2*e}_canGrab(e){const t=this.owner.getY()+this._yGrabOffset-this._lastDeltaY,i=this.owner.getY()+this._yGrabOffset,r=e.owner.getY()+e.getYGrabOffset();return e.canBeGrabbed()&&(t<r&&r<=i||i<=r&&r<t)}_releaseGrabbedPlatform(){this._state===this._grabbingPlatform&&this._setFalling()}_releaseLadder(){this._state===this._onLadder&&this._setFalling()}_separateFromPlatforms(e,t){t=!!t;const i=n.staticArray(u.prototype._separateFromPlatforms);i.length=0;for(let r=0;r<e.length;++r){const s=e[r];s.getPlatformType()!==n.PlatformRuntimeBehavior.LADDER&&(t&&s.getPlatformType()===n.PlatformRuntimeBehavior.JUMPTHRU||i.push(s.owner))}return this.owner.separateFromObjects(i,this._ignoreTouchingEdges)}_isCollidingWithOneOf(e,t,i,r){i=!!i;for(let s=0;s<e.length;++s){const a=e[s],o=a.owner.id===t;if(!(o&&!r)&&a.getPlatformType()!==n.PlatformRuntimeBehavior.LADDER&&!(i&&a.getPlatformType()===n.PlatformRuntimeBehavior.JUMPTHRU)&&n.RuntimeObject.collisionTest(a.owner,this.owner,this._ignoreTouchingEdges,o?r:null))return!0}return!1}_findHighestFloorAndMoveOnTop(e,t,i){const r=y.instance;r.initializeBeforeSearch(this,t,i);let s=Number.MAX_VALUE,a=null,o=null,f=!1;for(const h of e){if(h.getPlatformType()===n.PlatformRuntimeBehavior.LADDER||h.getPlatformType()===n.PlatformRuntimeBehavior.JUMPTHRU&&(this._state===this._onFloor&&h!==this._onFloor.getFloorPlatform()&&i<0||this._state!==this._onFloor&&this._isIn(this._overlappedJumpThru,h.owner.id)))continue;const _=r.allowedMinDeltaY,g=r.allowedMaxDeltaY;this._findPlatformHighestRelativeYUnderObject(h,r);let d=r.getFloorDeltaY();if(h.getPlatformType()===n.PlatformRuntimeBehavior.JUMPTHRU&&(this._state===this._onFloor&&h!==this._onFloor.getFloorPlatform()&&d<0||r.allowedMinDeltaY!==_)){r.revertTo(_,g);continue}if(r.isCollidingAnyPlatform()&&(f=!0),r.floorIsTooHigh()){a=null,o=null;break}r.isCollidingAnyPlatform()&&d<s&&(s=d,a=h,o=r.highestFloorPolygon)}if(a){const h=this.owner;h.setY(h.getY()+s)}const l=n.PlatformerObjectRuntimeBehavior._platformSearchResult;return l.highestGroundPlatform=a,l.highestGroundPolygon=o,l.isCollidingAnyPlatform=f,l}_findPlatformHighestRelativeYUnderObject(e,t){const i=e.owner,r=i.getAABB();if(r.max[0]<=t.ownerMinX||r.min[0]>=t.ownerMaxX||r.max[1]<=t.headMinY||r.min[1]>t.floorMaxY)return t;for(const s of i.getHitBoxesAround(t.ownerMinX,t.headMinY,t.ownerMaxX,t.floorMaxY)){if(s.vertices.length<3)continue;t.initializeBeforeHitboxCheck();let a=s.vertices[s.vertices.length-2],o=s.vertices[s.vertices.length-1];for(const f of s.vertices){(t.ownerMinX<o[0]&&o[0]<t.ownerMaxX||o[0]===t.ownerMinX&&(a[0]>o[0]||f[0]>o[0])||o[0]===t.ownerMaxX&&(a[0]<o[0]||f[0]<o[0]))&&t.addPointConstraint(o[1],s);const l=o[0]-a[0];if(l!==0){if(o[0]<t.ownerMinX&&t.ownerMinX<a[0]||a[0]<t.ownerMinX&&t.ownerMinX<o[0]){const h=o[1]-a[1],_=a[1]+(t.ownerMinX-a[0])*h/l;t.addPointConstraint(_,s)}if(o[0]<t.ownerMaxX&&t.ownerMaxX<a[0]||a[0]<t.ownerMaxX&&t.ownerMaxX<o[0]){const h=o[1]-a[1],_=a[1]+(t.ownerMaxX-a[0])*h/l;t.addPointConstraint(_,s)}}if(t.floorIsTooHigh())return t;a=o,o=f}}return t}_isCollidingWithOneOfExcluding(e,t){for(let i=0;i<e.length;++i){const r=e[i];if(!(t&&this._isIn(t,r.owner.id))&&r.getPlatformType()!==n.PlatformRuntimeBehavior.LADDER&&n.RuntimeObject.collisionTest(this.owner,r.owner,this._ignoreTouchingEdges))return!0}return!1}_isCollidingWith(e){return e.getPlatformType()!==n.PlatformRuntimeBehavior.LADDER&&!this._isIn(this._overlappedJumpThru,e.owner.id)&&n.RuntimeObject.collisionTest(this.owner,e.owner,this._ignoreTouchingEdges)}_updateOverlappedJumpThru(){this._overlappedJumpThru.length=0;for(let e=0;e<this._potentialCollidingObjects.length;++e){const t=this._potentialCollidingObjects[e];t.getPlatformType()===n.PlatformRuntimeBehavior.JUMPTHRU&&n.RuntimeObject.collisionTest(this.owner,t.owner,this._ignoreTouchingEdges)&&this._overlappedJumpThru.push(t)}}_isOverlappingLadder(){for(let e=0;e<this._potentialCollidingObjects.length;++e){const t=this._potentialCollidingObjects[e];if(t.getPlatformType()===n.PlatformRuntimeBehavior.LADDER&&n.RuntimeObject.collisionTest(this.owner,t.owner,this._ignoreTouchingEdges))return!0}return!1}_isIn(e,t){for(let i=0;i<e.length;++i)if(e[i].owner.id===t)return!0;return!1}_updatePotentialCollidingObjects(e){const t=this.owner;this._manager.getAllPlatformsAround(t,e,this._potentialCollidingObjects);for(let i=0;i<this._potentialCollidingObjects.length;)this._potentialCollidingObjects[i].owner===t?this._potentialCollidingObjects.splice(i,1):i++}simulateControl(e){e==="Left"?this._leftKey=!0:e==="Right"?this._rightKey=!0:e==="Up"?this._upKey=!0:e==="Down"?this._downKey=!0:e==="Ladder"?this._ladderKey=!0:e==="Jump"?this._jumpKey=!0:e==="Release"?this._releasePlatformKey=!0:e==="Release Ladder"&&(this._releaseLadderKey=!0)}isUsingControl(e){return e==="Left"?this._wasLeftKeyPressed:e==="Right"?this._wasRightKeyPressed:e==="Up"?this._wasUpKeyPressed:e==="Down"?this._wasDownKeyPressed:e==="Ladder"?this._wasLadderKeyPressed:e==="Jump"?this._wasJumpKeyPressed:e==="Release"?this._wasReleasePlatformKeyPressed:e==="Release Ladder"?this._wasReleaseLadderKeyPressed:!1}getGravity(){return this._gravity}getSlopeMaxAngle(){return this._slopeMaxAngle}getMaxFallingSpeed(){return this._maxFallingSpeed}getLadderClimbingSpeed(){return this._ladderClimbingSpeed}getAcceleration(){return this._acceleration}getDeceleration(){return this._deceleration}getMaxSpeed(){return this._maxSpeed}getJumpSpeed(){return this._jumpSpeed}getJumpSustainTime(){return this._jumpSustainTime}getCurrentFallSpeed(){return this._currentFallSpeed}getCurrentSpeed(){return this._currentSpeed}setCurrentSpeed(e){this._currentSpeed=n.evtTools.common.clamp(e,-this._maxSpeed,this._maxSpeed)}getCurrentJumpSpeed(){return this._jumping.getCurrentJumpSpeed()}canGrabPlatforms(){return this._canGrabPlatforms}canJump(){return this._canJump}setGravity(e){this._gravity=e}setMaxFallingSpeed(e,t=!1){if(t&&this._state===this._jumping){const i=this._currentFallSpeed-e;i>0&&(this._currentFallSpeed-=i,this._jumping.setCurrentJumpSpeed(Math.max(0,this._jumping.getCurrentJumpSpeed()-i)))}this._maxFallingSpeed=e}setLadderClimbingSpeed(e){this._ladderClimbingSpeed=e}setAcceleration(e){this._acceleration=e}setDeceleration(e){this._deceleration=e}setMaxSpeed(e){this._maxSpeed=e}setJumpSpeed(e){this._jumpSpeed=e}setJumpSustainTime(e){this._jumpSustainTime=e}setSlopeMaxAngle(e){e<0||e>=90||(this._slopeMaxAngle=e,e===45?this._slopeClimbingFactor=1:this._slopeClimbingFactor=Math.tan(e*3.1415926/180),this._slopeClimbingFactor<1/1024&&(this._slopeClimbingFactor=1/1024))}setCanJump(){this._canJump=!0}setCanNotAirJump(){(this._state===this._jumping||this._state===this._falling)&&(this._canJump=!1)}abortJump(){this._state===this._jumping&&(this._currentFallSpeed=0,this._setFalling())}setCurrentFallSpeed(e){this._state===this._falling&&(this._currentFallSpeed=n.evtTools.common.clamp(e,0,this._maxFallingSpeed))}setCanGrabPlatforms(e){this._canGrabPlatforms=e,this._canGrabPlatforms||this._releaseGrabbedPlatform()}ignoreDefaultControls(e){this._ignoreDefaultControls=e}shouldIgnoreDefaultControls(){return this._ignoreDefaultControls||this._ignoreDefaultControlsAsSyncedByNetwork}simulateLeftKey(){this._leftKey=!0}simulateRightKey(){this._rightKey=!0}simulateLadderKey(){this._ladderKey=!0}simulateReleaseLadderKey(){this._releaseLadderKey=!0}simulateUpKey(){this._upKey=!0}simulateDownKey(){this._downKey=!0}simulateJumpKey(){this._jumpKey=!0}simulateReleasePlatformKey(){this._releasePlatformKey=!0}isOnFloor(){return this._state===this._onFloor}isOnFloorObject(e){if(this.isOnFloor()){const t=this._onFloor.getFloorPlatform();return!!t&&t.owner.id===e.id}return!1}isOnLadder(){return this._state===this._onLadder}isJumping(){return this._state===this._jumping}isGrabbingPlatform(){return this._state===this._grabbingPlatform}isFallingWithoutJumping(){return this._state===this._falling}isFalling(){return this._state===this._falling||this._state===this._jumping&&this._currentFallSpeed>this._jumping.getCurrentJumpSpeed()}isMoving(){return this._hasMovedAtLeastOnePixel&&(this._currentSpeed!==0||this._state===this._onLadder)||this._jumping.getCurrentJumpSpeed()!==0||this._currentFallSpeed!==0}isMovingEvenALittle(){return this._hasReallyMoved&&(this._currentSpeed!==0||this._state===this._onLadder)||this._jumping.getCurrentJumpSpeed()!==0||this._currentFallSpeed!==0}};let b=u;b._platformSearchResult={highestGroundPlatform:null,highestGroundPolygon:null,isCollidingAnyPlatform:!1},b.epsilon=2**-20,n.PlatformerObjectRuntimeBehavior=b;class v{constructor(e){this._floorPlatform=null;this._floorPolygon=null;this._floorLastX=0;this._floorLastY=0;this._oldHeight=0;this._behavior=e}getFloorPlatform(){return this._floorPlatform}getFloorPolygon(){return this._floorPolygon}enter(e,t){this._floorPlatform=e,this._floorPolygon=t,this.updateFloorPosition(),this._behavior._canJump=!0,this._behavior._currentFallSpeed=0}leave(){this._floorPlatform=null,this._floorPolygon=null}updateFloorPosition(){this._floorLastX=this._floorPlatform.owner.getX(),this._floorLastY=this._floorPlatform.owner.getY()}beforeUpdatingObstacles(e){const t=this._behavior.owner;if(this._oldHeight!==t.getHeight()){const r=(this._oldHeight-t.getHeight())*(t.getHeight()+t.getDrawableY()-t.getY())/t.getHeight();t.setY(t.getY()+r)}const i=this._floorPlatform.owner.getY()-this._floorLastY;i!==0&&Math.abs(i)<=Math.abs(this._behavior._maxFallingSpeed*e)&&t.setY(t.getY()+i)}checkTransitionBeforeX(){const e=this._behavior;e._isIn(e._potentialCollidingObjects,this._floorPlatform.owner.id)?this._behavior._downKey&&this._floorPlatform._platformType===n.PlatformRuntimeBehavior.JUMPTHRU&&e._canGoDownFromJumpthru&&(e._overlappedJumpThru.push(this._floorPlatform),e._setFalling()):e._setFalling(),e._checkTransitionJumping()}beforeMovingX(){const e=this._behavior;e._requestedDeltaX+=this._floorPlatform.owner.getX()-this._floorLastX}checkTransitionBeforeY(e){this._behavior._checkTransitionOnLadder()}beforeMovingY(e,t){const i=this._behavior,r=i.owner;if(r.getX()===t+i._requestedDeltaX){const s=Math.abs(i._requestedDeltaX*i._slopeClimbingFactor),{highestGroundPlatform:a,highestGroundPolygon:o,isCollidingAnyPlatform:f}=i._findHighestFloorAndMoveOnTop(i._potentialCollidingObjects,-s,s);a&&o&&(a!==this._floorPlatform||o!==this._floorPolygon)&&i._setOnFloor(a,o),a===null&&f&&i.owner.setX(t)}else{const{highestGroundPlatform:s,isCollidingAnyPlatform:a}=i._findHighestFloorAndMoveOnTop(i._potentialCollidingObjects,Math.min(0,-Math.abs(r.getX()-t)*i._slopeClimbingFactor),0);if(s===null&&a)i.owner.setX(t);else{const o=i._requestedDeltaX,f=o-(r.getX()-t),l=r.getY(),h=r.getX();r.setX(r.getX()+Math.sign(o));const{highestGroundPlatform:_}=i._findHighestFloorAndMoveOnTop(i._potentialCollidingObjects,Math.min(-1,-1*i._slopeClimbingFactor),0);if(_){const g=Math.sign(o)*Math.max(1,Math.abs(f)-1);r.setX(r.getX()+g);const{highestGroundPlatform:d,highestGroundPolygon:c}=i._findHighestFloorAndMoveOnTop(i._potentialCollidingObjects,-Math.abs(g)*i._slopeClimbingFactor,0);if(d&&c)if(Math.abs(f)>=2)i._setOnFloor(d,c);else{r.setPosition(t+o,l);const{highestGroundPlatform:p}=i._findHighestFloorAndMoveOnTop(i._potentialCollidingObjects,Math.min(-1,-Math.abs(f)*i._slopeClimbingFactor),0);p&&c&&i._setOnFloor(p,c)}else Math.sign(h-t)===Math.sign(o)?r.setPosition(h,l):r.setPosition(t,l),i._currentSpeed=0}else Math.sign(h-t)===Math.sign(o)?r.setPosition(h,l):r.setPosition(t,l),i._currentSpeed=0}}}getNetworkSyncData(){return{flx:this._floorLastX,fly:this._floorLastY,oh:this._oldHeight}}updateFromNetworkSyncData(e){this._floorLastX=e.flx,this._floorLastY=e.fly,this._oldHeight=e.oh}toString(){return"OnFloor"}}class w{constructor(e){this._behavior=e}enter(e){e!==this._behavior._jumping&&e!==this&&(this._behavior._canJump=!1)}leave(){}beforeUpdatingObstacles(e){}checkTransitionBeforeX(){}beforeMovingX(){}checkTransitionBeforeY(e){const t=this._behavior;t._checkTransitionOnLadder(),t._checkTransitionJumping(),t._canGrabPlatforms&&(t._requestedDeltaX!==0||t._canGrabWithoutMoving)&&t._checkGrabPlatform()}beforeMovingY(e,t){this._behavior._fall(e)}getNetworkSyncData(){return{}}updateFromNetworkSyncData(e){}toString(){return"Falling"}}class j{constructor(e){this._currentJumpSpeed=0;this._timeSinceCurrentJumpStart=0;this._jumpKeyHeldSinceJumpStart=!1;this._jumpingFirstDelta=!1;this._behavior=e}getCurrentJumpSpeed(){return this._currentJumpSpeed}setCurrentJumpSpeed(e){this._currentJumpSpeed=e}enter(e){const t=this._behavior;this._timeSinceCurrentJumpStart=0,this._jumpKeyHeldSinceJumpStart=!0,e!==t._jumping&&e!==t._falling&&(this._jumpingFirstDelta=!0),t._canJump=!1,this._currentJumpSpeed=t._jumpSpeed,t._currentFallSpeed=0}leave(){this._currentJumpSpeed=0}beforeUpdatingObstacles(e){}checkTransitionBeforeX(){}beforeMovingX(){}checkTransitionBeforeY(e){const t=this._behavior;t._checkTransitionOnLadder(),t._checkTransitionJumping(),t._canGrabPlatforms&&(t._requestedDeltaX!==0||t._canGrabWithoutMoving)&&t._lastDeltaY>=0&&t._checkGrabPlatform()}beforeMovingY(e,t){const i=this._behavior;i._jumpKey||(this._jumpKeyHeldSinceJumpStart=!1),this._timeSinceCurrentJumpStart+=e;const r=this._currentJumpSpeed;this._jumpKeyHeldSinceJumpStart&&this._timeSinceCurrentJumpStart<i._jumpSustainTime||(this._currentJumpSpeed-=i._gravity*e),this._behavior._useLegacyTrajectory?(i._requestedDeltaY-=r*e,this._jumpingFirstDelta||i._fall(e)):(i._requestedDeltaY+=(-r-this._currentJumpSpeed)/2*e,i._fall(e)),this._jumpingFirstDelta=!1,this._currentJumpSpeed<0&&i._setFalling()}getNetworkSyncData(){return{cjs:this._currentJumpSpeed,tscjs:this._timeSinceCurrentJumpStart,jkhsjs:this._jumpKeyHeldSinceJumpStart,jfd:this._jumpingFirstDelta}}updateFromNetworkSyncData(e){this._currentJumpSpeed=e.cjs,this._timeSinceCurrentJumpStart=e.tscjs,this._jumpKeyHeldSinceJumpStart=e.jkhsjs,this._jumpingFirstDelta=e.jfd}toString(){return"Jumping"}}class F{constructor(e){this._grabbedPlatform=null;this._behavior=e}enter(e){this._grabbedPlatform=e,this._behavior._canJump=!0,this._behavior._currentFallSpeed=0}leave(){this._grabbedPlatform=null}beforeUpdatingObstacles(e){}checkTransitionBeforeX(){const e=this._behavior;e._isIn(e._potentialCollidingObjects,this._grabbedPlatform.owner.id)||e._releaseGrabbedPlatform()}beforeMovingX(){const e=this._behavior;e._requestedDeltaX=this._grabbedPlatform.owner.getX()-this._grabbedPlatformLastX,e._requestedDeltaY=this._grabbedPlatform.owner.getY()-this._grabbedPlatformLastY}checkTransitionBeforeY(e){const t=this._behavior;t._checkTransitionOnLadder(),t._releasePlatformKey&&t._releaseGrabbedPlatform(),t._checkTransitionJumping()}beforeMovingY(e,t){this._grabbedPlatformLastX=this._grabbedPlatform.owner.getX(),this._grabbedPlatformLastY=this._grabbedPlatform.owner.getY()}getNetworkSyncData(){return{gplx:this._grabbedPlatformLastX,gply:this._grabbedPlatformLastY}}updateFromNetworkSyncData(e){this._grabbedPlatformLastX=e.gplx,this._grabbedPlatformLastY=e.gply}toString(){return"GrabbingPlatform"}}class M{constructor(e){this._behavior=e}enter(){this._behavior._canJump=!0,this._behavior._currentFallSpeed=0}leave(){}beforeUpdatingObstacles(e){}checkTransitionBeforeX(){}beforeMovingX(){}checkTransitionBeforeY(e){const t=this._behavior;t._isOverlappingLadder()||t._setFalling(),t._checkTransitionJumping(),t._releaseLadderKey&&t._releaseLadder()}beforeMovingY(e,t){const i=this._behavior;i._upKey&&(i._requestedDeltaY-=i._ladderClimbingSpeed*e),i._downKey&&(i._requestedDeltaY+=i._ladderClimbingSpeed*e)}getNetworkSyncData(){return{}}updateFromNetworkSyncData(e){}toString(){return"OnLadder"}}const S=class{constructor(){this.ownerMinX=0;this.ownerMaxX=0;this.headMinY=0;this.ownerMinY=0;this.headMaxY=0;this.floorMinY=0;this.ownerMaxY=0;this.floorMaxY=0;this.allowedMinDeltaY=0;this.allowedMaxDeltaY=0;this.foundOverHead=!1;this.foundUnderBottom=!1;this.highestFloorPolygon=null}initializeBeforeSearch(e,t,i){let r=Number.MAX_VALUE,s=-Number.MAX_VALUE,a=Number.MAX_VALUE,o=-Number.MAX_VALUE;for(const f of e.owner.getHitBoxes())for(const l of f.vertices)r=Math.min(r,l[0]),s=Math.max(s,l[0]),a=Math.min(a,l[1]),o=Math.max(o,l[1]);this.ownerMinX=r,this.ownerMaxX=s,this.headMinY=a+t,this.ownerMinY=a,this.headMaxY=a+i,this.floorMinY=o+t,this.ownerMaxY=o,this.floorMaxY=o+i,this.allowedMinDeltaY=t,this.allowedMaxDeltaY=Number.MAX_VALUE}initializeBeforeHitboxCheck(){this.foundOverHead=!1,this.foundUnderBottom=!1}revertTo(e,t){this.allowedMinDeltaY=e,this.allowedMaxDeltaY=t}setFloorIsTooHigh(){this.allowedMinDeltaY=Number.MAX_VALUE,this.allowedMaxDeltaY=-Number.MAX_VALUE}floorIsTooHigh(){return this.allowedMinDeltaY>this.allowedMaxDeltaY}isCollidingAnyPlatform(){return this.ownerMaxY+this.allowedMaxDeltaY<=this.floorMaxY}getFloorDeltaY(){return this.allowedMaxDeltaY}addPointConstraint(e,t){if(e<this.floorMinY){if(e>this.headMaxY){this.setFloorIsTooHigh();return}if(this.foundOverHead=!0,this.foundUnderBottom){this.setFloorIsTooHigh();return}this.allowedMinDeltaY=Math.max(this.allowedMinDeltaY,e-this.ownerMinY)}else{if(this.foundUnderBottom=!0,this.foundOverHead){this.setFloorIsTooHigh();return}this.allowedMaxDeltaY=Math.min(this.allowedMaxDeltaY,e-this.ownerMaxY),this.highestFloorPolygon=t}}};let y=S;y.instance=new S,n.registerBehavior("PlatformBehavior::PlatformerObjectBehavior",n.PlatformerObjectRuntimeBehavior)})(gdjs||(gdjs={}));
//# sourceMappingURL=platformerobjectruntimebehavior.js.map
