(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgpgJIAAgBQAQgLACgVIBBAFQgFAygmAeg");
	this.shape.setTransform(-44.2,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwgWQAXgNAbAAQAZAAAWAKIAAAAIgdA4IgCADQgHgDgIAAQgKAAgKAFg");
	this.shape_1.setTransform(-51.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgWANQgFgKADgJQACgKAKgGQAFgDAHAAQAPAAAIANQAFAJgDAKQgCAKgKAFQgGAEgHAAQgOAAgIgNg");
	this.shape_2.setTransform(-51,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgcAHQgMgVgCgVIACAAIA+gJIACAAQAAAJAFAJQAFAHAJAIIgjA4QgWgPgOgXg");
	this.shape_3.setTransform(-57.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC431").s().p("Ag+BxQgfgSgSgeQgagvANgyQAOg0AugbQAegRAiAAQAiAAAdARQAfARARAeQAbAugNAzQgOAzguAcQgfARgiAAQghAAgdgQg");
	this.shape_4.setTransform(-51.1,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhAgQQAZgSADgfIBkAHIABAAQgCAlgSAgQgSAhgeAWg");
	this.shape_5.setTransform(111.1,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhLgjQAlgUApAAQAmAAAjARIgvBaQgLgEgOAAQgPAAgQAIg");
	this.shape_6.setTransform(100.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgiAVQgJgPAFgPQAEgQAOgJQAKgGAKAAQAXAAAMAVQAJAOgFAQQgEAQgPAIQgIAGgMAAQgXAAgLgUg");
	this.shape_7.setTransform(100.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgsAKQgRgcgFglIBlgNIACgBQABAPAIANQAIANANAJIg2BZQgkgXgVglg");
	this.shape_8.setTransform(90.1,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC431").s().p("AhhCuQgwgbgbguQgqhIAWhPQAVhQBIgqQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgVBPQgWBQhIAqQguAbg2AAQgzAAgugag");
	this.shape_9.setTransform(100.5,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgvgVQAVgFAJgUIBBAdIAAAAQgXAxg0APg");
	this.shape_10.setTransform(83.7,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgRAhQgLgEgMACIgJhHQAegEAaALQAZAJASATIg0AvQgGgFgJgEg");
	this.shape_11.setTransform(81.1,-14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgJAbQgPgGgDgQQgCgLAHgJQAGgKAMgCQAHgBAHACQAPAGADAQQACALgHAJQgHAKgLACIgFABQgEAAgFgCg");
	this.shape_12.setTransform(77.6,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgngBQgEgYAGgZIBFAQIABAAQgCALABAJQACALAHAIIg4AuQgSgXgGgdg");
	this.shape_13.setTransform(69.7,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC431").s().p("AgwCDQgigMgYgdQgYgdgHglQgKg4AigwQAhgvA5gKQAjgGAkANQAjANAYAcQAZAdAGAlQAKA4giAwQghAvg5AKQgMACgMAAQgYAAgYgJg");
	this.shape_14.setTransform(77.6,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgigIIgBgBQAOgJABgRIA4AEQgEAqghAZg");
	this.shape_15.setTransform(19.7,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgpgTQAVgLAWABQATgBAVAJIgZAwIgBACQgHgDgHAAQgHAAgKAFg");
	this.shape_16.setTransform(13.7,-11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgSALQgFgIADgIQACgJAIgEQAFgDAFAAQANAAAGALQAFAIgCAIQgDAJgIAEQgFADgGAAQgLAAgHgLg");
	this.shape_17.setTransform(13.9,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgYAFQgJgQgDgTIACAAIA1gHIABAAQAAAHAFAIQAFAIAHAEIgeAwQgTgMgMgVg");
	this.shape_18.setTransform(8.2,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC431").s().p("Ag1BfQgagOgOgaQgXgoAMgqQALgsAngXQAbgPAbAAQAdAAAZAPQAaAOAPAaQAWAogLAqQgMArgnAXQgaAQgdAAQgbAAgagPg");
	this.shape_19.setTransform(13.9,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AguAxQAHgfgSgYIBQg+IABAAQAWAdAIAkQAJAjgIAlg");
	this.shape_20.setTransform(74.7,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhEAiQAQgoAfgbQAcgaAkgKIAYBfIACADQgMAFgKAIQgMAMgHAQg");
	this.shape_21.setTransform(54.1,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgMAnQgQgGgHgPQgIgPAFgPQAEgLAIgGQAIgHALgDQAKgCAKADQAQAGAHAPQAIAPgFAPQgDAKgJAHQgMALgOAAQgGAAgHgCg");
	this.shape_22.setTransform(63.3,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgLA1QgggLgcgYIBDhNIABgBQALAKAOAEQAOAFAQgCIAUBmQgPACgPAAQgbAAgagIg");
	this.shape_23.setTransform(59.1,33.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC431").s().p("Ag9C+QhPgaglhKQgmhKAahOQARgzAogjQAngjAzgMQA1gLA0ARQBOAaAmBKQAlBKgaBOQgRAzgoAjQgoAjgzAMQgVAEgVAAQgeAAgfgKg");
	this.shape_24.setTransform(63.3,22.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AhBAUIA1hWIABgBQAeAUAVAfQAVAeAFAlIhjAQIgCABQgEgfgagRg");
	this.shape_25.setTransform(53.3,-18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("Ag+BEQAAgqATglQARggAegYIA7BTQgKAJgFAKQgIAPAAASg");
	this.shape_26.setTransform(32,-17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgaAeQgNgMgBgQQAAgKAFgKQAKgUAYgCQAQAAANALQAMALABARQABALgGAJQgFAJgJAGQgJAGgLABIgCAAQgOAAgMgLg");
	this.shape_27.setTransform(42.9,-11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhKAtIACgDIAihcIABgCQAOAFAOAAQAPgBAOgIIA3BYQgmAWgpACIgIABQggAAgegMg");
	this.shape_28.setTransform(44.2,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC431").s().p("AiHCUQg8g5gEhTQgCg0AYgwQAZgvAsgcQAugeA2gCQBTgEA8A4QA+A4ADBTQACA0gYAxQgZAugsAdQguAeg3ACIgIAAQhNAAg6g0g");
	this.shape_29.setTransform(42.9,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("Ag8gTIgBgBQAYgMAIgdIBbATIAAAAQgHAhgUAbQgUAbgeASg");
	this.shape_30.setTransform(33.7,29.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgFAtQgPgCgQAFIghhYQAlgOAlAFQAhAFAgATIg1BKIgBADQgLgGgKgBg");
	this.shape_31.setTransform(26,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgEAlQgWgDgIgUQgGgOAGgNQAGgPAPgGQAJgEAJACQAWACAIAVQAGANgGAOQgGAPgPAGQgHADgGAAIgFgBg");
	this.shape_32.setTransform(24.5,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AguABQgNgeABghIBfABQAAAOAFAMQAFANAMAKIg7BLQgfgagPgkg");
	this.shape_33.setTransform(14.5,27.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC431").s().p("AgXC3QgxgGgmgeQgpgegTguQgdhGAdhGQAdhHBHgdQAtgUAxAHQAwAGAnAdQAoAeATAvQAeBGgeBGQgdBHhGAeQgiAOgkAAQgLAAgNgCg");
	this.shape_34.setTransform(24.5,21.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AhTADQAcgggFgrICMgYIABAAQAIA0gNAwQgOA0giApg");
	this.shape_35.setTransform(-49.5,-8.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhngYQAugoA5gNQA0gMAzAKIghCHIgBAFQgTgCgQAEQgWAFgSARg");
	this.shape_36.setTransform(-70.9,-30.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgPA3QgPgEgKgLQgRgSABgWQABgZARgPQAKgLAQgEQAOgDAPAEQAOAFALALQAQARgBAWQAAAYgRARQgMALgPADQgGABgHAAQgHAAgIgCg");
	this.shape_37.setTransform(-65.2,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgtAlQgjglgRguICJg0QAHAUAOAOQAPARAWAHIgtCLQg4gSgqgsg");
	this.shape_38.setTransform(-78.3,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEC431").s().p("AhNEPQhKgVg0g4QhRhUAEh0QADh0BUhRQA3g0BJgSQBHgRBHAVQBKAVA1A3QBQBVgDBzQgDB1hUBQQg3A0hKASQghAIggAAQgnAAgmgLg");
	this.shape_39.setTransform(-65.3,-14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AhKADQAagdgGgmIB9gUIABgBQAHAugMArQgMAugfAkg");
	this.shape_40.setTransform(-2.3,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AhbgVQAogjAzgMQAsgLAwAJIgeB4IgBAEQgQgCgPAEQgUAEgQAPg");
	this.shape_41.setTransform(-21.2,-4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgNAwQgNgDgKgKQgOgQAAgTQABgVAPgPQALgJAMgDQAMgEANAFQANADAKAKQAOAQAAATQgBAWgPAOQgKAJgNAEIgLABQgHAAgHgDg");
	this.shape_42.setTransform(-16.2,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgoAgQgegfgQgqIAEgBIBzgsIACgBQAGARANANQAOAPATAHIgnB7QgzgRglgng");
	this.shape_43.setTransform(-27.8,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC431").s().p("AhEDwQhBgSgvgyQhHhLAChmQADhnBLhIQAwguBBgQQA/gPBAASQBBATAvAxQBHBLgDBnQgCBnhLBHQgyAvhAAPQgdAHgdAAQgiAAgigKg");
	this.shape_44.setTransform(-16.3,9.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgdgOIAAgBQAOgBAHgMIAlAYIABAAQgTAcghAFg");
	this.shape_45.setTransform(-68.5,28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgOAVQgHgDgIAAIABgtQASAAAPAJQAOAHALANIgjAZIgBABIgIgHg");
	this.shape_46.setTransform(-68.9,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgIAQQgIgFgBgKQAAgHAFgFQAFgGAHAAQAEAAAEACQAJAFABAKQAAAHgFAFQgFAGgIAAIAAAAQgDAAgFgCg");
	this.shape_47.setTransform(-71.9,23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AgYgBQAAgPAFgQIAqAQIAAAAQgCAGAAAHQAAAFAEAHIgmAYQgKgRgBgRg");
	this.shape_48.setTransform(-77,24.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEC431").s().p("AgoBOQgVgLgMgTQgNgUgBgYQgBgkAZgaQAYgbAlgCQAWAAAVAKQAVALAMAUQANAUABAYQABAjgZAbQgYAaglACIgDAAQgVAAgTgKg");
	this.shape_49.setTransform(-71.9,23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AhBgQQAagSACgfIBnAHQgDAkgTAhQgSAhgdAWg");
	this.shape_50.setTransform(-89.9,25.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AhLgjQAlgUAqAAQAlAAAjAQIgvBbQgMgFgMAAQgQAAgQAJg");
	this.shape_51.setTransform(-100.9,6.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgUAjQgJgFgFgKQgJgOAEgQQAFgQAOgIQAJgGALAAQAXAAAMAUQAJAPgFAPQgEARgPAIQgJAGgLAAQgKAAgKgGg");
	this.shape_52.setTransform(-100.4,18.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AgsAKQgSgfgEgjIADAAIBigNIACAAQABAQAHALQAIAOAOAJIg2BZQgkgYgVgkg");
	this.shape_53.setTransform(-110.9,26);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEC431").s().p("AhhCuQgwgagbgwQgqhHAVhPQAWhRBIgpQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgWBQQgVBQhIApQguAbg2AAQg0AAgtgag");
	this.shape_54.setTransform(-100.5,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-42.5,241.2,85);


(lib.Tween41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgpgJIAAgBQAQgLACgVIBBAFQgFAygmAeg");
	this.shape.setTransform(-44.2,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwgWQAXgNAbAAQAZAAAWAKIAAAAIgdA4IgCADQgHgDgIAAQgKAAgKAFg");
	this.shape_1.setTransform(-51.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgWANQgFgKADgJQACgKAKgGQAFgDAHAAQAPAAAIANQAFAJgDAKQgCAKgKAFQgGAEgHAAQgOAAgIgNg");
	this.shape_2.setTransform(-51,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgcAHQgMgVgCgVIACAAIA+gJIACAAQAAAJAFAJQAFAHAJAIIgjA4QgWgPgOgXg");
	this.shape_3.setTransform(-57.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC431").s().p("Ag+BxQgfgSgSgeQgagvANgyQAOg0AugbQAegRAiAAQAiAAAdARQAfARARAeQAbAugNAzQgOAzguAcQgfARgiAAQghAAgdgQg");
	this.shape_4.setTransform(-51.1,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhAgQQAZgSADgfIBkAHIABAAQgCAlgSAgQgSAhgeAWg");
	this.shape_5.setTransform(111.1,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhLgjQAlgUApAAQAmAAAjARIgvBaQgLgEgOAAQgPAAgQAIg");
	this.shape_6.setTransform(100.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgiAVQgJgPAFgPQAEgQAOgJQAKgGAKAAQAXAAAMAVQAJAOgFAQQgEAQgPAIQgIAGgMAAQgXAAgLgUg");
	this.shape_7.setTransform(100.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgsAKQgRgcgFglIBlgNIACgBQABAPAIANQAIANANAJIg2BZQgkgXgVglg");
	this.shape_8.setTransform(90.1,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC431").s().p("AhhCuQgwgbgbguQgqhIAWhPQAVhQBIgqQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgVBPQgWBQhIAqQguAbg2AAQgzAAgugag");
	this.shape_9.setTransform(100.5,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgvgVQAVgFAJgUIBBAdIAAAAQgXAxg0APg");
	this.shape_10.setTransform(83.7,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgRAhQgLgEgMACIgJhHQAegEAaALQAZAJASATIg0AvQgGgFgJgEg");
	this.shape_11.setTransform(81.1,-14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgJAbQgPgGgDgQQgCgLAHgJQAGgKAMgCQAHgBAHACQAPAGADAQQACALgHAJQgHAKgLACIgFABQgEAAgFgCg");
	this.shape_12.setTransform(77.6,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgngBQgEgYAGgZIBFAQIABAAQgCALABAJQACALAHAIIg4AuQgSgXgGgdg");
	this.shape_13.setTransform(69.7,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC431").s().p("AgwCDQgigMgYgdQgYgdgHglQgKg4AigwQAhgvA5gKQAjgGAkANQAjANAYAcQAZAdAGAlQAKA4giAwQghAvg5AKQgMACgMAAQgYAAgYgJg");
	this.shape_14.setTransform(77.6,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgigIIgBgBQAOgJABgRIA4AEQgEAqghAZg");
	this.shape_15.setTransform(19.7,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgpgTQAVgLAWABQATgBAVAJIgZAwIgBACQgHgDgHAAQgHAAgKAFg");
	this.shape_16.setTransform(13.7,-11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgSALQgFgIADgIQACgJAIgEQAFgDAFAAQANAAAGALQAFAIgCAIQgDAJgIAEQgFADgGAAQgLAAgHgLg");
	this.shape_17.setTransform(13.9,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgYAFQgJgQgDgTIACAAIA1gHIABAAQAAAHAFAIQAFAIAHAEIgeAwQgTgMgMgVg");
	this.shape_18.setTransform(8.2,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC431").s().p("Ag1BfQgagOgOgaQgXgoAMgqQALgsAngXQAbgPAbAAQAdAAAZAPQAaAOAPAaQAWAogLAqQgMArgnAXQgaAQgdAAQgbAAgagPg");
	this.shape_19.setTransform(13.9,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AguAxQAHgfgSgYIBQg+IABAAQAWAdAIAkQAJAjgIAlg");
	this.shape_20.setTransform(74.7,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhEAiQAQgoAfgbQAcgaAkgKIAYBfIACADQgMAFgKAIQgMAMgHAQg");
	this.shape_21.setTransform(54.1,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgMAnQgQgGgHgPQgIgPAFgPQAEgLAIgGQAIgHALgDQAKgCAKADQAQAGAHAPQAIAPgFAPQgDAKgJAHQgMALgOAAQgGAAgHgCg");
	this.shape_22.setTransform(63.3,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgLA1QgggLgcgYIBDhNIABgBQALAKAOAEQAOAFAQgCIAUBmQgPACgPAAQgbAAgagIg");
	this.shape_23.setTransform(59.1,33.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC431").s().p("Ag9C+QhPgaglhKQgmhKAahOQARgzAogjQAngjAzgMQA1gLA0ARQBOAaAmBKQAlBKgaBOQgRAzgoAjQgoAjgzAMQgVAEgVAAQgeAAgfgKg");
	this.shape_24.setTransform(63.3,22.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AhBAUIA1hWIABgBQAeAUAVAfQAVAeAFAlIhjAQIgCABQgEgfgagRg");
	this.shape_25.setTransform(53.3,-18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("Ag+BEQAAgqATglQARggAegYIA7BTQgKAJgFAKQgIAPAAASg");
	this.shape_26.setTransform(32,-17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgaAeQgNgMgBgQQAAgKAFgKQAKgUAYgCQAQAAANALQAMALABARQABALgGAJQgFAJgJAGQgJAGgLABIgCAAQgOAAgMgLg");
	this.shape_27.setTransform(42.9,-11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhKAtIACgDIAihcIABgCQAOAFAOAAQAPgBAOgIIA3BYQgmAWgpACIgIABQggAAgegMg");
	this.shape_28.setTransform(44.2,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC431").s().p("AiHCUQg8g5gEhTQgCg0AYgwQAZgvAsgcQAugeA2gCQBTgEA8A4QA+A4ADBTQACA0gYAxQgZAugsAdQguAeg3ACIgIAAQhNAAg6g0g");
	this.shape_29.setTransform(42.9,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("Ag8gTIgBgBQAYgMAIgdIBbATIAAAAQgHAhgUAbQgUAbgeASg");
	this.shape_30.setTransform(33.7,29.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgFAtQgPgCgQAFIghhYQAlgOAlAFQAhAFAgATIg1BKIgBADQgLgGgKgBg");
	this.shape_31.setTransform(26,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgEAlQgWgDgIgUQgGgOAGgNQAGgPAPgGQAJgEAJACQAWACAIAVQAGANgGAOQgGAPgPAGQgHADgGAAIgFgBg");
	this.shape_32.setTransform(24.5,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AguABQgNgeABghIBfABQAAAOAFAMQAFANAMAKIg7BLQgfgagPgkg");
	this.shape_33.setTransform(14.5,27.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC431").s().p("AgXC3QgxgGgmgeQgpgegTguQgdhGAdhGQAdhHBHgdQAtgUAxAHQAwAGAnAdQAoAeATAvQAeBGgeBGQgdBHhGAeQgiAOgkAAQgLAAgNgCg");
	this.shape_34.setTransform(24.5,21.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AhTADQAcgggFgrICMgYIABAAQAIA0gNAwQgOA0giApg");
	this.shape_35.setTransform(-49.5,-8.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhngYQAugoA5gNQA0gMAzAKIghCHIgBAFQgTgCgQAEQgWAFgSARg");
	this.shape_36.setTransform(-70.9,-30.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgPA3QgPgEgKgLQgRgSABgWQABgZARgPQAKgLAQgEQAOgDAPAEQAOAFALALQAQARgBAWQAAAYgRARQgMALgPADQgGABgHAAQgHAAgIgCg");
	this.shape_37.setTransform(-65.2,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgtAlQgjglgRguICJg0QAHAUAOAOQAPARAWAHIgtCLQg4gSgqgsg");
	this.shape_38.setTransform(-78.3,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEC431").s().p("AhNEPQhKgVg0g4QhRhUAEh0QADh0BUhRQA3g0BJgSQBHgRBHAVQBKAVA1A3QBQBVgDBzQgDB1hUBQQg3A0hKASQghAIggAAQgnAAgmgLg");
	this.shape_39.setTransform(-65.3,-14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AhKADQAagdgGgmIB9gUIABgBQAHAugMArQgMAugfAkg");
	this.shape_40.setTransform(-2.3,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AhbgVQAogjAzgMQAsgLAwAJIgeB4IgBAEQgQgCgPAEQgUAEgQAPg");
	this.shape_41.setTransform(-21.2,-4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgNAwQgNgDgKgKQgOgQAAgTQABgVAPgPQALgJAMgDQAMgEANAFQANADAKAKQAOAQAAATQgBAWgPAOQgKAJgNAEIgLABQgHAAgHgDg");
	this.shape_42.setTransform(-16.2,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgoAgQgegfgQgqIAEgBIBzgsIACgBQAGARANANQAOAPATAHIgnB7QgzgRglgng");
	this.shape_43.setTransform(-27.8,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC431").s().p("AhEDwQhBgSgvgyQhHhLAChmQADhnBLhIQAwguBBgQQA/gPBAASQBBATAvAxQBHBLgDBnQgCBnhLBHQgyAvhAAPQgdAHgdAAQgiAAgigKg");
	this.shape_44.setTransform(-16.3,9.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgdgOIAAgBQAOgBAHgMIAlAYIABAAQgTAcghAFg");
	this.shape_45.setTransform(-68.5,28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgOAVQgHgDgIAAIABgtQASAAAPAJQAOAHALANIgjAZIgBABIgIgHg");
	this.shape_46.setTransform(-68.9,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgIAQQgIgFgBgKQAAgHAFgFQAFgGAHAAQAEAAAEACQAJAFABAKQAAAHgFAFQgFAGgIAAIAAAAQgDAAgFgCg");
	this.shape_47.setTransform(-71.9,23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AgYgBQAAgPAFgQIAqAQIAAAAQgCAGAAAHQAAAFAEAHIgmAYQgKgRgBgRg");
	this.shape_48.setTransform(-77,24.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEC431").s().p("AgoBOQgVgLgMgTQgNgUgBgYQgBgkAZgaQAYgbAlgCQAWAAAVAKQAVALAMAUQANAUABAYQABAjgZAbQgYAaglACIgDAAQgVAAgTgKg");
	this.shape_49.setTransform(-71.9,23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AhBgQQAagSACgfIBnAHQgDAkgTAhQgSAhgdAWg");
	this.shape_50.setTransform(-89.9,25.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AhLgjQAlgUAqAAQAlAAAjAQIgvBbQgMgFgMAAQgQAAgQAJg");
	this.shape_51.setTransform(-100.9,6.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgUAjQgJgFgFgKQgJgOAEgQQAFgQAOgIQAJgGALAAQAXAAAMAUQAJAPgFAPQgEARgPAIQgJAGgLAAQgKAAgKgGg");
	this.shape_52.setTransform(-100.4,18.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AgsAKQgSgfgEgjIADAAIBigNIACAAQABAQAHALQAIAOAOAJIg2BZQgkgYgVgkg");
	this.shape_53.setTransform(-110.9,26);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEC431").s().p("AhhCuQgwgagbgwQgqhHAVhPQAWhRBIgpQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgWBQQgVBQhIApQguAbg2AAQg0AAgtgag");
	this.shape_54.setTransform(-100.5,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-42.5,241.2,85);


(lib.Tween40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgpgJIAAgBQAQgLACgVIBBAFQgFAygmAeg");
	this.shape.setTransform(-44.2,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwgWQAXgNAbAAQAZAAAWAKIAAAAIgdA4IgCADQgHgDgIAAQgKAAgKAFg");
	this.shape_1.setTransform(-51.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgWANQgFgKADgJQACgKAKgGQAFgDAHAAQAPAAAIANQAFAJgDAKQgCAKgKAFQgGAEgHAAQgOAAgIgNg");
	this.shape_2.setTransform(-51,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgcAHQgMgVgCgVIACAAIA+gJIACAAQAAAJAFAJQAFAHAJAIIgjA4QgWgPgOgXg");
	this.shape_3.setTransform(-57.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC431").s().p("Ag+BxQgfgSgSgeQgagvANgyQAOg0AugbQAegRAiAAQAiAAAdARQAfARARAeQAbAugNAzQgOAzguAcQgfARgiAAQghAAgdgQg");
	this.shape_4.setTransform(-51.1,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhAgQQAZgSADgfIBkAHIABAAQgCAlgSAgQgSAhgeAWg");
	this.shape_5.setTransform(111.1,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhLgjQAlgUApAAQAmAAAjARIgvBaQgLgEgOAAQgPAAgQAIg");
	this.shape_6.setTransform(100.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgiAVQgJgPAFgPQAEgQAOgJQAKgGAKAAQAXAAAMAVQAJAOgFAQQgEAQgPAIQgIAGgMAAQgXAAgLgUg");
	this.shape_7.setTransform(100.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgsAKQgRgcgFglIBlgNIACgBQABAPAIANQAIANANAJIg2BZQgkgXgVglg");
	this.shape_8.setTransform(90.1,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC431").s().p("AhhCuQgwgbgbguQgqhIAWhPQAVhQBIgqQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgVBPQgWBQhIAqQguAbg2AAQgzAAgugag");
	this.shape_9.setTransform(100.5,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgvgVQAVgFAJgUIBBAdIAAAAQgXAxg0APg");
	this.shape_10.setTransform(83.7,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgRAhQgLgEgMACIgJhHQAegEAaALQAZAJASATIg0AvQgGgFgJgEg");
	this.shape_11.setTransform(81.1,-14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgJAbQgPgGgDgQQgCgLAHgJQAGgKAMgCQAHgBAHACQAPAGADAQQACALgHAJQgHAKgLACIgFABQgEAAgFgCg");
	this.shape_12.setTransform(77.6,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgngBQgEgYAGgZIBFAQIABAAQgCALABAJQACALAHAIIg4AuQgSgXgGgdg");
	this.shape_13.setTransform(69.7,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC431").s().p("AgwCDQgigMgYgdQgYgdgHglQgKg4AigwQAhgvA5gKQAjgGAkANQAjANAYAcQAZAdAGAlQAKA4giAwQghAvg5AKQgMACgMAAQgYAAgYgJg");
	this.shape_14.setTransform(77.6,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgigIIgBgBQAOgJABgRIA4AEQgEAqghAZg");
	this.shape_15.setTransform(19.7,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgpgTQAVgLAWABQATgBAVAJIgZAwIgBACQgHgDgHAAQgHAAgKAFg");
	this.shape_16.setTransform(13.7,-11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgSALQgFgIADgIQACgJAIgEQAFgDAFAAQANAAAGALQAFAIgCAIQgDAJgIAEQgFADgGAAQgLAAgHgLg");
	this.shape_17.setTransform(13.9,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgYAFQgJgQgDgTIACAAIA1gHIABAAQAAAHAFAIQAFAIAHAEIgeAwQgTgMgMgVg");
	this.shape_18.setTransform(8.2,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC431").s().p("Ag1BfQgagOgOgaQgXgoAMgqQALgsAngXQAbgPAbAAQAdAAAZAPQAaAOAPAaQAWAogLAqQgMArgnAXQgaAQgdAAQgbAAgagPg");
	this.shape_19.setTransform(13.9,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AguAxQAHgfgSgYIBQg+IABAAQAWAdAIAkQAJAjgIAlg");
	this.shape_20.setTransform(74.7,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhEAiQAQgoAfgbQAcgaAkgKIAYBfIACADQgMAFgKAIQgMAMgHAQg");
	this.shape_21.setTransform(54.1,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgMAnQgQgGgHgPQgIgPAFgPQAEgLAIgGQAIgHALgDQAKgCAKADQAQAGAHAPQAIAPgFAPQgDAKgJAHQgMALgOAAQgGAAgHgCg");
	this.shape_22.setTransform(63.3,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgLA1QgggLgcgYIBDhNIABgBQALAKAOAEQAOAFAQgCIAUBmQgPACgPAAQgbAAgagIg");
	this.shape_23.setTransform(59.1,33.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC431").s().p("Ag9C+QhPgaglhKQgmhKAahOQARgzAogjQAngjAzgMQA1gLA0ARQBOAaAmBKQAlBKgaBOQgRAzgoAjQgoAjgzAMQgVAEgVAAQgeAAgfgKg");
	this.shape_24.setTransform(63.3,22.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AhBAUIA1hWIABgBQAeAUAVAfQAVAeAFAlIhjAQIgCABQgEgfgagRg");
	this.shape_25.setTransform(53.3,-18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("Ag+BEQAAgqATglQARggAegYIA7BTQgKAJgFAKQgIAPAAASg");
	this.shape_26.setTransform(32,-17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgaAeQgNgMgBgQQAAgKAFgKQAKgUAYgCQAQAAANALQAMALABARQABALgGAJQgFAJgJAGQgJAGgLABIgCAAQgOAAgMgLg");
	this.shape_27.setTransform(42.9,-11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhKAtIACgDIAihcIABgCQAOAFAOAAQAPgBAOgIIA3BYQgmAWgpACIgIABQggAAgegMg");
	this.shape_28.setTransform(44.2,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC431").s().p("AiHCUQg8g5gEhTQgCg0AYgwQAZgvAsgcQAugeA2gCQBTgEA8A4QA+A4ADBTQACA0gYAxQgZAugsAdQguAeg3ACIgIAAQhNAAg6g0g");
	this.shape_29.setTransform(42.9,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("Ag8gTIgBgBQAYgMAIgdIBbATIAAAAQgHAhgUAbQgUAbgeASg");
	this.shape_30.setTransform(33.7,29.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgFAtQgPgCgQAFIghhYQAlgOAlAFQAhAFAgATIg1BKIgBADQgLgGgKgBg");
	this.shape_31.setTransform(26,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgEAlQgWgDgIgUQgGgOAGgNQAGgPAPgGQAJgEAJACQAWACAIAVQAGANgGAOQgGAPgPAGQgHADgGAAIgFgBg");
	this.shape_32.setTransform(24.5,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AguABQgNgeABghIBfABQAAAOAFAMQAFANAMAKIg7BLQgfgagPgkg");
	this.shape_33.setTransform(14.5,27.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC431").s().p("AgXC3QgxgGgmgeQgpgegTguQgdhGAdhGQAdhHBHgdQAtgUAxAHQAwAGAnAdQAoAeATAvQAeBGgeBGQgdBHhGAeQgiAOgkAAQgLAAgNgCg");
	this.shape_34.setTransform(24.5,21.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AhTADQAcgggFgrICMgYIABAAQAIA0gNAwQgOA0giApg");
	this.shape_35.setTransform(-49.5,-8.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhngYQAugoA5gNQA0gMAzAKIghCHIgBAFQgTgCgQAEQgWAFgSARg");
	this.shape_36.setTransform(-70.9,-30.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgPA3QgPgEgKgLQgRgSABgWQABgZARgPQAKgLAQgEQAOgDAPAEQAOAFALALQAQARgBAWQAAAYgRARQgMALgPADQgGABgHAAQgHAAgIgCg");
	this.shape_37.setTransform(-65.2,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgtAlQgjglgRguICJg0QAHAUAOAOQAPARAWAHIgtCLQg4gSgqgsg");
	this.shape_38.setTransform(-78.3,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEC431").s().p("AhNEPQhKgVg0g4QhRhUAEh0QADh0BUhRQA3g0BJgSQBHgRBHAVQBKAVA1A3QBQBVgDBzQgDB1hUBQQg3A0hKASQghAIggAAQgnAAgmgLg");
	this.shape_39.setTransform(-65.3,-14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AhKADQAagdgGgmIB9gUIABgBQAHAugMArQgMAugfAkg");
	this.shape_40.setTransform(-2.3,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AhbgVQAogjAzgMQAsgLAwAJIgeB4IgBAEQgQgCgPAEQgUAEgQAPg");
	this.shape_41.setTransform(-21.2,-4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgNAwQgNgDgKgKQgOgQAAgTQABgVAPgPQALgJAMgDQAMgEANAFQANADAKAKQAOAQAAATQgBAWgPAOQgKAJgNAEIgLABQgHAAgHgDg");
	this.shape_42.setTransform(-16.2,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgoAgQgegfgQgqIAEgBIBzgsIACgBQAGARANANQAOAPATAHIgnB7QgzgRglgng");
	this.shape_43.setTransform(-27.8,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC431").s().p("AhEDwQhBgSgvgyQhHhLAChmQADhnBLhIQAwguBBgQQA/gPBAASQBBATAvAxQBHBLgDBnQgCBnhLBHQgyAvhAAPQgdAHgdAAQgiAAgigKg");
	this.shape_44.setTransform(-16.3,9.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgdgOIAAgBQAOgBAHgMIAlAYIABAAQgTAcghAFg");
	this.shape_45.setTransform(-68.5,28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgOAVQgHgDgIAAIABgtQASAAAPAJQAOAHALANIgjAZIgBABIgIgHg");
	this.shape_46.setTransform(-68.9,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgIAQQgIgFgBgKQAAgHAFgFQAFgGAHAAQAEAAAEACQAJAFABAKQAAAHgFAFQgFAGgIAAIAAAAQgDAAgFgCg");
	this.shape_47.setTransform(-71.9,23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AgYgBQAAgPAFgQIAqAQIAAAAQgCAGAAAHQAAAFAEAHIgmAYQgKgRgBgRg");
	this.shape_48.setTransform(-77,24.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEC431").s().p("AgoBOQgVgLgMgTQgNgUgBgYQgBgkAZgaQAYgbAlgCQAWAAAVAKQAVALAMAUQANAUABAYQABAjgZAbQgYAaglACIgDAAQgVAAgTgKg");
	this.shape_49.setTransform(-71.9,23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AhBgQQAagSACgfIBnAHQgDAkgTAhQgSAhgdAWg");
	this.shape_50.setTransform(-89.9,25.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AhLgjQAlgUAqAAQAlAAAjAQIgvBbQgMgFgMAAQgQAAgQAJg");
	this.shape_51.setTransform(-100.9,6.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgUAjQgJgFgFgKQgJgOAEgQQAFgQAOgIQAJgGALAAQAXAAAMAUQAJAPgFAPQgEARgPAIQgJAGgLAAQgKAAgKgGg");
	this.shape_52.setTransform(-100.4,18.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AgsAKQgSgfgEgjIADAAIBigNIACAAQABAQAHALQAIAOAOAJIg2BZQgkgYgVgkg");
	this.shape_53.setTransform(-110.9,26);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEC431").s().p("AhhCuQgwgagbgwQgqhHAVhPQAWhRBIgpQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgWBQQgVBQhIApQguAbg2AAQg0AAgtgag");
	this.shape_54.setTransform(-100.5,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-42.5,241.2,85);


(lib.Tween39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgpgJIAAgBQAQgLACgVIBBAFQgFAygmAeg");
	this.shape.setTransform(-44.2,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgwgWQAXgNAbAAQAZAAAWAKIAAAAIgdA4IgCADQgHgDgIAAQgKAAgKAFg");
	this.shape_1.setTransform(-51.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgWANQgFgKADgJQACgKAKgGQAFgDAHAAQAPAAAIANQAFAJgDAKQgCAKgKAFQgGAEgHAAQgOAAgIgNg");
	this.shape_2.setTransform(-51,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgcAHQgMgVgCgVIACAAIA+gJIACAAQAAAJAFAJQAFAHAJAIIgjA4QgWgPgOgXg");
	this.shape_3.setTransform(-57.8,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC431").s().p("Ag+BxQgfgSgSgeQgagvANgyQAOg0AugbQAegRAiAAQAiAAAdARQAfARARAeQAbAugNAzQgOAzguAcQgfARgiAAQghAAgdgQg");
	this.shape_4.setTransform(-51.1,20.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AhAgQQAZgSADgfIBkAHIABAAQgCAlgSAgQgSAhgeAWg");
	this.shape_5.setTransform(111.1,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhLgjQAlgUApAAQAmAAAjARIgvBaQgLgEgOAAQgPAAgQAIg");
	this.shape_6.setTransform(100.1,3.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgiAVQgJgPAFgPQAEgQAOgJQAKgGAKAAQAXAAAMAVQAJAOgFAQQgEAQgPAIQgIAGgMAAQgXAAgLgUg");
	this.shape_7.setTransform(100.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgsAKQgRgcgFglIBlgNIACgBQABAPAIANQAIANANAJIg2BZQgkgXgVglg");
	this.shape_8.setTransform(90.1,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEC431").s().p("AhhCuQgwgbgbguQgqhIAWhPQAVhQBIgqQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgVBPQgWBQhIAqQguAbg2AAQgzAAgugag");
	this.shape_9.setTransform(100.5,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgvgVQAVgFAJgUIBBAdIAAAAQgXAxg0APg");
	this.shape_10.setTransform(83.7,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgRAhQgLgEgMACIgJhHQAegEAaALQAZAJASATIg0AvQgGgFgJgEg");
	this.shape_11.setTransform(81.1,-14.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgJAbQgPgGgDgQQgCgLAHgJQAGgKAMgCQAHgBAHACQAPAGADAQQACALgHAJQgHAKgLACIgFABQgEAAgFgCg");
	this.shape_12.setTransform(77.6,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgngBQgEgYAGgZIBFAQIABAAQgCALABAJQACALAHAIIg4AuQgSgXgGgdg");
	this.shape_13.setTransform(69.7,-4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FEC431").s().p("AgwCDQgigMgYgdQgYgdgHglQgKg4AigwQAhgvA5gKQAjgGAkANQAjANAYAcQAZAdAGAlQAKA4giAwQghAvg5AKQgMACgMAAQgYAAgYgJg");
	this.shape_14.setTransform(77.6,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgigIIgBgBQAOgJABgRIA4AEQgEAqghAZg");
	this.shape_15.setTransform(19.7,-0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgpgTQAVgLAWABQATgBAVAJIgZAwIgBACQgHgDgHAAQgHAAgKAFg");
	this.shape_16.setTransform(13.7,-11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgSALQgFgIADgIQACgJAIgEQAFgDAFAAQANAAAGALQAFAIgCAIQgDAJgIAEQgFADgGAAQgLAAgHgLg");
	this.shape_17.setTransform(13.9,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgYAFQgJgQgDgTIACAAIA1gHIABAAQAAAHAFAIQAFAIAHAEIgeAwQgTgMgMgVg");
	this.shape_18.setTransform(8.2,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FEC431").s().p("Ag1BfQgagOgOgaQgXgoAMgqQALgsAngXQAbgPAbAAQAdAAAZAPQAaAOAPAaQAWAogLAqQgMArgnAXQgaAQgdAAQgbAAgagPg");
	this.shape_19.setTransform(13.9,-4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AguAxQAHgfgSgYIBQg+IABAAQAWAdAIAkQAJAjgIAlg");
	this.shape_20.setTransform(74.7,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhEAiQAQgoAfgbQAcgaAkgKIAYBfIACADQgMAFgKAIQgMAMgHAQg");
	this.shape_21.setTransform(54.1,13);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgMAnQgQgGgHgPQgIgPAFgPQAEgLAIgGQAIgHALgDQAKgCAKADQAQAGAHAPQAIAPgFAPQgDAKgJAHQgMALgOAAQgGAAgHgCg");
	this.shape_22.setTransform(63.3,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgLA1QgggLgcgYIBDhNIABgBQALAKAOAEQAOAFAQgCIAUBmQgPACgPAAQgbAAgagIg");
	this.shape_23.setTransform(59.1,33.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEC431").s().p("Ag9C+QhPgaglhKQgmhKAahOQARgzAogjQAngjAzgMQA1gLA0ARQBOAaAmBKQAlBKgaBOQgRAzgoAjQgoAjgzAMQgVAEgVAAQgeAAgfgKg");
	this.shape_24.setTransform(63.3,22.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AhBAUIA1hWIABgBQAeAUAVAfQAVAeAFAlIhjAQIgCABQgEgfgagRg");
	this.shape_25.setTransform(53.3,-18.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("Ag+BEQAAgqATglQARggAegYIA7BTQgKAJgFAKQgIAPAAASg");
	this.shape_26.setTransform(32,-17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgaAeQgNgMgBgQQAAgKAFgKQAKgUAYgCQAQAAANALQAMALABARQABALgGAJQgFAJgJAGQgJAGgLABIgCAAQgOAAgMgLg");
	this.shape_27.setTransform(42.9,-11.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AhKAtIACgDIAihcIABgCQAOAFAOAAQAPgBAOgIIA3BYQgmAWgpACIgIABQggAAgegMg");
	this.shape_28.setTransform(44.2,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC431").s().p("AiHCUQg8g5gEhTQgCg0AYgwQAZgvAsgcQAugeA2gCQBTgEA8A4QA+A4ADBTQACA0gYAxQgZAugsAdQguAeg3ACIgIAAQhNAAg6g0g");
	this.shape_29.setTransform(42.9,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("Ag8gTIgBgBQAYgMAIgdIBbATIAAAAQgHAhgUAbQgUAbgeASg");
	this.shape_30.setTransform(33.7,29.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgFAtQgPgCgQAFIghhYQAlgOAlAFQAhAFAgATIg1BKIgBADQgLgGgKgBg");
	this.shape_31.setTransform(26,10.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AgEAlQgWgDgIgUQgGgOAGgNQAGgPAPgGQAJgEAJACQAWACAIAVQAGANgGAOQgGAPgPAGQgHADgGAAIgFgBg");
	this.shape_32.setTransform(24.5,21.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AguABQgNgeABghIBfABQAAAOAFAMQAFANAMAKIg7BLQgfgagPgkg");
	this.shape_33.setTransform(14.5,27.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FEC431").s().p("AgXC3QgxgGgmgeQgpgegTguQgdhGAdhGQAdhHBHgdQAtgUAxAHQAwAGAnAdQAoAeATAvQAeBGgeBGQgdBHhGAeQgiAOgkAAQgLAAgNgCg");
	this.shape_34.setTransform(24.5,21.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AhTADQAcgggFgrICMgYIABAAQAIA0gNAwQgOA0giApg");
	this.shape_35.setTransform(-49.5,-8.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AhngYQAugoA5gNQA0gMAzAKIghCHIgBAFQgTgCgQAEQgWAFgSARg");
	this.shape_36.setTransform(-70.9,-30.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AgPA3QgPgEgKgLQgRgSABgWQABgZARgPQAKgLAQgEQAOgDAPAEQAOAFALALQAQARgBAWQAAAYgRARQgMALgPADQgGABgHAAQgHAAgIgCg");
	this.shape_37.setTransform(-65.2,-14.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231F20").s().p("AgtAlQgjglgRguICJg0QAHAUAOAOQAPARAWAHIgtCLQg4gSgqgsg");
	this.shape_38.setTransform(-78.3,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FEC431").s().p("AhNEPQhKgVg0g4QhRhUAEh0QADh0BUhRQA3g0BJgSQBHgRBHAVQBKAVA1A3QBQBVgDBzQgDB1hUBQQg3A0hKASQghAIggAAQgnAAgmgLg");
	this.shape_39.setTransform(-65.3,-14.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231F20").s().p("AhKADQAagdgGgmIB9gUIABgBQAHAugMArQgMAugfAkg");
	this.shape_40.setTransform(-2.3,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231F20").s().p("AhbgVQAogjAzgMQAsgLAwAJIgeB4IgBAEQgQgCgPAEQgUAEgQAPg");
	this.shape_41.setTransform(-21.2,-4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("AgNAwQgNgDgKgKQgOgQAAgTQABgVAPgPQALgJAMgDQAMgEANAFQANADAKAKQAOAQAAATQgBAWgPAOQgKAJgNAEIgLABQgHAAgHgDg");
	this.shape_42.setTransform(-16.2,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231F20").s().p("AgoAgQgegfgQgqIAEgBIBzgsIACgBQAGARANANQAOAPATAHIgnB7QgzgRglgng");
	this.shape_43.setTransform(-27.8,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FEC431").s().p("AhEDwQhBgSgvgyQhHhLAChmQADhnBLhIQAwguBBgQQA/gPBAASQBBATAvAxQBHBLgDBnQgCBnhLBHQgyAvhAAPQgdAHgdAAQgiAAgigKg");
	this.shape_44.setTransform(-16.3,9.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231F20").s().p("AgdgOIAAgBQAOgBAHgMIAlAYIABAAQgTAcghAFg");
	this.shape_45.setTransform(-68.5,28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231F20").s().p("AgOAVQgHgDgIAAIABgtQASAAAPAJQAOAHALANIgjAZIgBABIgIgHg");
	this.shape_46.setTransform(-68.9,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231F20").s().p("AgIAQQgIgFgBgKQAAgHAFgFQAFgGAHAAQAEAAAEACQAJAFABAKQAAAHgFAFQgFAGgIAAIAAAAQgDAAgFgCg");
	this.shape_47.setTransform(-71.9,23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231F20").s().p("AgYgBQAAgPAFgQIAqAQIAAAAQgCAGAAAHQAAAFAEAHIgmAYQgKgRgBgRg");
	this.shape_48.setTransform(-77,24.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FEC431").s().p("AgoBOQgVgLgMgTQgNgUgBgYQgBgkAZgaQAYgbAlgCQAWAAAVAKQAVALAMAUQANAUABAYQABAjgZAbQgYAaglACIgDAAQgVAAgTgKg");
	this.shape_49.setTransform(-71.9,23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231F20").s().p("AhBgQQAagSACgfIBnAHQgDAkgTAhQgSAhgdAWg");
	this.shape_50.setTransform(-89.9,25.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231F20").s().p("AhLgjQAlgUAqAAQAlAAAjAQIgvBbQgMgFgMAAQgQAAgQAJg");
	this.shape_51.setTransform(-100.9,6.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231F20").s().p("AgUAjQgJgFgFgKQgJgOAEgQQAFgQAOgIQAJgGALAAQAXAAAMAUQAJAPgFAPQgEARgPAIQgJAGgLAAQgKAAgKgGg");
	this.shape_52.setTransform(-100.4,18.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231F20").s().p("AgsAKQgSgfgEgjIADAAIBigNIACAAQABAQAHALQAIAOAOAJIg2BZQgkgYgVgkg");
	this.shape_53.setTransform(-110.9,26);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FEC431").s().p("AhhCuQgwgagbgwQgqhHAVhPQAWhRBIgpQAugbA1AAQA0AAAuAaQAwAaAbAwQAqBHgWBQQgVBQhIApQguAbg2AAQg0AAgtgag");
	this.shape_54.setTransform(-100.5,18.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,-42.5,241.2,85);


(lib.Tween38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AmDhjQBJg0AshOQArhLAIhXIJfAsQgSDahoC/QhsDEiyCFg");
	this.shape.setTransform(62.9,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AnCjUQBvg6B3gdQB4geB6AAQDfAADNBfIAAABIkOILIgHATQhHgchLAAQhiAAhdAxg");
	this.shape_1.setTransform(-2.2,-113.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ah3DRQg4ggghg4QgYgpgGgwQgHguANgvQAMgvAdglQAdgmAqgZQA3ggBBAAQBAAAA4AgQA4AgAgA4QAzBXgaBfQgaBhhWAyQg3AghCAAQg/AAg4ggg");
	this.shape_2.setTransform(0.5,-44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AkKA7Qhqi2gYjTIASgBIJJhLIAKgCQAJBWAsBLQAuBRBRA1Ik+ISQjaiHh/jbg");
	this.shape_3.setTransform(-61.6,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC431").s().p("ApGQIQkYidiikYQh5jRgejtQgdjkA7jhQA8jgCLi5QCQi+DQh6QCLhQCZgoQCUgoCaABQE3gBEQCaQEYCdCjEYQB5DRAeDtQAdDkg8DgQg8DgiLC5QiPC/jRB5QiKBRiZAoQiVAoiagBQk3AAkQiZg");
	this.shape_4.setTransform(0,-44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("Ag/AjIAAgvIACgLIAIgIQAEgDAHAAIBqAAIAAAsIhSAAIAAAZg");
	this.shape_5.setTransform(88.6,96.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AgzCfQgYgIgPgJQgSgKgMgNIAgggIAQAMIAWALIAaAIIAcACQAPAAANgDQAMgEAJgHQAIgHAFgJQAEgKAAgMQAAgLgDgIIgKgLIgLgGIgIgCIgKgCIgTgEIgVgDIgRgDIgKgDIgPgFIgQgKIgPgPQgHgKgEgNQgFgNAAgSQAAgbAKgRQAJgTAPgLQAPgMAUgFQATgGASAAQAUABARAEIAcAKIAaANIAZARIgbAqIgVgOIgRgJIgTgIIgSgFIgOgCIgVACQgKACgIAGQgIAEgEAKQgFAJAAAPQAAAPAIAIQAIAJANAFIAcAHIAgAEQAQADAPAIQAPAJALALQAMALAHAQQAGAPAAAQQAAAagJASQgJATgPAMQgQAMgVAFQgVAHgYgBQghAAgXgHg");
	this.shape_6.setTransform(79.8,132.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AgYCjQgYAAgRgFQgRgFgLgIQgMgIgGgKIgLgTIgEgTIgCgOQAAgTAHgNQAHgNAKgIIAQgNIAKgEIgRgFIgNgJIgJgNIgHgNQgGgOgBgTQAAgRADgNIAJgYIANgRIAPgMQARgKAXgBIBAAAIAAAuIgmAAIgTACIgOAGIgKAIIgHAJQgGAKgBANQAAAMAEAJIAKAOIANAIIANAFIALACIAGAAIAmAAIAAAtIgmAAIgWACIgPAHIgIAKIgFAKIgCAIIAAAFQAAAMADAJIAIANIAMAIIAMAFIALACIAGAAIABAAIA6AAQARAAAKgIQAKgGAFgKQAGgJABgNIAAjqIAxAAIAADqQAAAUgGAPQgGAPgKALQgJAJgLAGIgXAKIgTAEIgMABg");
	this.shape_7.setTransform(51,132.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AhaAlIAAgsICHAAIAAgdIAuAAIAABJg");
	this.shape_8.setTransform(20.5,108.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("ABQCkIAAhgQAAgOgHgJQgGgKgKgGIgUgKIgVgFIgWgDIgFABIgNACIgQAFIgPAJIgPAQQgGAIgDAOIAAAIQAAAKAEAIQAGAHAIAEIASAIIATAFIARACIAMAAIAEAAIAAAuIg1AAQgRAAgQgIQgOgHgMgMQgLgNgHgQQgGgRAAgSQAAgSAJgSQAIgTASgRIAXgRIAYgLIAXgGIAWgCIAfADIAZAHIAYAKIAAgTQAAgPgEgMIgJgTIgMgPIgPgKQgRgIgWgCQgTAAgOAIQgNAGgJALQgJAKgFALIgHATIgyAAQABgbAJgTQAJgSAMgNQAMgNAOgHIAcgLIAYgEIAPgBIACAAQAeAAAWAIQAVAIAOANQAOAMAIAPIAMAdIAGAZIAAARIAAACIAADGg");
	this.shape_9.setTransform(21.5,132.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("ABPCkIAAjGQAAgPgEgMIgJgTIgMgPIgPgKQgRgIgWgCQgOABgKADIgTAJIgOAOIgKAOQgJASgCAWIAAAiQAcgRAiAAQAQAAANADIAAAyIgNgEIgQgBQgWAAgQAMQgJAFgGAIIgJASIAABaIgwAAIAAjJQgBgeAJgVQAHgVANgOQAMgOAPgIIAcgMIAZgFIAQgBIACAAQAfAAAVAIQAVAIAPANQAOAMAHAPIAMAdIAFAZIABARIAAACIAADGg");
	this.shape_10.setTransform(-8.6,132.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AgYCjIAAlFIAxAAIAAFFg");
	this.shape_11.setTransform(-30,132.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AgeChQgQgFgLgIQgMgIgIgKIgNgVIAIgFIAMgHIAMgHIAIgEQAFANAKAHIATAKQALAEALABQARgCANgIIALgIIAKgMIAHgQIADgUIAAhrQgCgSgHgOIgHgMIgLgKIgOgIIgUgDIgaADQgLADgJAGQgIAGgGAKIgLAXIgxAAQACgWAIgSQAIgTAPgNQAPgNAVgHQAWgHAdAAIABAAIABAAIANABIAVAEIAZALQANAHALANQAKANAHATQAHATAAAaIAABrQgBAggNAYIgNAUQgHAKgMAIQgMAIgPAFQgQAEgUAAQgUAAgQgFg");
	this.shape_12.setTransform(-49.6,132.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AhaAXIAAgtIC1AAIAAAtg");
	this.shape_13.setTransform(-75.7,109.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AgJClQgcAAgTgHQgUgIgMgMQgNgMgIgOIgLgdIgEgZIgBgRIAAgEIAAjJIAwAAIAADJQAAAVAGAOQAFAOAIAJQAIAKAKAEIASAIIAQACIAHABQATAAANgGQANgGAIgIQAJgJAFgKIAHgUIACgQIABgIIAAjJIAwAAIAAFFIgwAAIAAguIgFAQIgJAMIgMAJIgOAGQgQAGgVABg");
	this.shape_14.setTransform(-77.9,132.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-162.7,237.2,325.5);


(lib.Tween37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AmDhjQBJg0AshOQArhLAIhXIJfAsQgSDahoC/QhsDEiyCFg");
	this.shape.setTransform(62.9,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AnCjUQBvg6B3gdQB4geB6AAQDfAADNBfIAAABIkOILIgHATQhHgchLAAQhiAAhdAxg");
	this.shape_1.setTransform(-2.2,-113.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ah3DRQg4ggghg4QgYgpgGgwQgHguANgvQAMgvAdglQAdgmAqgZQA3ggBBAAQBAAAA4AgQA4AgAgA4QAzBXgaBfQgaBhhWAyQg3AghCAAQg/AAg4ggg");
	this.shape_2.setTransform(0.5,-44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AkKA7Qhqi2gYjTIASgBIJJhLIAKgCQAJBWAsBLQAuBRBRA1Ik+ISQjaiHh/jbg");
	this.shape_3.setTransform(-61.6,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEC431").s().p("ApGQIQkYidiikYQh5jRgejtQgdjkA7jhQA8jgCLi5QCQi+DQh6QCLhQCZgoQCUgoCaABQE3gBEQCaQEYCdCjEYQB5DRAeDtQAdDkg8DgQg8DgiLC5QiPC/jRB5QiKBRiZAoQiVAoiagBQk3AAkQiZg");
	this.shape_4.setTransform(0,-44.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("Ag/AjIAAgvIACgLIAIgIQAEgDAHAAIBqAAIAAAsIhSAAIAAAZg");
	this.shape_5.setTransform(88.6,96.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AgzCfQgYgIgPgJQgSgKgMgNIAgggIAQAMIAWALIAaAIIAcACQAPAAANgDQAMgEAJgHQAIgHAFgJQAEgKAAgMQAAgLgDgIIgKgLIgLgGIgIgCIgKgCIgTgEIgVgDIgRgDIgKgDIgPgFIgQgKIgPgPQgHgKgEgNQgFgNAAgSQAAgbAKgRQAJgTAPgLQAPgMAUgFQATgGASAAQAUABARAEIAcAKIAaANIAZARIgbAqIgVgOIgRgJIgTgIIgSgFIgOgCIgVACQgKACgIAGQgIAEgEAKQgFAJAAAPQAAAPAIAIQAIAJANAFIAcAHIAgAEQAQADAPAIQAPAJALALQAMALAHAQQAGAPAAAQQAAAagJASQgJATgPAMQgQAMgVAFQgVAHgYgBQghAAgXgHg");
	this.shape_6.setTransform(79.8,132.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AgYCjQgYAAgRgFQgRgFgLgIQgMgIgGgKIgLgTIgEgTIgCgOQAAgTAHgNQAHgNAKgIIAQgNIAKgEIgRgFIgNgJIgJgNIgHgNQgGgOgBgTQAAgRADgNIAJgYIANgRIAPgMQARgKAXgBIBAAAIAAAuIgmAAIgTACIgOAGIgKAIIgHAJQgGAKgBANQAAAMAEAJIAKAOIANAIIANAFIALACIAGAAIAmAAIAAAtIgmAAIgWACIgPAHIgIAKIgFAKIgCAIIAAAFQAAAMADAJIAIANIAMAIIAMAFIALACIAGAAIABAAIA6AAQARAAAKgIQAKgGAFgKQAGgJABgNIAAjqIAxAAIAADqQAAAUgGAPQgGAPgKALQgJAJgLAGIgXAKIgTAEIgMABg");
	this.shape_7.setTransform(51,132.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AhaAlIAAgsICHAAIAAgdIAuAAIAABJg");
	this.shape_8.setTransform(20.5,108.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("ABQCkIAAhgQAAgOgHgJQgGgKgKgGIgUgKIgVgFIgWgDIgFABIgNACIgQAFIgPAJIgPAQQgGAIgDAOIAAAIQAAAKAEAIQAGAHAIAEIASAIIATAFIARACIAMAAIAEAAIAAAuIg1AAQgRAAgQgIQgOgHgMgMQgLgNgHgQQgGgRAAgSQAAgSAJgSQAIgTASgRIAXgRIAYgLIAXgGIAWgCIAfADIAZAHIAYAKIAAgTQAAgPgEgMIgJgTIgMgPIgPgKQgRgIgWgCQgTAAgOAIQgNAGgJALQgJAKgFALIgHATIgyAAQABgbAJgTQAJgSAMgNQAMgNAOgHIAcgLIAYgEIAPgBIACAAQAeAAAWAIQAVAIAOANQAOAMAIAPIAMAdIAGAZIAAARIAAACIAADGg");
	this.shape_9.setTransform(21.5,132.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("ABPCkIAAjGQAAgPgEgMIgJgTIgMgPIgPgKQgRgIgWgCQgOABgKADIgTAJIgOAOIgKAOQgJASgCAWIAAAiQAcgRAiAAQAQAAANADIAAAyIgNgEIgQgBQgWAAgQAMQgJAFgGAIIgJASIAABaIgwAAIAAjJQgBgeAJgVQAHgVANgOQAMgOAPgIIAcgMIAZgFIAQgBIACAAQAfAAAVAIQAVAIAPANQAOAMAHAPIAMAdIAFAZIABARIAAACIAADGg");
	this.shape_10.setTransform(-8.6,132.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AgYCjIAAlFIAxAAIAAFFg");
	this.shape_11.setTransform(-30,132.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AgeChQgQgFgLgIQgMgIgIgKIgNgVIAIgFIAMgHIAMgHIAIgEQAFANAKAHIATAKQALAEALABQARgCANgIIALgIIAKgMIAHgQIADgUIAAhrQgCgSgHgOIgHgMIgLgKIgOgIIgUgDIgaADQgLADgJAGQgIAGgGAKIgLAXIgxAAQACgWAIgSQAIgTAPgNQAPgNAVgHQAWgHAdAAIABAAIABAAIANABIAVAEIAZALQANAHALANQAKANAHATQAHATAAAaIAABrQgBAggNAYIgNAUQgHAKgMAIQgMAIgPAFQgQAEgUAAQgUAAgQgFg");
	this.shape_12.setTransform(-49.6,132.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AhaAXIAAgtIC1AAIAAAtg");
	this.shape_13.setTransform(-75.7,109.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AgJClQgcAAgTgHQgUgIgMgMQgNgMgIgOIgLgdIgEgZIgBgRIAAgEIAAjJIAwAAIAADJQAAAVAGAOQAFAOAIAJQAIAKAKAEIASAIIAQACIAHABQATAAANgGQANgGAIgIQAJgJAFgKIAHgUIACgQIABgIIAAjJIAwAAIAAFFIgwAAIAAguIgFAQIgJAMIgMAJIgOAGQgQAGgVABg");
	this.shape_14.setTransform(-77.9,132.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.6,-162.7,237.2,325.5);


(lib.Tween30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBfIAAh9QAAgMgEgIQgEgJgHgEIgfATIgdgTQgHAEgFAJQgEAIAAAMIAABCQABAJADAIIAEAFIAGAFIAIAEIAKACIAUAAIAAAaIglAAQgMgBgJgGIgIgHIgHgJIgFgOIgCgSIAAhRQACgTALgOQALgOARgGIAgAUIAhgUQARAGALAOQAGAHADAIQADAIABAKIAACIg");
	this.shape.setTransform(65.9,-95.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAOIAAgaIBnAAIAAAag");
	this.shape_1.setTransform(48.7,-108.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBfIAAg4QAAgHgEgGQgDgFgGgEIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAGIgIAIQgEAGgBAHIgBAFQAAAGADAEQADAEAFADIAKAEIALADIAKACIAGAAIADAAIAAAaIgeAAQgLAAgIgEQgJgFgHgGQgGgIgEgJQgDgKAAgKQAAgLAEgLQAFgKALgLIANgIIAOgHIANgDIANgBIASACIAPADIANAGIAAgLQAAgIgCgIIgFgLIgIgIIgIgGQgKgFgNAAQgKAAgIADQgIAFgFAFQgGAGgCAGIgEAMIgdAAQABgQAEgLQAGgLAHgHQAHgHAIgFIAQgFIAOgEIAJAAIAAAAQASAAAMAFQAMAFAJAGQAIAIAFAIIAHASIACAOIABAKIAAABIAAByg");
	this.shape_2.setTransform(48.1,-95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBeQgHgCgEgEQgFgEgCgFQgDgFAAgHQAAAHgCAFQgCAFgFAEQgFAEgGACIgNACQgJAAgIgCIgMgGIgKgIIgGgJQgHgLgBgNIAAiNIAtAAIAAAaIgRAAIAABoQAAANADAGQADAHAEADQAEADAEABIAGABIABAAQAIAAAEgFQAEgDACgGIADgKIABgIIAAgCIAAiCIAXAAIAACCIAAACIABAIIADAKQACAGAFADQAEAFAHAAIACAAIAGgBQAEgBADgDQAEgDADgHQADgGAAgNIAAiCIAcAAIAACNQgBANgHALIgGAJIgKAIIgNAGQgHACgJAAg");
	this.shape_3.setTransform(29.7,-95.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBcQgOgFgIgEQgLgHgHgIIATgSIAJAHIAMAHIAQAEIAQACQAIAAAIgDQAHgBAFgFQAFgEADgFQACgGAAgHQAAgGgCgEIgGgHIgGgDIgFgCIgGgBIgLgCIgLgCIgKgBIgGgCIgJgEIgJgFIgJgIQgEgGgDgIQgCgHAAgLQAAgOAGgMQAFgKAJgHQAIgHAMgDQALgCAKAAQALAAAKACIARAGIAPAIIAOAKIgPAXIgNgHIgKgGIgKgEIgLgDIgIgBIgMABQgGABgEADQgFADgDAGQgCAFAAAIQAAAJAFAFQAEAFAIACIAQAFIASACQAKACAIAFQAIAFAIAFQAGAIAEAIQAEAJgBAJQAAAQgEAKQgGALgJAHQgJAHgMADQgNAEgNgBQgSABgOgFg");
	this.shape_4.setTransform(11.3,-95.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEAAIAKADIAMAEQAGAEAGAFQAFAHADAJQADAKABAOIAACFg");
	this.shape_5.setTransform(-2.6,-95.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgIQgDgIgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiQQAGgKAHgIQAHgIAHgFIAPgHIANgEIAKgDIAHAAIABAAQAOABAKADQAKADAIAFQAIAFAGAGIAIAMIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_6.setTransform(-16.4,-95.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgIQgDgIgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiQQAGgKAHgIQAHgIAHgFIAPgHIANgEIAKgDIAHAAIABAAQAOABAKADQAKADAIAFQAIAFAGAGIAIAMIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_7.setTransform(-34.7,-95.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEAAIAKADIAMAEQAGAEAGAFQAFAHADAJQADAKAAAOIAACFg");
	this.shape_8.setTransform(-50.7,-95.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBfIAAg0IgGgKQgDgGgFgCIgKgFIgNgCIgJAAIgHACIAAgcQAHgBAJAAQAUAAARAJIAAgTQgCgNgFgLIgGgIIgIgIIgLgEQgGgCgIAAQgMAAgKAFIgIAGIgIAIIgFALQgCAIAAAIIgcAAIAAgCIABgJIADgOIAHgSQAEgJAIgHQAJgGAMgFQAMgFARAAIACAAIAJAAIAOAEIARAHQAJAEAHAIQAHAIAEAMQAFANAAARIAAB0g");
	this.shape_9.setTransform(-64.5,-95.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBfIAAiFQAAgIgCgGIgDgFIgEgFIgGgCIgFgBIgNABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgIQAJgDANAAIADABIAKACIAMAEQAGADAGAGQAEAHAEAJQAEAJgBAPIAACFg");
	this.shape_10.setTransform(99.3,-133.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfIAAgjIgOAAIAAgaIAcAAIAGACIAFAEQACADgBAEIAAAVIAzAAIAAAbg");
	this.shape_11.setTransform(87.4,-155.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgEAFgEAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAEAAIAGABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQADAAAEgDQAEgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgJAIIgNAGQgIABgJAAg");
	this.shape_12.setTransform(84.6,-137.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgDAFgFAEQgFAEgFACIgOABQgJAAgIgBIgNgGIgJgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAFAAIAFABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIACAHIACALQADAEAEAFQAEADAHAAIABAAIAHgBQADAAAFgDQADgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_13.setTransform(64,-137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARCdIAAkDIgCgHIgEgHIgGgHIgWAWIgbgkIARgRIAMASIAOgUQAIABAHADIALAHIAJAIIAFAKQAFALABAOIAAEDg");
	this.shape_14.setTransform(47.3,-140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFBfQgQAAgLgEQgLgFgIgGQgHgHgFgIIgGgRIgDgPIAAgJIAAgCIAAh0IAcAAIAAB0QAAAMADAIQADAIAFAFQAEAFAGADIALAFIAJABIADAAQALAAAIgDQAHgEAFgEQAFgGADgFIAEgMIACgJIAAgEIAAh0IAcAAIAAC7IgcAAIAAgaIgDAJIgFAHIgHAFIgIAEQgKADgMAAg");
	this.shape_15.setTransform(36,-133.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgDgGIgCgFIgEgFIgFgCIgHgBIgLABIgIADIgGAFIgCADIgTgUQAEgGAHgEIAPgIQAIgDAMAAIAFABIAKACIALAEQAGADAFAGQAGAHADAJQAEAJAAAPIAACFg");
	this.shape_16.setTransform(20.1,-133.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_17.setTransform(9,-133.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_18.setTransform(-2.2,-133.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAUQgFAAgCgCIgEgEIgBgGIAAgbIAaAAIAAAOIBGAAIAAAZg");
	this.shape_19.setTransform(-12.3,-147.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgEgGgFgDIgMgGIgMgDIgMgBIgDAAIgHABIgKADIgJAFIgIAJQgEAFgCAIIAAAFQAAAGADAEQADAEAFADIAKAEIAMADIAJACIAHAAIACAAIAAAaIgeAAQgKAAgJgEQgJgFgGgHQgHgHgDgKQgEgJAAgKQAAgLAFgLQAEgLALgKIANgJIAOgGIANgEIANAAIASABIAOAEIAOAGIAAgLQAAgIgCgIIgFgLIgIgJIgIgFQgKgFgNAAQgLAAgHADQgIAFgFAFQgFAGgDAHIgEALIgeAAQACgQAEgLQAFgKAIgIQAHgHAIgEIAQgHIAOgCIAIgBIABAAQARAAANAFQAMAFAJAGQAIAIAFAIIAGARIAEAPIAAAKIAAABIAAByg");
	this.shape_20.setTransform(-15.7,-133.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUBeQgFgCgFgEQgFgEgCgFQgDgFAAgHIAAAAIAAAAQAAAHgCAFQgCAFgFAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAEADQAEADAEAAIAGABIABAAQAHAAAFgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQAEAAADgDQAEgDADgGQADgIAAgMIAAiCIAcAAIAACNQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_21.setTransform(-34.2,-133.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBeQgKgDgIgFQgIgFgFgGIgJgMQgJgPgBgTIAAglIA1AAIAAAZIgZAAIAAAMQAAAHACAGIAGALIAHAHIAIAFQAKAEAMABQANgBAKgEIAIgFIAHgHIAGgLQABgGAAgHIAAg4QAAgIgBgFIgGgKIgHgHIgIgFQgKgEgNgBIgBAAIgJABIgNAEQgGADgGAGQgFAFgDAJIgdAAIAEgKIAFgNIAKgMQAFgGAIgFQAIgEAJgDQALgDAMAAQAOAAAKADQAKADAIAFQAHAEAGAHIAJAMQAIAPACATIAAA4QgCATgIAPIgJAMQgGAGgHAFQgIAFgKADQgKACgOAAQgMAAgLgCg");
	this.shape_22.setTransform(-53,-133.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5AXIAAgaIAvAAIAAgTIAaAAIAAATIAPAAIAAgTIAbAAIAAAtg");
	this.shape_23.setTransform(-70.2,-147.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgDgGgGgDIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAFIgIAJQgEAFgBAIIgBAFQAAAGADAEQADAEAFADIAKAEIALADIALACIAFAAIADAAIAAAaIgfAAQgKAAgIgEQgJgFgHgHQgGgHgEgKQgDgJAAgKQAAgLAEgLQAFgLALgKIAOgJIANgGIAOgEIAMAAIASABIAPAEIANAGIAAgLQAAgIgCgIIgFgLIgHgJIgJgFQgKgFgNAAQgKAAgIADQgIAFgFAFQgFAGgDAHIgEALIgdAAQAAgQAGgLQAFgKAHgIQAHgHAIgEIAQgHIAOgCIAJgBIAAAAQARAAANAFQANAFAIAGQAIAIAEAIIAIARIACAPIABAKIAAABIAAByg");
	this.shape_24.setTransform(-70.6,-133.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAsBeIAAhRIgCgJIgCgHIgFgIIgHgFQgEgDgFAAIg+AAIAABxIgcAAIAAi8IAcAAIAAAxIA+AAQAFgBAEgDIAHgHQAEgEACgJIAAgZIAcAAIAAAcIgBAHIgDAJIgFAKIgHAIIAJAMIAHAOQADAIAAALIAABRg");
	this.shape_25.setTransform(-87.8,-133.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNBeIAAi7IAbAAIAAC7g");
	this.shape_26.setTransform(-100.1,-133.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_27.setTransform(32.7,57.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgPIAGgDIAIgEIAIgFIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgGIgLgGIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgPAGgNQAGgOAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPADIARAIQAJAGAIAJQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_28.setTransform(12.6,57.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAfAAIAABAg");
	this.shape_29.setTransform(-1.8,31.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHB0QgTAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgEgSIAAgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAKgEAFgGQAHgGACgHIAGgOIACgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_30.setTransform(-7.3,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2BzIAAhjIgCgLIgEgJIgFgJIgIgIQgGgDgHAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA7IBLAAQAHgBAFgEIAJgIQAFgGACgKIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAIARQAEAKAAANIAABjg");
	this.shape_31.setTransform(-29.3,57.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C0212F").s().p("Ah2GdQgxgVgfgeQghgegSgjIgahAIBwAAQAPAiAbATQAbARAcAJQAgAJAiABQAygCAngRIAggRIAegcIAUgmQAHgXAAgcIAAg9QAAgegHgWIgUgoIgegcIgggTQgngSgygCQgtACglAQIggARIgcAYIgXAjIgLAuIhuAAIAAoJIIAAAIAABtImTAAIAADdQAggXArgOQAsgPA6AAQA0AAAoAMQAoALAeATQAeASAWAYIAiAwQAhA5AGBJIAAA9QgGBKghA6IgiAwQgWAYgeASQgeATgoAMQgoALg0AAQhGAAgwgUg");
	this.shape_32.setTransform(113.3,-27.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C0212F").s().p("AhbGlQgpgMgegSQgegSgVgYIgjgwQghg6gFhKIAAg9IADgcIAHgdIALglIAEgHIAIgRIATgqIAjhMIA4h7IBTi1IBrAAIiBEfQAlgJAtAAQA0AAAoALQApALAeAUQAdASAWAYIAiAwQAgA4AIBKIAAA9QgIBKggA6IgiAwQgWAYgdASQgeASgpAMQgoAMg0gBQg0ABgngMgAhYgfIghATIgcAcIgUAnQgIAXAAAeIAAA9QAAAcAIAWIAUAnIAcAbIAhASQAnARAxACQAxgCAogRIAggSIAdgbIAVgnQAHgWAAgcIAAg9QAAgegHgXIgVgnIgdgcIgggTQgogTgxgCQgxACgnATg");
	this.shape_33.setTransform(44,-27.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C0212F").s().p("AgbBEIgYgPIgQgYIgGgdIAGgbIAQgYIAYgQIAbgGIAdAGIAXAQIAQAYIAGAbIgGAdIgQAYIgXAPIgdAGg");
	this.shape_34.setTransform(-5.1,7.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C0212F").s().p("Aj0GvIAAhnQBrhsBThjIBEhVIA+hUIArhNQAQgjABgZQAAgcgKgYQgMgZgSgTQgSgSgZgKQgZgLgbAAQgbAAgaALQgYAKgTASQgSATgKAZQgLAYAAAcIhuAAQAAgyATgtQAUgtAhghQAhghAsgTQAtgUAyAAQAzAAAsAUQAtATAhAhQAiAhATAtQATAtAAAyQAAAmgKAjQgLAigTAdIh6CkIgxBBIgvA+IgpAzIggAjIFLAAIAABng");
	this.shape_35.setTransform(-52.3,-28.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C0212F").s().p("AheGhQgtgTgigiQgighgTgtQgSgtAAgzIBtAAQABAdAKAYQALAYASATQASATAZAKQAZAKAbAAQAcAAAYgKQAZgKATgTQASgTALgYQAKgYAAgdQAAgbgKgYQgKgYgSgSQgTgSgYgLQgZgLgdgCIAAhtQAcAAAYgLQAZgLATgRQASgTALgZQAKgYAAgdQAAgbgKgZQgLgZgSgSQgTgSgZgLQgYgLgcAAQgbAAgZALQgZALgSASQgSASgLAZQgKAZgBAbIhtAAQAAgyASgsQATguAiggQAhgiAtgTQAsgUAzAAQAyAAAtAUQAtATAhAiQAhAgATAuQAUAsgBAyQAAA6gXAyQgZAxgqAhQAqAiAZAxQAZAxgBA6QAAAzgTAtQgUAtghAhQghAigsATQguATgyAAQgyAAgsgTg");
	this.shape_36.setTransform(-114.6,-28.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7CB44B").s().p("AjuOxIthAAQidAAhwhwQhwhwAAidIAA8qQAAidBwhvQBwhwCdAAMAigAAAQCdAABvBwQBwBvAACdIAAcqQAACdhwBwQhvBwidAAIrlAAIkuLCg");
	this.shape_37.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-165.1,298,330.2);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBfIAAh9QAAgMgEgIQgEgJgHgEIgfATIgdgTQgHAEgFAJQgEAIAAAMIAABCQABAJADAIIAEAGIAGAEIAIAEIAKACIAUAAIAAAaIglAAQgMgBgJgGIgIgHIgHgJIgFgNIgCgTIAAhRQACgTALgOQALgOARgGIAgAUIAhgUQARAGALAOQAGAHADAIQADAJABAJIAACIg");
	this.shape.setTransform(65.9,-112.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAOIAAgaIBnAAIAAAag");
	this.shape_1.setTransform(48.7,-125.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAuBfIAAg4QAAgHgEgGQgDgFgGgEIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAGIgIAIQgEAGgBAHIgBAFQAAAGADAEQADAEAFADIAKAEIALADIAKACIAGAAIADAAIAAAaIgeAAQgLAAgIgEQgJgFgHgGQgGgIgEgKQgDgJAAgKQAAgLAEgLQAFgKALgLIANgJIAOgGIANgDIANgBIASABIAPAEIANAGIAAgLQAAgIgCgIIgFgLIgIgIIgIgGQgKgFgNAAQgKAAgIADQgIAEgFAGQgGAGgCAHIgEALIgdAAQABgQAEgLQAGgKAHgIQAHgHAIgEIAQgGIAOgDIAJgBIAAAAQASAAAMAFQAMAFAJAGQAIAIAFAIIAHARIACAPIABAKIAAABIAAByg");
	this.shape_2.setTransform(48.1,-112.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVBeQgHgCgEgEQgFgEgCgFQgDgFAAgHQAAAHgCAFQgCAFgFAEQgFAEgGACIgNACQgJAAgIgCIgMgGIgKgIIgGgJQgHgLgBgNIAAiNIAtAAIAAAaIgRAAIAABoQAAANADAGQADAHAEADQAEADAEABIAGAAIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAFAFQAEADAHAAIACAAIAGAAQAEgBADgDQAEgDADgHQADgGAAgNIAAiCIAcAAIAACNQgBANgHALIgGAJIgKAIIgNAGQgHACgJAAg");
	this.shape_3.setTransform(29.7,-112.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdBcQgOgFgIgEQgLgHgHgIIATgSIAJAHIAMAHIAQAEIAQACQAIAAAIgDQAHgCAFgDQAFgFADgFQACgFAAgIQAAgGgCgEIgGgHIgGgDIgFgCIgGgBIgLgCIgLgCIgKgBIgGgCIgJgEIgJgFIgJgIQgEgGgDgIQgCgHAAgLQAAgPAGgLQAFgKAJgHQAIgGAMgEQALgDAKAAQALAAAKADIARAGIAPAIIAOAKIgPAYIgNgIIgKgGIgKgEIgLgDIgIgBIgMABQgGABgEADQgFADgDAGQgCAFAAAIQAAAJAFAFQAEAFAIADIAQADIASADQAKACAIAFQAIAFAIAFQAGAIAEAIQAEAJgBAJQAAAQgEAKQgGALgJAHQgJAGgMAEQgNADgNAAQgSABgOgFg");
	this.shape_4.setTransform(11.3,-112.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEABIAKACIAMAEQAGAEAGAFQAFAHADAJQADAJABAPIAACFg");
	this.shape_5.setTransform(-2.6,-112.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgHQgDgJgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiPQAGgLAHgIQAHgIAHgFIAPgHIANgEIAKgCIAHgBIABAAQAOABAKADQAKADAIAFQAIAFAGAFIAIANIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_6.setTransform(-16.4,-112.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBfIAAh0QAAgLgDgHQgDgJgFgFQgFgEgFgDIgLgEIgJgBIgFAAQgIAAgGABIgLAFIgIAHIgGAJQgFAJgBANIAAB0IgcAAIAAiPQAGgLAHgIQAHgIAHgFIAPgHIANgEIAKgCIAHgBIABAAQAOABAKADQAKADAIAFQAIAFAGAFIAIANIAGANIADALIABAJIAAAFIAAB0g");
	this.shape_7.setTransform(-34.7,-112.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgCgGIgDgFIgEgFIgGgCIgGgBIgMABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgHQAJgEAMAAIAEABIAKACIAMAEQAGAEAGAFQAFAHADAJQADAJAAAPIAACFg");
	this.shape_8.setTransform(-50.7,-112.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuBfIAAg0IgGgKQgDgGgFgCIgKgFIgNgCIgJAAIgHACIAAgcQAHgBAJAAQAUAAARAJIAAgTQgCgNgFgLIgGgIIgIgIIgLgEQgGgCgIAAQgMAAgKAFIgIAGIgIAIIgFALQgCAIAAAIIgcAAIAAgCIABgJIADgPIAHgRQAEgJAIgHQAJgGAMgFQAMgFARAAIACAAIAJABIAOADIARAHQAJAEAHAIQAHAIAEAMQAFANAAARIAAB0g");
	this.shape_9.setTransform(-64.5,-112.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUBfIAAiFQAAgIgCgGIgDgFIgEgFIgGgCIgFgBIgNABIgIADIgEAFIgDADIgUgUQAFgGAHgEIAOgIQAJgDANAAIADABIAKACIAMAEQAGADAGAGQAEAHAEAJQAEAJgBAPIAACFg");
	this.shape_10.setTransform(99.3,-133.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfIAAgjIgOAAIAAgaIAcAAIAGACIAFAEQACADgBAEIAAAVIAzAAIAAAbg");
	this.shape_11.setTransform(87.4,-155.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgEAFgEAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAEAAIAGABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQADAAAEgDQAEgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgJAIIgNAGQgIABgJAAg");
	this.shape_12.setTransform(84.6,-137.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAUCAQgFgCgFgEQgFgEgCgFQgCgGgBgGQAAAGgBAGQgDAFgFAEQgFAEgFACIgOABQgJAAgIgBIgNgGIgJgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAFADQADADAFAAIAFABIABAAQAIAAAEgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIACAHIACALQADAEAEAFQAEADAHAAIABAAIAHgBQADAAAFgDQADgDADgGQADgIAAgMIAAjHIAcAAIAADSQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_13.setTransform(64,-137.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARCdIAAkDIgCgHIgEgHIgGgHIgWAWIgbgkIARgRIAMASIAOgUQAIABAHADIALAHIAJAIIAFAKQAFALABAOIAAEDg");
	this.shape_14.setTransform(47.3,-140.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFBfQgQAAgLgEQgLgFgIgGQgHgHgFgIIgGgRIgDgPIAAgJIAAgCIAAh0IAcAAIAAB0QAAAMADAIQADAIAFAFQAEAFAGADIALAFIAJABIADAAQALAAAIgDQAHgEAFgEQAFgGADgFIAEgMIACgJIAAgEIAAh0IAcAAIAAC7IgcAAIAAgaIgDAJIgFAHIgHAFIgIAEQgKADgMAAg");
	this.shape_15.setTransform(36,-133.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBfIAAiFQgBgIgDgGIgCgFIgEgFIgFgCIgHgBIgLABIgIADIgGAFIgCADIgTgUQAEgGAHgEIAPgIQAIgDAMAAIAFABIAKACIALAEQAGADAFAGQAGAHADAJQAEAJAAAPIAACFg");
	this.shape_16.setTransform(20.1,-133.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_17.setTransform(9,-133.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBBgQgMAAgJgDIgOgHQgHgFgEgGIATgSIADADIAFAEIAIAEIALACIAGgCIAGgDIAEgFIACgFQADgGAAgIIAAhtIgZAAIAAgbIA1AAIAACIQAAANgDAKQgDAJgFAGQgGAGgGAEIgMAFIgKACIgEAAg");
	this.shape_18.setTransform(-2.2,-133.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgjAUQgFAAgCgCIgEgEIgBgGIAAgbIAaAAIAAAOIBGAAIAAAZg");
	this.shape_19.setTransform(-12.3,-147.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgEgGgFgDIgMgGIgMgDIgMgBIgDAAIgHABIgKADIgJAFIgIAJQgEAFgCAIIAAAFQAAAGADAEQADAEAFADIAKAEIAMADIAJACIAHAAIACAAIAAAaIgeAAQgKAAgJgEQgJgFgGgHQgHgHgDgKQgEgJAAgKQAAgLAFgLQAEgLALgKIANgJIAOgGIANgEIANAAIASABIAOAEIAOAGIAAgLQAAgIgCgIIgFgLIgIgJIgIgFQgKgFgNAAQgLAAgHADQgIAFgFAFQgFAGgDAHIgEALIgeAAQACgQAEgLQAFgKAIgIQAHgHAIgEIAQgHIAOgCIAIgBIABAAQARAAANAFQAMAFAJAGQAIAIAFAIIAGARIAEAPIAAAKIAAABIAAByg");
	this.shape_20.setTransform(-15.7,-133.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUBeQgFgCgFgEQgFgEgCgFQgDgFAAgHIAAAAIAAAAQAAAHgCAFQgCAFgFAEQgFAEgFACIgOABQgJAAgIgBIgMgGIgKgIIgHgJQgFgKgCgOIAAiNIAcAAIAACCQAAAMADAIQADAGAEADQAEADAEAAIAGABIABAAQAHAAAFgDQAEgFACgEIADgLIABgHIAAgDIAAiCIAXAAIAACCIAAADIABAHIADALQACAEAEAFQAFADAHAAIACAAIAGgBQAEAAADgDQAEgDADgGQADgIAAgMIAAiCIAcAAIAACNQgCAOgFAKIgHAJIgKAIIgMAGQgIABgJAAg");
	this.shape_21.setTransform(-34.2,-133.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBeQgKgDgIgFQgIgFgFgGIgJgMQgJgPgBgTIAAglIA1AAIAAAZIgZAAIAAAMQAAAHACAGIAGALIAHAHIAIAFQAKAEAMABQANgBAKgEIAIgFIAHgHIAGgLQABgGAAgHIAAg4QAAgIgBgFIgGgKIgHgHIgIgFQgKgEgNgBIgBAAIgJABIgNAEQgGADgGAGQgFAFgDAJIgdAAIAEgKIAFgNIAKgMQAFgGAIgFQAIgEAJgDQALgDAMAAQAOAAAKADQAKADAIAFQAHAEAGAHIAJAMQAIAPACATIAAA4QgCATgIAPIgJAMQgGAGgHAFQgIAFgKADQgKACgOAAQgMAAgLgCg");
	this.shape_22.setTransform(-53,-133.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5AXIAAgaIAvAAIAAgTIAaAAIAAATIAPAAIAAgTIAbAAIAAAtg");
	this.shape_23.setTransform(-70.2,-147.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBfIAAg3QAAgJgEgFQgDgGgGgDIgMgGIgMgDIgMgBIgDAAIgIABIgJADIgJAFIgIAJQgEAFgBAIIgBAFQAAAGADAEQADAEAFADIAKAEIALADIALACIAFAAIADAAIAAAaIgfAAQgKAAgIgEQgJgFgHgHQgGgHgEgKQgDgJAAgKQAAgLAEgLQAFgLALgKIAOgJIANgGIAOgEIAMAAIASABIAPAEIANAGIAAgLQAAgIgCgIIgFgLIgHgJIgJgFQgKgFgNAAQgKAAgIADQgIAFgFAFQgFAGgDAHIgEALIgdAAQAAgQAGgLQAFgKAHgIQAHgHAIgEIAQgHIAOgCIAJgBIAAAAQARAAANAFQANAFAIAGQAIAIAEAIIAIARIACAPIABAKIAAABIAAByg");
	this.shape_24.setTransform(-70.6,-133.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAsBeIAAhRIgCgJIgCgHIgFgIIgHgFQgEgDgFAAIg+AAIAABxIgcAAIAAi8IAcAAIAAAxIA+AAQAFgBAEgDIAHgHQAEgEACgJIAAgZIAcAAIAAAcIgBAHIgDAJIgFAKIgHAIIAJAMIAHAOQADAIAAALIAABRg");
	this.shape_25.setTransform(-87.8,-133.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNBeIAAi7IAbAAIAAC7g");
	this.shape_26.setTransform(-100.1,-133.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_27.setTransform(32.7,57.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgPIAGgDIAIgEIAIgFIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgGIgLgGIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgPAGgNQAGgOAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPADIARAIQAJAGAIAJQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_28.setTransform(12.6,57.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgPAhIAAhAIAfAAIAABAg");
	this.shape_29.setTransform(-1.8,31.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgHB0QgTAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgEgSIAAgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAKgEAFgGQAHgGACgHIAGgOIACgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_30.setTransform(-7.3,57.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2BzIAAhjIgCgLIgEgJIgFgJIgIgIQgGgDgHAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA7IBLAAQAHgBAFgEIAJgIQAFgGACgKIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAIARQAEAKAAANIAABjg");
	this.shape_31.setTransform(-29.3,57.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C0212F").s().p("Aj9G+IAAhqQBvhxBWhmIBHhYIBAhXIAthPQARglAAgZQAAgdgLgaQgLgagTgSQgTgUgagLQgZgLgdAAQgdAAgZALQgZALgUAUQgTASgKAaQgMAaAAAdIhyAAQAAg1AUguQAUgvAjghQAigkAugTQAugUA0AAQA1AAAuAUQAuATAjAkQAiAhAUAvQAUAuAAA1QAAAmgLAkQgLAkgUAeIh+CqIgzBDIgwBAIgrA2IggAkIFWAAIAABqg");
	this.shape_32.setTransform(113.2,-27.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C0212F").s().p("AhiGwQgugUgjgjQgjgjgUguQgTguAAg1QAAg8AZgzQAagzAqgjQgqgigagzQgZgzAAg8QAAg1ATguQAUguAjgiQAjgjAugUQAugUA0AAQA0AAAvAUQAuAUAjAjQAiAiATAuQAUAuAAA1QAAA8gYAzQgaAzgrAiQArAjAaAzQAZAzAAA8QAAA1gUAuQgUAugiAjQgjAjguAUQgvATg0AAQg0AAgugTgAg2BEQgZALgTATQgTATgLAaQgLAZAAAdQAAAdALAaQALAZATATQATATAZAMQAaAKAcAAQAdAAAagKQAagMATgTQATgTALgZQALgaAAgdQAAgdgLgZQgLgagTgTQgTgTgagLQgagLgdAAQgcAAgaALgAg2lFQgZALgTATQgTATgLAZQgLAaAAAdQAAAdALAZQALAaATATQATATAZALQAaALAcAAQAdAAAZgLQAagLATgTQATgTALgaQALgZAAgdQAAgdgLgaQgLgZgTgTQgTgTgagLQgZgLgdAAQgcAAgaALg");
	this.shape_33.setTransform(49.5,-26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C0212F").s().p("AgdBHIgYgQIgQgZIgGgeIAGgcIAQgZIAYgQIAdgHIAeAHIAYAQIARAZIAGAcIgGAeIgRAZIgYAQIgeAFg");
	this.shape_34.setTransform(1.6,9.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C0212F").s().p("AhhGwQgvgUgjgjQgigjgUguQgUguAAg1IByAAQAAAdALAaQALAZATATQATATAaAMQAZAKAcAAQAdAAAagKQAZgMATgTQATgTAMgZQAKgaAAgdQAAgcgKgZQgLgZgSgSQgTgTgagMQgagLgegCIAAhxQAdAAAagLQAZgLATgTQATgTAMgaQAKgZAAgdQAAgdgKgaQgMgZgTgTQgTgTgZgLQgagLgdAAQgcAAgZALQgaALgTATQgTATgLAZQgLAaAAAdIhyAAQAAg1AUguQAUguAigiQAigjAvgUQAugUA0AAQA1AAAuAUQAuAUAiAjQAjAiAUAuQAUAuAAA1QAAA8gZAzQgaAzgrAiQArAjAaAzQAZAzAAA8QAAA1gUAuQgUAugiAjQgjAjguAUQguATg1AAQgzAAgugTg");
	this.shape_35.setTransform(-47,-26.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C0212F").s().p("AhhGwQgvgUgjgjQgigjgUguQgUguAAg1IByAAQAAAdALAaQALAZATATQATATAaAMQAZAKAcAAQAdAAAagKQAZgMATgTQATgTAMgZQAKgaAAgdQAAgcgKgZQgLgZgSgSQgTgTgagMQgagLgegCIAAhxQAdAAAagLQAZgLATgTQATgTAMgaQAKgZAAgdQAAgdgKgaQgMgZgTgTQgTgTgZgLQgagLgdAAQgcAAgZALQgaALgTATQgTATgLAZQgLAaAAAdIhyAAQAAg1AUguQAUguAigiQAigjAvgUQAugUA0AAQA1AAAuAUQAuAUAiAjQAjAiAUAuQAUAuAAA1QAAA8gZAzQgaAzgrAiQArAjAaAzQAZAzAAA8QAAA1gUAuQgUAugiAjQgjAjguAUQguATg1AAQgzAAgugTg");
	this.shape_36.setTransform(-113.5,-26.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7CB44B").s().p("AjuOxIthAAQidAAhwhwQhwhwAAidIAA8qQAAidBwhvQBwhwCdAAMAigAAAQCdAABvBwQBwBvAACdIAAcqQAACdhwBwQhvBwidAAIrlAAIkuLCg");
	this.shape_37.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-148.9,-165.1,298,330.2);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape.setTransform(99.3,-81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACACAAAEIAAARIAnAAIAAAUg");
	this.shape_1.setTransform(90,-98.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_2.setTransform(87.8,-83.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_3.setTransform(71.7,-83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_4.setTransform(58.8,-86);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgBBLQgJgBgGgCIgMgFQgFgEgEgFIAPgOIACADIAFADIAGADIAIABIAFgBIAFgDIADgDIABgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQgBALgCAHQgCAIgEAEIgJAIIgKAEIgHACIgEAAg");
	this.shape_5.setTransform(52.3,-81);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGgBgIQABgMAEgJQAEgIAGgFQAIgFAIgDQAIgCAJAAQAIAAAIACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgDAEABAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHABAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgOAAgLgDg");
	this.shape_6.setTransform(42.3,-81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgTB6IAAiTQAAgFgCgEIgFgIIgFgJIgHgIIgFgJQgCgFAAgFIABgOQACgHAEgHQAEgGAHgFQAIgEAKAAIA3AAIAAAUIgxAAQgGABgEACIgEADIgDAEIgCAGIgBAHQAAAGACADIAEAHIAIAIIAJANIAAAFIACAGIABAIIAACQg");
	this.shape_7.setTransform(35.5,-86);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAABLQgKgBgGgCIgMgFQgFgEgDgFIAOgOIADADIADADIAHADIAJABIAEgBIAFgDIACgDIACgEQACgFABgHIAAhUIgUAAIAAgVIApAAIAABpQAAALgCAHQgDAIgEAEIgJAIIgJAEIgIACIgCAAg");
	this.shape_8.setTransform(26,-81);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSBJQgIgDgGgDQgGgEgEgFIgHgJQgGgMgBgPIAAgdIApAAIAAAUIgUAAIAAAJQAAAGACAFIAEAIIAGAGIAGADQAIAEAJAAQAKAAAIgEIAGgDIAGgGIAEgIQABgFAAgGIAAgrQAAgGgBgEIgEgIIgGgGIgGgDQgIgEgKAAIgBAAIgHABIgJADQgFACgFAEQgEAFgCAHIgWAAIACgIIAFgKIAHgKQAEgEAGgEQAGgEAIgCQAIgCAJAAQAKAAAIACQAIADAGADIALAJIAHAJQAGAMABAPIAAArQgBAPgGAMIgHAJIgLAJQgGADgIADQgIACgKAAQgKAAgIgCg");
	this.shape_9.setTransform(15.7,-81);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAABLQgLgBgKgDQgJgDgFgGQgGgFgEgGIgEgMIgCgKIAAgGQAAgHACgGIAFgKIAHgIIAHgHIAGgHQABgDABgEIAAgBIAAgCQAAgEgBgEIgFgGIgFgDIgHgCIgGgBIgEgBIgBAAIAAgVIAMAAQAJABAHACQAGACAFAEQADAEADAFIAEAJIABAJIABAHIAAABIgBABIAAAAIgCAIIgDAHIgFAHIgKAMIgFAJIgCAHIAAADQAAAHACAGQACAFADADIAHAFIAGADIAGABIACAAQAHAAAFgCQAFgCADgDIAFgHIAEgHIABgFIABgEIAAhiIAVAAIAABiQABAMgEAJQgDAJgGAFQgGAFgGAEIgMAFIgKACg");
	this.shape_10.setTransform(2.2,-81);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAjBKIAAhhQAAgJgCgHQgEgGgFgEIgYAPIgXgPQgFAEgEAGQgDAHAAAJIAAAzQABAHACAGIAEAFIAEADIAGAEIAJABIAPAAIAAAUIgdAAQgKAAgGgGIgHgEIgFgIIgEgKIgBgPIAAg/QACgOAIgLQAIgLANgFIAZAQIAagQQANAFAIALQAFAFACAHQACAGABAHIAABqg");
	this.shape_11.setTransform(-11.2,-81.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgoAKIAAgUIBRAAIAAAUg");
	this.shape_12.setTransform(-24.5,-91.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjBKIAAgrQABgHgDgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgHAFIgGAGQgDAFgBAGIgBADQABAFACADIAGAGIAIADIAJACIAIABIAEAAIACAAIAAAVIgXAAQgJAAgGgEQgHgDgFgFQgFgGgDgIQgDgHABgIQgBgIAEgJQADgIAJgIIALgHIAKgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQABgGgCgGIgEgJIgFgGIgHgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAEgJQAEgIAGgGQAFgFAHgEIAMgEIALgCIAHgBIAAAAQAOAAAKAEQAJADAHAGQAGAGAEAGIAFANIACAMIABAHIAAABIAABZg");
	this.shape_13.setTransform(-25,-81.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAQBJQgFgCgDgCQgEgDgCgEQgCgFAAgFIAAAAIAAAAQAAAFgBAFIgGAHIgIAEIgKABQgHAAgGgBIgKgFIgIgGIgFgHQgEgIgCgKIAAhuIAkAAIAAAUIgOAAIAABRQAAAKADAFQACAFADADIAGACIAFABIABAAQAGAAADgDIAFgHIACgIIABgGIAAgCIAAhlIASAAIAABlIAAACIAAAGIADAIQACAEADADQADADAGAAIABAAIAFgBIAGgCQADgDACgFQACgFAAgKIAAhlIAWAAIAABuQgBAKgFAIIgFAHIgHAGIgLAFQgFABgIAAg");
	this.shape_14.setTransform(-39.4,-81);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAGgBQAFgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgCgFQgCgGAAgIQAAgMAFgJQAEgIAHgFQAGgFAJgDQAJgCAIAAQAIAAAIACIANAFIALAGIALAHIgMATIgJgGIgIgEIgIgEIgIgCIgGgBIgKABQgEABgDACQgEADgCAEQgCAEAAAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHAAAIQABALgFAJQgEAIgHAFQgHAGgJACQgKADgKAAQgPAAgKgDg");
	this.shape_15.setTransform(-53.7,-81);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_16.setTransform(-64.5,-81.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgCgGQgCgGgEgEQgEgEgEgCIgIgDIgHgBIgEAAQgGAAgFABIgJAEIgGAGIgEAGQgEAIgBAKIAABaIgWAAIAAhwQAFgIAFgGIALgKIAMgGIAKgDIAJgCIAEAAIABAAQALAAAHADQAJACAGAEQAGAEAEAFIAHAJIAEAKIADAJIABAHIAAAEIAABag");
	this.shape_17.setTransform(-75.2,-81.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgDBKQgNAAgJgDQgIgEgGgFQgGgFgDgHIgFgNIgCgLIgBgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHADAEQAEAEAFACIAIADIAHACIACAAQAJAAAGgDQAFgCAFgEQADgEACgFIAEgJIABgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgFAEIgGADQgIADgKAAg");
	this.shape_18.setTransform(86,-116.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgNBJQgHgDgFgDQgGgEgDgFIgGgJIAEgCIAFgDIAFgDIAEgDQADAGAEAEIAIAEQAFACAFAAQAHgBAGgDIAFgEIAFgFIADgHIABgJIAAgwQgBgIgDgGIgDgGIgFgEIgGgEIgJgBIgLABQgGACgDACIgHAHIgFALIgWAAQABgKAEgIQADgJAHgFQAHgGAKgEQAJgDANAAIAAAAIABAAIAGABIAJACIALAEQAGAEAFAGQAFAFADAJQADAIAAAMIAAAwQgBAOgFALIgGAJQgEAFgFADQgFAEgHACQgHACgJAAQgJAAgHgCg");
	this.shape_19.setTransform(72.6,-116.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgSBIQgIgCgGgDQgFgFgFgEIgGgJQgHgMgBgPIAAhfIAVAAIAABfQABAGABAFIAEAIIAGAFIAGAEQAIADAJABQAKgBAIgDIAHgEIAFgFIAEgIQABgFABgGIAAhfIAVAAIAABfQgBAPgGAMIgHAJQgFAEgFAFQgHADgIACQgHACgLAAQgJAAgJgCg");
	this.shape_20.setTransform(59.9,-116.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgTA8IgFgBIgDgEIgCgEIAAgWIAVAAIAAAKIAmAAIAAAVgAgTgcIgFgBIgDgEIgCgEIAAgWIAVAAIAAALIAmAAIAAAUg");
	this.shape_21.setTransform(49.2,-116.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgFgGIAOgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgIgBIgEgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGAAgIQAAgMADgJQAFgIAGgFQAIgFAIgDQAIgCAJAAQAJAAAHACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgCAEgBAHQAAAGAEAEQAEAEAGACIAMADIAOACQAIACAGADQAHAEAFAEQAFAGADAGQAEAHAAAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgPAAgKgDg");
	this.shape_22.setTransform(39.3,-116.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgBgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIAKgKIAMgGIAKgDIAIgCIAFAAIABAAQAKAAAIADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIACAHIAAAEIAABag");
	this.shape_23.setTransform(26.7,-116.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_24.setTransform(12.4,-116.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgDB6IAAiUIACgKIACgIIAFgHIAGgHIAGgGIADgGIABgEIABgFQAAgFgCgEQgCgFgDgCQgEgDgEgCIgIAAQgIgBgFACIgHADIgDAFIgSAAIgBAAIAAgBIABgFIACgFIAEgHQACgEAFgCQAFgDAHgBQAHgCAJAAQAKAAAHACQAHADAFADQAFAEACAEIAFAJIABAIIABAHIAAADIgBAGIgCAHIgEAIIgHAKIgGAJIgDAGIgCAGIAACUg");
	this.shape_25.setTransform(1.4,-121.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgKBJQgLAAgIgCQgIgCgFgEIgIgIIgEgJIgDgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHgBgIQABgIABgGIAEgLIAFgHIAHgFQAIgFAKAAIAcAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFAAAGQAAAGABADIAEAHIAHADIAGACIAEABIADAAIAQAAIAAAUIgQAAIgKABIgGADIgFAEIgBAFIgBAEIAAACQgBAFACAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAFgDIAGgIQACgEACgGIAAhoIAVAAIAABoQAAAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_26.setTransform(-8.8,-116.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_27.setTransform(-22.5,-127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgCgEQgDgFgFgDIgJgEIgKgDIgIgBIgDAAIgGABIgHACIgIAFIgFAHQgEAEgBAGIAAACIAAABQAAAFACADQADADADADIAIADIAJACIAIABIAFAAIACAAIAAAVIgYAAQgIAAgHgEQgHgDgFgFQgEgGgEgHQgCgIAAgIQAAgIADgJQAEgIAJgHIAKgIIALgFIAKgCIAKgBIAOACIAKACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgHgFQgHgDgKgBQgIAAgGADQgGADgFAFQgEAFgBAEIgEAJIgXAAQABgMAEgIQAEgJAFgGQAGgFAHgEIALgEIALgCIAHgBIABAAQAKAAALADQAFgBAGgCIAJgGQAFgEADgGIAHAHIADADIACACIACACIABABIgBACIgDAEIgDAEIgFAFIgEADIgEABIAHAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_28.setTransform(-21.9,-117.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_29.setTransform(-31.5,-116.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAwBfIgLgFQgGgDgDgFIAPgSIACABIAEAEIAGADIAJABQAGAAAEgCQADgDACgEQACgEAAgFIAAgaIgCAHIgEAFIgGAEIgGACQgIADgIABIgFAAQgNAAgIgDQgJgEgGgFQgGgFgCgGIgFgOIgCgLIgBgGIAAgmQAAgIgCgGQgCgGgEgEQgEgEgEgCIgJgDIgHgBIgDgBQgHABgFABIgJAEIgGAGIgEAGQgEAIgBAJIAAAtQABAHACAGIADAEIAFAEIAGADIAIABIAQAAIAAAUIgdAAQgKAAgHgFIgGgFIgFgIIgEgKIgBgOIAAgDIAAhBQAEgJAFgGIALgKIAMgGIAKgEIAIgBIAFAAIACAAQAOAAAKAEQAJAFAHAFQAFAGAEAIIAFAMIACALIAAAFIAAAkQAAAIADAHQACAGAEAEQADAEAFADIAIACIAHACIAEAAQAIAAAGgCQAGgDAEgEQAEgEACgFIADgIIABgHIAAgDIAAhbIAWAAIAACXQAAAKgDAIQgCAHgEAEQgEAFgFADIgJAEIgIACIgEAAQgJAAgHgDg");
	this.shape_30.setTransform(-45.6,-114.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgJAXQgDAAgDgDQgDgCAAgEIAAgTIgIAAIAAgRIARAAQAEAAACADIACACIABAEIAAATIAKAAIAAgcIARAAIAAAkQAAAEgCACQgDADgEAAg");
	this.shape_31.setTransform(-62.1,-105.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgEQgDgFgEgDIgJgEIgKgDIgJgBIgCAAIgGABIgHACIgHAFIgHAHQgCAEgBAGIgBACIAAABQAAAFADADQABADAEADIAIADIAJACIAIABIAGAAIAAAAIAAAVIgYAAQgHAAgGgEQgHgDgGgFQgEgGgEgHQgDgIAAgIQAAgIAFgJQADgIAJgHIAKgIIAKgFIALgCIAKgBIANACIALACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgGgFQgJgDgIgBQgKAAgFADQgHADgDAFQgFAFgCAEIgDAJIgXAAQABgMAEgIQAEgJAGgGQAFgFAGgEIAMgEIAMgCIAGgBIACAAQAJAAALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBACIgEAEIgDAEIgFAFIgEADIgDABIAGAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_32.setTransform(-63.9,-117.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_33.setTransform(46.7,85.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgVByQgLgEgIgGQgIgFgGgHIgJgQIAGgDIAIgFIAIgEIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgHIgLgFIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgQAGgNQAGgNAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJABIAPACIARAIQAJAFAIAKQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_34.setTransform(26.6,85.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_35.setTransform(12.2,59);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgGB0QgUAAgNgFQgOgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQADAKAHAGQAFAHAHADIANAFIALACIAEAAQAOAAAJgEQAJgEAHgGQAFgGAEgHIAEgOIACgLIABgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgHAJIgIAGIgKAEQgMAEgPABg");
	this.shape_36.setTransform(6.7,85.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AA1BzIAAhkIgBgKIgDgJIgGgJIgJgIQgEgDgIAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA6IBLAAQAGAAAGgEIAJgIQAEgFADgLIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAJARQADAJAAANIAABkg");
	this.shape_37.setTransform(-15.3,85.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0212F").s().p("AhdFFQgmgRgYgYQgagXgOgcIgVgyIBYAAQAMAbAWAOQAVAOAVAHQAaAIAaABQAngCAfgOIAagOIAWgVIAQgeQAGgRAAgYIAAgvQAAgXgGgSIgQgfIgWgWIgagPQgfgOgngCQgjACgdAMIgZANIgWATIgSAcIgJAkIhXAAIAAmZIGSAAIAABWIk7AAIAACtQAYgSAigLQAigMAuAAQApAAAfAKQAgAIAXAQQAYAOARASIAbAnQAaAsAEA5IAAAvQgEA7gaAuIgbAlQgRATgYAPQgXAPggAIQgfAJgpAAQg2AAgngPg");
	this.shape_38.setTransform(95.2,-7.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0212F").s().p("AhKFHQgjgOgbgbQgZgagPgjQgQgjAAgpIBWAAQABAXAIATQAIAUAPAOQAPAOATAJQATAIAVAAQAWAAAUgIQASgJAPgOQAPgOAIgUQAJgTgBgXQABgUgJgTQgHgUgOgOQgPgOgUgIQgUgJgWgBIAAhWQAWAAAUgIQASgJAPgOQAPgOAIgUQAJgTgBgXQABgWgJgTQgIgTgPgOQgPgPgSgIQgUgJgWAAQgVAAgTAJQgTAIgPAPQgPAOgIATQgIATgBAWIhWAAQAAgnAQgjQAPgjAZgbQAbgZAjgQQAjgPAnAAQAoAAAjAPQAiAQAbAZQAbAbAOAjQAQAjAAAnQAAAugTAnQgUAnggAaQAgAaAUAmQATAnAAAtQAAApgPAjQgQAjgaAaQgaAbgjAOQgjAPgoABQgmgBgkgPg");
	this.shape_39.setTransform(42.6,-7.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C0212F").s().p("AgWA2IgSgMIgMgTIgFgXIAFgVIAMgTIASgMIAWgFIAXAFIASAMIANATIAEAVIgEAXIgNATIgSAMIgXAEg");
	this.shape_40.setTransform(5.6,19.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C0212F").s().p("AhrFQIDlpOIlJAAIAAhRIGfAAIAABRIjlJOg");
	this.shape_41.setTransform(-29.8,-8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C0212F").s().p("AhIFLQgfgJgYgOQgYgPgQgTIgcgmQgZgtgFg7IAAgvIADgWIAFgXIAJgdIADgFIAHgOIAOghIAcg7IAshhIBBiOIBUAAIhmDiQAegIAjAAQApAAAfAKQAgAIAYAPQAXAPAQASIAbAmQAbAsAFA6IAAAvQgFA7gbAtIgbAmQgQATgXAPQgYAOggAJQgfAJgpAAQgpAAgfgJgAhFgYIgaAPIgWAVIgQAgQgGASAAAXIAAAvQAAAXAGARIAQAeIAWAWIAaAOQAfANAmACQAngCAegNIAagOIAXgWIAQgeQAGgRAAgXIAAgvQAAgXgGgSIgQggIgXgVIgagPQgegOgngCQgmACgfAOg");
	this.shape_42.setTransform(-80.3,-7.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EBD638").s().p("AvWPzQgyg0gahCQgchFAAhJIAA8fQAAidBvhuQBuhvCeAAIZFAAQCdAABvBvQBvBuAACdIAAcfQAACchvBvQhvBvidAAI5FAAIghgBIoYFDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-145.1,255.4,290.2);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape.setTransform(99.3,-89.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgYAYIAAgaIgLAAIAAgVIAWAAIAFACIADACQACADAAADIAAARIAnAAIAAAUg");
	this.shape_1.setTransform(90,-106.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_2.setTransform(87.8,-92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_3.setTransform(71.7,-92);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_4.setTransform(58.8,-94.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgBBKQgJAAgGgCIgMgFQgFgEgEgEIAPgPIACACIAFAEIAGADIAIABIAFgBIAFgCIADgEIABgEQACgFAAgGIAAhVIgTAAIAAgUIAqAAIAABpQgBAKgCAIQgCAHgEAEIgJAIIgKAEIgHABIgEAAg");
	this.shape_5.setTransform(52.3,-89.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGgBgIQABgMAEgJQAEgIAGgFQAIgFAIgDQAIgCAJAAQAIAAAIACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgDAEABAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHABAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgOAAgLgDg");
	this.shape_6.setTransform(42.3,-89.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgTB6IAAiTQAAgFgCgEIgFgIIgFgJIgHgIIgFgJQgCgFAAgFIABgOQACgHAEgHQAEgGAHgFQAIgEAKAAIA3AAIAAAUIgxAAQgGABgEACIgEADIgDAEIgCAGIgBAHQAAAGACADIAEAHIAIAIIAJANIAAAFIACAGIABAIIAACQg");
	this.shape_7.setTransform(35.5,-94.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAABKQgKAAgGgCIgMgFQgFgEgDgEIAOgPIADACIADAEIAHADIAJABIAEgBIAFgCIACgEIACgEQACgFABgGIAAhVIgUAAIAAgUIApAAIAABpQAAAKgCAIQgDAHgEAEIgJAIIgJAEIgIABIgCAAg");
	this.shape_8.setTransform(26,-89.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSBJQgIgDgGgDQgGgEgEgFIgHgJQgGgMgBgPIAAgdIApAAIAAAUIgUAAIAAAJQAAAGACAFIAEAIIAGAGIAGADQAIAEAJAAQAKAAAIgEIAGgDIAGgGIAEgIQABgFAAgGIAAgrQAAgGgBgEIgEgIIgGgGIgGgDQgIgEgKAAIgBAAIgHABIgJADQgFACgFAEQgEAFgCAHIgWAAIACgIIAFgKIAHgKQAEgEAGgEQAGgEAIgCQAIgCAJAAQAKAAAIACQAIADAGADIALAJIAHAJQAGAMABAPIAAArQgBAPgGAMIgHAJIgLAJQgGADgIADQgIACgKAAQgKAAgIgCg");
	this.shape_9.setTransform(15.7,-89.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAABKQgLAAgKgDQgJgEgFgFQgGgFgEgGIgEgMIgCgKIAAgGQAAgHACgGIAFgKIAHgIIAHgHIAGgHQABgDABgDIAAgCIAAgCQAAgFgBgDIgFgGIgFgDIgHgDIgGgBIgEAAIgBAAIAAgUIAMAAQAJgBAHADQAGADAFAEQADADADAFIAEAKIABAJIABAGIAAABIgBABIAAABIgCAIIgDAGIgFAHIgKAMIgFAKIgCAGIAAADQAAAHACAGQACAFADADIAHAGIAGACIAGABIACAAQAHAAAFgCQAFgCADgDIAFgGIAEgHIABgHIABgDIAAhhIAVAAIAABhQABAMgEAJQgDAIgGAGQgGAGgGADIgMAEIgKACg");
	this.shape_10.setTransform(2.2,-89.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAjBKIAAhhQAAgJgCgHQgEgGgFgEIgYAQIgXgQQgFAEgEAGQgDAHAAAJIAAAzQABAIACAFIAEAFIAEADIAGADIAJABIAPAAIAAAVIgdAAQgKgBgGgFIgHgEIgFgIIgEgKIgBgPIAAg+QACgQAIgKQAIgLANgFIAZAQIAagQQANAFAIALQAFAFACAGQACAHABAIIAABpg");
	this.shape_11.setTransform(-11.2,-89.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgoAKIAAgTIBRAAIAAATg");
	this.shape_12.setTransform(-24.5,-99.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjBKIAAgrQABgHgDgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgHAFIgGAGQgDAFgBAGIgBADQABAFACADIAGAGIAIADIAJACIAIABIAEAAIACAAIAAAVIgXAAQgJAAgGgEQgHgDgFgFQgFgGgDgIQgDgHABgIQgBgIAEgJQADgIAJgIIALgHIAKgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQABgGgCgGIgEgJIgFgGIgHgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAEgJQAEgIAGgGQAFgFAHgEIAMgEIALgCIAHgBIAAAAQAOAAAKAEQAJADAHAGQAGAGAEAGIAFANIACAMIABAHIAAABIAABZg");
	this.shape_13.setTransform(-25,-89.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAQBJQgFgCgDgCQgEgDgCgEQgCgFAAgFIAAAAIAAAAQAAAFgBAFIgGAHIgIAEIgKABQgHAAgGgBIgKgFIgIgGIgFgHQgEgIgCgKIAAhuIAkAAIAAAUIgOAAIAABRQAAAKADAFQACAFADADIAGACIAFABIABAAQAGAAADgDIAFgHIACgIIABgGIAAgCIAAhlIASAAIAABlIAAACIAAAGIADAIQACAEADADQADADAGAAIABAAIAFgBIAGgCQADgDACgFQACgFAAgKIAAhlIAWAAIAABuQgBAKgFAIIgFAHIgHAGIgLAFQgFABgIAAg");
	this.shape_14.setTransform(-39.4,-89.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgGgGIAPgOIAHAFIAKAFIAMAEIAMABQAHAAAGgBQAFgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgHgBIgFgBIgGgDIgIgEIgHgGQgDgFgCgFQgCgGAAgIQAAgMAFgJQAEgIAHgFQAGgFAJgDQAJgCAIAAQAIAAAIACIANAFIALAGIALAHIgMATIgJgGIgIgEIgIgEIgIgCIgGgBIgKABQgEABgDACQgEADgCAEQgCAEAAAHQAAAGADAEQAEAEAGACIAMADIAOACQAHACAHADQAHAEAFAEQAFAGADAGQADAHAAAIQABALgFAJQgEAIgHAFQgHAGgJACQgKADgKAAQgPAAgKgDg");
	this.shape_15.setTransform(-53.7,-89.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_16.setTransform(-64.5,-89.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgCgGQgCgGgEgEQgEgEgEgCIgIgDIgHgBIgEAAQgGAAgFABIgJAEIgGAGIgEAGQgEAIgBAKIAABaIgWAAIAAhwQAFgIAFgGIALgKIAMgGIAKgDIAJgCIAEAAIABAAQALAAAHADQAJACAGAEQAGAEAEAFIAHAJIAEAKIADAJIABAHIAAAEIAABag");
	this.shape_17.setTransform(-75.2,-89.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgDBKQgNAAgJgDQgIgEgGgFQgGgFgDgHIgFgNIgCgLIgBgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHADAEQAEAEAFACIAIADIAHACIACAAQAJAAAGgDQAFgCAFgEQADgEACgFIAEgJIABgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgFAEIgGADQgIADgKAAg");
	this.shape_18.setTransform(86,-116.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgNBJQgHgDgFgDQgGgEgDgFIgGgJIAEgCIAFgDIAFgDIAEgDQADAGAEAEIAIAEQAFACAFAAQAHgBAGgDIAFgEIAFgFIADgHIABgJIAAgwQgBgIgDgGIgDgGIgFgEIgGgEIgJgBIgLABQgGACgDACIgHAHIgFALIgWAAQABgKAEgIQADgJAHgFQAHgGAKgEQAJgDANAAIAAAAIABAAIAGABIAJACIALAEQAGAEAFAGQAFAFADAJQADAIAAAMIAAAwQgBAOgFALIgGAJQgEAFgFADQgFAEgHACQgHACgJAAQgJAAgHgCg");
	this.shape_19.setTransform(72.6,-116.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgSBIQgIgCgGgDQgFgFgFgEIgGgJQgHgMgBgPIAAhfIAVAAIAABfQABAGABAFIAEAIIAGAFIAGAEQAIADAJABQAKgBAIgDIAHgEIAFgFIAEgIQABgFABgGIAAhfIAVAAIAABfQgBAPgGAMIgHAJQgFAEgFAFQgHADgIACQgHACgLAAQgJAAgJgCg");
	this.shape_20.setTransform(59.9,-116.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgTA8IgFgBIgDgEIgCgEIAAgWIAVAAIAAAKIAmAAIAAAVgAgTgcIgFgBIgDgEIgCgEIAAgWIAVAAIAAALIAmAAIAAAUg");
	this.shape_21.setTransform(49.2,-116.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgWBIQgLgEgHgEQgIgFgFgGIAOgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgIgBIgEgBIgGgDIgIgEIgHgGQgDgFgBgFQgCgGAAgIQAAgMADgJQAFgIAGgFQAIgFAIgDQAIgCAJAAQAJAAAHACIANAFIALAGIAMAHIgNATIgJgGIgIgEIgIgEIgIgCIgGgBIgJABQgFABgDACQgEADgCAEQgCAEgBAHQAAAGAEAEQAEAEAGACIAMADIAOACQAIACAGADQAHAEAFAEQAFAGADAGQAEAHAAAIQAAALgFAJQgEAIgHAFQgHAGgKACQgJADgKAAQgPAAgKgDg");
	this.shape_22.setTransform(39.3,-116.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgBgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIAKgKIAMgGIAKgDIAIgCIAFAAIABAAQAKAAAIADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIACAHIAAAEIAABag");
	this.shape_23.setTransform(26.7,-116.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_24.setTransform(12.4,-116.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AgDB6IAAiUIACgKIACgIIAFgHIAGgHIAGgGIADgGIABgEIABgFQAAgFgCgEQgCgFgDgCQgEgDgEgCIgIAAQgIgBgFACIgHADIgDAFIgSAAIgBAAIAAgBIABgFIACgFIAEgHQACgEAFgCQAFgDAHgBQAHgCAJAAQAKAAAHACQAHADAFADQAFAEACAEIAFAJIABAIIABAHIAAADIgBAGIgCAHIgEAIIgHAKIgGAJIgDAGIgCAGIAACUg");
	this.shape_25.setTransform(1.4,-121.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231F20").s().p("AgKBJQgLAAgIgCQgIgCgFgEIgIgIIgEgJIgDgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHgBgIQABgIABgGIAEgLIAFgHIAHgFQAIgFAKAAIAcAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFAAAGQAAAGABADIAEAHIAHADIAGACIAEABIADAAIAQAAIAAAUIgQAAIgKABIgGADIgFAEIgBAFIgBAEIAAACQgBAFACAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAFgDIAGgIQACgEACgGIAAhoIAVAAIAABoQAAAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_26.setTransform(-8.8,-116.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_27.setTransform(-22.5,-127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgCgEQgDgFgFgDIgJgEIgKgDIgIgBIgDAAIgGABIgHACIgIAFIgFAHQgEAEgBAGIAAACIAAABQAAAFACADQADADADADIAIADIAJACIAIABIAFAAIACAAIAAAVIgYAAQgIAAgHgEQgHgDgFgFQgEgGgEgHQgCgIAAgIQAAgIADgJQAEgIAJgHIAKgIIALgFIAKgCIAKgBIAOACIAKACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgHgFQgHgDgKgBQgIAAgGADQgGADgFAFQgEAFgBAEIgEAJIgXAAQABgMAEgIQAEgJAFgGQAGgFAHgEIALgEIALgCIAHgBIABAAQAKAAALADQAFgBAGgCIAJgGQAFgEADgGIAHAHIADADIACACIACACIABABIgBACIgDAEIgDAEIgFAFIgEADIgEABIAHAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_28.setTransform(-21.9,-117.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231F20").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_29.setTransform(-31.5,-116.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231F20").s().p("AAwBfIgLgFQgGgDgDgFIAPgSIACABIAEAEIAGADIAJABQAGAAAEgCQADgDACgEQACgEAAgFIAAgaIgCAHIgEAFIgGAEIgGACQgIADgIABIgFAAQgNAAgIgDQgJgEgGgFQgGgFgCgGIgFgOIgCgLIgBgGIAAgmQAAgIgCgGQgCgGgEgEQgEgEgEgCIgJgDIgHgBIgDgBQgHABgFABIgJAEIgGAGIgEAGQgEAIgBAJIAAAtQABAHACAGIADAEIAFAEIAGADIAIABIAQAAIAAAUIgdAAQgKAAgHgFIgGgFIgFgIIgEgKIgBgOIAAgDIAAhBQAEgJAFgGIALgKIAMgGIAKgEIAIgBIAFAAIACAAQAOAAAKAEQAJAFAHAFQAFAGAEAIIAFAMIACALIAAAFIAAAkQAAAIADAHQACAGAEAEQADAEAFADIAIACIAHACIAEAAQAIAAAGgCQAGgDAEgEQAEgEACgFIADgIIABgHIAAgDIAAhbIAWAAIAACXQAAAKgDAIQgCAHgEAEQgEAFgFADIgJAEIgIACIgEAAQgJAAgHgDg");
	this.shape_30.setTransform(-45.6,-114.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231F20").s().p("AgJAXQgDAAgDgDQgDgCAAgEIAAgTIgIAAIAAgRIARAAQAEAAACADIACACIABAEIAAATIAKAAIAAgcIARAAIAAAkQAAAEgCACQgDADgEAAg");
	this.shape_31.setTransform(-62.1,-105.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgEQgDgFgEgDIgJgEIgKgDIgJgBIgCAAIgGABIgHACIgHAFIgHAHQgCAEgBAGIgBACIAAABQAAAFADADQABADAEADIAIADIAJACIAIABIAGAAIAAAAIAAAVIgYAAQgHAAgGgEQgHgDgGgFQgEgGgEgHQgDgIAAgIQAAgIAFgJQADgIAJgHIAKgIIAKgFIALgCIAKgBIANACIALACIALAEIAAgHQAAgHgCgGIgDgJIgGgGIgGgFQgJgDgIgBQgKAAgFADQgHADgDAFQgFAFgCAEIgDAJIgXAAQABgMAEgIQAEgJAGgGQAFgFAGgEIAMgEIAMgCIAGgBIACAAQAJAAALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBACIgEAEIgDAEIgFAFIgEADIgDABIAGAMIAEAMIACAJIAAAGIAAACIAABYg");
	this.shape_32.setTransform(-63.9,-117.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231F20").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_33.setTransform(46.7,85.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231F20").s().p("AgVByQgLgEgIgGQgIgFgGgHIgJgQIAGgDIAIgFIAIgEIAGgDQAEAIAHAGIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgJIgHgHIgLgFIgOgCIgSACQgIACgGAFQgFADgFAIIgIAQIgiAAQABgQAGgNQAGgNAKgJQALgJAPgFQAPgFAUAAIABAAIABAAIAJABIAPACIARAIQAJAFAIAKQAHAIAFANQAFAOAAATIAABLQgBAWgIARIgKAOQgFAIgIAFQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_34.setTransform(26.6,85.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231F20").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_35.setTransform(12.2,59);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231F20").s().p("AgGB0QgUAAgNgFQgOgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQADAKAHAGQAFAHAHADIANAFIALACIAEAAQAOAAAJgEQAJgEAHgGQAFgGAEgHIAEgOIACgLIABgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgHAJIgIAGIgKAEQgMAEgPABg");
	this.shape_36.setTransform(6.7,85.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231F20").s().p("AA1BzIAAhkIgBgKIgDgJIgGgJIgJgIQgEgDgIAAIhLAAIAACLIgiAAIAAjlIAiAAIAAA6IBLAAQAGAAAGgEIAJgIQAEgFADgLIAAgeIAiAAIAAAiIgBAIIgEALIgGALIgJALIAMAPIAJARQADAJAAANIAABkg");
	this.shape_37.setTransform(-15.3,85.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C0212F").s().p("AhQFlQgngQgdgdQgdgdgQgmQgQgmAAgsQAAgyAVgqQAVgqAjgdQgjgcgVgqQgVgqAAgyQAAgsAQgmQAQgmAdgcQAdgdAmgRQAmgRArAAQArAAAnARQAmARAdAdQAcAcAQAmQARAmAAAsQAAAygVAqQgVAqgkAcQAkAdAVAqQAVAqAAAyQAAAsgQAmQgRAmgcAdQgdAdgmAQQgnARgrAAQgqAAgmgRgAgsA5QgVAIgQAQQgQAQgJAVQgJAVAAAYQAAAYAJAVQAJAVAQAQQAQAQAVAJQAVAJAXAAQAYAAAWgJQAVgJAQgQQAPgQAKgVQAJgVAAgYQAAgYgJgVQgKgVgPgQQgQgQgVgIQgWgKgYAAQgXAAgVAKgAgskNQgVAJgQAQQgQAQgJAVQgJAVAAAYQAAAYAJAVQAJAVAQAQQAQAQAVAJQAVAJAXAAQAYAAAVgJQAVgJAQgQQAQgQAJgVQAJgVAAgYQAAgYgJgVQgJgVgQgQQgQgQgVgJQgVgJgYAAQgXAAgVAJg");
	this.shape_38.setTransform(98.5,-5.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C0212F").s().p("AAeFuIAAoWQgbATgkAOQgmAMgzABIAAheIAQAAIAegFIAkgNQATgJAPgRQAPgQALgaQAKgZAAgmIBdAAIAALbg");
	this.shape_39.setTransform(53,-5.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C0212F").s().p("AgYA7IgUgOIgNgUIgGgZIAGgXIANgVIAUgNIAYgFIAZAFIATANIAPAVIAEAXIgEAZIgPAUIgTAOIgZAEg");
	this.shape_40.setTransform(23,24.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C0212F").s().p("AhPFpQgigKgagQQgZgPgSgVIgegqQgcgxgFhAIAAgzIACgYIAHgZIAKggIACgGIAHgPIARgjIAdhCIAwhpIBIibIBcAAIhwD2QAhgIAmAAQAsAAAjAKQAiAKAaAQQAaAQASAUIAeApQAbAxAHA/IAAAzQgHBAgbAxIgeAqQgSAVgaAPQgaAQgiAKQgjAKgsAAQgsAAgjgKgAhLgbIgcARIgYAXIgSAjQgHATAAAaIAAAzQAAAZAHATIASAhIAYAXIAcAPQAhAPAqACQArgCAhgPIAcgPIAYgXIASghQAGgTAAgZIAAgzQAAgagGgTIgSgjIgYgXIgcgRQghgPgrgCQgqACghAPg");
	this.shape_41.setTransform(-19.2,-4.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C0212F").s().p("AhPFpQgigKgagQQgagPgRgVIgegqQgcgxgFhAIAAgzIADgYIAGgZIAKggIACgGIAIgPIAQgjIAehCIAvhpIBIibIBbAAIhvD2QAhgIAmAAQAsAAAjAKQAiAKAaAQQAaAQASAUIAeApQAcAxAFA/IAAAzQgFBAgcAxIgeAqQgSAVgaAPQgaAQgiAKQgjAKgsAAQgsAAgjgKgAhMgbIgbARIgYAXIgSAjQgHATAAAaIAAAzQAAAZAHATIASAhIAYAXIAbAPQAiAPAqACQAqgCAigPIAcgPIAYgXIASghQAGgTABgZIAAgzQgBgagGgTIgSgjIgYgXIgcgRQgigPgqgCQgqACgiAPg");
	this.shape_42.setTransform(-77.9,-4.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EBD638").s().p("AvWPzQgyg0gahCQgchFAAhJIAA8fQAAidBvhuQBuhvCeAAIZFAAQCdAABvBvQBvBuAACdIAAcfQAACchvBvQhvBvidAAI5FAAIghgBIoYFDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.7,-145.1,255.4,290.2);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("AqcFtQgUAAgNgOQgOgOAAgUIAAp6QAAgUAOgNQANgOAUAAIU4AAQAUAAAOAOQAOANAAAUIAAJ6QAAAUgOAOQgOAOgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.6,-36.5,143.3,73.1);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69435").s().p("Aj5BrQgYgIgFgWQgLguBfhNIAKAfQARAbAjgNQARgOAPgVQAdgogJgeIA5AgQAyAmgeAdIgFAFQgEAGADADQALAKBUgaIAogYQAkgbgQgSIAxAoQApAtgqAkIAbAIQAgAEAbgbQACANgIARQgRAgg3ARg");
	this.shape.setTransform(1.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE242A").s().p("AngDSQgNheB7gyIACAaQAHASAXghQAHgWAWgaQArg1BGgcIAUgNQAXgVAJgtIATARQASATgFAVIAEAEQAFADAHgCQAUgFAbgyQAEgGAEgQQAHgfgDgzIAGgVQASgZA3gUIgHAQQgIATAAAUQgBBBBGAwIAvAmQAuAugDAsIASAJQATAFAIgZQAFgbgKgQIBIAyQBIA6AAAlIAOAJQAUADAYgcIARAaQATAgAJAeQAfBdhHAjItsABQgfgkgGgwg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.1);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69435").s().p("Aj5BrQgYgIgFgWQgLguBfhNIAKAfQARAbAjgNQARgOAPgVQAdgogJgeIA5AgQAyAmgeAdIgFAFQgEAGADADQALAKBUgaIAogYQAkgbgQgSIAxAoQApAtgqAkIAbAIQAgAEAbgbQACANgIARQgRAgg3ARg");
	this.shape.setTransform(1.8,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE242A").s().p("AngDSQgNheB7gyIACAaQAHASAXghQAHgWAWgaQArg1BGgcIAUgNQAXgVAJgtIATARQASATgFAVIAEAEQAFADAHgCQAUgFAbgyQAEgGAEgQQAHgfgDgzIAGgVQASgZA3gUIgHAQQgIATAAAUQgBBBBGAwIAvAmQAuAugDAsIASAJQATAFAIgZQAFgbgKgQIBIAyQBIA6AAAlIAOAJQAUADAYgcIARAaQATAgAJAeQAfBdhHAjItsABQgfgkgGgwg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-29.5,96.5,59.1);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AqcFtQgUAAgNgOQgOgOAAgUIAAp6QAAgUAOgNQANgOAUAAIU4AAQAUAAAOAOQAOANAAAUIAAJ6QAAAUgOAOQgOAOgUAAg");
	this.shape.setTransform(-405.8,127.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#989898").s().p("AhRCsIAAlXICjAAIAAFXg");
	this.shape_1.setTransform(-80.4,296.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_2.setTransform(-138.7,308.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_3.setTransform(-138.7,292.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_4.setTransform(-138.7,275.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D2D3").s().p("EgJLAhXIAAmuIroAAIAAkPILoAAIAAjWQAAhlBEhHQBFhJBkAAIMnAAQBlAABIBJQBIBIAABkIAAClIEOAAMAAAg2/IFoAAIAALaIiCAAMAAAAxNIn0AAIAAGGg");
	this.shape_5.setTransform(68.6,138.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595A5C").s().p("ApmBLIAAiVITNAAIAACVg");
	this.shape_6.setTransform(-135.7,343.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595A5C").s().p("A0nBLIAAiVMApPAAAIAACVg");
	this.shape_7.setTransform(-403.7,343.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICnAAIAuhuIAABuICmAAIgFAbQgHAggPAbQgxBXhvADIgCABQgnAAgsgWg");
	this.shape_8.setTransform(-341.6,275.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA4g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4g");
	this.shape_9.setTransform(-341.6,271.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICaAAIAAhuIAoBuIC5AAIgEAbQgIAggPAbQgxBXhwADIgBABQgnAAgsgWg");
	this.shape_10.setTransform(-399.6,275.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAQhNAAg5g4g");
	this.shape_11.setTransform(-399.4,271.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595A5C").s().p("AhSCHQhZgsgThuICzAAIBViJIgrCJICgAAIgEAaQgIAggPAbQgyBYhvADIgCAAQgnAAgsgWg");
	this.shape_12.setTransform(-458.5,274.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhNAAg5g4g");
	this.shape_13.setTransform(-458.4,271.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#969595").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_14.setTransform(-574,275.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgVAAgPgPg");
	this.shape_15.setTransform(-604.1,275.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgUAAgQgPg");
	this.shape_16.setTransform(-693.1,275.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_17.setTransform(-723.3,275.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969595").s().p("AgaDwIAAnfIA2AAIAAHfg");
	this.shape_18.setTransform(-708.4,276.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#969595").s().p("AgbDwIAAnfIA2AAIAAHfg");
	this.shape_19.setTransform(-588.9,276.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D2D3").s().p("A3yDsIBnnZMAt+AAAIAAHbg");
	this.shape_20.setTransform(-618.5,276.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595A5C").s().p("AtgCWIAAkrIbBAAIAAErg");
	this.shape_21.setTransform(-403.7,214.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1D2D3").s().p("AoqIIIAAjmIgYAAQgjAAgagZQgZgZAAgkIAAndQAAgkAZgZQAagZAjAAIAZAAQAFhDAvguQAwgvBCAAIKMAAQBHAAA2A0QA3A0AABGIAAAuICGAAQAjAAAaAZQAZAaAAAjIAAFSQAAAjgZAZQgaAZgjAAIiGAAIAAE2g");
	this.shape_22.setTransform(-130.7,298);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5DA").s().p("AtHHPIAAucIaPAAIAAOcg");
	this.shape_23.setTransform(-406.6,128.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1D2D3").s().p("A5iY7MAAAguNQAAhiBAhDQBBhDBhAAIerAAQBiAABJBDQBJBFAABgMAAAAjkINEAAIAAEPItEAAIAAGag");
	this.shape_24.setTransform(-360.7,190.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_25.setTransform(539.3,-17.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_26.setTransform(539.3,-37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_27.setTransform(539.3,-57.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414142").s().p("AlxFyIAArjILjAAIAALjg");
	this.shape_28.setTransform(271.8,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7D4A4C").s().p("EhMeADhIAAnBMCY9AAAIAAHBg");
	this.shape_29.setTransform(-199.7,375.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2B59C").s().p("Eg/HAkLMAAAhIVMB+PAAAMAAABIVg");
	this.shape_30.setTransform(-202.2,128.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_31.setTransform(63.8,-214.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhOAAIAACpIDmAAIAAEsg");
	this.shape_32.setTransform(-96.2,-214.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6F72").s().p("AlTGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhYAAIAACpIDmAAIAAEsg");
	this.shape_33.setTransform(-276.2,-214.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D6F72").s().p("AlYGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_34.setTransform(-450.7,-214.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AE7070").s().p("EhESAIRIAAkgIBYAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAKAAQAdAAAWAVQAUAVAAAeIAAC0IAZAAIAAIFMB/rAAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAJAAQAeAAAVAVQAVAVAAAeIAAC0IAZAAIAAIFIBYAAIAAEgg");
	this.shape_35.setTransform(-199.1,-174.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB9595").s().p("EhDWAnyMAAAhPiMCGtAAAMAAABPig");
	this.shape_36.setTransform(-198,105);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#273247").s().p("Eg/+ADXIgBmtMB//AAAIAAGtg");
	this.shape_37.setTransform(-198.8,-169.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D2D3").s().p("AlYAeIAAg7IKxAAIAAA7g");
	this.shape_38.setTransform(401.3,-394.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AE7070").s().p("AnBBXICpitIJDAAICXCtg");
	this.shape_39.setTransform(400.1,-388.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7D4A4C").s().p("AkoBWIiZiwIODAAIi0C1g");
	this.shape_40.setTransform(400.1,-329.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AE7070").s().p("AnBDSIAAmjIODAAIAAGjg");
	this.shape_41.setTransform(400.1,-359.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7D4A4C").s().p("AobBzIAAjlIQ3AAIAADlg");
	this.shape_42.setTransform(400.8,386.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AE7070").s().p("EAAAA37IobgNMAD2hvqII7AAUAEGBvKAAAAAgQAAAPkXAAQhtAAiYgCg");
	this.shape_43.setTransform(400.3,35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6F71").s().p("AwoFtIAArZMAhRAAAIAALZg");
	this.shape_44.setTransform(308.3,360.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.8,-397.5,1541.7,795.1);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939598").s().p("AqcFtQgUAAgNgOQgOgOAAgUIAAp6QAAgUAOgNQANgOAUAAIU4AAQAUAAAOAOQAOANAAAUIAAJ6QAAAUgOAOQgOAOgUAAg");
	this.shape.setTransform(-405.8,127.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#989898").s().p("AhRCsIAAlXICjAAIAAFXg");
	this.shape_1.setTransform(-80.4,296.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_2.setTransform(-138.7,308.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_3.setTransform(-138.7,292.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989898").s().p("AkvAzIAAhlIJfAAIAABlg");
	this.shape_4.setTransform(-138.7,275.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D1D2D3").s().p("EgJLAhXIAAmuIroAAIAAkPILoAAIAAjWQAAhlBEhHQBFhJBkAAIMnAAQBlAABIBJQBIBIAABkIAAClIEOAAMAAAg2/IFoAAIAALaIiCAAMAAAAxNIn0AAIAAGGg");
	this.shape_5.setTransform(68.6,138.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#595A5C").s().p("ApmBLIAAiVITNAAIAACVg");
	this.shape_6.setTransform(-135.7,343.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#595A5C").s().p("A0nBLIAAiVMApPAAAIAACVg");
	this.shape_7.setTransform(-403.7,343.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICnAAIAuhuIAABuICmAAIgFAbQgHAggPAbQgxBXhvADIgCABQgnAAgsgWg");
	this.shape_8.setTransform(-341.6,275.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA4g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4g");
	this.shape_9.setTransform(-341.6,271.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#595A5C").s().p("AhSB6QhYgsgThvICaAAIAAhuIAoBuIC5AAIgEAbQgIAggPAbQgxBXhwADIgBABQgnAAgsgWg");
	this.shape_10.setTransform(-399.6,275.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA4A4QA3A3AABOQAABPg3A3Qg4A4hPAAQhNAAg5g4g");
	this.shape_11.setTransform(-399.4,271.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#595A5C").s().p("AhSCHQhZgsgThuICzAAIBViJIgrCJICgAAIgEAaQgIAggPAbQgyBYhvADIgCAAQgnAAgsgWg");
	this.shape_12.setTransform(-458.5,274.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FAFAFA").s().p("AiGCGQg3g3AAhPQAAhOA3g3QA5g4BNAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhNAAg5g4g");
	this.shape_13.setTransform(-458.4,271.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#969595").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAVQAAAWgPAPQgQAPgVAAQgVAAgPgPg");
	this.shape_14.setTransform(-574,275.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgPAVAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgVAAgPgPg");
	this.shape_15.setTransform(-604.1,275.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgQAPgVAAQgUAAgQgPg");
	this.shape_16.setTransform(-693.1,275.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#969595").s().p("AgkAlQgQgPAAgWQAAgVAQgPQAQgPAUAAQAWAAAPAPQAQAPAAAVQAAAWgQAPQgPAPgWAAQgUAAgQgPg");
	this.shape_17.setTransform(-723.3,275.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#969595").s().p("AgaDwIAAnfIA2AAIAAHfg");
	this.shape_18.setTransform(-708.4,276.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#969595").s().p("AgbDwIAAnfIA2AAIAAHfg");
	this.shape_19.setTransform(-588.9,276.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D1D2D3").s().p("A3yDsIBnnZMAt+AAAIAAHbg");
	this.shape_20.setTransform(-618.5,276.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#595A5C").s().p("AtgCWIAAkrIbBAAIAAErg");
	this.shape_21.setTransform(-403.7,214.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D1D2D3").s().p("AoqIIIAAjmIgYAAQgjAAgagZQgZgZAAgkIAAndQAAgkAZgZQAagZAjAAIAZAAQAFhDAvguQAwgvBCAAIKMAAQBHAAA2A0QA3A0AABGIAAAuICGAAQAjAAAaAZQAZAaAAAjIAAFSQAAAjgZAZQgaAZgjAAIiGAAIAAE2g");
	this.shape_22.setTransform(-130.7,298);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5DA").s().p("AtHHPIAAucIaPAAIAAOcg");
	this.shape_23.setTransform(-406.6,128.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1D2D3").s().p("A5iY7MAAAguNQAAhiBAhDQBBhDBhAAIerAAQBiAABJBDQBJBFAABgMAAAAjkINEAAIAAEPItEAAIAAGag");
	this.shape_24.setTransform(-360.7,190.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_25.setTransform(539.3,-17.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_26.setTransform(539.3,-37.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D1D2D3").s().p("EgkKAA8IAAh3MBIVAAAIAAB3g");
	this.shape_27.setTransform(539.3,-57.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414142").s().p("AlxFyIAArjILjAAIAALjg");
	this.shape_28.setTransform(271.8,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7D4A4C").s().p("EhMeADhIAAnBMCY9AAAIAAHBg");
	this.shape_29.setTransform(-199.7,375.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C2B59C").s().p("Eg/HAkLMAAAhIVMB+PAAAMAAABIVg");
	this.shape_30.setTransform(-202.2,128.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_31.setTransform(63.8,-214.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6F72").s().p("AlTGBIAAksIDcAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhOAAIAACpIDmAAIAAEsg");
	this.shape_32.setTransform(-96.2,-214.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6D6F72").s().p("AlTGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGBAAQAdAAAWAVQAVAVAAAeIAACcQAAAdgVAWQgWAVgdAAIhYAAIAACpIDmAAIAAEsg");
	this.shape_33.setTransform(-276.2,-214.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6D6F72").s().p("AlYGBIAAksIDmAAIAAipIhOAAQgeAAgVgVQgVgWAAgdIAAicQAAgeAVgVQAVgVAeAAIGAAAQAfAAAVAVQAVAVAAAeIAACcQAAAdgVAWQgVAVgfAAIhNAAIAACpIDmAAIAAEsg");
	this.shape_34.setTransform(-450.7,-214.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AE7070").s().p("EhESAIRIAAkgIBYAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAKAAQAdAAAWAVQAUAVAAAeIAAC0IAZAAIAAIFMB/rAAAIAAoFIATAAIAAi0QAAgeAVgVQAVgVAeAAIAJAAQAeAAAVAVQAVAVAAAeIAAC0IAZAAIAAIFIBYAAIAAEgg");
	this.shape_35.setTransform(-199.1,-174.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CB9595").s().p("EhDWAnyMAAAhPiMCGtAAAMAAABPig");
	this.shape_36.setTransform(-198,105);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#273247").s().p("Eg/+ADXIgBmtMB//AAAIAAGtg");
	this.shape_37.setTransform(-198.8,-169.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D1D2D3").s().p("AlYAeIAAg7IKxAAIAAA7g");
	this.shape_38.setTransform(401.3,-394.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AE7070").s().p("AnBBXICpitIJDAAICXCtg");
	this.shape_39.setTransform(400.1,-388.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7D4A4C").s().p("AkoBWIiZiwIODAAIi0C1g");
	this.shape_40.setTransform(400.1,-329.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AE7070").s().p("AnBDSIAAmjIODAAIAAGjg");
	this.shape_41.setTransform(400.1,-359.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7D4A4C").s().p("AobBzIAAjlIQ3AAIAADlg");
	this.shape_42.setTransform(400.8,386.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AE7070").s().p("EAAAA37IobgNMAD2hvqII7AAUAEGBvKAAAAAgQAAAPkXAAQhtAAiYgCg");
	this.shape_43.setTransform(400.3,35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6E6F71").s().p("AwoFtIAArZMAhRAAAIAALZg");
	this.shape_44.setTransform(308.3,360.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-770.8,-397.5,1541.7,795.1);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBqQgRAAgNgFQgMgFgIgIQgIgHgFgKIgHgSIgDgQIgBgLIAAgCIAAiBIAfAAIAACBQAAANAEAJQADAJAFAGQAFAGAHADIALAFIAKABIAFABQAMAAAIgEQAIgEAGgFQAFgGADgHIAFgMIACgKIAAgFIAAiBIAfAAIAADQIgfAAIAAgdIgDAKIgGAHIgIAGIgIAEQgLAEgNABg");
	this.shape.setTransform(102.3,-129.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAWQgFAAgDgCIgEgEIgBgHIAAgeIAdAAIAAAPIBNAAIAAAcg");
	this.shape_1.setTransform(86.5,-144.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABqQgNgBgKgEIgJgEIgIgGIgGgHQgDgEAAgFIAAgBIAAABIAAAcIgfAAIAAjQIAfAAIAACBIABAFIABAKIAFAMQADAHAFAGQAGAFAIAEQAIAEAMAAIAFgBIAKgBIALgFQAHgDAFgGQAFgGADgJQAEgJAAgNIAAiBIAfAAIAACBIAAACIgBALIgDAQIgHASQgEAKgJAHQgIAIgMAFQgNAFgRAAg");
	this.shape_2.setTransform(82.3,-129.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABRCVIAAiUQgBgIgDgHIgCgGIgFgEIgGgEIgIgBIgNACIgIAEIgGAFIgDADIgVgXQAFgGAHgFIAQgIQAKgDANAAIAGABIALABIANAHQAHADAFAHQAGAHAEAKQAEALAAAOIAACUgAhZhOQgGgDgFgFQgFgFgDgGQgDgHAAgIQAAgHADgHQADgGAFgFQAFgGAGgCQAHgDAIAAQAHAAAHADQAGACAFAGQAFAFADAGQADAHAAAHQAAAIgDAHQgDAGgFAFQgFAFgGADQgHADgHAAQgIAAgHgDgAhTh4QgEAEAAAEQAAAFAEAEQADADAGAAQAFAAADgDQAEgEAAgFQAAgEgEgEQgDgEgFABQgGgBgDAEg");
	this.shape_3.setTransform(58.9,-134);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAiIAAgmIgPAAIAAgdIAfAAIAHACIAEAEQACADAAAEIAAAZIA5AAIAAAdg");
	this.shape_4.setTransform(50.9,-153.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBqQgRAAgNgFQgMgFgIgIQgIgHgFgKIgHgSIgDgQIgBgLIAAgCIAAiBIAfAAIAACBQAAANAEAJQADAJAFAGQAFAGAHADIALAFIAKABIAFABQAMAAAIgEQAIgEAGgFQAFgGADgHIAFgMIACgKIAAgFIAAiBIAfAAIAADQIgfAAIAAgdIgDAKIgGAHIgIAGIgIAEQgLAEgNABg");
	this.shape_5.setTransform(48.6,-129.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAyBpIAAiAQAAgMgCgJQgEgJgFgFQgFgGgHgDIgMgEIgKgCIgFAAQgJAAgHADIgNAFIgIAIIgGAJQgGALgBAOIAACAIgeAAIAAifQAGgLAHgJQAIgIAIgGIAQgIIAOgGIANgBIAHgBIABAAQAPABAMADQALADAJAGQAIAFAGAHIAKAOIAGAOIAEANIABAJIAAAGIAACAg");
	this.shape_6.setTransform(28.5,-129.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWBpIAAiTQAAgJgDgHIgCgGIgFgEIgGgEIgGgBIgOACIgJAEIgFAFIgEADIgUgXQAEgGAIgFIAQgIQAJgDAOAAIAFABIALABIANAGQAGAEAGAGQAGAHADALQAFAKAAAQIAACTg");
	this.shape_7.setTransform(10.8,-129.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAzBpIAAg5IgGgMQgEgFgFgEIgMgFIgOgCIgKABIgHACIAAggQAHgCAKAAQAWAAATALIAAgVQgCgPgGgLIgGgKIgJgIIgMgFQgHgDgJAAQgNABgLAFIgJAHIgJAJIgFANQgDAHAAAKIgfAAIAAgCIABgKIADgQIAIgTQAFgKAJgHQAJgJAOgFQANgFATAAIACAAIAKABIAQADIASAHQAKAFAIAKQAIAIAFAOQAFAOAAATIAACAg");
	this.shape_8.setTransform(-4.4,-129.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBqQgRAAgNgFQgMgFgIgIQgIgHgFgKIgHgSIgDgQIgBgLIAAgCIAAiBIAfAAIAACBQAAANAEAJQADAJAFAGQAFAGAHADIALAFIAKABIAFABQAMAAAIgEQAIgEAGgFQAFgGADgHIAFgMIACgKIAAgFIAAiBIAfAAIAADQIgfAAIAAgdIgDAKIgGAHIgIAGIgIAEQgLAEgNABg");
	this.shape_9.setTransform(-23.2,-129.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXBpIAAiTQgBgJgDgHIgDgGIgEgEIgGgEIgHgBIgNACIgIAEIgGAFIgDADIgWgXQAGgGAHgFIAQgIQAKgDANAAIAFABIALABIAMAGQAIAEAFAGQAGAHAEALQADAKAAAQIAACTg");
	this.shape_10.setTransform(-40.8,-129.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBmIgQgIQgHgFgGgGIAWgUIADADIAGAEIAJAFIAMACIAHgCIAGgDIAEgGIADgFQADgHABgKIAAh4IgdAAIAAgdIA7AAIAACVQAAAPgDALQgEAKgFAHQgHAHgHAEIgMAFIgLACIgFABQgNAAgKgEg");
	this.shape_11.setTransform(-52.9,-129.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBmIgQgIQgHgFgGgGIAWgUIACADIAHAEIAJAFIAMACIAHgCIAGgDIAEgGIADgFQADgHABgKIAAh4IgdAAIAAgdIA7AAIAACVQABAPgEALQgEAKgFAHQgHAHgHAEIgNAFIgKACIgFABQgNAAgKgEg");
	this.shape_12.setTransform(-65.3,-129.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnAWQgFAAgCgCIgFgEIgCgHIAAgeIAdAAIAAAPIBOAAIAAAcg");
	this.shape_13.setTransform(-76.5,-144.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAzBpIAAg+QAAgIgEgGQgEgHgGgDIgOgGIgMgEIgOgCIgDAAIgJACIgKADIgKAGIgJAKQgEAGgCAIIgBAGQABAGADAEQADAFAFAEIAMAEIAMAEIALABIAHAAIADAAIAAAdIgiAAQgLAAgKgEQgJgGgIgIQgHgIgEgKQgEgKAAgMQAAgMAFgMQAGgMALgKIAQgLIAOgHIAPgEIAOgBIAUACIAQAFIAPAGIAAgMQAAgKgCgHIgGgNIgIgJIgJgHQgLgFgOgBQgMAAgJAFQgJAEgFAHQgGAGgDAIIgFAMIggAAQABgRAGgMQAFgNAIgIQAIgIAJgFIASgHIAPgCIAKgBIABAAQATAAANAFQAOAFAJAJQAJAHAGAKIAHATIAEAQIAAAKIAAACIAAB+g");
	this.shape_14.setTransform(-80.3,-129.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXBoQgHgCgFgEQgFgFgDgGQgDgGAAgHIAAgBIAAABQAAAHgCAGQgDAGgFAFQgFAEgGACIgPACQgLAAgIgDIgOgGIgKgIIgIgKQgGgMgCgPIAAidIAfAAIAACRQAAAOADAHQAEAIAEADQAFADAEABIAHABIABAAQAIAAAFgFQAEgEADgGIADgLIAAgIIAAgDIAAiRIAbAAIAACRIAAADIABAIIADALQACAGAFAEQAFAFAIAAIACAAIAGgBQAEgBAFgDQAEgDADgIQADgHAAgOIAAiRIAfAAIAACdQgBAPgHAMIgHAKIgLAIIgOAGQgIADgLAAg");
	this.shape_15.setTransform(-100.8,-129.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRB2QgRAAgNgEQgMgDgIgGQgJgGgEgHIgIgOIgDgOIgBgKQAAgOAFgJQAFgJAHgHIAMgIIAHgDIgNgEIgJgHIgHgJIgFgJQgEgKgBgNQAAgOADgJIAGgRIAJgMIALgJQANgHAQgBIAuAAIAAAhIgbAAIgOABIgKAEIgHAGIgFAHQgFAIAAAKQAAAIACAGIAIAKIAJAGIAKAEIAIABIAEAAIAbAAIAAAgIgbAAIgQACIgKAFIgHAHIgDAIIgCAFIAAAEQAAAJADAGIAGAKIAIAFIAJAEIAIABIAEAAIABAAIAqAAQAMAAAHgFQAHgFAEgGQAEgIABgJIAAipIAkAAIAACpQAAAPgFALQgEALgHAHQgHAHgIAEIgQAHIgOADIgJABg");
	this.shape_16.setTransform(31.9,55.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVB1QgLgEgJgGQgIgFgHgIIgJgQIAHgDIAIgFIAJgEIAFgEQAEAJAHAGIANAHQAJADAIAAQAMgBAJgGIAIgGIAIgIIAFgMIACgOIAAhOQgCgMgFgLIgFgIIgHgIIgMgFIgNgCIgTACQgIACgHAEQgFAFgFAGIgIARIgkAAQADgPAFgNQAGgOALgKQAKgJAQgFQAQgGAVAAIAAAAIABAAIAJABIAQADIASAIQAJAGAIAJQAIAJAEANQAFAOABATIAABOQgCAXgIARIgKAPQgFAHgJAGQgIAFgLAEQgMADgOABQgPgBgLgDg");
	this.shape_17.setTransform(11.2,55.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_18.setTransform(-3.6,28.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHB4QgTAAgOgGQgOgGgKgIQgJgJgGgKIgIgVIgDgSIgBgMIAAgDIAAiSIAkAAIAACSQAAAPADAKQAFAKAFAHQAGAHAHADIANAFIAMACIAEABQAPAAAJgFQAJgEAHgGQAGgGADgIIAFgOIACgLIAAgGIAAiSIAjAAIAADrIgjAAIAAghIgDAMIgHAIIgIAHIgLAEQgMAEgPACg");
	this.shape_19.setTransform(-9.3,55.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA3B2IAAhmIgCgLIgEgIIgFgKIgIgIQgGgDgHAAIhOAAIAACOIgiAAIAAjrIAiAAIAAA8IBOAAQAHgBAFgDIAJgJQAFgGACgKIAAgfIAjAAIAAAiIgBAJIgEALIgGAMIgJALIAMAPIAIASQAFAKAAANIAABmg");
	this.shape_20.setTransform(-31.8,55.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_21.setTransform(67.4,-35.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_22.setTransform(-15.4,-35.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7CB44B").s().p("AAqIHIAAr1QgmAbg0ATQg1AQhJADIAAiFIAYgBIApgGIA0gTQAagNAWgXQAWgYAPgjQAOglAAg1ICFAAIAAQMg");
	this.shape_23.setTransform(-83,-35.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C0212F").s().p("AlkPWIp/AAQizAAh/h/Qh/h/AAizIAA+KQAAi0B/h+QB/h/CzAAIfHAAQCzAAB/B/QB/B+AAC0IAAeKQAACzh/B/Qh/B/izAAIkZAAIpINBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-181.5,285.9,363.1);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAWIAAgdIACgHIAEgFQADgCAFgBIBDAAIAAAdIg0AAIAAAPg");
	this.shape.setTransform(132.2,-152.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghBmQgPgFgJgGQgMgGgHgJIAUgVIAKAIIAPAHIAQAGIARACQALgBAHgCQAIgCAGgFQAFgEADgGQADgHAAgHQAAgHgCgFIgHgIIgHgEIgFgBIgGgBIgMgCIgOgCIgKgDIgHgBIgJgDIgLgHIgJgJQgFgGgDgJQgCgJAAgLQAAgRAGgLQAGgMAJgHQALgIAMgDQAMgEAMAAQAMAAALAEIASAGIARAIIAQAMIgSAZIgNgIIgLgGIgMgFIgMgDIgIgBIgNABQgIABgEADQgGAEgCAGQgDAGgBAJQAAAKAGAGQAFAFAIADIASAEIAUAEQAKACAKAEQAJAGAIAGQAHAIAEAKQAFAJAAALQAAAQgGAMQgGAMgKAHQgKAIgNAEQgOADgPAAQgUAAgQgEg");
	this.shape_1.setTransform(126.6,-129.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBoQgPAAgLgDQgLgDgHgFQgHgFgFgHIgHgMIgCgMIgBgJQgBgMAFgJQAFgIAFgFIALgIIAGgDIgKgDIgJgGIgGgHIgEgJQgEgJgBgMQAAgLADgJIAFgPIAIgLIAKgHQALgGAOgBIApAAIAAAdIgYAAIgMABIgJAEIgGAFIgFAGQgEAGAAAJQgBAIADAFIAHAJIAIAGIAJACIAGABIAEABIAYAAIAAAcIgYAAIgOACIgJAEIgGAGIgDAHIgBAFIAAADQAAAIACAFIAFAJIAIAFIAIADIAGABIAFAAIAAAAIAkAAQALAAAHgEQAGgFADgFQAEgHACgIIAAiVIAeAAIAACVQAAANgDAJQgFAKgFAHQgHAGgHAEIgOAGIgMADIgIAAg");
	this.shape_2.setTransform(108.2,-129.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5AYIAAgdIBWAAIAAgSIAdAAIAAAvg");
	this.shape_3.setTransform(88.7,-144.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAzBpIAAg+QAAgIgEgGQgEgHgGgDIgOgGIgMgEIgOgCIgDAAIgIACIgLADIgKAGIgJAKQgEAGgCAIIAAAGQAAAGADAEQADAFAFAEIAMAEIAMAEIALABIAHAAIADAAIAAAdIgiAAQgLAAgKgEQgJgGgIgIQgHgIgEgKQgEgKAAgMQAAgMAFgMQAGgMALgKIAQgLIAOgHIAPgEIAOgBIAUACIAQAFIAPAGIAAgMQAAgKgCgHIgGgNIgIgJIgJgHQgLgFgOgBQgMAAgJAFQgJAEgFAHQgGAGgDAIIgFAMIggAAQABgRAGgMQAFgNAIgIQAIgIAJgFIASgHIAPgCIAKgBIABAAQATAAANAFQAOAFAJAJQAJAHAGAKIAHATIAEAQIAAAKIAAACIAAB+g");
	this.shape_4.setTransform(89.3,-129.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzBpIAAh+QgBgKgBgHIgGgNIgJgJIgJgHQgLgFgOgBQgIAAgHADIgMAFIgJAIIgGAKQgGALgBAPIAAAVQASgLAVAAQAKAAAIACIAAAgIgIgCIgKAAQgOgBgLAIQgFADgEAFIgFAMIAAA5IggAAIAAiAQABgTAFgOQAFgOAHgIQAJgKAJgFIASgHIAQgDIAKgBIABAAQATAAAOAFQAOAFAJAJQAJAHAFAKIAIATIADAQIAAAKIAAACIAAB+g");
	this.shape_5.setTransform(70.1,-129.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBoIAAjPIAfAAIAADPg");
	this.shape_6.setTransform(56.4,-129.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBoQgKgEgHgFQgIgGgFgGIgIgNIAFgDIAIgFIAHgEIAGgEQADAKAGAEIAMAGQAHADAHABQALgCAIgFIAHgGIAHgHIAEgJIACgOIAAhEQgBgLgFgKIgEgHIgHgGIgJgGIgNgBIgQABQgIACgFAFQgFADgEAHIgHAOIggAAQACgOAFgLQAFgMAKgJQAJgIAOgEQAOgFASgBIAAAAIABAAIAJABIANADIAQAHQAIAFAHAIQAHAIAEAMQAFAMAAARIAABEQgBAUgIAQIgIANQgFAGgIAGQgHAEgKAEQgKACgNAAQgNAAgKgCg");
	this.shape_7.setTransform(43.9,-129.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag5APIAAgdIBzAAIAAAdg");
	this.shape_8.setTransform(27.2,-143.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBqQgRAAgNgFQgMgFgIgIQgIgHgFgKIgHgSIgDgQIgBgLIAAgCIAAiBIAfAAIAACBQAAANAEAJQADAJAFAGQAFAGAHADIALAFIAKABIAFABQAMAAAIgEQAIgEAGgFQAFgGADgHIAFgMIACgKIAAgFIAAiBIAfAAIAADQIgfAAIAAgdIgDAKIgGAHIgIAGIgIAEQgLAEgNABg");
	this.shape_9.setTransform(25.8,-129.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzBpIAAiAQAAgMgDgJQgEgJgFgFQgGgGgGgDIgMgEIgJgCIgGAAQgJAAgHADIgMAFIgJAIIgHAJQgEALgBAOIAACAIggAAIAAifQAHgLAIgJQAHgIAIgGIAQgIIAPgGIALgBIAIgBIABAAQAPABALADQAMADAIAGQAJAFAGAHIAKAOIAGAOIADANIABAJIAAAGIAACAg");
	this.shape_10.setTransform(5.7,-129.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWBpIAAiTQAAgJgDgHIgDgGIgEgEIgGgEIgHgBIgNACIgJAEIgFAFIgEADIgUgXQAEgGAIgFIAQgIQAKgDANAAIAFABIAKABIAOAGQAGAEAGAGQAGAHADALQAEAKABAQIAACTg");
	this.shape_11.setTransform(-12,-129.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAzBpIAAg5IgGgMQgEgFgFgEIgMgFIgOgCIgKABIgHACIAAggQAHgCAKAAQAWAAATALIAAgVQgCgPgGgLIgGgKIgJgIIgMgFQgHgDgJAAQgNABgLAFIgJAHIgJAJIgFANQgDAHAAAKIgfAAIAAgCIABgKIADgQIAIgTQAFgKAJgHQAJgJAOgFQANgFATAAIACAAIAKABIAQADIASAHQAKAFAIAKQAIAIAFAOQAFAOAAATIAACAg");
	this.shape_12.setTransform(-27.2,-129.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGBqQgRAAgNgFQgMgFgIgIQgIgHgFgKIgHgSIgDgQIgBgLIAAgCIAAiBIAfAAIAACBQAAANAEAJQADAJAFAGQAFAGAHADIALAFIAKABIAFABQAMAAAIgEQAIgEAGgFQAFgGADgHIAFgMIACgKIAAgFIAAiBIAfAAIAADQIgfAAIAAgdIgDAKIgGAHIgIAGIgIAEQgLAEgNABg");
	this.shape_13.setTransform(-46,-129.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWBpIAAiTQAAgJgDgHIgCgGIgFgEIgGgEIgGgBIgOACIgJAEIgFAFIgEADIgUgXQAEgGAIgFIAQgIQAJgDAOAAIAFABIAKABIAOAGQAGAEAGAGQAGAHADALQAFAKAAAQIAACTg");
	this.shape_14.setTransform(-63.6,-129.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYBmIgQgIQgIgFgEgGIAUgUIAEADIAFAEIAJAFIANACIAHgCIAGgDIAEgGIADgFQADgHAAgKIAAh4IgcAAIAAgdIA8AAIAACVQgBAPgDALQgEAKgGAHQgGAHgGAEIgOAFIgLACIgEABQgOAAgJgEg");
	this.shape_15.setTransform(-75.7,-129.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYBmIgQgIQgIgFgFgGIAVgUIAEADIAFAEIAJAFIANACIAHgCIAGgDIAEgGIADgFQADgHABgKIAAh4IgdAAIAAgdIA7AAIAACVQAAAPgDALQgEAKgFAHQgGAHgIAEIgMAFIgMACIgEABQgOAAgJgEg");
	this.shape_16.setTransform(-88.1,-129.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgnAWQgFAAgDgCIgEgEIgBgHIAAgeIAdAAIAAAPIBNAAIAAAcg");
	this.shape_17.setTransform(-99.3,-144.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAzBpIAAg+QAAgIgEgGQgEgHgGgDIgOgGIgMgEIgOgCIgDAAIgIACIgLADIgLAGIgIAKQgEAGgCAIIAAAGQgBAGAEAEQADAFAFAEIALAEIANAEIALABIAHAAIADAAIAAAdIgiAAQgLAAgJgEQgKgGgIgIQgHgIgDgKQgFgKAAgMQAAgMAGgMQAEgMANgKIAOgLIAPgHIAQgEIANgBIAUACIAQAFIAPAGIAAgMQAAgKgCgHIgGgNIgIgJIgKgHQgLgFgOgBQgLAAgJAFQgIAEgHAHQgFAGgDAIIgFAMIggAAQABgRAGgMQAFgNAIgIQAIgIAJgFIASgHIAPgCIAJgBIABAAQAUAAANAFQAOAFAKAJQAIAHAFAKIAIATIADAQIABAKIAAACIAAB+g");
	this.shape_18.setTransform(-103.1,-129.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAXBoQgHgCgFgEQgFgFgDgGQgDgGAAgHIAAgBIAAABQAAAHgCAGQgDAGgFAFQgFAEgGACIgPACQgLAAgIgDIgOgGIgKgIIgIgKQgGgMgCgPIAAidIAfAAIAACRQAAAOADAHQAEAIAEADQAFADAEABIAHABIABAAQAIAAAFgFQAEgEADgGIADgLIAAgIIAAgDIAAiRIAbAAIAACRIAAADIABAIIADALQACAGAFAEQAFAFAIAAIACAAIAGgBQAEgBAFgDQAEgDADgIQADgHAAgOIAAiRIAfAAIAACdQgBAPgHAMIgHAKIgLAIIgOAGQgIADgLAAg");
	this.shape_19.setTransform(-123.6,-129.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRB2QgRAAgNgEQgMgDgIgGQgJgGgEgHIgIgOIgDgOIgBgKQAAgOAFgJQAFgJAHgHIAMgIIAHgDIgNgEIgJgHIgHgJIgFgJQgEgKgBgNQAAgOADgJIAGgRIAJgMIALgJQANgHAQgBIAuAAIAAAhIgbAAIgOABIgKAEIgHAGIgFAHQgFAIAAAKQAAAIACAGIAIAKIAJAGIAKAEIAIABIAEAAIAbAAIAAAgIgbAAIgQACIgKAFIgHAHIgDAIIgCAFIAAAEQAAAJADAGIAGAKIAIAFIAJAEIAIABIAEAAIABAAIAqAAQAMAAAHgFQAHgFAEgGQAEgIABgJIAAipIAkAAIAACpQAAAPgFALQgEALgHAHQgHAHgIAEIgQAHIgOADIgJABg");
	this.shape_20.setTransform(31.9,55.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVB1QgLgEgJgGQgIgFgHgIIgJgQIAHgDIAIgFIAJgEIAFgEQAEAJAHAGIANAHQAJADAIAAQAMgBAJgGIAIgGIAIgIIAFgMIACgOIAAhOQgCgMgFgLIgFgIIgHgIIgMgFIgNgCIgTACQgIACgHAEQgFAFgFAGIgIARIgkAAQADgPAFgNQAGgOALgKQAKgJAQgFQAQgGAVAAIAAAAIABAAIAJABIAQADIASAIQAJAGAIAJQAIAJAEANQAFAOABATIAABOQgCAXgIARIgKAPQgFAHgJAGQgIAFgLAEQgMADgOABQgPgBgLgDg");
	this.shape_21.setTransform(11.2,55.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPAhIAAhBIAfAAIAABBg");
	this.shape_22.setTransform(-3.6,28.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHB4QgTAAgOgGQgOgGgKgIQgJgJgGgKIgIgVIgDgSIgBgMIAAgDIAAiSIAkAAIAACSQAAAPADAKQAFAKAFAHQAGAHAHADIANAFIAMACIAEABQAPAAAJgFQAJgEAHgGQAGgGADgIIAFgOIACgLIAAgGIAAiSIAjAAIAADrIgjAAIAAghIgDAMIgHAIIgIAHIgLAEQgMAEgPACg");
	this.shape_23.setTransform(-9.3,55.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA3B2IAAhmIgCgLIgEgIIgFgKIgIgIQgGgDgHAAIhOAAIAACOIgiAAIAAjrIAiAAIAAA8IBOAAQAHgBAFgDIAJgJQAFgGACgKIAAgfIAjAAIAAAiIgBAJIgEALIgGAMIgJALIAMAPIAIASQAFAKAAANIAABmg");
	this.shape_24.setTransform(-31.8,55.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_25.setTransform(67.4,-35.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7CB44B").s().p("AhvIEQgxgOgkgXQglgWgZgcIgqg7QgohGgIhaIAAmjQAIhZAohGIAqg6QAZgdAlgXQAkgXAxgNQAwgOA/AAQA/AAAxAOQAwANAlAXQAkAXAaAdIAqA6QAoBGAIBZIAAGjQgIBagoBGIgqA7QgaAcgkAWQglAXgwAOQgxANg/AAQg/AAgwgNgAhrl0IgnAWIgjAiIgZAuQgJAbAAAiIAAGjQAAAkAJAcIAZAxIAjAiIAnAYQAwAVA7ADQA9gDAvgVIAogYIAjgiIAYgxQAJgcAAgkIAAmjQAAgigJgbIgYguIgjgiIgogWQgvgVg9gCQg7ACgwAVg");
	this.shape_26.setTransform(-15.4,-35.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7CB44B").s().p("AAqIHIAAr1QgmAbg0ATQg1AQhJADIAAiFIAYgBIApgGIA0gTQAagNAWgXQAWgYAPgjQAOglAAg1ICFAAIAAQMg");
	this.shape_27.setTransform(-83,-35.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C0212F").s().p("AlkPWIp/AAQizAAh/h/Qh/h/AAizIAA+KQAAi0B/h+QB/h/CzAAIfHAAQCzAAB/B/QB/B+AAC0IAAeKQAACzh/B/Qh/B/izAAIkZAAIpINBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-181.5,285.9,363.1);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape.setTransform(-45.2,52.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh6AAhYhXQhXhYAAh7QAAh7BXhXQBYhYB6AAQB8AABXBYQBXBXAAB7g");
	this.shape_1.setTransform(-45.2,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F3E1").s().p("AjSDTQhYhXAAh8QAAh6BYhYQBXhXB7gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh7ABhXhYg");
	this.shape_2.setTransform(-45.2,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_3.setTransform(47.4,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh7AAhXhXQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABYBYQBXBXAAB7g");
	this.shape_4.setTransform(47.4,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F3E1").s().p("AjSDTQhXhXgBh8QABh6BXhYQBYhXB6gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh6ABhYhYg");
	this.shape_5.setTransform(47.4,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040505").s().p("AvDCWIAAkrIeHAAIAAErg");
	this.shape_6.setTransform(0.2,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969595").s().p("Au2HoIjovPMAk+AAAIjaPPg");
	this.shape_7.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-82.7,236.7,166.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape.setTransform(-45.2,52.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh6AAhYhXQhXhYAAh7QAAh7BXhXQBYhYB6AAQB8AABXBYQBXBXAAB7g");
	this.shape_1.setTransform(-45.2,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0F3E1").s().p("AjSDTQhYhXAAh8QAAh6BYhYQBXhXB7gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh7ABhXhYg");
	this.shape_2.setTransform(-45.2,53);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040505").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	this.shape_3.setTransform(47.4,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221E1F").ss(1.5).p("AEqAAQAAB7hXBYQhYBXh7AAQh7AAhXhXQhYhYAAh7QAAh7BYhXQBXhYB7AAQB7AABYBYQBXBXAAB7g");
	this.shape_4.setTransform(47.4,53);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0F3E1").s().p("AjSDTQhXhXgBh8QABh6BXhYQBYhXB6gBQB8ABBXBXQBYBYAAB6QAAB8hYBXQhXBYh8gBQh6ABhYhYg");
	this.shape_5.setTransform(47.4,53);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040505").s().p("AvDCWIAAkrIeHAAIAAErg");
	this.shape_6.setTransform(0.2,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969595").s().p("Au2HoIjovPMAk+AAAIjaPPg");
	this.shape_7.setTransform(0,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.3,-82.7,236.7,166.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("EhY7ACRIAAkhMCx3AAAIAAEhg");
	this.shape.setTransform(0,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(512.8,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221E1F").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(444.3,-152.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfgBgqQAAAqgPAfQgPAggaAVQgbAVgiAMIhMAKQg3gBgqgMIhKgfIg2gtIgmgzQgkg+gJhNIAAs2ICiAAIAAL3QAABHASAnQASAmAXASQAXASAXADIAjADIAHAAQAqAAAZgXQAYgWAMgdIAQg7IACgtIAAgMIAAr3ICPAAIAAL3IAAAMIAFAtIAPA7QANAdAZAWQAYAXArAAIAIAAIAjgDQAWgDAWgSQAWgSARgmQAQgnABhHIAAx+ICiAAIAAS9QgJBNgjA+IglAzIg3AtIhLAfQgrAMg2ABg");
	this.shape_3.setTransform(427.7,-45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfAAgqQgBAqgPAfQgPAggbAVQgZAVgjAMIhMAKQg2gBgrgMIhKgfIg2gtIgmgzQgjg+gJhNIAAs2ICiAAIAAL3QAABHASAnQAQAmAYASQAYASAXADIAiADIAHAAQAqAAAZgXQAYgWANgdIAOg7IAEgtIAAgMIAAr3ICPAAIAAL3IAAAMIADAtIARA7QANAdAYAWQAYAXArAAIAIAAIAigDQAXgDAWgSQAWgSASgmQAPgnAAhHIAAx+ICiAAIAAS9QgHBNgkA+IgmAzIg2AtIhLAfQgqAMg3ABg");
	this.shape_4.setTransform(308.8,-45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(212.9,-62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AEHIkIAArWQAAhDgXgxQgYgwgpgcIivByIithyQgqAdgYAvQgXAxAABDIAAGDQADA1AUApIAXAiIAgAeIAsAVIA9AIIB3AAIAACYIjZAAQhFgFg2gjIguglIgog5IgbhOIgLhpIAAnWQAMhvA/hQQA/hQBhglIC9B2IC/h2QBgAlBBBQQAfAnASAwQARAvAHA5IAAMTg");
	this.shape_6.setTransform(148.6,-26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AkuBNIAAiZIJdAAIAACZg");
	this.shape_7.setTransform(49.7,-101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AEJIjIAAlAQAAgvgVgfQgWghgfgUIhFggIhFgRIhKgJIgTACIgpAHIg2AQIg2AeIguA0QgWAegIAtIgDAaQAAAiASAZQARAYAaAQIA8AbIBBAPIA5AHIApABIAOAAIAACYIi1AAQg5AAgygZQgygYgmgpQglgrgVg3QgWg3AAg9QAAg8Acg9QAag+A/g6IBNg5IBPglIBOgUIBLgGIBoALIBUAWIBNAhIAAg+QAAgzgLgmIgehDIgqgwIgxggQg5gehKgEQhBAAguAYQgtAXgeAiQgdAigPAlIgXBAIirAAQAGhaAeg/QAcg/AqgpQAogrAwgYIBcgjIBPgQIAygDIAJAAQBlAABIAcQBHAaAvApQAvAqAbAyIApBhIAQBUIADA1IAAALIAAKVg");
	this.shape_8.setTransform(45.9,-26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(-60.4,-25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_10.setTransform(-174.4,-25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_11.setTransform(-266.5,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBthqIARARIAfAXIAvAWIBBAKIAogIIAfgSIAWgbIAPgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgeAkgkAUIhFAcIg4ALIgcACQhGAAgygSg");
	this.shape_12.setTransform(-329.9,-25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBuhqIARARIAeAXIAuAWIBBAKIApgIIAfgSIAXgbIAPgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgTA2geAjQgeAkgkAUIhEAcIg4ALIgeACQhGAAgxgSg");
	this.shape_13.setTransform(-394.6,-25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AisITQhPgag0geQg8gignguIBshpIAzAnIBKAlIBYAaIBfAKQAzAAApgMQApgNAdgYQAdgXAOgfQAQggAAgmQAAgogOgYIgegnIgkgUIgcgIIghgFIhBgLIhIgMIg3gKIgigIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBAgSBAAAQBDAAA3APIBgAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg9gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAaAcAsAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_14.setTransform(-468.7,-25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AiROJIAAxMQAAgggOgeIglg+Igug/IgwhAIgjhDQgPgjAAgkIAMhoQALg4AegwQAfgwAzggQA0ggBQAAIGeAAIAACYIl3AAQgoADgfASIgaAUIgXAfIgQApIgGA4QAAAoANAaIAiAxIA1A9IBDBeIAMAmIAJAtIAEA9IAAQyg");
	this.shape_15.setTransform(-519.4,-62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.2,-91.7,1138.5,183.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("EhY7ACRIAAkhMCx3AAAIAAEhg");
	this.shape.setTransform(0,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(512.8,-26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221E1F").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(444.3,-152.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfgBgqQAAAqgPAfQgPAggaAVQgbAVgiAMIhMAKQg3gBgqgMIhKgfIg2gtIgmgzQgkg+gJhNIAAs2ICiAAIAAL3QAABHASAnQASAmAXASQAXASAXADIAjADIAHAAQAqAAAZgXQAYgWAMgdIAQg7IACgtIAAgMIAAr3ICPAAIAAL3IAAAMIAFAtIAPA7QANAdAZAWQAYAXArAAIAIAAIAjgDQAWgDAWgSQAWgSARgmQAQgnABhHIAAx+ICiAAIAAS9QgJBNgjA+IglAzIg3AtIhLAfQgrAMg2ABg");
	this.shape_3.setTransform(427.7,-45.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AB3LhQgkgMgZgVQgagVgQggQgPgfAAgqQgBAqgPAfQgPAggbAVQgZAVgjAMIhMAKQg2gBgrgMIhKgfIg2gtIgmgzQgjg+gJhNIAAs2ICiAAIAAL3QAABHASAnQAQAmAYASQAYASAXADIAiADIAHAAQAqAAAZgXQAYgWANgdIAOg7IAEgtIAAgMIAAr3ICPAAIAAL3IAAAMIADAtIARA7QANAdAYAWQAYAXArAAIAIAAIAigDQAXgDAWgSQAWgSASgmQAPgnAAhHIAAx+ICiAAIAAS9QgHBNgkA+IgmAzIg2AtIhLAfQgqAMg3ABg");
	this.shape_4.setTransform(308.8,-45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(212.9,-62.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AEHIkIAArWQAAhDgXgxQgYgwgpgcIivByIithyQgqAdgYAvQgXAxAABDIAAGDQADA1AUApIAXAiIAgAeIAsAVIA9AIIB3AAIAACYIjZAAQhFgFg2gjIguglIgog5IgbhOIgLhpIAAnWQAMhvA/hQQA/hQBhglIC9B2IC/h2QBgAlBBBQQAfAnASAwQARAvAHA5IAAMTg");
	this.shape_6.setTransform(148.6,-26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AkuBNIAAiZIJdAAIAACZg");
	this.shape_7.setTransform(49.7,-101.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AEJIjIAAlAQAAgvgVgfQgWghgfgUIhFggIhFgRIhKgJIgTACIgpAHIg2AQIg2AeIguA0QgWAegIAtIgDAaQAAAiASAZQARAYAaAQIA8AbIBBAPIA5AHIApABIAOAAIAACYIi1AAQg5AAgygZQgygYgmgpQglgrgVg3QgWg3AAg9QAAg8Acg9QAag+A/g6IBNg5IBPglIBOgUIBLgGIBoALIBUAWIBNAhIAAg+QAAgzgLgmIgehDIgqgwIgxggQg5gehKgEQhBAAguAYQgtAXgeAiQgdAigPAlIgXBAIirAAQAGhaAeg/QAcg/AqgpQAogrAwgYIBcgjIBPgQIAygDIAJAAQBlAABIAcQBHAaAvApQAvAqAbAyIApBhIAQBUIADA1IAAALIAAKVg");
	this.shape_8.setTransform(45.9,-26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(-60.4,-25.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_10.setTransform(-174.4,-25.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_11.setTransform(-266.5,-26.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBthqIARARIAfAXIAvAWIBBAKIAogIIAfgSIAWgbIAPgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgeAkgkAUIhFAcIg4ALIgcACQhGAAgygSg");
	this.shape_12.setTransform(-329.9,-25.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBuhqIARARIAeAXIAuAWIBBAKIApgIIAfgSIAXgbIAPgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgTA2geAjQgeAkgkAUIhEAcIg4ALIgeACQhGAAgxgSg");
	this.shape_13.setTransform(-394.6,-25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AisITQhPgag0geQg8gignguIBshpIAzAnIBKAlIBYAaIBfAKQAzAAApgMQApgNAdgYQAdgXAOgfQAQggAAgmQAAgogOgYIgegnIgkgUIgcgIIghgFIhBgLIhIgMIg3gKIgigIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBAgSBAAAQBDAAA3APIBgAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg9gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAaAcAsAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_14.setTransform(-468.7,-25.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AiROJIAAxMQAAgggOgeIglg+Igug/IgwhAIgjhDQgPgjAAgkIAMhoQALg4AegwQAfgwAzggQA0ggBQAAIGeAAIAACYIl3AAQgoADgfASIgaAUIgXAfIgQApIgGA4QAAAoANAaIAiAxIA1A9IBDBeIAMAmIAJAtIAEA9IAAQyg");
	this.shape_15.setTransform(-519.4,-62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.2,-91.7,1138.5,183.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("AgRAVIgngcIB9hrIg/BiIAaAaIhlBpg");
	this.shape.setTransform(7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,13.9,23), null);


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0,1,1,0,0,0,7,11.5);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBF041").s().p("AhjBlQgqgqAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6QAAA7gqAqQgpApg7AAQg6AAgpgpg");
	this.shape.setTransform(0.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#342E32").s().p("AhBgeICEhZQgMC/gEAAQgFAAhmAwg");
	this.shape_1.setTransform(10.4,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#342E32").s().p("Ag2A7IBth4IgvB7g");
	this.shape_2.setTransform(-11.4,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201611").s().p("Ag/BYIgsjBIA/AFQCOA0AAAEIAKCWg");
	this.shape_3.setTransform(-6.1,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3539").s().p("Ah8CVIgsjBIBth6ICBAKIBkBUIgQC/IhsAwg");
	this.shape_4.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.6,34,33.3);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-4.3,0,1,1,0,0,0,7,11.5);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBF041").s().p("AhjBlQgqgqAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6QAAA7gqAqQgpApg7AAQg6AAgpgpg");
	this.shape.setTransform(-4.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#342E32").s().p("AhBgeICEhZQgMC/gEAAQgFAAhmAwg");
	this.shape_1.setTransform(4.8,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#342E32").s().p("Ag2A7IBth4IgvB7g");
	this.shape_2.setTransform(-17,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#201611").s().p("Ag/BYIgsjBIA/AFQCOA0AAAEIAKCWg");
	this.shape_3.setTransform(-11.7,6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3B3539").s().p("Ah8CVIgsjBIBth6ICBAKIBkBUIgQC/IhsAwg");
	this.shape_4.setTransform(-5.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.529)").ss(1,1,1).p("AglAAIBLAA");
	this.shape_5.setTransform(16.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,153,255,0.529)").ss(1,1,1).p("AgJAAIATAA");
	this.shape_6.setTransform(21.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-16.6,46.1,33.3);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(48.3,59.2,1,1,0,0,0,0,29.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,regY:29.7,scaleX:0.73,scaleY:0.73,y:59.3},14).wait(1).to({startPosition:0},0).to({regX:0,regY:29.6,scaleX:1,scaleY:1,y:59.2},14).wait(1).to({startPosition:0},0).to({regX:0.1,regY:29.7,scaleX:0.73,scaleY:0.73,y:59.3},14).wait(1).to({startPosition:0},0).to({regX:0,regY:29.6,scaleX:1,scaleY:1,y:59.2},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.5,59.1);


(lib.e = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Tween27("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.5,332.9);

	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.5,332.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:241.5,y:332.8},9).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(27));

	// Layer 1 copy 2
	this.instance_2 = new lib.Tween27("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.5,332.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween28("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(241.5,332.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(24));

	// Layer 1 copy 3
	this.instance_4 = new lib.Tween27("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.5,332.9);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween28("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(241.5,332.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(21));

	// Layer 1 copy 4
	this.instance_6 = new lib.Tween27("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(22.5,332.9);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween28("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(241.5,332.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(6));

	// Layer 1 copy 5
	this.instance_8 = new lib.Tween27("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(22.5,332.9);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween28("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(241.5,332.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_10 = new lib.Tween27("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(22.5,332.9);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween28("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(241.5,332.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({_off:true,x:241.5,y:332.8},9).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},9).to({y:-2.9},15).to({x:873.1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,316.3,46.1,33.4);


// stage content:
(lib._033_Factory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// หัวข้อเปิด
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F45C30").s().p("EhY7ACRIAAkhMCx3AAAIAAEhg");
	this.shape.setTransform(971.1,616.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(1483.9,512.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#221E1F").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(1415.4,387.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#221E1F").s().p("AB3LgQgkgKgZgWQgagVgPggQgQgfgBgpQAAApgPAfQgPAggaAVQgaAWgjAKIhMALQg2AAgrgNIhKgfIg2gsIgmg0Qgkg+gJhNIAAs2ICiAAIAAL3QAABHASAnQASAnAXARQAXARAXAEIAjADIAHAAQAqAAAZgXQAYgVAMgeIAQg7IACgsIAAgNIAAr3ICPAAIAAL3IAAANIAFAsIAPA7QANAeAZAVQAYAXArAAIAIAAIAjgDQAVgEAXgRQAWgRARgnQAQgnABhHIAAx+ICiAAIAAS9QgJBNgjA+IglA0Ig3AsIhLAfQgrANg2AAg");
	this.shape_3.setTransform(1398.8,494.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#221E1F").s().p("AB3LgQgjgKgagWQgagVgQggQgPgfAAgpQgBApgPAfQgPAggbAVQgZAWgjAKIhMALQg2AAgrgNIhKgfIg3gsIglg0Qgkg+gIhNIAAs2ICiAAIAAL3QAABHASAnQAQAnAYARQAYARAWAEIAjADIAHAAQAqAAAZgXQAYgVANgeIAOg7IAEgsIAAgNIAAr3ICPAAIAAL3IAAANIADAsIARA7QANAeAYAVQAYAXArAAIAIAAIAigDQAXgEAWgRQAWgRASgnQAPgnAAhHIAAx+ICiAAIAAS9QgHBNgkA+IgmA0Ig2AsIhLAfQgqANg3AAg");
	this.shape_4.setTransform(1279.9,494.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#221E1F").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(1184,476.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#221E1F").s().p("AEHIkIAArWQAAhDgXgxQgYgwgpgcIivByIithyQgqAdgYAvQgXAxAABDIAAGDQADA1AUApIAXAiIAgAeIAsAVIA9AIIB3AAIAACYIjZAAQhFgFg2gjIguglIgog5IgbhOIgLhpIAAnWQAMhvA/hQQA/hQBhglIC9B2IC/h2QBgAlBBBQQAfAnASAwQARAvAHA5IAAMTg");
	this.shape_6.setTransform(1119.7,512.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#221E1F").s().p("AkuBOIAAiaIJdAAIAACag");
	this.shape_7.setTransform(1020.8,438.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#221E1F").s().p("AEJIjIAAlAQAAgvgVgfQgWghgfgUIhFggIhFgRIhKgJIgTACIgpAHIg2AQIg2AeIguA0QgWAegIAtIgDAaQAAAiASAZQARAYAaAQIA8AbIBBAPIA5AHIApABIAOAAIAACYIi1AAQg5AAgygZQgygYgmgpQglgrgVg3QgWg3AAg9QAAg8Acg9QAag+A/g6IBNg5IBPglIBOgUIBLgGIBoALIBUAWIBNAhIAAg+QAAgzgLgmIgehDIgqgwIgxggQg5gehKgEQhBAAguAYQgtAXgeAiQgdAigPAlIgXBAIirAAQAGhaAeg/QAcg/AqgpQAogrAwgYIBcgjIBPgQIAygDIAJAAQBlAABIAcQBHAaAvApQAvAqAbAyIApBhIAQBUIADA1IAAALIAAKVg");
	this.shape_8.setTransform(1017,512.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#221E1F").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(910.7,513.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#221E1F").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_10.setTransform(796.7,513.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#221E1F").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_11.setTransform(704.6,512.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBthqIASARIAeAXIAvAWIBBAKIAogIIAfgSIAWgbIAPgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgeAkgkAUIhFAcIg4ALIgcACQhGAAgygSg");
	this.shape_12.setTransform(641.2,513.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#221E1F").s().p("AiBIVIhTgoQgogbgaggIBuhqIARARIAeAXIAuAWIBBAKIApgIIAfgSIAXgbIAPgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgTA2geAjQgeAkgkAUIhEAcIg4ALIgeACQhGAAgxgSg");
	this.shape_13.setTransform(576.5,513.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#221E1F").s().p("AisITQhPgag0geQg8gignguIBshpIAzAnIBKAlIBYAaIBfAKQAyAAAqgMQApgNAdgYQAdgXAOgfQAQggAAgmQAAgogOgYIgegnIgkgUIgcgIIghgFIhBgLIhIgMIg3gKIgigIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBAgSBAAAQBDAAA3APIBgAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg9gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAaAcAsAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_14.setTransform(502.4,513.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#221E1F").s().p("AiROJIAAxMQAAgggOgeIglg+Igug/IgwhAIgjhDQgPgjAAgkIAMhoQALg4AegwQAfgwAzggQA0ggBQAAIGeAAIAACYIl3AAQgoADgfASIgaAUIgXAfIgQApIgGA4QAAAoANAaIAiAxIA1A9IBDBeIAMAmIAJAtIAEA9IAAQyg");
	this.shape_15.setTransform(451.7,476.9);

	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(971.1,539.4);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(424.9,140.2,0.485,0.485,0,0,0,113.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},14).wait(520));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true,regX:113.5,regY:0.2,scaleX:0.49,scaleY:0.49,x:424.9,y:140.2},14).wait(520));

	// พลังงานเปิด
	this.instance_2 = new lib.Tween37("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(960,540,0.007,0.007);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween38("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(960,540);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1},10).wait(517));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},10).wait(32).to({startPosition:0},0).to({scaleX:0.02,scaleY:0.02},15).to({_off:true},1).wait(469));

	// รถ
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-151.7,895);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(259,895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},45).to({state:[{t:this.instance_5}]},17).wait(487));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({_off:true,x:259},17).wait(487));

	// วัตถุดิบโหลด
	this.instance_6 = new lib.Tween39("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-149.5,776);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween40("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(258.4,777.1);

	this.instance_8 = new lib.Tween41("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(256.8,785);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween42("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(749.4,819.6,0.166,0.087,0,0,0,0,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},45).to({state:[{t:this.instance_7}]},17).to({state:[{t:this.instance_8}]},77).to({state:[{t:this.instance_8}]},17).to({state:[{t:this.instance_9}]},13).to({state:[]},1).wait(379));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({_off:true,x:258.4,y:777.1},17).wait(487));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(139).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:1.01,scaleY:0.92,x:536,y:782.9},17).to({_off:true,regX:0,regY:42.8,scaleX:0.17,scaleY:0.09,x:749.4,y:819.6},13).wait(380));

	// 100
	this.instance_10 = new lib.Tween11("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(245.9,728.4,0.065,0.065,0,0,0,0,181.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(245.9,728.4,1,1,0,0,0,0,181.6);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(79).to({_off:false},0).to({scaleX:0.91,scaleY:0.91},9).to({_off:true,scaleX:1,scaleY:1},1).wait(460));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},1).wait(80).to({startPosition:0},0).to({scaleX:0.07,scaleY:0.07},10).to({_off:true},1).wait(369));

	// fire move
	this.instance_12 = new lib.fire();
	this.instance_12.parent = this;
	this.instance_12.setTransform(742.2,710.9,1,1,0,0,0,48.2,29.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(180).to({_off:false},0).wait(369));

	// ไฟ
	this.instance_13 = new lib.Tween16("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(742.3,740.4,1,0.5,0,0,0,0,29.6);
	this.instance_13._off = true;

	this.instance_14 = new lib.fire();
	this.instance_14.parent = this;
	this.instance_14.setTransform(742.2,740.4,1,1,0,0,0,48.2,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},169).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_14}]},1).to({state:[]},1).wait(369));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(169).to({_off:false},0).to({regY:29.7,scaleY:0.95,y:740.5},9).to({_off:true,regX:48.2,regY:59.1,scaleY:1,x:742.2,y:740.4,mode:"independent"},1).wait(370));

	// Layer 3
	this.instance_15 = new lib.Tween19("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(742.4,744,1,1,0,0,0,0.1,39.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(169).to({_off:false},0).wait(380));

	// y
	this.instance_16 = new lib.Tween21("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(873.5,765.3,0.02,0.02,0,0,0,-127.7,145.6);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween22("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(873.6,765.2,1,1,0,0,0,-127.7,145.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(184).to({_off:false},0).to({_off:true,regY:145.1,scaleX:1,scaleY:1,x:873.6,y:765.2},5).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(184).to({_off:false},5).wait(106).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({regX:-127.5,scaleX:0.09,scaleY:0.09},13).to({_off:true},1).wait(239));

	// พลงงาน
	this.instance_18 = new lib.e();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1107.5,870.9,1,1,0,0,0,22.8,332.9);

	this.instance_19 = new lib.e();
	this.instance_19.parent = this;
	this.instance_19.setTransform(1519.9,713.1,1,1,0,0,0,435.2,174.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18}]},189).wait(360));

	// g
	this.instance_20 = new lib.Tween29("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(1745,503.7,0.03,0.031,0,0,0,1.7,166.3);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween30("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(1745,503.6,1,1,0,0,0,0,165.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},309).to({state:[{t:this.instance_21}]},9).wait(231));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(309).to({_off:false},0).to({_off:true,regX:0,regY:165.1,scaleX:1,scaleY:1,y:503.6},9).wait(231));

	// โรงงาน
	this.instance_22 = new lib.Tween13("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(1148.2,975,0,0.064,0,0,0,0,397.9);
	this.instance_22._off = true;

	this.instance_23 = new lib.Tween14("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(1148.2,975.1,1,1,0,0,0,0,397.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22}]},104).to({state:[{t:this.instance_23}]},15).wait(430));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(104).to({_off:false},0).to({_off:true,regY:397.6,scaleX:1,scaleY:1,y:975.1},15).wait(430));

	// bG
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F0F3E1").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_16.setTransform(959,540);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(549));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(959,540,1920,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;