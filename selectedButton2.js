//กำหนดขนาดความกว้างความสูง
var gameOptions = {
	width: 1920,
	height: 1080
};

//รูปแบบการสร้าง Animation ด้วย KiwiJS เบื้องต้น
//myGame เป็นเหมือน Panel ที่เก็บทุกอย่างเอาไว้เพื่อเอาไปสร้างเป็น Canvas
var myGame = new Kiwi.Game("layer2","kiwiLayer",null,gameOptions);
//myState เป็นเหมือน Main ที่เอาไว้กำหนด ค่า และ กิจกรรมต่างๆ
var myState = new Kiwi.State("myState");
//loadingState กับ preloader จะมีหรือไม่มีก็ได้ แต่ในกรณีนี้เอาไว้เผื่อกรณีต้องการทำหน้า Loading ก่อนจะมาถึงหน้าหลัก
var loadingState = new Kiwi.State('loadingState');
var preloader = new Kiwi.State('preloader');
//timer ก็คือ ตัวที่จะใช้จับเวลา ที่ต้องประกาษตรงนี้เพราะจะได้ใช้ได้กับทุกๆ Component
var timer;

//เขียนตามนี้ไปเลย เป็น Template อยู่แล้ว
myState.preload = function(){
  Kiwi.State.prototype.preload.call(this);

}

//เอาไว้สำหรับสร้างของที่ต้องการให้มีใน Canvas โดยที่ create จะถูกเรียกแค่ครั้งเดียวตอนเปิดหน้านี้ขึ้นมา
myState.create = function(){
  Kiwi.State.prototype.create.call( this );

	//คำว่า this จะหมายถึง myState ซึ่งหมายถึงทั้งอันนี้
	//this.something จะหมายถึง ให้ component ที่ชื่อ something เป็นของ myState

	//เนื่องจาก KiwiJS เอาไว้สำหรับทำเกม ดังนั้นจึงต้องมีพื้นหลัง กรณีไม่ได้เขียนบรรทัดนี้ก็จะเป็นพื้นหลังสีขาวอัตโนมัติ
  this.background = new Kiwi.GameObjects.StaticImage(this, this.textures.background, 0, 0);

	//เนื่องจาก Comonent ที่เราต้องการจะต้องเคลื่อนไหวได้ จึงสร้างเป็น Sprite
	//แต่ว่าเพราะเราจะมี Sprite 2 ประเภท คืออันที่จะใช้แทนมือของเรา และก็อันที่ใช้แทนปุ่มต่างๆ
	//จึงเขียนมาเป็น Object ที่จะเป็น SubClass ของ Sprite เพื่อให้ไม่ต้องเขียนฟังก์ชั่นซ้ำๆกัหลายครั้ง
	//เป็นตัวที่จะใช้แทน Mouse ในที่นี้จะกำหนดให้เป็นรูปมือ ในรูปแบบนี้ this.textures.[ชื่อตัวแปรของรูป]
  this.character = new Pointer( this, this.textures.characterSprite, 900, 500 );
	//เพื่อให้ Sprite ของเราขยับได้ จึงต้องกำหนดให้มี physics ด้วย
  this.character.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this.character, this.character.box));
	//เนื่องจากเรามากล่องพลังงานที่ทำงานคล้ายๆกันเยอะมาก เลยสร้างกรุ้ปไว้ให้มัน
	this.buttonGroup = new Kiwi.Group(this);
	this.coal = new Button( this, this.textures.coal,298,150,'factory/01/03-1_Factory.html');
  this.petroleum = new Button( this, this.textures.petroleum, 656,150,'factory/02/03-2_Factory.html');
	this.nuclear = new Button( this, this.textures.nuclear, 1014,150,'factory/03/03-3_Factory.html');
  this.gas = new Button( this, this.textures.gas, 1372,150,'factory/04/03-4_Factory.html');
  this.water = new Button( this, this.textures.water, 298,473,'factory/05/03-5_Factory.html');
  this.sun = new Button( this, this.textures.sun, 656,473,'factory/06/03-6_Factory.html');
  this.wind = new Button( this, this.textures.wind, 1014,473,'factory/07/03-7_Factory.html');
	this.underworld = new Button( this, this.textures.underworld, 1372,473,'factory/08/03-8_Factory.html');

	//ทุกๆ Component ที่เรา new ขึ้นมาจะยังไม่สามารถมองเห็นได้ในตอนนี้
	//โดยเพื่อจะแสดงออกมาให้ปรากฏใน Canvas เราจะต้องใช้คำสั่ง this.addChild(ก็ชื่อตามที่ new ขึ้นมา);
	//ตอน addChild จะมีลำดับนะ ก็คืออะไร add ทีหลังก็จะไปบังอันที่ add ไปก่อน

	//ดังนั้นเราต้อง add background เข้าไปเป็นอันแรก
	this.addChild(this.background);

	//อันดับต่อไป เนื่องจากตอนนี้กล่องเรายังอยู่กระจัดกระจายกัน เราก็เอามันไปรวมกันไว้ใน Group ที่ประกาศขึ้นมาข้างบนก่อน
	this.buttonGroup.addChild(this.underworld);
	this.buttonGroup.addChild(this.wind);
	this.buttonGroup.addChild(this.sun);
	this.buttonGroup.addChild(this.water);
	this.buttonGroup.addChild(this.gas);
	this.buttonGroup.addChild(this.nuclear);
	this.buttonGroup.addChild(this.petroleum);
	this.buttonGroup.addChild(this.coal);

	//ทีนี้ก็ add Group ของกล่องเข้าไป
	this.addChild( this.buttonGroup );

	//เนื่องจากเราจะให้ มือ อยู่ข้างบนสุดก็เลย add เป็นอย่างสุดท้าย
  this.addChild( this.character );

	//ต่อไปก็คือวิธีการที่จะทำให้มัน Timeout แล้วกลับไปที่อีกหน้านึง
	//clock ก็คือเป็นการสร้าง นาฬิกา ขึ้นมาให้กับ Panel
	var clock = this.game.time.clock;
	//เป็นการกสร้าง timer ขึ้นมาให้มันนับทีละ 10 วิ
	timer = clock.createTimer( "timeoutTimer", 10 );
	//ต่อไปนี้เป็นการบอกให้ timer รู้ว่าต้องทำอะไรเมื่อไหร่ ในที่นี้มันจะทำก็ต้องเมื่อ timer หยุดลง
	timer.createTimerEvent( Kiwi.Time.TimerEvent.TIMER_STOP,
			function() {
					if(myState.control.hands[0].pointables[0].touchZone  == "hovering" || myState.control.hands[0].pointables[0].touchZone  == "touching" ){
						//อันนี้หมายถึง ถ้าขยับมืออยู่ก็ไม่ต้องทำอะไร
					}else {
						//อันนี้แน่นอน ถ้าไม่มีใครขยับอะไรเลยก็ให้มันกลับไปหน้า index
						console.log( "Time's Up" );
						window.location.href = 'index.html';
						clock.removeTimer( timer );
					}

			} );

	//เริ่มต้นจับเวลา
	timer.start();


	//เป็นการสร้าง Leap Controller ให้กับ Kiwi ของเรา
	//การจะประกาศบรรทัดนี้ได้ อย่าลืม import ให้ครบในหน้า html ที่ import ไฟล์นี้ด้วย
  this.control = Kiwi.Plugins.LEAPController.createController();
}


//ฟังก์ชั่นนี้จะถูกทำตลอดเวลาที่ยังอยู่ใน myState
myState.update = function(){
  Kiwi.State.prototype.update.call(this);


	// if( this.petroleum.isDown ){
	// 	this.petroleum.physics.velocity.y = 73;
	// }

	console.log('update' + this.control.hands[0].pointables[0].touchZone);


		if(this.control.hands[0].pointables[0].touchZone == "hovering"){
			timer.start();
			let xVal = this.control.hands[0].posX;
			let yVal = (this.control.hands[0].posY);

			//กำหนดให้ LEAP รู้ว่าเอามือลงโดยการอ้างอิงจากแกนYที่ตำแหน่ง 150
			if(yVal <= 150) yVal = (150 - yVal);
			else yVal = -1*(yVal -150);

			let newX = this.character.x + xVal*0.25;
			let newY = this.character.y + yVal*0.20;

			//ดักขอบ
			if(newX < 20 || newX >1800) newX = this.character.x;
			if(newY < 10 || newY > 700) newY = this.character.y;

			//Updateตำแหน่งมือ
			this.character.x = newX;
			this.character.y = newY;

			this.updateButtonAnimation();
      console.log('hovering');


    } else if(this.control.hands[0].pointables[0].touchZone == "touching"){
			timer.start();
			if(this.control.hands[0].posz < -100){
				this.updateTheVelocity();
				this.character.animation.play('press');
			}
			// this.resetTimer();
    }else{
	        this.character.animation.play('point');

		}

		var chkBtn = this.buttonGroup.members;
		for (var i = 0; i < chkBtn.length; i++) {
			console.log(chkBtn[i].x);
			if(chkBtn[i].x >= 1920){
					window.location.href = chkBtn[i].page;
			}
		}


}

myState.updateButtonAnimation = function(){
	var chkBtn = this.buttonGroup.members;
	for (var i = 0; i < chkBtn.length; i++) {
		if(this.character.physics.overlaps(chkBtn[i])){
				console.log("Change color");
				chkBtn[i].animation.play('float');
		}
	}



}

myState.updateLoadingPageStatus = function(){
	var chkBtn = this.buttonGroup.members;
	for (var i = 0; i < chkBtn.length; i++) {
		console.log(chkBtn[i].x);
		if(chkBtn[i].physics.velocity.y > 0 || chkBtn[i].x != chkBtn[i].originalX ){
				return true;
		}
	}
	console.log('Update loading page');
	return false;
}

myState.updateTheVelocity = function(){

	var chkBtn = this.buttonGroup.members;
	for (var i = 0; i < chkBtn.length; i++) {
		if(this.character.physics.overlaps(chkBtn[i]) && !this.updateLoadingPageStatus()){
				chkBtn[i].physics.velocity.y = 70;
				return;
		}
	}

}

var Button = function (state,image, x, y, page){
    Kiwi.Plugins.GameObjects.TouchButton.call(this, state, image, x, y);

		this.page = page;
		this.originalX = x;

    this.animation.add('float', [0], 0.05, false);
    this.animation.add('lay', [1], 0.05, true);
    this.animation.play('lay');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));

		// game.input.mouse.onDown.add( this.fallen, this );

    Button.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
				this.loadedFinish();
				// if( this.isDown ){
				// 	this.physics.velocity.y = 70;
				// }
				this.fallen();
    };

		this.factoryPage = function(){
			return this.page;
		};

		this.isLoad = function(){
			if(this.physics.velocity.y > 0 || (this.y === 600 && this.x < 1920))
			return true;
			return false;
		};

		this.fallen = function(){
			this.animation.play('lay');
			if(this.y >= 600){
				console.log(this.y);
				this.physics.velocity.y = 0;
				this.x += 4.07;
			}
		};

		this.loadedFinish = function(){
			if(this.physics.velocity.y > 0){
				this.fallen();
			}
		};


}
Kiwi.extend(Button, Kiwi.Plugins.GameObjects.TouchButton);


var Pointer = function (state,image, x, y){
    Kiwi.GameObjects.Sprite.call(this, state, image, x, y);

    this.animation.add( "point", [ 0 ], 0.01, false );
    this.animation.add( "press", [ 1 ], 0.01, false );
    this.animation.play('point');

    this.physics = this.components.add(new Kiwi.Components.ArcadePhysics(this, this.box));
    Pointer.prototype.update = function(){
        Kiwi.GameObjects.Sprite.prototype.update.call(this);
        this.physics.update();
        this.animation.play('point');

    }
}
Kiwi.extend(Pointer,Kiwi.GameObjects.Sprite);

preloader.preload = function(){
    Kiwi.State.prototype.preload.call(this);
    // this.addImage('loadingImage', 'assets/loadingImage.png', true);


}

preloader.create = function(){
    Kiwi.State.prototype.create.call(this);
    this.game.states.switchState('loadingState');

}

loadingState.preload = function(){
  Kiwi.State.prototype.preload.call(this);

	this.addSpriteSheet('characterSprite','pointer.png',100,125);
	this.addSpriteSheet('underworld','button/btn1_underworld.png',250,300);
	this.addSpriteSheet('nuclear','button/btn2_nuclear.png',250,300);
	this.addSpriteSheet('wind','button/btn3_wind.png',250,300);
	this.addSpriteSheet('sun','button/btn4_sun.png',250,300);
	this.addSpriteSheet('water','button/btn5_water.png',250,300);
	this.addSpriteSheet('gas','button/btn6_gas.png',250,300);
	this.addSpriteSheet('coal','button/btn7_coal.png',250,300);
	this.addSpriteSheet('petroleum','button/btn8_petroleum.png',250,300);

	this.addImage('background','background.png');

}

loadingState.update = function(){
    Kiwi.State.prototype.update.call(this);
}


loadingState.create = function(){
    Kiwi.State.prototype.create.call(this);
    console.log("inside create of loadingState");
    this.switchToMain();

}
loadingState.switchToMain = function(){
    this.game.states.switchState('myState');
}

myState.resetTimer = function() {
    console.log( "Reset Timer"+clock );
};


myGame.states.addState(loadingState);
myGame.states.addState(preloader);
myGame.states.addState(myState);
myGame.states.switchState('preloader');
