(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF212F").s().p("ABVFfIAAhZIlUAAIAAhUIFUoQIBZAAIAAIQIBSAAIAABUIhSAAIAABZgAiTCyIDoAAIAAlrg");
	this.shape.setTransform(-35.2,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF212F").s().p("AAcFfIAAoAQgaATgiAMQgkAMgxABIAAhZIAPgBIAcgEIAjgNQASgJAPgQQAPgQAKgYQAJgZAAgkIBaAAIAAK9g");
	this.shape_1.setTransform(-80.7,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_2.setTransform(19,-76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACACAAAEIAAARIAnAAIAAAUg");
	this.shape_3.setTransform(9.7,-93.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_4.setTransform(7.5,-78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_5.setTransform(-8.6,-78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_6.setTransform(-21.5,-81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBBLQgJgBgHgCIgLgFQgFgEgEgFIAPgOIACADIAFADIAGADIAIABIAFgBIAEgDIAEgDIACgEQABgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQAAALgDAHQgCAIgEAEIgJAIIgKAEIgHACIgEAAg");
	this.shape_7.setTransform(-28,-76);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_8.setTransform(-35.5,-92.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgBSIAAgrQAAgHgDgEQgDgEgEgDIgJgEIgKgCIgJgCIgCAAIgGACIgHACIgHAEIgGAGQgDAFgCAGIAAACIAAACQAAAEADADQACADADADIAIADIAJADIAIABIAGAAIABAAIAAAUIgZAAQgHAAgGgDQgHgEgGgFQgEgGgEgIQgDgHAAgIQAAgIAEgIQAEgJAJgHIAKgJIAKgEIALgCIAKgBIANABIALAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgHgEQgHgEgKgBQgIAAgGADQgHADgDAFQgFAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAGgGQAFgFAGgEIAMgEIAMgCIAGAAIABAAQAKAAALACQAFgBAFgCIAKgGQAEgDAEgHIAHAHIADADIACACIADACIABABIgBADIgEADIgDAFIgFADIgEAEIgEACIAHALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_9.setTransform(-38.4,-77);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBJQgLAAgIgCQgIgCgFgEIgIgIIgEgJIgDgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHgBgIQABgIABgGIAEgLIAFgHIAHgFQAIgFAKAAIAcAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFAAAGQAAAGABADIAEAHIAHADIAGACIAEABIADAAIAQAAIAAAUIgQAAIgKABIgGADIgFAEIgBAFIgBAEIAAACQgBAFACAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAFgDIAGgIQACgEACgGIAAhoIAVAAIAABoQAAAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_10.setTransform(-52.9,-76.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_11.setTransform(-64.8,-76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgBSIAAgrQAAgHgDgEQgDgEgEgDIgJgEIgJgCIgKgCIgDAAIgFACIgHACIgHAEIgHAGQgCAFgBAGIgBACIAAACQAAAEACADQACADAFADIAIADIAIADIAIABIAFAAIABAAIAAAUIgYAAQgHAAgGgDQgIgEgEgFQgGgGgCgIQgEgHAAgIQAAgIAFgIQADgJAIgHIALgJIAKgEIALgCIAKgBIANABIAMAEIAKADIAAgIQAAgGgBgFIgFgJIgFgHIgGgEQgIgEgJgBQgJAAgHADQgFADgFAFQgEAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAFgGQAGgFAGgEIANgEIALgCIAGAAIACAAQAJAAAKACQAGgBAFgCIAKgGQAFgDADgHIAHAHIADADIADACIACACIAAABIAAADIgDADIgFAFIgEADIgFAEIgCACIAHALIADALIABAKIABAGIAAABIAABZg");
	this.shape_12.setTransform(-75,-77);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkBKIAAhaQAAgJgCgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIALgKIALgGIAKgDIAIgCIAGAAIAAAAQAKAAAIADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIABAHIAAAEIAABag");
	this.shape_13.setTransform(-89.1,-76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_14.setTransform(-101.6,-76.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBKIAAgpIgDgIQgDgEgEgCIgIgEIgKgBIgHAAIgFACIAAgWQAFgBAHAAQAQAAAMAHIAAgPQgBgKgDgIIgFgGIgGgGIgIgEQgGgCgGAAQgJABgIADIgGAFIgGAGIgEAJQgCAGAAAGIgVAAIAAgBIAAgHIACgMIAGgNQAEgHAGgFQAGgGAKgDQAJgEANAAIABAAIAHABIAMACIANAFQAGAEAGAGQAGAGADAKQAEAJAAAOIAABag");
	this.shape_15.setTransform(-112.2,-76.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_16.setTransform(29.2,-103.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACACAAAEIAAARIAnAAIAAAUg");
	this.shape_17.setTransform(20,-120.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_18.setTransform(17.7,-105.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_19.setTransform(1.7,-105.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_20.setTransform(-11.3,-108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_21.setTransform(-20,-103);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_22.setTransform(-32.4,-103.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAABLQgKgBgHgCIgLgFQgFgEgDgFIAOgOIADADIADADIAHADIAJABIAEgBIAFgDIACgDIACgEQADgFAAgHIAAhUIgUAAIAAgVIApAAIAABpQABALgDAHQgDAIgEAEIgJAIIgJAEIgIACIgCAAg");
	this.shape_23.setTransform(-41,-103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAABLQgKgBgGgCIgMgFQgFgEgDgFIAOgOIACADIAFADIAGADIAJABIAEgBIAFgDIACgDIACgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQgBALgCAHQgDAIgDAEIgJAIIgKAEIgIACIgCAAg");
	this.shape_24.setTransform(-49.7,-103);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAQQgEAAgCgCIgCgDIgCgFIAAgVIAVAAIAAALIA2AAIAAAUg");
	this.shape_25.setTransform(-57.6,-113.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAjBKIAAgrQAAgHgCgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgGAFIgHAGQgDAFgBAGIgBADQAAAFADADIAGAGIAIADIAIACIAIABIAFAAIACAAIAAAVIgYAAQgHAAgHgEQgHgDgFgFQgFgGgDgIQgCgHgBgIQABgIADgJQAEgIAIgIIAKgHIALgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQAAgGgBgGIgEgJIgGgGIgGgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAFgJQAEgIAFgGQAGgFAGgEIAMgEIALgCIAHgBIAAAAQAOAAAJAEQAKADAHAGQAGAGADAGIAGANIACAMIABAHIAAABIAABZg");
	this.shape_26.setTransform(-60.3,-103.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQBJIgIgEQgEgDgCgFQgCgEAAgFQAAAFgBAEQgCAFgEADQgDACgFACIgKABQgIAAgGgBIgJgFIgIgGIgFgHQgFgIgBgKIAAhuIAWAAIAABlQAAAKACAFQADAFADADQADACADAAIAFABIABAAQAFAAAEgDIAFgHIACgIIAAgGIAAgCIAAhlIATAAIAABlIAAACIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEgBIAGgCQADgDACgFQADgFAAgKIAAhlIAWAAIAABuQgCAKgEAIIgFAHIgIAGIgKAFQgGABgHAAg");
	this.shape_27.setTransform(-74.7,-103);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSBJQgIgDgGgDQgGgEgEgFIgHgJQgGgMgBgPIAAgdIApAAIAAAUIgUAAIAAAJQAAAGACAFIAEAIIAGAGIAGADQAIAEAJAAQAKAAAIgEIAGgDIAGgGIAEgIQABgFAAgGIAAgrQAAgGgBgEIgEgIIgGgGIgGgDQgIgEgKAAIgBAAIgHABIgJADQgFACgFAEQgEAFgCAHIgWAAIACgIIAFgKIAHgKQAEgEAGgEQAGgEAIgCQAIgCAJAAQAKAAAIACQAIADAGADIALAJIAHAJQAGAMABAPIAAArQgBAPgGAMIgHAJIgLAJQgGADgIADQgIACgKAAQgKAAgIgCg");
	this.shape_28.setTransform(-89.3,-103.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsASIAAgUIAlAAIAAgPIATAAIAAAPIANAAIAAgPIAUAAIAAAjg");
	this.shape_29.setTransform(-102.6,-114);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAjBKIAAgrQAAgHgCgEQgDgEgEgDIgJgEIgKgDIgJgBIgDAAIgFABIgIACIgHAFIgGAGQgDAFgBAGIgBADQABAFACADIAGAGIAIADIAJACIAIABIAEAAIACAAIAAAVIgXAAQgJAAgGgEQgHgDgFgFQgFgGgDgIQgCgHAAgIQgBgIAEgJQADgIAJgIIALgHIAKgFIALgCIAJgBIAOABIAMADIAJAFIAAgJQAAgGgBgGIgEgJIgFgGIgHgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAEgJQAFgIAFgGQAGgFAGgEIAMgEIALgCIAHgBIAAAAQAOAAAKAEQAJADAGAGQAHAGAEAGIAFANIACAMIAAAHIAAABIAABZg");
	this.shape_30.setTransform(-103,-103.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAjBKIAAhAIgCgGIgCgGIgDgGIgGgEQgDgCgEAAIgwAAIAABYIgWAAIAAiTIAWAAIAAAmIAwAAQAEgBADgCIAGgFQADgEABgGIAAgUIAWAAIAAAWIgBAFIgCAHIgEAIIgGAHIAIAJIAFALQACAFAAAJIAABAg");
	this.shape_31.setTransform(-116.4,-103.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_32.setTransform(-126,-103.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_33.setTransform(-16.4,81.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgOIAGgEIAIgEIAIgGIAGgDQAEAKAHAFIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgIIgHgHIgLgGIgOgCIgSACQgIACgGAEQgFAFgFAGIgIARIgiAAQABgQAGgMQAGgNAKgKQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPAEIARAIQAJAEAIAJQAHAJAFAOQAFANAAATIAABLQgBAWgIARIgKAPQgFAGgIAGQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_34.setTransform(-36.6,81.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAgIAAg/IAfAAIAAA/g");
	this.shape_35.setTransform(-50.9,54.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGB0QgUAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAJgEAGgGQAGgGADgHIAGgOIACgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_36.setTransform(-56.5,81.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AA2BzIAAhjIgCgLIgEgIIgFgKIgIgHQgGgDgHgBIhLAAIAACLIgiAAIAAjlIAiAAIAAA7IBLAAQAHgBAFgEIAJgIQAEgFADgLIAAgeIAiAAIAAAhIgBAIIgEALIgGANIgJALIAMAOIAIARQAEAKAAANIAABjg");
	this.shape_37.setTransform(-78.4,81.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7CB34B").s().p("Ax6UUQiSAAhnhnQhohoAAiTIAA9kQAAiSBohnQBnhoCSAAIU5AAQCTAABnBoQBoBnAACSIAAUfIO7E2Iu7EPQAACThoBoQhnBniTAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-130,300,260);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF212F").s().p("ABFEiIAAhJIkYAAIAAhGIEZm0IBKAAIAAG0IBDAAIAABGIhDAAIAABJgAh5CTIC/AAIAAkrg");
	this.shape.setTransform(-38,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF212F").s().p("AAYEiIAAmnQgWAQgcAKQgeAJgpACIAAhKIAOgBIAWgEIAdgKQAPgHAMgNQAMgOAJgUQAHgUABgeIBKAAIAAJDg");
	this.shape_1.setTransform(-75.6,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_2.setTransform(19,-76.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACACAAAEIAAARIAnAAIAAAUg");
	this.shape_3.setTransform(9.7,-93.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_4.setTransform(7.5,-78.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_5.setTransform(-8.6,-78.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_6.setTransform(-21.5,-81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBBLQgJgBgHgCIgLgFQgFgEgEgFIAPgOIACADIAFADIAGADIAIABIAFgBIAEgDIAEgDIACgEQABgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQAAALgDAHQgCAIgEAEIgJAIIgKAEIgHACIgEAAg");
	this.shape_7.setTransform(-28,-76);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_8.setTransform(-35.5,-92.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgBSIAAgrQAAgHgDgEQgDgEgEgDIgJgEIgKgCIgJgCIgCAAIgGACIgHACIgHAEIgGAGQgDAFgCAGIAAACIAAACQAAAEADADQACADADADIAIADIAJADIAIABIAGAAIABAAIAAAUIgZAAQgHAAgGgDQgHgEgGgFQgEgGgEgIQgDgHAAgIQAAgIAEgIQAEgJAJgHIAKgJIAKgEIALgCIAKgBIANABIALAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgHgEQgHgEgKgBQgIAAgGADQgHADgDAFQgFAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAGgGQAFgFAGgEIAMgEIAMgCIAGAAIABAAQAKAAALACQAFgBAFgCIAKgGQAEgDAEgHIAHAHIADADIACACIADACIABABIgBADIgEADIgDAFIgFADIgEAEIgEACIAHALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_9.setTransform(-38.4,-77);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKBJQgLAAgIgCQgIgCgFgEIgIgIIgEgJIgDgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHgBgIQABgIABgGIAEgLIAFgHIAHgFQAIgFAKAAIAcAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFAAAGQAAAGABADIAEAHIAHADIAGACIAEABIADAAIAQAAIAAAUIgQAAIgKABIgGADIgFAEIgBAFIgBAEIAAACQgBAFACAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAFgDIAGgIQACgEACgGIAAhoIAVAAIAABoQAAAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_10.setTransform(-52.9,-76.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_11.setTransform(-64.8,-76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgBSIAAgrQAAgHgDgEQgDgEgEgDIgJgEIgJgCIgKgCIgDAAIgFACIgHACIgHAEIgHAGQgCAFgBAGIgBACIAAACQAAAEACADQACADAFADIAIADIAIADIAIABIAFAAIABAAIAAAUIgYAAQgHAAgGgDQgIgEgEgFQgGgGgCgIQgEgHAAgIQAAgIAFgIQADgJAIgHIALgJIAKgEIALgCIAKgBIANABIAMAEIAKADIAAgIQAAgGgBgFIgFgJIgFgHIgGgEQgIgEgJgBQgJAAgHADQgFADgFAFQgEAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAFgGQAGgFAGgEIANgEIALgCIAGAAIACAAQAJAAAKACQAGgBAFgCIAKgGQAFgDADgHIAHAHIADADIADACIACACIAAABIAAADIgDADIgFAFIgEADIgFAEIgCACIAHALIADALIABAKIABAGIAAABIAABZg");
	this.shape_12.setTransform(-75,-77);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkBKIAAhaQAAgJgCgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIALgKIALgGIAKgDIAIgCIAGAAIAAAAQAKAAAIADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIABAHIAAAEIAABag");
	this.shape_13.setTransform(-89.1,-76.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_14.setTransform(-101.6,-76.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBKIAAgpIgDgIQgDgEgEgCIgIgEIgKgBIgHAAIgFACIAAgWQAFgBAHAAQAQAAAMAHIAAgPQgBgKgDgIIgFgGIgGgGIgIgEQgGgCgGAAQgJABgIADIgGAFIgGAGIgEAJQgCAGAAAGIgVAAIAAgBIAAgHIACgMIAGgNQAEgHAGgFQAGgGAKgDQAJgEANAAIABAAIAHABIAMACIANAFQAGAEAGAGQAGAGADAKQAEAJAAAOIAABag");
	this.shape_15.setTransform(-112.2,-76.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_16.setTransform(29.2,-103.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACACAAAEIAAARIAnAAIAAAUg");
	this.shape_17.setTransform(20,-120.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_18.setTransform(17.7,-105.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_19.setTransform(1.7,-105.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_20.setTransform(-11.3,-108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_21.setTransform(-20,-103);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_22.setTransform(-32.4,-103.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAABLQgKgBgHgCIgLgFQgFgEgDgFIAOgOIADADIADADIAHADIAJABIAEgBIAFgDIACgDIACgEQADgFAAgHIAAhUIgUAAIAAgVIApAAIAABpQABALgDAHQgDAIgEAEIgJAIIgJAEIgIACIgCAAg");
	this.shape_23.setTransform(-41,-103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAABLQgKgBgGgCIgMgFQgFgEgDgFIAOgOIACADIAFADIAGADIAJABIAEgBIAFgDIACgDIACgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQgBALgCAHQgDAIgDAEIgJAIIgKAEIgIACIgCAAg");
	this.shape_24.setTransform(-49.7,-103);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAQQgEAAgCgCIgCgDIgCgFIAAgVIAVAAIAAALIA2AAIAAAUg");
	this.shape_25.setTransform(-57.6,-113.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAjBKIAAgrQAAgHgCgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgGAFIgHAGQgDAFgBAGIgBADQAAAFADADIAGAGIAIADIAIACIAIABIAFAAIACAAIAAAVIgYAAQgHAAgHgEQgHgDgFgFQgFgGgDgIQgCgHgBgIQABgIADgJQAEgIAIgIIAKgHIALgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQAAgGgBgGIgEgJIgGgGIgGgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAFgJQAEgIAFgGQAGgFAGgEIAMgEIALgCIAHgBIAAAAQAOAAAJAEQAKADAHAGQAGAGADAGIAGANIACAMIABAHIAAABIAABZg");
	this.shape_26.setTransform(-60.3,-103.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAQBJIgIgEQgEgDgCgFQgCgEAAgFQAAAFgBAEQgCAFgEADQgDACgFACIgKABQgIAAgGgBIgJgFIgIgGIgFgHQgFgIgBgKIAAhuIAWAAIAABlQAAAKACAFQADAFADADQADACADAAIAFABIABAAQAFAAAEgDIAFgHIACgIIAAgGIAAgCIAAhlIATAAIAABlIAAACIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEgBIAGgCQADgDACgFQADgFAAgKIAAhlIAWAAIAABuQgCAKgEAIIgFAHIgIAGIgKAFQgGABgHAAg");
	this.shape_27.setTransform(-74.7,-103);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSBJQgIgDgGgDQgGgEgEgFIgHgJQgGgMgBgPIAAgdIApAAIAAAUIgUAAIAAAJQAAAGACAFIAEAIIAGAGIAGADQAIAEAJAAQAKAAAIgEIAGgDIAGgGIAEgIQABgFAAgGIAAgrQAAgGgBgEIgEgIIgGgGIgGgDQgIgEgKAAIgBAAIgHABIgJADQgFACgFAEQgEAFgCAHIgWAAIACgIIAFgKIAHgKQAEgEAGgEQAGgEAIgCQAIgCAJAAQAKAAAIACQAIADAGADIALAJIAHAJQAGAMABAPIAAArQgBAPgGAMIgHAJIgLAJQgGADgIADQgIACgKAAQgKAAgIgCg");
	this.shape_28.setTransform(-89.3,-103.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsASIAAgUIAlAAIAAgPIATAAIAAAPIANAAIAAgPIAUAAIAAAjg");
	this.shape_29.setTransform(-102.6,-114);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAjBKIAAgrQAAgHgCgEQgDgEgEgDIgJgEIgKgDIgJgBIgDAAIgFABIgIACIgHAFIgGAGQgDAFgBAGIgBADQABAFACADIAGAGIAIADIAJACIAIABIAEAAIACAAIAAAVIgXAAQgJAAgGgEQgHgDgFgFQgFgGgDgIQgCgHAAgIQgBgIAEgJQADgIAJgIIALgHIAKgFIALgCIAJgBIAOABIAMADIAJAFIAAgJQAAgGgBgGIgEgJIgFgGIgHgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAEgJQAFgIAFgGQAGgFAGgEIAMgEIALgCIAHgBIAAAAQAOAAAKAEQAJADAGAGQAHAGAEAGIAFANIACAMIAAAHIAAABIAABZg");
	this.shape_30.setTransform(-103,-103.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAjBKIAAhAIgCgGIgCgGIgDgGIgGgEQgDgCgEAAIgwAAIAABYIgWAAIAAiTIAWAAIAAAmIAwAAQAEgBADgCIAGgFQADgEABgGIAAgUIAWAAIAAAWIgBAFIgCAHIgEAIIgGAHIAIAJIAFALQACAFAAAJIAABAg");
	this.shape_31.setTransform(-116.4,-103.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_32.setTransform(-126,-103.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_33.setTransform(-16.4,81.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgIIgJgOIAGgEIAIgEIAIgGIAGgDQAEAKAHAFIANAHQAIADAHAAQAMgBAKgGIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgIIgHgHIgLgGIgOgCIgSACQgIACgGAEQgFAFgFAGIgIARIgiAAQABgQAGgMQAGgNAKgKQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPAEIARAIQAJAEAIAJQAHAJAFAOQAFANAAATIAABLQgBAWgIARIgKAPQgFAGgIAGQgIAGgLADQgLADgPAAQgOAAgLgDg");
	this.shape_34.setTransform(-36.6,81.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPAgIAAg/IAfAAIAAA/g");
	this.shape_35.setTransform(-50.9,54.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGB0QgUAAgOgFQgNgFgJgJQgJgIgGgKIgHgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAFAGQAGAHAHADIANAFIALACIAFAAQANAAAJgEQAJgEAGgGQAGgGADgHIAGgOIACgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_36.setTransform(-56.5,81.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AA2BzIAAhjIgCgLIgEgIIgFgKIgIgHQgGgDgHgBIhLAAIAACLIgiAAIAAjlIAiAAIAAA7IBLAAQAHgBAFgEIAJgIQAEgFADgLIAAgeIAiAAIAAAhIgBAIIgEALIgGANIgJALIAMAOIAIARQAEAKAAANIAABjg");
	this.shape_37.setTransform(-78.4,81.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7CB34B").s().p("Ax6UUQiSAAhnhnQhohoAAiTIAA9kQAAiSBohnQBnhoCSAAIU5AAQCTAABnBoQBoBnAACSIAAUfIO7E2Iu7EPQAACThoBoQhnBniTAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-130,300,260);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape.setTransform(49.8,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACADAAADIAAAQIAnAAIAAAVg");
	this.shape_1.setTransform(40.6,-54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_2.setTransform(38.3,-39.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_3.setTransform(22.3,-39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_4.setTransform(9.3,-42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAABLQgKgBgHgCIgLgGQgFgDgEgFIAPgNIADACIADADIAHADIAJABIAEgBIAEgDIADgDIADgEQACgFAAgHIAAhUIgUAAIAAgVIApAAIAABpQAAALgCAHQgDAIgEAEIgJAIIgJAEIgIACIgCAAg");
	this.shape_5.setTransform(2.9,-37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_6.setTransform(-4.7,-54.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgCgFQgDgEgFgDIgJgEIgKgCIgIgBIgDAAIgGABIgHACIgIAEIgFAGQgEAFgBAGIAAACIAAACQAAAEACAEQADACADADIAIAEIAJACIAIABIAFAAIACAAIAAAUIgYAAQgIAAgHgDQgHgDgFgGQgEgGgEgIQgCgHAAgIQAAgIADgIQAEgJAJgIIAKgIIALgDIAKgDIAKgBIAOABIAKAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgHgEQgHgEgKgBQgIAAgGAEQgGADgFAEQgEAEgBAFIgEAJIgXAAQABgMAEgJQAEgIAFgFQAGgGAHgDIALgFIALgCIAHAAIABAAQAKgBALADQAFgBAGgCIAJgGQAFgEADgGIAHAHIADADIACACIACACIABABIgBADIgDADIgDAFIgFADIgEAEIgEACIAHALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_7.setTransform(-7.5,-38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgKBJQgLAAgIgCQgHgCgFgEIgIgIIgGgJIgCgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHAAgIQgBgIACgGIAEgLIAFgHIAIgFQAHgFALAAIAbAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFgBAGQAAAGACADIAEAHIAHADIAFACIAGABIACAAIAQAAIAAAUIgQAAIgKABIgHADIgDAEIgCAFIgBAEIAAACQAAAFABAEIAEAGIAFAEIAFACIAGABIACAAIABAAIAZAAQAIAAAFgDIAGgIQADgEABgGIAAhoIAVAAIAABoQAAAJgCAHQgDAHgFAEQgDAFgGADIgKAEIgIACIgGAAg");
	this.shape_8.setTransform(-22,-37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_9.setTransform(-33.9,-37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgKgCIgJgBIgCAAIgGABIgHACIgHAEIgHAGQgCAFgBAGIgBACIAAACQAAAEADAEQABACAEADIAIAEIAJACIAIABIAGAAIAAAAIAAAUIgYAAQgHAAgGgDQgHgDgGgGQgEgGgEgIQgDgHAAgIQAAgIAFgIQADgJAJgIIAKgIIAKgDIALgDIAKgBIANABIALAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgGgEQgJgEgIgBQgKAAgFAEQgHADgDAEQgFAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAGgFQAFgGAGgDIAMgFIAMgCIAGAAIACAAQAJgBALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBADIgEADIgDAFIgFADIgEAEIgDACIAGALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_10.setTransform(-44.1,-38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgBgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIAKgKIAMgGIAKgDIAIgCIAGAAIAAAAQALAAAHADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIABAHIAAAEIAABag");
	this.shape_11.setTransform(47.8,-64.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_12.setTransform(35.3,-64.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjBKIAAgpIgDgIQgDgEgEgCIgIgEIgKgBIgHAAIgFACIAAgWQAFgBAHAAQAQAAAMAHIAAgPQgBgKgDgIIgFgGIgGgGIgIgEQgGgCgGAAQgJABgIADIgGAFIgGAGIgEAJQgCAGAAAGIgWAAIAAgBIABgHIACgMIAGgNQAEgHAGgFQAGgGAKgDQAKgEAMAAIACAAIAGABIAMACIANAFQAGAEAGAGQAFAGAEAKQADAJABAOIAABag");
	this.shape_13.setTransform(24.7,-64.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgKBJQgLAAgHgCQgIgCgGgEIgIgIIgEgJIgCgIIgBgGQAAgJADgGQAEgGAEgDIAHgGIAFgCIgJgCIgFgEIgFgFIgCgGQgDgHgBgIQAAgIACgGIAEgLIAGgHIAGgFQAIgFAKAAIAdAAIAAAUIgRAAIgIABIgHADIgFADIgDAEQgCAFAAAGQgBAGACADIAEAHIAGADIAHACIAEABIADAAIARAAIAAAUIgRAAIgJABIgHADIgFAEIgCAFIAAAEIAAACQAAAFABAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAEgDIAHgIQACgEABgGIAAhoIAXAAIAABoQgBAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_14.setTransform(11.2,-64.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_15.setTransform(-2.5,-75.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgKgCIgJgBIgCAAIgGABIgHACIgHAEIgGAGQgDAFgCAGIAAACIAAACQAAAEADAEQACACADADIAIAEIAJACIAIABIAGAAIABAAIAAAUIgZAAQgHAAgGgDQgHgDgGgGQgEgGgEgIQgDgHAAgIQAAgIAEgIQAEgJAJgIIAKgIIAKgDIALgDIAKgBIANABIALAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgHgEQgHgEgKgBQgIAAgGAEQgHADgDAEQgFAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAGgFQAFgGAGgDIAMgFIAMgCIAGAAIABAAQAKgBALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBADIgEADIgDAFIgFADIgEAEIgEACIAHALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_16.setTransform(-1.9,-65.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_17.setTransform(-11.5,-64.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAwBgIgLgGQgGgEgDgEIAPgTIACACIAEAEIAGADIAJABQAGAAAEgDQADgCACgEQACgEAAgGIAAgZIgCAGIgEAGIgGAEIgGACQgIAEgIABIgFAAQgNgBgIgDQgJgDgGgFQgGgGgCgHIgFgMIgCgLIgBgHIAAglQAAgJgCgGQgCgGgEgEQgEgEgEgCIgJgDIgHgBIgDAAQgHAAgFABIgJAEIgGAGIgEAGQgEAIgBAKIAAAsQABAHACAFIADAFIAFAEIAGADIAIABIAQAAIAAAVIgdAAQgKgBgHgFIgGgFIgFgHIgEgLIgBgOIAAgDIAAhCQAEgIAFgGIALgKIAMgGIAKgEIAIgBIAFAAIACAAQAOAAAKAFQAJADAHAHQAFAFAEAHIAFAOIACAKIAAAGIAAAjQAAAJADAFQACAHAEAEQADAEAFACIAIADIAHACIAEAAQAIAAAGgDQAGgCAEgEQAEgEACgEIADgJIABgGIAAgEIAAhbIAWAAIAACWQAAALgDAHQgCAIgEAFQgEAFgFACIgJAEIgIABIgEABQgJAAgHgCg");
	this.shape_18.setTransform(-25.6,-61.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgJAXQgDAAgDgDQgDgCAAgEIAAgTIgIAAIAAgRIARAAQAEAAACADIACACIABAEIAAATIAKAAIAAgcIARAAIAAAkQAAAEgCACQgDADgEAAg");
	this.shape_19.setTransform(-42.1,-53.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgJgCIgKgBIgDAAIgFABIgHACIgHAEIgHAGQgCAFgBAGIgBACIAAACQAAAEACAEQACACAFADIAIAEIAIACIAIABIAFAAIABAAIAAAUIgYAAQgHAAgGgDQgIgDgEgGQgGgGgCgIQgEgHAAgIQAAgIAFgIQADgJAIgIIALgIIAKgDIALgDIAKgBIANABIAMAEIAKADIAAgIQAAgGgBgFIgFgJIgFgHIgGgEQgIgEgJgBQgJAAgHAEQgFADgFAEQgEAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAFgFQAGgGAGgDIANgFIALgCIAGAAIACAAQAJgBAKADQAGgBAFgCIAKgGQAFgEADgGIAHAHIADADIADACIACACIAAABIAAADIgDADIgFAFIgEADIgFAEIgCACIAHALIADALIABAKIABAGIAAABIAABZg");
	this.shape_20.setTransform(-43.9,-65.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_21.setTransform(31.1,139.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgVByQgLgEgIgGQgIgFgGgHIgJgQIAGgCIAIgGIAIgEIAGgEQAEAKAHAFIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgIIgHgIIgLgFIgOgCIgSACQgIACgGAEQgFAFgFAGIgIARIgiAAQABgPAGgOQAGgMAKgKQALgJAPgFQAPgFAUAAIABAAIABAAIAJABIAPADIARAIQAJAFAIAIQAHAJAFAOQAFANAAATIAABLQgBAWgIARIgKAPQgFAGgIAGQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_22.setTransform(10.9,140);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgPAgIAAhAIAfAAIAABAg");
	this.shape_23.setTransform(-3.4,113.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgGB0QgUAAgOgFQgNgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAGAGQAFAHAHADIANAFIALACIAFAAQANAAAJgEQAJgEAHgGQAGgGADgHIAEgOIADgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_24.setTransform(-9,140);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AA2BzIAAhkIgCgKIgEgIIgFgKIgJgIQgEgCgIAAIhLAAIAACKIgiAAIAAjlIAiAAIAAA6IBLAAQAGAAAGgDIAJgJQAEgFADgLIAAgeIAiAAIAAAhIgBAIIgEALIgGANIgJAKIAMAPIAIARQAEAKAAAMIAABkg");
	this.shape_25.setTransform(-30.9,139.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BF212F").s().p("Ak2IiIAAiCQCHiKBqh9IBYhsIBOhrIA2hhQAVgtAAgfQAAgjgNggQgOgfgYgXQgWgXgggNQgfgOgjAAQgjAAggAOQgeANgYAXQgYAXgNAfQgNAgAAAjIiMAAQAAhAAYg4QAZg5AqgqQAqgqA5gZQA4gYBAAAQBBAAA4AYQA4AZAqAqQArAqAZA5QAXA4AABAQAAAwgMAsQgOArgYAmIiaDPIg/BTIg8BPIg0BBIgnAsIGiAAIAACCg");
	this.shape_26.setTransform(2.6,50.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBD637").s().p("Aq3aqQiVAAhqhpQhrhqAAiWIAA9uQAAiWBrhqQBqhpCVAAIIxAAImAsUIO5MUIEFAAQCWAABqBpQBqBqgBCWIAAduQABCWhqBqQhqBpiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.7,-170.6,211.5,341.3);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape.setTransform(49.8,-37.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADADQACADAAADIAAAQIAnAAIAAAVg");
	this.shape_1.setTransform(40.6,-54.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_2.setTransform(38.3,-39.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_3.setTransform(22.3,-39.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_4.setTransform(9.3,-42.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAABLQgKgBgHgCIgLgGQgFgDgEgFIAPgNIADACIADADIAHADIAJABIAEgBIAEgDIADgDIADgEQACgFAAgHIAAhUIgUAAIAAgVIApAAIAABpQAAALgCAHQgDAIgEAEIgJAIIgJAEIgIACIgCAAg");
	this.shape_5.setTransform(2.9,-37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_6.setTransform(-4.7,-54.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgCgFQgDgEgFgDIgJgEIgKgCIgIgBIgDAAIgGABIgHACIgIAEIgFAGQgEAFgBAGIAAACIAAACQAAAEACAEQADACADADIAIAEIAJACIAIABIAFAAIACAAIAAAUIgYAAQgIAAgHgDQgHgDgFgGQgEgGgEgIQgCgHAAgIQAAgIADgIQAEgJAJgIIAKgIIALgDIAKgDIAKgBIAOABIAKAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgHgEQgHgEgKgBQgIAAgGAEQgGADgFAEQgEAEgBAFIgEAJIgXAAQABgMAEgJQAEgIAFgFQAGgGAHgDIALgFIALgCIAHAAIABAAQAKgBALADQAFgBAGgCIAJgGQAFgEADgGIAHAHIADADIACACIACACIABABIgBADIgDADIgDAFIgFADIgEAEIgEACIAHALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_7.setTransform(-7.5,-38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgKBJQgLAAgIgCQgHgCgFgEIgIgIIgGgJIgCgIIAAgGQAAgJADgGQADgGAEgDIAIgGIAFgCIgIgCIgGgEIgEgFIgEgGQgCgHAAgIQgBgIACgGIAEgLIAFgHIAIgFQAHgFALAAIAbAAIAAAUIgQAAIgJABIgGADIgFADIgCAEQgDAFgBAGQAAAGACADIAEAHIAHADIAFACIAGABIACAAIAQAAIAAAUIgQAAIgKABIgHADIgDAEIgCAFIgBAEIAAACQAAAFABAEIAEAGIAFAEIAFACIAGABIACAAIABAAIAZAAQAIAAAFgDIAGgIQADgEABgGIAAhoIAVAAIAABoQAAAJgCAHQgDAHgFAEQgDAFgGADIgKAEIgIACIgGAAg");
	this.shape_8.setTransform(-22,-37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_9.setTransform(-33.9,-37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgKgCIgJgBIgCAAIgGABIgHACIgHAEIgHAGQgCAFgBAGIgBACIAAACQAAAEADAEQABACAEADIAIAEIAJACIAIABIAGAAIAAAAIAAAUIgYAAQgHAAgGgDQgHgDgGgGQgEgGgEgIQgDgHAAgIQAAgIAFgIQADgJAJgIIAKgIIAKgDIALgDIAKgBIANABIALAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgGgEQgJgEgIgBQgKAAgFAEQgHADgDAEQgFAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAGgFQAFgGAGgDIAMgFIAMgCIAGAAIACAAQAJgBALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBADIgEADIgDAFIgFADIgEAEIgDACIAGALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_10.setTransform(-44.1,-38.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AAjBKIAAhaQAAgJgBgGQgDgGgEgEQgEgEgEgCIgJgDIgGgBIgEAAQgFAAgGABIgIAEIgHAGIgEAGQgEAIgBAKIAABaIgVAAIAAhwQAEgIAGgGIAKgKIAMgGIAKgDIAIgCIAGAAIAAAAQALAAAHADQAJACAGAEQAGAEAEAFIAHAJIAEAKIACAJIABAHIAAAEIAABag");
	this.shape_11.setTransform(47.8,-64.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_12.setTransform(35.3,-64.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjBKIAAgpIgDgIQgDgEgEgCIgIgEIgKgBIgHAAIgFACIAAgWQAFgBAHAAQAQAAAMAHIAAgPQgBgKgDgIIgFgGIgGgGIgIgEQgGgCgGAAQgJABgIADIgGAFIgGAGIgEAJQgCAGAAAGIgWAAIAAgBIABgHIACgMIAGgNQAEgHAGgFQAGgGAKgDQAKgEAMAAIACAAIAGABIAMACIANAFQAGAEAGAGQAFAGAEAKQADAJABAOIAABag");
	this.shape_13.setTransform(24.7,-64.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgKBJQgLAAgHgCQgIgCgGgEIgIgIIgEgJIgCgIIgBgGQAAgJADgGQAEgGAEgDIAHgGIAFgCIgJgCIgFgEIgFgFIgCgGQgDgHgBgIQAAgIACgGIAEgLIAGgHIAGgFQAIgFAKAAIAdAAIAAAUIgRAAIgIABIgHADIgFADIgDAEQgCAFAAAGQgBAGACADIAEAHIAGADIAHACIAEABIADAAIARAAIAAAUIgRAAIgJABIgHADIgFAEIgCAFIAAAEIAAACQAAAFABAEIAEAGIAFAEIAGACIAEABIADAAIABAAIAZAAQAIAAAEgDIAHgIQACgEABgGIAAhoIAXAAIAABoQgBAJgDAHQgCAHgFAEQgEAFgFADIgKAEIgJACIgFAAg");
	this.shape_14.setTransform(11.2,-64.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_15.setTransform(-2.5,-75.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgKgCIgJgBIgCAAIgGABIgHACIgHAEIgGAGQgDAFgCAGIAAACIAAACQAAAEADAEQACACADADIAIAEIAJACIAIABIAGAAIABAAIAAAUIgZAAQgHAAgGgDQgHgDgGgGQgEgGgEgIQgDgHAAgIQAAgIAEgIQAEgJAJgIIAKgIIAKgDIALgDIAKgBIANABIALAEIALADIAAgIQAAgGgCgFIgDgJIgGgHIgHgEQgHgEgKgBQgIAAgGAEQgHADgDAEQgFAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAGgFQAFgGAGgDIAMgFIAMgCIAGAAIABAAQAKgBALADQAFgBAFgCIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBADIgEADIgDAFIgFADIgEAEIgEACIAHALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_16.setTransform(-1.9,-65.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgKBJIAAiRIAVAAIAACRg");
	this.shape_17.setTransform(-11.5,-64.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAwBgIgLgGQgGgEgDgEIAPgTIACACIAEAEIAGADIAJABQAGAAAEgDQADgCACgEQACgEAAgGIAAgZIgCAGIgEAGIgGAEIgGACQgIAEgIABIgFAAQgNgBgIgDQgJgDgGgFQgGgGgCgHIgFgMIgCgLIgBgHIAAglQAAgJgCgGQgCgGgEgEQgEgEgEgCIgJgDIgHgBIgDAAQgHAAgFABIgJAEIgGAGIgEAGQgEAIgBAKIAAAsQABAHACAFIADAFIAFAEIAGADIAIABIAQAAIAAAVIgdAAQgKgBgHgFIgGgFIgFgHIgEgLIgBgOIAAgDIAAhCQAEgIAFgGIALgKIAMgGIAKgEIAIgBIAFAAIACAAQAOAAAKAFQAJADAHAHQAFAFAEAHIAFAOIACAKIAAAGIAAAjQAAAJADAFQACAHAEAEQADAEAFACIAIADIAHACIAEAAQAIAAAGgDQAGgCAEgEQAEgEACgEIADgJIABgGIAAgEIAAhbIAWAAIAACWQAAALgDAHQgCAIgEAFQgEAFgFACIgJAEIgIABIgEABQgJAAgHgCg");
	this.shape_18.setTransform(-25.6,-61.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgJAXQgDAAgDgDQgDgCAAgEIAAgTIgIAAIAAgRIARAAQAEAAACADIACACIABAEIAAATIAKAAIAAgcIARAAIAAAkQAAAEgCACQgDADgEAAg");
	this.shape_19.setTransform(-42.1,-53.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgJgCIgKgBIgDAAIgFABIgHACIgHAEIgHAGQgCAFgBAGIgBACIAAACQAAAEACAEQACACAFADIAIAEIAIACIAIABIAFAAIABAAIAAAUIgYAAQgHAAgGgDQgIgDgEgGQgGgGgCgIQgEgHAAgIQAAgIAFgIQADgJAIgIIALgIIAKgDIALgDIAKgBIANABIAMAEIAKADIAAgIQAAgGgBgFIgFgJIgFgHIgGgEQgIgEgJgBQgJAAgHAEQgFADgFAEQgEAEgCAFIgDAJIgXAAQABgMAEgJQAEgIAFgFQAGgGAGgDIANgFIALgCIAGAAIACAAQAJgBAKADQAGgBAFgCIAKgGQAFgEADgGIAHAHIADADIADACIACACIAAABIAAADIgDADIgFAFIgEADIgFAEIgCACIAHALIADALIABAKIABAGIAAABIAABZg");
	this.shape_20.setTransform(-43.9,-65.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_21.setTransform(31.1,139.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgVByQgLgEgIgGQgIgFgGgHIgJgQIAGgCIAIgGIAIgEIAGgEQAEAKAHAFIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgIIgHgIIgLgFIgOgCIgSACQgIACgGAEQgFAFgFAGIgIARIgiAAQABgPAGgOQAGgMAKgKQALgJAPgFQAPgFAUAAIABAAIABAAIAJABIAPADIARAIQAJAFAIAIQAHAJAFAOQAFANAAATIAABLQgBAWgIARIgKAPQgFAGgIAGQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_22.setTransform(10.9,140);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AgPAgIAAhAIAfAAIAABAg");
	this.shape_23.setTransform(-3.4,113.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AgGB0QgUAAgOgFQgNgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQAEAKAGAGQAFAHAHADIANAFIALACIAFAAQANAAAJgEQAJgEAHgGQAGgGADgHIAEgOIADgLIAAgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgGAJIgJAGIgKAEQgMAEgOABg");
	this.shape_24.setTransform(-9,140);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231F20").s().p("AA2BzIAAhkIgCgKIgEgIIgFgKIgJgIQgEgCgIAAIhLAAIAACKIgiAAIAAjlIAiAAIAAA6IBLAAQAGAAAGgDIAJgJQAEgFADgLIAAgeIAiAAIAAAhIgBAIIgEALIgGANIgJAKIAMAPIAIARQAEAKAAAMIAABkg");
	this.shape_25.setTransform(-30.9,139.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BF212F").s().p("Ak2IiIAAiCQCHiKBqh9IBYhsIBOhrIA2hhQAVgtAAgfQAAgjgNggQgOgfgYgXQgWgXgggNQgfgOgjAAQgjAAggAOQgeANgYAXQgYAXgNAfQgNAgAAAjIiMAAQAAhAAYg4QAZg5AqgqQAqgqA5gZQA4gYBAAAQBBAAA4AYQA4AZAqAqQArAqAZA5QAXA4AABAQAAAwgMAsQgOArgYAmIiaDPIg/BTIg8BPIg0BBIgnAsIGiAAIAACCg");
	this.shape_26.setTransform(2.6,50.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBD637").s().p("Aq3aqQiVAAhqhpQhrhqAAiWIAA9uQAAiWBrhqQBqhpCVAAIIxAAImAsUIO5MUIEFAAQCWAABqBpQBqBqgBCWIAAduQABCWhqBqQhqBpiWAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.7,-170.6,211.5,341.3);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkBKIAAhhQAAgJgEgGQgDgIgGgDIgXAPIgXgPQgFAEgEAHQgCAGAAAJIAAAzQAAAHACAGIADAEIAFAFIAGADIAJAAIAOAAIAAAVIgcAAQgJAAgIgFIgGgGIgFgHIgEgLIgCgOIAAg/QACgPAJgKQAJgLANgFIAYAQIAagQQANAFAJALQAEAFACAHQACAGABAHIAABqg");
	this.shape.setTransform(58.3,-96.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoALIAAgVIBRAAIAAAVg");
	this.shape_1.setTransform(44.9,-106.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBKIAAgrQgBgHgCgEQgDgEgEgDIgJgEIgKgDIgJgBIgDAAIgFABIgHACIgIAFIgGAGQgDAFgBAGIAAADQgBAFADADIAGAGIAIADIAJACIAHABIAFAAIACAAIAAAVIgXAAQgIAAgHgEQgHgDgFgFQgFgGgDgIQgDgHAAgIQAAgIAEgJQAEgIAIgIIAKgHIALgFIALgCIAJgBIAOABIAMADIAKAFIAAgJQgBgGgBgGIgEgJIgFgGIgHgFQgIgDgKgBQgHAAgHADQgGADgEAFQgEAEgCAFIgDAJIgXAAQABgMADgJQAEgIAGgGQAFgFAHgEIANgEIAKgCIAHgBIAAAAQAOAAAJAEQAKADAGAGQAHAGADAGIAGANIACAMIAAAHIAAABIAABZg");
	this.shape_2.setTransform(44.4,-96.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBJQgFgCgDgCQgEgDgCgEQgCgFAAgFIAAAAIAAAAQAAAFgBAFIgGAHIgIAEIgKABQgHAAgGgBIgKgFIgIgGIgFgHQgEgIgCgKIAAhuIAkAAIAAAUIgOAAIAABRQAAAKADAFQACAFADADIAGACIAFABIABAAQAGAAADgDIAFgHIACgIIABgGIAAgCIAAhlIASAAIAABlIAAACIAAAGIADAIQACAEADADQADADAGAAIABAAIAFgBIAGgCQADgDACgFQACgFAAgKIAAhlIAWAAIAABuQgBAKgFAIIgFAHIgHAGIgLAFQgFABgIAAg");
	this.shape_3.setTransform(30,-96.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABKQgKAAgGgCIgMgGQgFgDgDgFIAOgNIADACIAEADIAGADIAJABIAEgBIAFgDIACgDIACgEQACgFABgHIAAhUIgUAAIAAgVIApAAIAABpQAAALgCAHQgDAHgEAGIgJAHIgJAEIgIABIgCAAg");
	this.shape_4.setTransform(17,-96.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBIQgLgEgHgEQgIgFgFgGIAOgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgIgBIgEgBIgHgDIgHgEIgHgGQgDgFgBgFQgCgGAAgIQAAgMADgJQAFgIAGgFQAIgFAIgDQAIgCAIAAQAKAAAHACIANAFIAMAGIALAHIgNATIgJgGIgHgEIgJgEIgIgCIgHgBIgIABQgFABgDACQgEADgCAEQgCAEgBAHQAAAGAFAEQADAEAGACIALADIAPACQAIACAGADQAHAEAFAEQAFAGADAGQAEAHAAAIQgBALgEAJQgEAIgHAFQgHAGgKACQgJADgLAAQgOAAgKgDg");
	this.shape_5.setTransform(7,-96.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB6IAAiTQAAgFgCgEIgEgIIgHgJIgGgIIgFgJQgCgFAAgFIACgOQABgHAEgHQAFgGAHgFQAGgEALAAIA3AAIAAAUIgyAAQgFABgEACIgDADIgEAEIgCAGIgBAHQAAAGACADIAFAHIAHAIIAJANIABAFIABAGIABAIIAACQg");
	this.shape_6.setTransform(0.1,-101.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBKIAAhaQgBgJgCgGQgCgGgEgEQgDgEgFgCIgIgDIgHgBIgEAAQgFAAgGABIgJAEIgGAGIgEAGQgEAIAAAKIAABaIgXAAIAAhwQAFgIAFgGIAMgKIALgGIAKgDIAJgCIAEAAIABAAQAKAAAJADQAIACAGAEQAGAEAEAFIAHAJIAEAKIADAJIAAAHIAAAEIAABag");
	this.shape_7.setTransform(-11.6,-96.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_8.setTransform(-24,-96.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBKIAAgpIgFgIQgCgEgEgCIgIgEIgJgBIgIAAIgFACIAAgWQAFgBAIAAQAPAAANAHIAAgPQgBgKgFgIIgEgGIgGgGIgJgEQgEgCgHAAQgJABgIADIgGAFIgGAGIgEAJQgBAGgBAGIgVAAIAAgBIAAgHIADgMIAFgNQAEgHAGgFQAGgGAJgDQAKgEANAAIABAAIAIABIALACIANAFQAHAEAFAGQAGAGADAKQAEAJgBAOIAABag");
	this.shape_9.setTransform(-34.7,-96.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_10.setTransform(-46,-96.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABKQgIAAgIgDIgHgDIgFgEIgEgFQgCgDAAgEIAAAAIAAAAIAAAUIgWAAIAAiRIAWAAIAABaIABADIABAHIACAJQADAFAEAEQAEAEAFACQAGADAIAAIADAAIAIgCIAIgDQAEgCAEgEQADgEACgHQADgGAAgJIAAhaIAWAAIAABaIAAACIAAAHIgCALIgGANQgDAHgGAFQgFAFgJAEQgJADgNAAg");
	this.shape_11.setTransform(-56.6,-96.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBBKQgJAAgGgCIgMgGQgFgDgEgFIAPgNIACACIAFADIAGADIAIABIAFgBIAEgDIAEgDIABgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQAAALgDAHQgCAHgEAGIgJAHIgKAEIgHABIgEAAg");
	this.shape_12.setTransform(72.9,-123.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_13.setTransform(65.4,-140.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgKgCIgJgBIgCAAIgGABIgHABIgHAFIgGAGQgDAFgBAGIgBACIAAACQAAAEADAEQABADAEACIAIAEIAJACIAIAAIAGAAIAAAAIAAAVIgYAAQgHAAgGgDQgHgDgGgGQgEgGgEgIQgDgHAAgIQAAgIAFgIQADgJAJgIIAKgIIAKgDIALgDIAKgBIANABIALAEIALADIAAgIQAAgGgCgGIgDgJIgGgGIgGgEQgJgEgIgBQgKAAgFAEQgHADgDAEQgFAEgCAGIgDAJIgXAAQABgNAEgJQAEgIAGgFQAFgGAGgDIAMgFIAMgCIAGAAIACAAQAJgBALADQAFAAAFgDIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBACIgEAEIgDAFIgFADIgEAEIgDACIAGALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_14.setTransform(62.5,-124.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_15.setTransform(51.8,-140.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_16.setTransform(48.3,-134.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjBKIAAhaQAAgJgDgGQgCgGgDgEQgEgEgEgCIgIgDIgIgBIgDAAQgIAAgGACQgFADgFADQgEAEgCAFIgCAIIgBAGIgBAEIAABaIgWAAIAAiSIAWAAIAAAUIAAABIAAgBQAAgDACgDIAEgGIAFgEIAHgCQAIgDAIAAIAFAAQAMAAAJAEQAJADAFAFQAGAFADAHIAGAMIACALIAAAIIAAACIAABag");
	this.shape_17.setTransform(48.4,-123.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_18.setTransform(36,-123.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADAEQACABAAAEIAAAQIAnAAIAAAVg");
	this.shape_19.setTransform(26.7,-140.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_20.setTransform(24.5,-126.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_21.setTransform(8.4,-126.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_22.setTransform(-4.5,-128.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_23.setTransform(-13.3,-123.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_24.setTransform(-25.7,-123.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAABKQgKAAgHgCIgLgGQgFgDgDgFIAOgNIADACIADADIAHADIAJABIAEgBIAFgDIACgDIACgEQADgFAAgHIAAhUIgUAAIAAgVIApAAIAABpQABALgDAHQgDAHgEAGIgJAHIgJAEIgIABIgCAAg");
	this.shape_25.setTransform(-34.2,-123.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAABKQgKAAgGgCIgMgGQgFgDgDgFIAOgNIACACIAFADIAGADIAJABIAEgBIAFgDIACgDIACgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQgBALgCAHQgDAHgDAGIgJAHIgKAEIgIABIgCAAg");
	this.shape_26.setTransform(-43,-123.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAQQgEAAgCgCIgCgDIgCgFIAAgVIAVAAIAAALIA2AAIAAAUg");
	this.shape_27.setTransform(-50.9,-134.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAjBKIAAgrQAAgHgCgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgGAFIgHAGQgDAFgBAGIgBADQAAAFADADIAGAGIAIADIAIACIAIABIAFAAIACAAIAAAVIgYAAQgHAAgHgEQgHgDgFgFQgFgGgDgIQgCgHgBgIQABgIADgJQAEgIAIgIIAKgHIALgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQAAgGgBgGIgEgJIgGgGIgGgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAFgJQAEgIAFgGQAGgFAGgEIAMgEIALgCIAHgBIAAAAQAOAAAJAEQAKADAHAGQAGAGADAGIAGANIACAMIABAHIAAABIAABZg");
	this.shape_28.setTransform(-53.5,-123.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQBJIgIgEQgEgDgCgFQgCgEAAgFQAAAFgBAEQgCAFgEADQgDACgFACIgKABQgIAAgGgBIgJgFIgIgGIgFgHQgFgIgBgKIAAhuIAWAAIAABlQAAAKACAFQADAFADADQADACADAAIAFABIABAAQAFAAAEgDIAFgHIACgIIAAgGIAAgCIAAhlIATAAIAABlIAAACIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEgBIAGgCQADgDACgFQADgFAAgKIAAhlIAWAAIAABuQgCAKgEAIIgFAHIgIAGIgKAFQgGABgHAAg");
	this.shape_29.setTransform(-67.9,-123.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_30.setTransform(31.4,50.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgHIgJgPIAGgDIAIgGIAIgFIAGgDQAEAKAHAFIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgIIgHgHIgLgGIgOgCIgSACQgIACgGAEQgFAEgFAHIgIARIgiAAQABgPAGgNQAGgNAKgKQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPAEIARAIQAJAFAIAIQAHAJAFAOQAFANAAATIAABLQgBAWgIARIgKAPQgFAGgIAGQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_31.setTransform(11.3,50.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAgIAAhAIAfAAIAABAg");
	this.shape_32.setTransform(-3.1,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGB0QgUAAgNgFQgOgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQADAKAHAGQAFAHAHADIANAFIALACIAEAAQAOAAAJgEQAJgEAHgGQAFgGAEgHIAEgOIACgLIABgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgHAJIgIAGIgKAEQgMAEgPABg");
	this.shape_33.setTransform(-8.6,50.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA1BzIAAhjIgBgLIgDgIIgGgKIgJgHQgEgDgIAAIhLAAIAACKIgiAAIAAjlIAiAAIAAA7IBLAAQAGgBAGgDIAJgJQAEgFADgLIAAgeIAiAAIAAAhIgBAIIgEALIgGANIgJALIAMAOIAJARQADAKAAANIAABjg");
	this.shape_34.setTransform(-30.6,50.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7CB34B").s().p("AhSF5QgkgLgbgQQgagRgTgWIgfgqQgdg0gGhCIAAg2IADgZIAGgaIALgiIADgFIAHgQIARglIAfhEIAyhuIBLihIBfAAIh0EAQAigIAoAAQAuAAAkAKQAkAKAbARQAbARATAVIAeArQAeAyAGBCIAAA2QgGBCgeA0IgeAqQgTAWgbARQgbAQgkALQgkAJguAAQguAAgkgJgAhPgcIgcARIgaAZIgSAkQgHAUAAAbIAAA2QAAAZAHAUIASAiIAaAYIAcAQQAjAPAsADQAsgDAjgPIAdgQIAagYIASgiQAHgUAAgZIAAg2QAAgbgHgUIgSgkIgagZIgdgRQgjgQgsgBQgsABgjAQg");
	this.shape_35.setTransform(12.8,-28.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7CB34B").s().p("AAfF9IAAosQgcAUgmAOQgnAMg2ACIAAhhIASgBIAegFIAmgOQATgJARgRQAPgSAMgaQAKgbAAgnIBiAAIAAL5g");
	this.shape_36.setTransform(-37.1,-29.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BF212F").s().p("AshPCQhigng9hWQg+hZAAhsIAA8CQAAiPBmhlQBlhlCPAAIVJAAQCPAABlBlQBmBlAACPIAAcCQAACOhmBmQhlBliPAAIyAAAIlAIDg");
	this.shape_37.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-150,204.6,300);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkBKIAAhhQAAgJgEgGQgDgIgGgDIgXAPIgXgPQgFAEgEAHQgCAGAAAJIAAAzQAAAHACAGIADAEIAFAFIAGADIAJAAIAOAAIAAAVIgcAAQgJAAgIgFIgGgGIgFgHIgEgLIgCgOIAAg/QACgPAJgKQAJgLANgFIAYAQIAagQQANAFAJALQAEAFACAHQACAGABAHIAABqg");
	this.shape.setTransform(58.3,-96.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoALIAAgVIBRAAIAAAVg");
	this.shape_1.setTransform(44.9,-106.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBKIAAgrQgBgHgCgEQgDgEgEgDIgJgEIgKgDIgJgBIgDAAIgFABIgHACIgIAFIgGAGQgDAFgBAGIAAADQgBAFADADIAGAGIAIADIAJACIAHABIAFAAIACAAIAAAVIgXAAQgIAAgHgEQgHgDgFgFQgFgGgDgIQgDgHAAgIQAAgIAEgJQAEgIAIgIIAKgHIALgFIALgCIAJgBIAOABIAMADIAKAFIAAgJQgBgGgBgGIgEgJIgFgGIgHgFQgIgDgKgBQgHAAgHADQgGADgEAFQgEAEgCAFIgDAJIgXAAQABgMADgJQAEgIAGgGQAFgFAHgEIANgEIAKgCIAHgBIAAAAQAOAAAJAEQAKADAGAGQAHAGADAGIAGANIACAMIAAAHIAAABIAABZg");
	this.shape_2.setTransform(44.4,-96.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQBJQgFgCgDgCQgEgDgCgEQgCgFAAgFIAAAAIAAAAQAAAFgBAFIgGAHIgIAEIgKABQgHAAgGgBIgKgFIgIgGIgFgHQgEgIgCgKIAAhuIAkAAIAAAUIgOAAIAABRQAAAKADAFQACAFADADIAGACIAFABIABAAQAGAAADgDIAFgHIACgIIABgGIAAgCIAAhlIASAAIAABlIAAACIAAAGIADAIQACAEADADQADADAGAAIABAAIAFgBIAGgCQADgDACgFQACgFAAgKIAAhlIAWAAIAABuQgBAKgFAIIgFAHIgHAGIgLAFQgFABgIAAg");
	this.shape_3.setTransform(30,-96.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABKQgKAAgGgCIgMgGQgFgDgDgFIAOgNIADACIAEADIAGADIAJABIAEgBIAFgDIACgDIACgEQACgFABgHIAAhUIgUAAIAAgVIApAAIAABpQAAALgCAHQgDAHgEAGIgJAHIgJAEIgIABIgCAAg");
	this.shape_4.setTransform(17,-96.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBIQgLgEgHgEQgIgFgFgGIAOgOIAHAFIAKAFIAMAEIAMABQAHAAAFgBQAGgCAEgDQAEgDACgFQACgEAAgFQAAgFgCgEIgEgFIgFgDIgEgBIgEAAIgJgCIgJgCIgIgBIgEgBIgHgDIgHgEIgHgGQgDgFgBgFQgCgGAAgIQAAgMADgJQAFgIAGgFQAIgFAIgDQAIgCAIAAQAKAAAHACIANAFIAMAGIALAHIgNATIgJgGIgHgEIgJgEIgIgCIgHgBIgIABQgFABgDACQgEADgCAEQgCAEgBAHQAAAGAFAEQADAEAGACIALADIAPACQAIACAGADQAHAEAFAEQAFAGADAGQAEAHAAAIQgBALgEAJQgEAIgHAFQgHAGgKACQgJADgLAAQgOAAgKgDg");
	this.shape_5.setTransform(7,-96.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB6IAAiTQAAgFgCgEIgEgIIgHgJIgGgIIgFgJQgCgFAAgFIACgOQABgHAEgHQAFgGAHgFQAGgEALAAIA3AAIAAAUIgyAAQgFABgEACIgDADIgEAEIgCAGIgBAHQAAAGACADIAFAHIAHAIIAJANIABAFIABAGIABAIIAACQg");
	this.shape_6.setTransform(0.1,-101.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkBKIAAhaQgBgJgCgGQgCgGgEgEQgDgEgFgCIgIgDIgHgBIgEAAQgFAAgGABIgJAEIgGAGIgEAGQgEAIAAAKIAABaIgXAAIAAhwQAFgIAFgGIAMgKIALgGIAKgDIAJgCIAEAAIABAAQAKAAAJADQAIACAGAEQAGAEAEAFIAHAJIAEAKIADAJIAAAHIAAAEIAABag");
	this.shape_7.setTransform(-11.6,-96.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_8.setTransform(-24,-96.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBKIAAgpIgFgIQgCgEgEgCIgIgEIgJgBIgIAAIgFACIAAgWQAFgBAIAAQAPAAANAHIAAgPQgBgKgFgIIgEgGIgGgGIgJgEQgEgCgHAAQgJABgIADIgGAFIgGAGIgEAJQgBAGgBAGIgVAAIAAgBIAAgHIADgMIAFgNQAEgHAGgFQAGgGAJgDQAKgEANAAIABAAIAIABIALACIANAFQAHAEAFAGQAGAGADAKQAEAJgBAOIAABag");
	this.shape_9.setTransform(-34.7,-96.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_10.setTransform(-46,-96.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAABKQgIAAgIgDIgHgDIgFgEIgEgFQgCgDAAgEIAAAAIAAAAIAAAUIgWAAIAAiRIAWAAIAABaIABADIABAHIACAJQADAFAEAEQAEAEAFACQAGADAIAAIADAAIAIgCIAIgDQAEgCAEgEQADgEACgHQADgGAAgJIAAhaIAWAAIAABaIAAACIAAAHIgCALIgGANQgDAHgGAFQgFAFgJAEQgJADgNAAg");
	this.shape_11.setTransform(-56.6,-96.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBBKQgJAAgGgCIgMgGQgFgDgEgFIAPgNIACACIAFADIAGADIAIABIAFgBIAEgDIAEgDIABgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQAAALgDAHQgCAHgEAGIgJAHIgKAEIgHABIgEAAg");
	this.shape_12.setTransform(72.9,-123.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_13.setTransform(65.4,-140.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAgBSIAAgrQAAgGgDgFQgDgEgEgDIgJgEIgKgCIgJgBIgCAAIgGABIgHABIgHAFIgGAGQgDAFgBAGIgBACIAAACQAAAEADAEQABADAEACIAIAEIAJACIAIAAIAGAAIAAAAIAAAVIgYAAQgHAAgGgDQgHgDgGgGQgEgGgEgIQgDgHAAgIQAAgIAFgIQADgJAJgIIAKgIIAKgDIALgDIAKgBIANABIALAEIALADIAAgIQAAgGgCgGIgDgJIgGgGIgGgEQgJgEgIgBQgKAAgFAEQgHADgDAEQgFAEgCAGIgDAJIgXAAQABgNAEgJQAEgIAGgFQAFgGAGgDIAMgFIAMgCIAGAAIACAAQAJgBALADQAFAAAFgDIAKgGQAEgEAEgGIAHAHIADADIACACIADACIABABIgBACIgEAEIgDAFIgFADIgEAEIgDACIAGALIAEALIACAKIAAAGIAAABIAABZg");
	this.shape_14.setTransform(62.5,-124.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAVIAAgpIATAAIAAApg");
	this.shape_15.setTransform(51.8,-140.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoARIAAgUIA8AAIAAgNIAVAAIAAAhg");
	this.shape_16.setTransform(48.3,-134.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjBKIAAhaQAAgJgDgGQgCgGgDgEQgEgEgEgCIgIgDIgIgBIgDAAQgIAAgGACQgFADgFADQgEAEgCAFIgCAIIgBAGIgBAEIAABaIgWAAIAAiSIAWAAIAAAUIAAABIAAgBQAAgDACgDIAEgGIAFgEIAHgCQAIgDAIAAIAFAAQAMAAAJAEQAJADAFAFQAGAFADAHIAGAMIACALIAAAIIAAACIAABag");
	this.shape_17.setTransform(48.4,-123.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_18.setTransform(36,-123.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgYAYIAAgbIgLAAIAAgUIAWAAIAFABIADAEQACABAAAEIAAAQIAnAAIAAAVg");
	this.shape_19.setTransform(26.7,-140.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_20.setTransform(24.5,-126.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAQBjQgFgBgDgDQgEgDgCgEQgCgEAAgGQAAAGgBAEQgCAEgEADIgIAEIgKACQgIAAgFgCIgKgEIgIgGIgFgHQgFgIgBgLIAAhuIAWAAIAABmQAAAJADAFQACAGADACIAGADIAFAAIABAAQAGAAADgDQADgDACgEIACgIIAAgGIAAgBIAAhmIATAAIAABmIAAABIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEAAIAGgDQADgCADgGQACgFAAgJIAAibIAWAAIAACjQgBALgFAIIgFAHIgIAGIgKAEQgFACgIAAg");
	this.shape_21.setTransform(8.4,-126.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AANB6IAAjJIgBgGIgDgFIgFgGIgRASIgVgdIAOgMIAJANIAKgPQAGAAAGADIAJAFIAGAHIAFAHQAEAJAAALIAADJg");
	this.shape_22.setTransform(-4.5,-128.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEBKQgMAAgIgDQgKgEgFgFQgGgFgEgHIgEgNIgDgLIAAgHIAAgCIAAhaIAWAAIAABaQAAAJACAGQADAHAEAEQADAEAFACIAIADIAHACIADAAQAIAAAGgDQAFgCAEgEQAFgEABgFIADgJIACgHIAAgDIAAhaIAWAAIAACRIgWAAIAAgUIgCAHIgEAFIgGAEIgFADQgIADgJAAg");
	this.shape_23.setTransform(-13.3,-123.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAQBKIAAhoIgCgKIgDgEIgDgEIgEgCIgEgBIgJABIgHADIgEADIgCADIgPgQQAEgEAFgEIALgFQAHgDAKAAIADAAIAHACIAJADQAFADAEAFQAEAFADAHQADAHAAALIAABog");
	this.shape_24.setTransform(-25.7,-123.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAABKQgKAAgHgCIgLgGQgFgDgDgFIAOgNIADACIADADIAHADIAJABIAEgBIAFgDIACgDIACgEQADgFAAgHIAAhUIgUAAIAAgVIApAAIAABpQABALgDAHQgDAHgEAGIgJAHIgJAEIgIABIgCAAg");
	this.shape_25.setTransform(-34.2,-123.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAABKQgKAAgGgCIgMgGQgFgDgDgFIAOgNIACACIAFADIAGADIAJABIAEgBIAFgDIACgDIACgEQACgFAAgHIAAhUIgTAAIAAgVIAqAAIAABpQgBALgCAHQgDAHgDAGIgJAHIgKAEIgIABIgCAAg");
	this.shape_26.setTransform(-43,-123.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAQQgEAAgCgCIgCgDIgCgFIAAgVIAVAAIAAALIA2AAIAAAUg");
	this.shape_27.setTransform(-50.9,-134.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAjBKIAAgrQAAgHgCgEQgDgEgFgDIgJgEIgJgDIgJgBIgCAAIgGABIgIACIgGAFIgHAGQgDAFgBAGIgBADQAAAFADADIAGAGIAIADIAIACIAIABIAFAAIACAAIAAAVIgYAAQgHAAgHgEQgHgDgFgFQgFgGgDgIQgCgHgBgIQABgIADgJQAEgIAIgIIAKgHIALgFIAKgCIAKgBIAOABIALADIAKAFIAAgJQAAgGgBgGIgEgJIgGgGIgGgFQgIgDgKgBQgIAAgGADQgGADgEAFQgEAEgCAFIgDAJIgXAAQAAgMAFgJQAEgIAFgGQAGgFAGgEIAMgEIALgCIAHgBIAAAAQAOAAAJAEQAKADAHAGQAGAGADAGIAGANIACAMIABAHIAAABIAABZg");
	this.shape_28.setTransform(-53.5,-123.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQBJIgIgEQgEgDgCgFQgCgEAAgFQAAAFgBAEQgCAFgEADQgDACgFACIgKABQgIAAgGgBIgJgFIgIgGIgFgHQgFgIgBgKIAAhuIAWAAIAABlQAAAKACAFQADAFADADQADACADAAIAFABIABAAQAFAAAEgDIAFgHIACgIIAAgGIAAgCIAAhlIATAAIAABlIAAACIAAAGIACAIQACAEAEADQADADAGAAIABAAIAEgBIAGgCQADgDACgFQADgFAAgKIAAhlIAWAAIAABuQgCAKgEAIIgFAHIgIAGIgKAFQgGABgHAAg");
	this.shape_29.setTransform(-67.9,-123.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQBzQgRAAgMgEQgMgDgIgGQgIgGgFgHIgHgNIgEgNIAAgKQAAgOAEgJQAFgJAHgGIAMgIIAGgEIgMgDIgJgHIgGgIIgFgJQgEgLgBgMQAAgNACgJIAHgRIAJgMIAKgIQAMgHAQgBIAtAAIAAAgIgaAAIgOACIgKAEIgHAFIgFAGQgEAIgBAKQAAAIADAGIAHAKIAKAGIAJADIAIABIAEAAIAaAAIAAAfIgaAAIgQADIgKAEIgGAHIgEAHIgBAGIAAADQAAAJACAGIAGAKIAIAFIAJAEIAHABIAFAAIABAAIAoAAQAMAAAHgFQAHgFAEgGQAEgHABgKIAAikIAiAAIAACkQAAAPgEAKQgEALgHAHQgHAHgIAEIgPAHIgOADIgIABg");
	this.shape_30.setTransform(31.4,50.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVByQgLgEgIgFQgIgGgGgHIgJgPIAGgDIAIgGIAIgFIAGgDQAEAKAHAFIANAHQAIADAHAAQAMgCAKgFIAIgGIAGgIIAFgLIACgOIAAhLQgBgNgFgKIgFgIIgHgHIgLgGIgOgCIgSACQgIACgGAEQgFAEgFAHIgIARIgiAAQABgPAGgNQAGgNAKgKQALgJAPgFQAPgFAUAAIABAAIABAAIAJAAIAPAEIARAIQAJAFAIAIQAHAJAFAOQAFANAAATIAABLQgBAWgIARIgKAPQgFAGgIAGQgIAFgLAEQgLADgPAAQgOAAgLgDg");
	this.shape_31.setTransform(11.3,50.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgPAgIAAhAIAfAAIAABAg");
	this.shape_32.setTransform(-3.1,24.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGB0QgUAAgNgFQgOgFgJgJQgJgIgFgKIgIgUIgDgSIgBgMIAAgDIAAiNIAiAAIAACNQAAAPAEAKQADAKAHAGQAFAHAHADIANAFIALACIAEAAQAOAAAJgEQAJgEAHgGQAFgGAEgHIAEgOIACgLIABgGIAAiNIAiAAIAADkIgiAAIAAggIgDALIgHAJIgIAGIgKAEQgMAEgPABg");
	this.shape_33.setTransform(-8.6,50.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AA1BzIAAhjIgBgLIgDgIIgGgKIgJgHQgEgDgIAAIhLAAIAACKIgiAAIAAjlIAiAAIAAA7IBLAAQAGgBAGgDIAJgJQAEgFADgLIAAgeIAiAAIAAAhIgBAIIgEALIgGANIgJALIAMAOIAJARQADAKAAANIAABjg");
	this.shape_34.setTransform(-30.6,50.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7CB34B").s().p("AhEE8QgfgIgWgOQgWgOgQgSIgaglQgZgrgEg3IAAguIACgVIAFgWIAJgbIADgFIAGgNIAOggIAag4IAqhdIA/iHIBQAAIhhDXQAcgHAhAAQAnAAAeAJQAeAIAXAOQAWAOARASIAZAkQAYAqAGA3IAAAuQgGA3gYArIgZAlQgRASgWAOQgXAOgeAIQgeAIgnAAQgnAAgdgIgAhCgXIgYAOIgWAVIgPAeQgFARAAAWIAAAuQAAAVAFAQIAPAdIAWAVIAYANQAdANAlABQAmgBAcgNIAZgNIAVgVIAQgdQAGgQAAgVIAAguQAAgWgGgRIgQgeIgVgVIgZgOQgcgOgmgBQglABgdAOg");
	this.shape_35.setTransform(15.5,-24.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7CB34B").s().p("AAaFAIAAnTQgYARgfALQghALgtACIAAhSIAOgBIAagEIAggMQAQgHAOgPQANgPAJgWQAJgWAAghIBSAAIAAJ/g");
	this.shape_36.setTransform(-26.3,-25.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BF212F").s().p("AshPCQhigng9hWQg+hZAAhsIAA8CQAAiPBmhlQBlhlCPAAIVJAAQCPAABlBlQBmBlAACPIAAcCQAACOhmBmQhlBliPAAIyAAAIlAIDg");
	this.shape_37.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-150,204.6,300);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F25B2F").s().p("EhfzACcIAAk3MC/nAAAIAAE3g");
	this.shape.setTransform(0,76.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(540.2,-27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(471.7,-152.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AB3LhQgkgLgZgWQgagVgQggQgPgfgBgqQAAAqgPAfQgPAggaAVQgbAWgiALIhMAKQg3AAgqgNIhKgfIg2gsIgmg0Qgkg+gJhNIAAs2ICiAAIAAL3QAABIASAmQASAnAXARQAXARAXAEIAjADIAHAAQAqAAAZgXQAYgVAMgeIAQg7IACgtIAAgMIAAr3ICPAAIAAL3IAAAMIAFAtIAPA7QANAeAZAVQAYAXArAAIAIAAIAjgDQAWgEAWgRQAWgRARgnQAQgmABhIIAAx+ICiAAIAAS9QgJBNgjA+IglA0Ig3AsIhLAfQgrANg2AAg");
	this.shape_3.setTransform(455.1,-45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AB3LhQgkgLgZgWQgagVgQggQgPgfAAgqQgBAqgPAfQgPAggbAVQgZAWgjALIhMAKQg2AAgrgNIhKgfIg3gsIglg0Qgjg+gJhNIAAs2ICiAAIAAL3QAABIASAmQAQAnAYARQAYARAXAEIAiADIAHAAQAqAAAZgXQAYgVANgeIAOg7IAEgtIAAgMIAAr3ICPAAIAAL3IAAAMIADAtIARA7QANAeAYAVQAYAXArAAIAIAAIAigDQAXgEAWgRQAWgRASgnQAPgmAAhIIAAx+ICiAAIAAS9QgHBNgkA+IgmA0Ig2AsIhLAfQgqANg3AAg");
	this.shape_4.setTransform(336.3,-45.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(240.3,-63.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_6.setTransform(175.2,-26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_7.setTransform(83.2,-27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhLCaIAAkzICXAAIAAEzg");
	this.shape_8.setTransform(29,-151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(-2.2,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AiBIVIhTgoQgogbgaggIBuhqIAQARIAfAXIAuAWIBBAKIApgIIAfgSIAXgbIAOgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgUA2gdAjQgeAkgkAUIhEAcIg4ALIgeACQhFAAgygSg");
	this.shape_10.setTransform(-99.1,-26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AhLCaIAAkzICXAAIAAEzg");
	this.shape_11.setTransform(-154.6,-151);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("ADtJgIAAlAQABgvgWgfQgVghgfgUIhGggIhEgRIhLgJIgUACIgpAHIg0AQIg4AeIguA0QgVAfgIAsIgCAOIAAAMQAAAjARAYQARAZAbAPIA7AbIBAAPIA7AHIAoABIAOAAIAACYIi2AAQg4AAgygYQgzgZgkgpQglgqgWg3QgWg4AAg8QAAg9Abg9QAcg+A+g6IBNg5IBPglIBOgUIBLgGIBoALIBVAWIBMAhIAAg+QAAgzgLgmIgdhDIgqgwIgyggQg5gehJgEQhCAAguAYQgtAXgdAiQgeAigQAmIgXA/IiqAAQAGhaAeg/QAcg/ApgpQAogqAwgZIBcgjIBPgQIAygDIALAAQBLAABPAWQArgHAngRIBFgrQAkgdAWgwIA2A1IAVAVIATASIAPAOIAIAHQgDAJgFAJIgWAbIgfAfIghAfIggAZIgYANQAhAoATAuIAbBUIANBGIABAuIAAAKIAAKVg");
	this.shape_12.setTransform(-176.2,-33.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AiIIXQg7gRgtgbQgsgcgfgiIgzhIQgxhVgJhuIAArIICiAAIAALIQAAAsALAjIAeA7IArAqIAwAcQA5AbBJADQBKgDA6gbIAwgcIArgqIAdg7QALgjAAgsIAArIICiAAIAALIQgKBugwBVIgzBIQgfAigtAcQgsAbg7ARQg8AQhNAAQhNAAg7gQg");
	this.shape_13.setTransform(-281.8,-26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AiIIXQg7gRgtgbQgsgcgfgiIgzhIQgxhVgJhuIAArIICiAAIAALIQAAAsALAjIAeA7IArAqIAwAcQA5AbBJADQBKgDA6gbIAwgcIArgqIAdg7QALgjAAgsIAArIICiAAIAALIQgKBugwBVIgzBIQgfAigtAcQgsAbg7ARQg8AQhNAAQhNAAg7gQg");
	this.shape_14.setTransform(-387.4,-26.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AiRG+QgaAAgPgLIgVgYIgKglIAAihICYAAIAABRIEbAAIAACYgAiRjVQgaAAgPgKIgVgZIgKgkIAAihICYAAIAABRIEbAAIAACXg");
	this.shape_15.setTransform(-467,-26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AisITQhPgag0geQg8gignguIBrhpIA0AnIBKAlIBYAaIBfAKQAyAAAqgMQAogNAegYQAcgXAPgfQAQggAAgmQAAgogNgYIgfgnIgkgUIgdgIIgggFIhCgLIhIgMIg3gKIgigIIgwgTIg3ghIgzg1QgXgggOgrQgOgtAAg7QAAhYAfg9QAgg9AygnQAzgmBAgRQA/gSBAAAQBDAAA4APIBfAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg+gSIgugGIhIAHQgiAGgbATQgaARgPAfQgQAfAAAxQAAAyAbAcQAbAcArAQIBfAXIBrARQA2AJAyAcQAyAaAmAnQAlAnAXAzQAXAyAAA5QAABUgfA+QgeA9g0ApQg0AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_16.setTransform(-540.4,-26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-613.1,-92.3,1226.4,184.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F25B2F").s().p("EhfzACcIAAk3MC/nAAAIAAE3g");
	this.shape.setTransform(0,76.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(540.2,-27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(471.7,-152.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AB3LhQgkgLgZgWQgagVgQggQgPgfgBgqQAAAqgPAfQgPAggaAVQgbAWgiALIhMAKQg3AAgqgNIhKgfIg2gsIgmg0Qgkg+gJhNIAAs2ICiAAIAAL3QAABIASAmQASAnAXARQAXARAXAEIAjADIAHAAQAqAAAZgXQAYgVAMgeIAQg7IACgtIAAgMIAAr3ICPAAIAAL3IAAAMIAFAtIAPA7QANAeAZAVQAYAXArAAIAIAAIAjgDQAWgEAWgRQAWgRARgnQAQgmABhIIAAx+ICiAAIAAS9QgJBNgjA+IglA0Ig3AsIhLAfQgrANg2AAg");
	this.shape_3.setTransform(455.1,-45.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AB3LhQgkgLgZgWQgagVgQggQgPgfAAgqQgBAqgPAfQgPAggbAVQgZAWgjALIhMAKQg2AAgrgNIhKgfIg3gsIglg0Qgjg+gJhNIAAs2ICiAAIAAL3QAABIASAmQAQAnAYARQAYARAXAEIAiADIAHAAQAqAAAZgXQAYgVANgeIAOg7IAEgtIAAgMIAAr3ICPAAIAAL3IAAAMIADAtIARA7QANAeAYAVQAYAXArAAIAIAAIAigDQAXgEAWgRQAWgRASgnQAPgmAAhIIAAx+ICiAAIAAS9QgHBNgkA+IgmA0Ig2AsIhLAfQgqANg3AAg");
	this.shape_4.setTransform(336.3,-45.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(240.3,-63.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_6.setTransform(175.2,-26.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_7.setTransform(83.2,-27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhLCaIAAkzICXAAIAAEzg");
	this.shape_8.setTransform(29,-151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(-2.2,-26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AiBIVIhTgoQgogbgaggIBuhqIAQARIAfAXIAuAWIBBAKIApgIIAfgSIAXgbIAOgeQAPglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgUA3QgUA2gdAjQgeAkgkAUIhEAcIg4ALIgeACQhFAAgygSg");
	this.shape_10.setTransform(-99.1,-26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AhLCaIAAkzICXAAIAAEzg");
	this.shape_11.setTransform(-154.6,-151);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("ADtJgIAAlAQABgvgWgfQgVghgfgUIhGggIhEgRIhLgJIgUACIgpAHIg0AQIg4AeIguA0QgVAfgIAsIgCAOIAAAMQAAAjARAYQARAZAbAPIA7AbIBAAPIA7AHIAoABIAOAAIAACYIi2AAQg4AAgygYQgzgZgkgpQglgqgWg3QgWg4AAg8QAAg9Abg9QAcg+A+g6IBNg5IBPglIBOgUIBLgGIBoALIBVAWIBMAhIAAg+QAAgzgLgmIgdhDIgqgwIgyggQg5gehJgEQhCAAguAYQgtAXgdAiQgeAigQAmIgXA/IiqAAQAGhaAeg/QAcg/ApgpQAogqAwgZIBcgjIBPgQIAygDIALAAQBLAABPAWQArgHAngRIBFgrQAkgdAWgwIA2A1IAVAVIATASIAPAOIAIAHQgDAJgFAJIgWAbIgfAfIghAfIggAZIgYANQAhAoATAuIAbBUIANBGIABAuIAAAKIAAKVg");
	this.shape_12.setTransform(-176.2,-33.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AiIIXQg7gRgtgbQgsgcgfgiIgzhIQgxhVgJhuIAArIICiAAIAALIQAAAsALAjIAeA7IArAqIAwAcQA5AbBJADQBKgDA6gbIAwgcIArgqIAdg7QALgjAAgsIAArIICiAAIAALIQgKBugwBVIgzBIQgfAigtAcQgsAbg7ARQg8AQhNAAQhNAAg7gQg");
	this.shape_13.setTransform(-281.8,-26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AiIIXQg7gRgtgbQgsgcgfgiIgzhIQgxhVgJhuIAArIICiAAIAALIQAAAsALAjIAeA7IArAqIAwAcQA5AbBJADQBKgDA6gbIAwgcIArgqIAdg7QALgjAAgsIAArIICiAAIAALIQgKBugwBVIgzBIQgfAigtAcQgsAbg7ARQg8AQhNAAQhNAAg7gQg");
	this.shape_14.setTransform(-387.4,-26.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AiRG+QgaAAgPgLIgVgYIgKglIAAihICYAAIAABRIEbAAIAACYgAiRjVQgaAAgPgKIgVgZIgKgkIAAihICYAAIAABRIEbAAIAACXg");
	this.shape_15.setTransform(-467,-26.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AisITQhPgag0geQg8gignguIBrhpIA0AnIBKAlIBYAaIBfAKQAyAAAqgMQAogNAegYQAcgXAPgfQAQggAAgmQAAgogNgYIgfgnIgkgUIgdgIIgggFIhCgLIhIgMIg3gKIgigIIgwgTIg3ghIgzg1QgXgggOgrQgOgtAAg7QAAhYAfg9QAgg9AygnQAzgmBAgRQA/gSBAAAQBDAAA4APIBfAhIBVAuIBTA5IhaCIIhFgtIg5geIg+gaIg+gSIgugGIhIAHQgiAGgbATQgaARgPAfQgQAfAAAxQAAAyAbAcQAbAcArAQIBfAXIBrARQA2AJAyAcQAyAaAmAnQAlAnAXAzQAXAyAAA5QAABUgfA+QgeA9g0ApQg0AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_16.setTransform(-540.4,-26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-613.1,-92.3,1226.4,184.6);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F25B2F").s().p("AgSAVIgmgbIB9hsIg/BiIAZAaIhkBpg");
	this.shape.setTransform(7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,13.9,23), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0D2D3").s().p("Eg2NAD1IAAnpMBsbAAAIAAHpg");
	this.shape.setTransform(347,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,694,49), null);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(1.3,0,1,1,0,0,0,7,11.5);
	this.instance.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAEF40").s().p("AhjBkQgqgpAAg7QAAg6AqgpQApgqA6AAQA7AAApAqQAqApAAA6QAAA7gqApQgpAqg7AAQg6AAgpgqg");
	this.shape.setTransform(0.8,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#332E32").s().p("AhCgeICFhZQgMC/gEAAQgDAAgzAYIg1AYg");
	this.shape_1.setTransform(10.3,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#332E32").s().p("Ag2A7IBth4IgvB7g");
	this.shape_2.setTransform(-11.4,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20150F").s().p("Ag+BYIgtjBIA/AFQCOA0AAADIAKCXg");
	this.shape_3.setTransform(-6.1,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A3539").s().p("Ah8CVIgtjAIBvh7ICAAKIBkBUIgQC/IhsAwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-16.6,34,33.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgATAlRMAAAhKhIAnAAMAAABKhg");
	this.shape.setTransform(-48.5,236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgATAlRMAAAhKhIAnAAMAAABKhg");
	this.shape_1.setTransform(-142.5,236);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Aw2CMQmng3lGh0QhmgkhQgnIg8gfIBfgJQHqDXLaAtQJGAjLDhLQH5g2IGhnQEDg0CdgpIBggKQ0zF1w8AAQl+AAlfgvg");
	this.shape_2.setTransform(63.2,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ApcBfQjtgli2hOQg5gZgugaIghgVIA1gHQH0EKOKh1QEcgkEhhGQCRgjBZgcIA1gGQrqD7pgAAQjVAAjFgfg");
	this.shape_3.setTransform(63.5,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Aw3CMQmlg3lHh0QhmgkhQgnIg8gfIBfgJQHqDXLZAtQJHAjLDhLQH5g2IGhnQEDg0CdgpIBggKQ0zF1w8AAQl+AAlggvg");
	this.shape_4.setTransform(382.2,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ApcBfQjsgli4hOQg5gZgsgaIgigVIA1gHQH0EKOKh1QEbgkEihGQCRgjBZgcIA1gGQrqD7pgAAQjVAAjFgfg");
	this.shape_5.setTransform(382.5,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAhggQAfggAtAAQAtAAAhAgQAgAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_6.setTransform(-140.2,-5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_7.setTransform(-50.7,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAhggAsAAQAtAAAgAgQAhAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_8.setTransform(179.2,-5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_9.setTransform(268.7,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAIAAAAQAuAAAgAgQAgAgAAAtIAABaQAAAIgGAGQgFAGgJAAg");
	this.shape_10.setTransform(496.5,-5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAIAAAAQAuAAAgAgQAgAgAAAtIAABaQAAAIgGAGQgFAGgJAAg");
	this.shape_11.setTransform(586,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AoqdTIAPgIQAUgOAZgkQBSh2BrklUAFUgOpAHMgknIA8AAQiuN3jZORQmycgjbB9g");
	this.shape_12.setTransform(648,-184);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AkNdgQAUgFAig/QBDiABAkpUADMgO7ABkgj9IAygaQgfN+hLOXQiWcsjaB+g");
	this.shape_13.setTransform(518.5,-187.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AvFguIASgKICLAjQC0AlDPASQKUA5KmimIAxAAQjxBPlqAsQjqAcjdAAQnQAAmZh6g");
	this.shape_14.setTransform(456.6,-361.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("EgmkgBGIAvgPIFjA1QHLA5IQAcQaZBXbIj/IB7AAQiaAekOAnQobBNpDAqQpYAro4AAQyfAAwUi6g");
	this.shape_15.setTransform(458.9,-356.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AuaEmID7gUQEugeEJg3QNKivCDliIA2AAQgIAqgoA9QhPB7iaBpQnwFMwsASg");
	this.shape_16.setTransform(122.8,-333.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D6E70").s().p("AnfA3IAAhtIO/AAIAABtg");
	this.shape_17.setTransform(541.5,46);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6E70").s().p("Ap1A3IAAhtITrAAIAABtg");
	this.shape_18.setTransform(541.5,4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B5E3D").s().p("AhZVkMAAAgpvQAAgkAagaQAYgaAkAAIACAAQAkAAAcAaQAbAaAAAkMAAAApvg");
	this.shape_19.setTransform(541.5,96.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D6E70").s().p("AnfA8IAAh3IO/AAIAAB3g");
	this.shape_20.setTransform(219.5,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D6E70").s().p("Ap1A8IAAh3ITrAAIAAB3g");
	this.shape_21.setTransform(220.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B5E3D").s().p("AhZVpMAAAgp2QAAgkAagbQAagcAkAAIABAAQAkAAAbAcQAbAbAAAkMAAAAp2g");
	this.shape_22.setTransform(219.5,93);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D6E70").s().p("AnfA8IAAh3IO/AAIAAB3g");
	this.shape_23.setTransform(-99.5,43.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D6E70").s().p("ApwA8IAAh3IThAAIAAB3g");
	this.shape_24.setTransform(-99,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8B5E3D").s().p("AhZVpMAAAgp2QAAglAZgbQAbgbAjAAIACAAQAjAAAbAbQAcAbAAAlMAAAAp2g");
	this.shape_25.setTransform(-99.5,94);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D6E70").s().p("AD0ZeIAAh4ICRAAIl/jdImmDdICXAAIAAB4ImuAAIAAh4IC+AAID74hImvAAIAAgtIgGgJIAGgEIgCgCIG6j2IAAjCIpYAAIAAgtIgIgMIJglUIAAiCImSgBIAAg7IABAAIAAAAIHckKIA/jZIC5AAIBHDXIHfEMIgBACIAAA7ImJAAIAAB5IJnFZIAFAAIAAA8IpsAAIAADIIG2D2IgDAEIAFAAIAAAyImwAAID7YhIC/AAIAAB4gAGWXaIg4mEIlECoIF8DcgAmhXRIGVjTIlXjGIgDAAgAAHTzIFUixIgCgKIqWAAgAFBP8IlLkgIlPEgIKaAAgAFPPtIhJn7IkBDcIFKEfgAlZPhIE/kTIj5jYgAgKLBID6jXInzAAgAD8GuIj8kFIkAEFIH8AAgAkFGbID5j+Ii6i9gAD4GSIg9mnIixCzIDuD0gAjDg1IDCDGIC5i8IgDgQIl3AAgAIthtIlDi1IAAC1IFDAAgACghtIishhIitBdIAAAEIFZAAgApAhtIFLAAIAAi6gAAAjTICuBhIAAi/gAi5h+ICihWIiihagAgMjaICrhbIlPAAgAAAnTICtBiIABAAIAAi+IgBAAgACXlxIijhbIisBbIFPAAgAi5l8ICihXIiihbgAgMnZICihWIk9AAgALYprInukVIAAEVIHuAAgAi5qEIAAAZIFnAAIAAgRIi2h8gArWprIHhAAIAAkOgAADsAICrB1IAAjlgAi5qTICmhtIimhygAi5uBICxB6IC2h3IAAgFIlnAAgAADv6ICIA7IAjAAIAAh+IgFAAgAB1u/Ih9g2IiDA2IEAAAgAi5u/IAXAAICPg7IifhEIgHAAgAgIv+ICag/IkugBgAH+x5IlOi6IA8C2IgCAAIAAAEIEUAAgAAEzoICmBvIAEAAIAAgEIACAAIg3i2gACWx5IibhpIikBpIE/AAgAoOx5IEZAAIAAgEIgBAAIA1i2gAi6x9IABAAIAAACICqhtIh6hRgAiG1FICBBXIB6hQIgCgHIj4AAgABh2BIguiWIiBAAIgoCWIDXAAg");
	this.shape_26.setTransform(622.1,-311.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D6E70").s().p("ADxY2IAAhuICWAAImBjfImgDaIgBAFICZAAIAABuImkAAIAAhuIC3AAID135ImsAAIAAg8IAFAAIgBgCIAFgDIgBgCIGwjxIAAi2IpOAAIAAg3IgEgHIJSlNIAAh9ImKgBIABg6IABAAIgBgBIHRkCIA9jUIC1AAIBEDRIHUEFIgBADIAAAAIAAA6Il8AAIAAB3IJaFSIgCACIAAA8IpYAAIAAC/IGoDtIgEAHIAAA3ImeAAID1X5ICzAAIAABugAGMW1Ig3l6Ik8CkIFzDWgAmXWsIGLjOIlRjCgAAGTUIFNitIgCgNIqNAAgAE/PoIlJkeIlMEdIAAABIKVAAgAFHPVIhInvIj7DXIFDEYgAlRPJIE4kMIjzjTgAgKKwIDxjQInhAAgAj7GkIHxAAIAAgBIj3j+gAkAGRID0j3Ii1i6gADyGIIg8mdIisCvIDoDugAgBCNIC0i3IgBgHIltAAgAIbhtIk0itIAACtIE0AAgACXhtIijhcIimBZIAAADIFJAAgAouhtIFAAAIAAizgAgBjOICsBgIAAi9gAiyh8ICchSIichYgAgMjVICjhWIk+AAgAgBnHICrBgIABAAIAAi0IgPAAgACVlnIihhaIimBYIAAACIFHAAgAiyl1ICchSIiXhUIgFAAgAgMnNICShOIkdAAgALOpXInnkRIAAERIHnAAgAiyp2IAAAfIFdAAIAAgUIizh7gArNpXIHfAAIAAkNgAACrtICpBzIAAjhgAiyqFICfhoIifhugAiytpICqB1ICzh1IAAgGIldAAgAACvhIB9A2IAsAAIAAh3IgHAAgABqurIhygxIh4AxIDqAAgAiyurIAcAAICDg2IibhCIgEAAgAgIvlICWg+IkmAAgAHxxcIlGi2IA7CzIABAAIAAADIEKAAgAADzJICiBtIAGAAIAAgDIABAAIg2i0gACSxcIiXhnIigBmIE3ABgAoBxeIETABIAAgCIgCAAIA0i0gAi2xfIABAAICmhqIh3hQgAiD0kIB+BVIB4hOIgDgKIjyAAgABh1ZIgwigIh9AAIgpCgIDWAAg");
	this.shape_27.setTransform(289.4,-307.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_28.setTransform(-66,-169.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_29.setTransform(4,-169.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_30.setTransform(60,-169.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#404041").s().p("AgnFAIAAp/IBPAAIAAJ/g");
	this.shape_31.setTransform(-130.5,-169.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_32.setTransform(-210,-169.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_33.setTransform(-279,-169.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_34.setTransform(-420,-169.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#404041").s().p("AgnFAIAAp/IBPAAIAAJ/g");
	this.shape_35.setTransform(-498.5,-169.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_36.setTransform(-567,-169.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_37.setTransform(-628,-169.5);

	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(-284.5,-171,1,1,0,0,0,347,24.5);
	this.instance.alpha = 0.199;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BBBDBF").s().p("AgXA3IgNhuIBJBug");
	this.shape_38.setTransform(-540,-230);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BBBDBF").s().p("AgkA6IBJhzIgNBzg");
	this.shape_39.setTransform(-527.2,-230.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#929497").s().p("Ah3AZIAAgxIDvAAIAAAxg");
	this.shape_40.setTransform(-533.5,-222);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#929497").s().p("Ai9DXIAAmtIF7AAIAAGtg");
	this.shape_41.setTransform(-533.5,-186);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BBBDBF").s().p("AkIE2IAAprIIRAAIAAJrg");
	this.shape_42.setTransform(-533,-185.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D0D2D3").s().p("AjgFyIAArjIHBAAIAALjg");
	this.shape_43.setTransform(-532,-183.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0D2D3").s().p("AiVDhIAAnBIErAAIAAHBg");
	this.shape_44.setTransform(-578.5,-258);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_45.setTransform(-101.5,-284.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_46.setTransform(-101.5,-278.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_47.setTransform(-101.5,-273.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_48.setTransform(-101.5,-268.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_49.setTransform(-101.5,-262.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_50.setTransform(-101.5,-257.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_51.setTransform(-101,-269.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_52.setTransform(-134.5,-284.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_53.setTransform(-134.5,-278.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_54.setTransform(-134.5,-273.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_55.setTransform(-134.5,-268.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_56.setTransform(-134.5,-262.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_57.setTransform(-134.5,-257.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_58.setTransform(-135,-269.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BBBDBF").s().p("AgQAZQgHAAgGgFQgFgGAAgIIAAgMQAAgHAFgFQAGgGAHAAIAgAAQAIAAAGAGQAFAFAAAHIAAAMQAAAIgFAGQgGAFgIAAg");
	this.shape_59.setTransform(-302,-303);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BBBDBF").s().p("AgcAZQgGAAgFgFQgFgFAAgHIAAgQQAAgGAFgFQAFgFAGAAIA4AAQAHAAAFAFQAFAFAAAGIAAAQQAAAHgFAFQgFAFgHAAg");
	this.shape_60.setTransform(-301,-297);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BBBDBF").s().p("AggAZQgHAAgFgFQgFgGAAgHIAAgOQAAgHAFgFQAFgFAHAAIBAAAQAIAAAFAFQAFAFAAAHIAAAOQAAAHgFAGQgFAFgIAAg");
	this.shape_61.setTransform(-301.5,-292);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BBBDBF").s().p("AgkAZQgIAAgFgFQgFgGAAgIIAAgMQAAgHAFgFQAFgGAIAAIBJAAQAHAAAFAGQAGAFAAAHIAAAMQAAAIgGAGQgFAFgHAAg");
	this.shape_62.setTransform(-301,-285);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BBBDBF").s().p("AguAZQgIAAgEgGQgGgFAAgIIAAgMQAAgIAGgFQAEgFAIAAIBdAAQAHAAAFAFQAGAFAAAIIAAAMQAAAIgGAFQgFAGgHAAg");
	this.shape_63.setTransform(-302,-280);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BBBDBF").s().p("Ag9AZQgIAAgEgGQgGgFAAgHIAAgNQAAgIAGgEQAEgGAIAAIB7AAQAHAAAFAGQAGAEAAAIIAAANQAAAHgGAFQgFAGgHAAg");
	this.shape_64.setTransform(-301.5,-274);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D0D2D3").s().p("AgdDqIAAmRIAehBIAdBBIAAGRg");
	this.shape_65.setTransform(-301.5,-291.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_66.setTransform(-262.5,-284.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_67.setTransform(-262.5,-278.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_68.setTransform(-262.5,-273.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_69.setTransform(-262.5,-268.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_70.setTransform(-262.5,-262.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_71.setTransform(-262.5,-257.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_72.setTransform(-262,-269.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_73.setTransform(-215.5,-284.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_74.setTransform(-215.5,-278.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_75.setTransform(-215.5,-273.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_76.setTransform(-215.5,-268.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_77.setTransform(-215.5,-262.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_78.setTransform(-215.5,-257.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_79.setTransform(-215,-269.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_80.setTransform(-169.5,-284.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_81.setTransform(-169.5,-278.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_82.setTransform(-169.5,-273.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_83.setTransform(-169.5,-268.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_84.setTransform(-169.5,-262.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_85.setTransform(-169.5,-257.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_86.setTransform(-169,-269.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BBBDBF").s().p("AguAwQgUgUAAgcQAAgaAUgVQATgTAbAAQAcAAATATQAUAVAAAaQAAAcgUAUQgTATgcAAQgbAAgTgTg");
	this.shape_87.setTransform(28.4,-303.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BBBDBF").s().p("AAABBQgMAAgIgJQgJgIAAgNIAAhFQAAgNAJgJQAIgIAMAAIAAAAQAMAAAJAIQAJAJAAANIAABFQAAANgJAIQgJAJgMAAg");
	this.shape_88.setTransform(15.5,-305);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BBBDBF").s().p("AAABBQgMAAgIgJQgJgIAAgNIAAhFQAAgNAJgJQAIgIAMAAIAAAAQAMAAAJAIQAJAJAAANIAABFQAAANgJAIQgJAJgMAAg");
	this.shape_89.setTransform(6.5,-305);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQANAAAIAIQAJAJAAANIAABFQAAANgJAIQgIAJgNAAg");
	this.shape_90.setTransform(-1.5,-305);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQANAAAIAIQAJAJAAANIAABFQAAANgJAIQgIAJgNAAg");
	this.shape_91.setTransform(-9.5,-305);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQANAAAIAIQAJAJAAANIAABFQAAANgJAIQgIAJgNAAg");
	this.shape_92.setTransform(-17.5,-305);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQAMAAAJAIQAJAJAAANIAABFQAAANgJAIQgJAJgMAAg");
	this.shape_93.setTransform(-25.5,-305);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D0D2D3").s().p("AklAoQgNAAgJgJQgJgJAAgNIAAgSQAAgMAJgJQAJgJANAAIJLAAQANAAAJAJQAJAJAAAMIAAASQAAANgJAJQgJAJgNAAg");
	this.shape_94.setTransform(-7,-303.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D0D2D3").s().p("AAAnHIjAI5QjTJzhiEZIhWAAIIb4aIAAlXIAsiMIAtCKIAAFBIIjYzIhSABg");
	this.shape_95.setTransform(-38.6,-246.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D0D2D3").s().p("AgYIXIAAwtIAxAAIAAQtg");
	this.shape_96.setTransform(-135,-200);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D0D2D3").s().p("AlnAZIAAgxILPAAIAAAxg");
	this.shape_97.setTransform(-134.5,-251);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D0D2D3").s().p("Ai9APIAAgdIF7AAIAAAdg");
	this.shape_98.setTransform(-118.5,-291);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D0D2D3").s().p("Ai9APIAAgdIF7AAIAAAdg");
	this.shape_99.setTransform(-151.5,-291);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D0D2D3").s().p("AkNAZIAAgxIIbAAIAAAxg");
	this.shape_100.setTransform(-193.5,-291);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D0D2D3").s().p("AgdIhIAAxBIA7AAIAARBg");
	this.shape_101.setTransform(-215.5,-200);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D0D2D3").s().p("Ag7BkIAAjHIB3AAIAADHg");
	this.shape_102.setTransform(-594.5,-314.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D0D2D3").s().p("AhtAyIAAhjIDbAAIAABjg");
	this.shape_103.setTransform(-606.5,-319.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#929497").s().p("AvJAjIAAhFIeTAAIAABFg");
	this.shape_104.setTransform(-521.5,-263);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D0D2D3").s().p("AvJA3IAAhtIeTAAIAABtg");
	this.shape_105.setTransform(-521.5,-263);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#929497").s().p("AgdPPIAA+dIA7AAIAAedg");
	this.shape_106.setTransform(-606.5,-244);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#929497").s().p("AgdJxIAAzhIA7AAIAAThg");
	this.shape_107.setTransform(-434.5,-209);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D0D2D3").s().p("AgxJxIAAzhIBjAAIAAThg");
	this.shape_108.setTransform(-434.5,-209);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D0D2D3").s().p("AgxPPIAA+dIBjAAIAAedg");
	this.shape_109.setTransform(-606.5,-244);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D0D2D3").s().p("Ai9DIIAAmPIF7AAIAAGPg");
	this.shape_110.setTransform(-39.5,-174.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#929497").s().p("AiaBkIAAjHIE1AAIAADHg");
	this.shape_111.setTransform(-40,-157.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D0D2D3").s().p("AkIGfIAAs9IIRAAIAAM9g");
	this.shape_112.setTransform(-250,-213);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#929497").s().p("AhAIcIAAw3ICBAAIAAQ3g");
	this.shape_113.setTransform(-313,-200.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#929497").s().p("AhAIcIAAw3ICBAAIAAQ3g");
	this.shape_114.setTransform(-332,-200.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#929497").s().p("AhFIcIAAw3ICLAAIAAQ3g");
	this.shape_115.setTransform(-350.5,-200.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BBBDBF").s().p("AgxBGIAAiLIBjAAIAACLg");
	this.shape_116.setTransform(-281.5,-186.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BBBDBF").s().p("AgxBGIAAiLIBjAAIAACLg");
	this.shape_117.setTransform(-281.5,-213.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BBBDBF").s().p("AgxBGIAAiLIBjAAIAACLg");
	this.shape_118.setTransform(-281.5,-239.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BBBDBF").s().p("AgxBBIAAiBIBjAAIAACBg");
	this.shape_119.setTransform(-348.5,-276);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BBBDBF").s().p("AgxB4IAAjvIBjAAIAADvg");
	this.shape_120.setTransform(-368.5,-244.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BBBDBF").s().p("AgxB9IAAj5IBjAAIAAD5g");
	this.shape_121.setTransform(-368.5,-210);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BBBDBF").s().p("AgxB4IAAjvIBjAAIAADvg");
	this.shape_122.setTransform(-368.5,-173.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BBBDBF").s().p("AlnBBIAAiBILPAAIAACBg");
	this.shape_123.setTransform(-325.5,-173);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BBBDBF").s().p("AlnBGIAAiLILPAAIAACLg");
	this.shape_124.setTransform(-325.5,-210.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BBBDBF").s().p("AlnBBIAAiBILPAAIAACBg");
	this.shape_125.setTransform(-325.5,-244);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D0D2D3").s().p("Al7JsIAAzXIL3AAIAATXg");
	this.shape_126.setTransform(-325.5,-208.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D0D2D3").s().p("Eg2IAAtIAAhZMBsRAAAIAABZg");
	this.shape_127.setTransform(-284,-142);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D0D2D3").s().p("A3RAtIAAhZMAujAAAIAABZg");
	this.shape_128.setTransform(-733.5,-240);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D0D2D3").s().p("A3RAtIAAhZMAujAAAIAABZg");
	this.shape_129.setTransform(-733.5,-255);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D0D2D3").s().p("A3RAtIAAhZMAujAAAIAABZg");
	this.shape_130.setTransform(-733.5,-270);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#88C84C").s().p("Ap6DwIAAnfIT1AAIAAHfg");
	this.shape_131.setTransform(-105,224.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#88C84C").s().p("Ap6DwIAAnfIT1AAIAAHfg");
	this.shape_132.setTransform(221,224.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#88C84C").s().p("Ap6DwIAAnfIT1AAIAAHfg");
	this.shape_133.setTransform(533,224.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#88C84C").s().p("AyWDwIAAnfMAktAAAIAAHfg");
	this.shape_134.setTransform(613,-159.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#88C84C").s().p("AyWDwIAAnfMAktAAAIAAHfg");
	this.shape_135.setTransform(295,-155.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#88C84C").s().p("Eg8YADwIAAnfMB4xAAAIAAHfg");
	this.shape_136.setTransform(-282,-139.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A9D148").s().p("EhulAuGQiVAAiKg6QiEg4hmhmQhmhmg4iFQg6iJAAiWMAAAhFIQAAiWA6iJQA4iEBmhmQBmhmCEg4QCKg6CVAAMDdKAAAQCWAACJA6QCEA4BnBmQBmBmA4CEQA6CJAACWMAAABFIQAACWg6CJQg4CFhmBmQhnBmiEA4QiJA6iWAAg");
	this.shape_137.setTransform(101,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-882.5,-474.5,1765,949);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("EgATAlRMAAAhKhIAnAAMAAABKhg");
	this.shape.setTransform(-48.5,236);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EgATAlRMAAAhKhIAnAAMAAABKhg");
	this.shape_1.setTransform(-142.5,236);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("Aw2CMQmng3lGh0QhmgkhQgnIg8gfIBfgJQHqDXLaAtQJGAjLDhLQH5g2IGhnQEDg0CdgpIBggKQ0zF1w8AAQl+AAlfgvg");
	this.shape_2.setTransform(63.2,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("ApcBfQjtgli2hOQg5gZgugaIghgVIA1gHQH0EKOKh1QEcgkEhhGQCRgjBZgcIA1gGQrqD7pgAAQjVAAjFgfg");
	this.shape_3.setTransform(63.5,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("Aw3CMQmlg3lHh0QhmgkhQgnIg8gfIBfgJQHqDXLZAtQJHAjLDhLQH5g2IGhnQEDg0CdgpIBggKQ0zF1w8AAQl+AAlggvg");
	this.shape_4.setTransform(382.2,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ApcBfQjsgli4hOQg5gZgsgaIgigVIA1gHQH0EKOKh1QEbgkEihGQCRgjBZgcIA1gGQrqD7pgAAQjVAAjFgfg");
	this.shape_5.setTransform(382.5,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAhggQAfggAtAAQAtAAAhAgQAgAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_6.setTransform(-140.2,-5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_7.setTransform(-50.7,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAhggAsAAQAtAAAgAgQAhAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_8.setTransform(179.2,-5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAQAtAAAhAgQAgAgAAAtIAABaQAAAIgGAGQgGAGgIAAg");
	this.shape_9.setTransform(268.7,-5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAIAAAAQAuAAAgAgQAgAgAAAtIAABaQAAAIgGAGQgFAGgJAAg");
	this.shape_10.setTransform(496.5,-5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhZBuQgIAAgGgGQgGgGAAgIIAAhaQAAgtAgggQAgggAtAAIAAAAQAuAAAgAgQAgAgAAAtIAABaQAAAIgGAGQgFAGgJAAg");
	this.shape_11.setTransform(586,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AoqdTIAPgIQAUgOAZgkQBSh2BrklUAFUgOpAHMgknIA8AAQiuN3jZORQmycgjbB9g");
	this.shape_12.setTransform(648,-184);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AkNdgQAUgFAig/QBDiABAkpUADMgO7ABkgj9IAygaQgfN+hLOXQiWcsjaB+g");
	this.shape_13.setTransform(518.5,-187.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AvFguIASgKICLAjQC0AlDPASQKUA5KmimIAxAAQjxBPlqAsQjqAcjdAAQnQAAmZh6g");
	this.shape_14.setTransform(456.6,-361.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("EgmkgBGIAvgPIFiA1QHMA5IQAcQaZBXbIj/IB7AAQiaAekOAnQobBNpDAqQpYAro4AAQyfAAwUi6g");
	this.shape_15.setTransform(458.9,-356.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AuaEmID7gUQEugeEJg3QNKivCDliIA2AAQgIAqgoA9QhPB7iaBpQnwFMwsASg");
	this.shape_16.setTransform(122.8,-333.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6D6E70").s().p("AnfA3IAAhtIO/AAIAABtg");
	this.shape_17.setTransform(541.5,46);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6D6E70").s().p("Ap1A3IAAhtITrAAIAABtg");
	this.shape_18.setTransform(541.5,4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B5E3D").s().p("AhZVkMAAAgpvQAAgkAagaQAYgaAkAAIACAAQAkAAAcAaQAbAaAAAkMAAAApvg");
	this.shape_19.setTransform(541.5,96.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6D6E70").s().p("AnfA8IAAh3IO/AAIAAB3g");
	this.shape_20.setTransform(219.5,42.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6D6E70").s().p("Ap1A8IAAh3ITrAAIAAB3g");
	this.shape_21.setTransform(220.5,0.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B5E3D").s().p("AhZVpMAAAgp2QAAgkAagbQAagcAkAAIABAAQAkAAAbAcQAbAbAAAkMAAAAp2g");
	this.shape_22.setTransform(219.5,93);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6D6E70").s().p("AnfA8IAAh3IO/AAIAAB3g");
	this.shape_23.setTransform(-99.5,43.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6D6E70").s().p("ApwA8IAAh3IThAAIAAB3g");
	this.shape_24.setTransform(-99,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8B5E3D").s().p("AhZVpMAAAgp2QAAglAZgbQAbgbAjAAIACAAQAjAAAbAbQAcAbAAAlMAAAAp2g");
	this.shape_25.setTransform(-99.5,94);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D6E70").s().p("AD0ZeIAAh4ICRAAIl/jdImmDdICXAAIAAB4ImuAAIAAh4IC+AAID74hImvAAIAAgtIgGgJIAGgEIgCgCIG6j2IAAjCIpYAAIAAgtIgIgMIJglUIAAiCImSgBIAAg7IABAAIAAAAIHckKIA/jZIC5AAIBHDXIHfEMIgBACIAAA7ImJAAIAAB5IJnFZIAFAAIAAA8IpsAAIAADIIG2D2IgDAEIAFAAIAAAyImwAAID7YhIC/AAIAAB4gAGWXaIg4mEIlECoIF8DcgAmhXRIGVjTIlXjGIgDAAgAAHTzIFUixIgCgKIqWAAgAFBP8IlLkgIlPEgIKaAAgAFPPtIhJn7IkBDcIFKEfgAlZPhIE/kTIj5jYgAgKLBID6jXInzAAgAD8GuIj8kFIkAEFIH8AAgAkFGbID5j+Ii6i9gAD4GSIg9mnIixCzIDuD0gAjDg1IDCDGIC5i8IgDgQIl3AAgAIthtIlDi1IAAC1IFDAAgACghtIishhIitBdIAAAEIFZAAgApAhtIFLAAIAAi6gAAAjTICuBhIAAi/gAi5h+ICihWIiihagAgMjaICrhbIlPAAgAAAnTICtBiIABAAIAAi+IgBAAgACXlxIijhbIisBbIFPAAgAi5l8ICihXIiihbgAgMnZICihWIk9AAgALYprInukVIAAEVIHuAAgAi5qEIAAAZIFnAAIAAgRIi2h8gArWprIHhAAIAAkOgAADsAICrB1IAAjlgAi5qTICmhtIimhygAi5uBICxB6IC2h3IAAgFIlnAAgAADv6ICIA7IAjAAIAAh+IgFAAgAB1u/Ih9g2IiDA2IEAAAgAi5u/IAXAAICPg7IifhEIgHAAgAgIv+ICag/IkugBgAH+x5IlOi6IA8C2IgCAAIAAAEIEUAAgAAEzoICmBvIAEAAIAAgEIACAAIg3i2gACWx5IibhpIikBpIE/AAgAoOx5IEZAAIAAgEIgBAAIA1i2gAi6x9IABAAIAAACICqhtIh6hRgAiG1FICBBXIB6hQIgCgHIj4AAgABh2BIguiWIiBAAIgoCWIDXAAg");
	this.shape_26.setTransform(622.1,-311.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D6E70").s().p("ADxY2IAAhuICWAAImBjfImgDaIgBAFICZAAIAABuImkAAIAAhuIC3AAID135ImsAAIAAg8IAFAAIgBgCIAFgDIgBgCIGwjxIAAi2IpOAAIAAg3IgEgHIJSlNIAAh9ImKgBIABg6IABAAIgBgBIHRkCIA9jUIC1AAIBEDRIHUEFIgBADIAAAAIAAA6Il8AAIAAB3IJaFSIgCACIAAA8IpYAAIAAC/IGoDtIgEAHIAAA3ImeAAID1X5ICzAAIAABugAGMW1Ig3l6Ik8CkIFzDWgAmXWsIGLjOIlRjCgAAGTUIFNitIgCgNIqNAAgAE/PoIlJkeIlMEdIAAABIKVAAgAFHPVIhInvIj7DXIFDEYgAlRPJIE4kMIjzjTgAgKKwIDxjQInhAAgAj7GkIHxAAIAAgBIj3j+gAkAGRID0j3Ii1i6gADyGIIg8mdIisCvIDoDugAgBCNIC0i3IgBgHIltAAgAIbhtIk0itIAACtIE0AAgACXhtIijhcIimBZIAAADIFJAAgAouhtIFAAAIAAizgAgBjOICsBgIAAi9gAiyh8ICchSIichYgAgMjVICjhWIk+AAgAgBnHICrBgIABAAIAAi0IgPAAgACVlnIihhaIimBYIAAACIFHAAgAiyl1ICchSIiXhUIgFAAgAgMnNICShOIkdAAgALOpXInnkRIAAERIHnAAgAiyp2IAAAfIFdAAIAAgUIizh7gArNpXIHfAAIAAkNgAACrtICpBzIAAjhgAiyqFICfhoIifhugAiytpICqB1ICzh1IAAgGIldAAgAACvhIB9A2IAsAAIAAh3IgHAAgABqurIhygxIh4AxIDqAAgAiyurIAcAAICDg2IibhCIgEAAgAgIvlICWg+IkmAAgAHxxcIlGi2IA7CzIABAAIAAADIEKAAgAADzJICiBtIAGAAIAAgDIABAAIg2i0gACSxcIiXhnIigBmIE3ABgAoBxeIETABIAAgCIgCAAIA0i0gAi2xfIABAAICmhqIh3hQgAiD0kIB+BVIB4hOIgDgKIjyAAgABh1ZIgwigIh9AAIgpCgIDWAAg");
	this.shape_27.setTransform(289.4,-307.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_28.setTransform(-66,-169.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_29.setTransform(4,-169.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_30.setTransform(60,-169.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#404041").s().p("AgnFAIAAp/IBPAAIAAJ/g");
	this.shape_31.setTransform(-130.5,-169.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_32.setTransform(-210,-169.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_33.setTransform(-279,-169.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_34.setTransform(-420,-169.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#404041").s().p("AgnFAIAAp/IBPAAIAAJ/g");
	this.shape_35.setTransform(-498.5,-169.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_36.setTransform(-567,-169.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#404041").s().p("AgiFAIAAp/IBFAAIAAJ/g");
	this.shape_37.setTransform(-628,-169.5);

	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(-284.5,-171,1,1,0,0,0,347,24.5);
	this.instance.alpha = 0.199;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BBBDBF").s().p("AgXA3IgNhuIBJBug");
	this.shape_38.setTransform(-540,-230);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BBBDBF").s().p("AgkA6IBJhzIgNBzg");
	this.shape_39.setTransform(-527.2,-230.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#929497").s().p("Ah3AZIAAgxIDvAAIAAAxg");
	this.shape_40.setTransform(-533.5,-222);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#929497").s().p("Ai9DXIAAmtIF7AAIAAGtg");
	this.shape_41.setTransform(-533.5,-186);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BBBDBF").s().p("AkIE2IAAprIIRAAIAAJrg");
	this.shape_42.setTransform(-533,-185.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D0D2D3").s().p("AjgFyIAArjIHBAAIAALjg");
	this.shape_43.setTransform(-532,-183.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0D2D3").s().p("AiVDhIAAnBIErAAIAAHBg");
	this.shape_44.setTransform(-578.5,-258);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_45.setTransform(-101.5,-284.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_46.setTransform(-101.5,-278.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_47.setTransform(-101.5,-273.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_48.setTransform(-101.5,-268.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_49.setTransform(-101.5,-262.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_50.setTransform(-101.5,-257.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_51.setTransform(-101,-269.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_52.setTransform(-134.5,-284.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_53.setTransform(-134.5,-278.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_54.setTransform(-134.5,-273.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_55.setTransform(-134.5,-268.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_56.setTransform(-134.5,-262.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_57.setTransform(-134.5,-257.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_58.setTransform(-135,-269.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BBBDBF").s().p("AgQAZQgHAAgGgFQgFgGAAgIIAAgMQAAgHAFgFQAGgGAHAAIAgAAQAIAAAGAGQAFAFAAAHIAAAMQAAAIgFAGQgGAFgIAAg");
	this.shape_59.setTransform(-302,-303);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BBBDBF").s().p("AgcAZQgGAAgFgFQgFgFAAgHIAAgQQAAgGAFgFQAFgFAGAAIA4AAQAHAAAFAFQAFAFAAAGIAAAQQAAAHgFAFQgFAFgHAAg");
	this.shape_60.setTransform(-301,-297);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BBBDBF").s().p("AggAZQgHAAgFgFQgFgGAAgHIAAgOQAAgHAFgFQAFgFAHAAIBAAAQAIAAAFAFQAFAFAAAHIAAAOQAAAHgFAGQgFAFgIAAg");
	this.shape_61.setTransform(-301.5,-292);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BBBDBF").s().p("AgkAZQgIAAgFgFQgFgGAAgIIAAgMQAAgHAFgFQAFgGAIAAIBJAAQAHAAAFAGQAGAFAAAHIAAAMQAAAIgGAGQgFAFgHAAg");
	this.shape_62.setTransform(-301,-285);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BBBDBF").s().p("AguAZQgIAAgEgGQgGgFAAgIIAAgMQAAgIAGgFQAEgFAIAAIBdAAQAHAAAFAFQAGAFAAAIIAAAMQAAAIgGAFQgFAGgHAAg");
	this.shape_63.setTransform(-302,-280);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BBBDBF").s().p("Ag9AZQgIAAgEgGQgGgFAAgHIAAgNQAAgIAGgEQAEgGAIAAIB7AAQAHAAAFAGQAGAEAAAIIAAANQAAAHgGAFQgFAGgHAAg");
	this.shape_64.setTransform(-301.5,-274);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D0D2D3").s().p("AgdDqIAAmRIAehBIAdBBIAAGRg");
	this.shape_65.setTransform(-301.5,-291.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_66.setTransform(-262.5,-284.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_67.setTransform(-262.5,-278.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_68.setTransform(-262.5,-273.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_69.setTransform(-262.5,-268.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgGAAgHIAAgBQAAgIAFgGQAGgFAIAAIA9AAQAHAAAGAFQAGAGAAAIIAAABQAAAHgGAGQgGAGgHAAg");
	this.shape_70.setTransform(-262.5,-262.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgGgGQgFgFAAgJIAAAAQAAgIAFgFQAGgGAIAAIA9AAQAHAAAGAGQAGAFAAAIIAAAAQAAAJgGAFQgGAGgHAAg");
	this.shape_71.setTransform(-262.5,-257.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_72.setTransform(-262,-269.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_73.setTransform(-215.5,-284.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_74.setTransform(-215.5,-278.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_75.setTransform(-215.5,-273.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_76.setTransform(-215.5,-268.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_77.setTransform(-215.5,-262.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_78.setTransform(-215.5,-257.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_79.setTransform(-215,-269.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_80.setTransform(-169.5,-284.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_81.setTransform(-169.5,-278.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_82.setTransform(-169.5,-273.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_83.setTransform(-169.5,-268.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgGAAgHIAAgBQAAgIAGgGQAFgFAIAAIA8AAQAJAAAFAFQAGAGAAAIIAAABQAAAHgGAGQgFAGgJAAg");
	this.shape_84.setTransform(-169.5,-262.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BBBDBF").s().p("AgeAUQgIAAgFgGQgGgFAAgJIAAAAQAAgIAGgFQAFgGAIAAIA8AAQAJAAAFAGQAGAFAAAIIAAAAQAAAJgGAFQgFAGgJAAg");
	this.shape_85.setTransform(-169.5,-257.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D0D2D3").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_86.setTransform(-169,-269.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#BBBDBF").s().p("AguAwQgUgUAAgcQAAgaAUgVQATgTAbAAQAcAAATATQAUAVAAAaQAAAcgUAUQgTATgcAAQgbAAgTgTg");
	this.shape_87.setTransform(28.4,-303.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#BBBDBF").s().p("AAABBQgMAAgIgJQgJgIAAgNIAAhFQAAgNAJgJQAIgIAMAAIAAAAQAMAAAJAIQAJAJAAANIAABFQAAANgJAIQgJAJgMAAg");
	this.shape_88.setTransform(15.5,-305);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BBBDBF").s().p("AAABBQgMAAgIgJQgJgIAAgNIAAhFQAAgNAJgJQAIgIAMAAIAAAAQAMAAAJAIQAJAJAAANIAABFQAAANgJAIQgJAJgMAAg");
	this.shape_89.setTransform(6.5,-305);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQANAAAIAIQAJAJAAANIAABFQAAANgJAIQgIAJgNAAg");
	this.shape_90.setTransform(-1.5,-305);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQANAAAIAIQAJAJAAANIAABFQAAANgJAIQgIAJgNAAg");
	this.shape_91.setTransform(-9.5,-305);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQANAAAIAIQAJAJAAANIAABFQAAANgJAIQgIAJgNAAg");
	this.shape_92.setTransform(-17.5,-305);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BBBDBF").s().p("AAABBQgMAAgJgJQgIgIAAgNIAAhFQAAgNAIgJQAJgIAMAAIAAAAQAMAAAJAIQAJAJAAANIAABFQAAANgJAIQgJAJgMAAg");
	this.shape_93.setTransform(-25.5,-305);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D0D2D3").s().p("AklAoQgNAAgJgJQgJgJAAgNIAAgSQAAgMAJgJQAJgJANAAIJLAAQANAAAJAJQAJAJAAAMIAAASQAAANgJAJQgJAJgNAAg");
	this.shape_94.setTransform(-7,-303.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D0D2D3").s().p("AAAnHIjAI5QjTJzhiEZIhWAAIIb4aIAAlXIAsiMIAtCKIAAFBIIjYzIhSABg");
	this.shape_95.setTransform(-38.6,-246.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D0D2D3").s().p("AgYIXIAAwtIAxAAIAAQtg");
	this.shape_96.setTransform(-135,-200);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D0D2D3").s().p("AlnAZIAAgxILPAAIAAAxg");
	this.shape_97.setTransform(-134.5,-251);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D0D2D3").s().p("Ai9APIAAgdIF7AAIAAAdg");
	this.shape_98.setTransform(-118.5,-291);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D0D2D3").s().p("Ai9APIAAgdIF7AAIAAAdg");
	this.shape_99.setTransform(-151.5,-291);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D0D2D3").s().p("AkNAZIAAgxIIbAAIAAAxg");
	this.shape_100.setTransform(-193.5,-291);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D0D2D3").s().p("AgdIhIAAxBIA7AAIAARBg");
	this.shape_101.setTransform(-215.5,-200);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D0D2D3").s().p("Ag7BkIAAjHIB3AAIAADHg");
	this.shape_102.setTransform(-594.5,-314.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D0D2D3").s().p("AhtAyIAAhjIDbAAIAABjg");
	this.shape_103.setTransform(-606.5,-319.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#929497").s().p("AvJAjIAAhFIeTAAIAABFg");
	this.shape_104.setTransform(-521.5,-263);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D0D2D3").s().p("AvJA3IAAhtIeTAAIAABtg");
	this.shape_105.setTransform(-521.5,-263);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#929497").s().p("AgdPPIAA+dIA7AAIAAedg");
	this.shape_106.setTransform(-606.5,-244);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#929497").s().p("AgdJxIAAzhIA7AAIAAThg");
	this.shape_107.setTransform(-434.5,-209);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D0D2D3").s().p("AgxJxIAAzhIBjAAIAAThg");
	this.shape_108.setTransform(-434.5,-209);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D0D2D3").s().p("AgxPPIAA+dIBjAAIAAedg");
	this.shape_109.setTransform(-606.5,-244);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D0D2D3").s().p("Ai9DIIAAmPIF7AAIAAGPg");
	this.shape_110.setTransform(-39.5,-174.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#929497").s().p("AiaBkIAAjHIE1AAIAADHg");
	this.shape_111.setTransform(-40,-157.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D0D2D3").s().p("AkIGfIAAs9IIRAAIAAM9g");
	this.shape_112.setTransform(-250,-213);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#929497").s().p("AhAIcIAAw3ICBAAIAAQ3g");
	this.shape_113.setTransform(-313,-200.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#929497").s().p("AhAIcIAAw3ICBAAIAAQ3g");
	this.shape_114.setTransform(-332,-200.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#929497").s().p("AhFIcIAAw3ICLAAIAAQ3g");
	this.shape_115.setTransform(-350.5,-200.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#BBBDBF").s().p("AgxBGIAAiLIBjAAIAACLg");
	this.shape_116.setTransform(-281.5,-186.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BBBDBF").s().p("AgxBGIAAiLIBjAAIAACLg");
	this.shape_117.setTransform(-281.5,-213.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BBBDBF").s().p("AgxBGIAAiLIBjAAIAACLg");
	this.shape_118.setTransform(-281.5,-239.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BBBDBF").s().p("AgxBBIAAiBIBjAAIAACBg");
	this.shape_119.setTransform(-348.5,-276);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BBBDBF").s().p("AgxB4IAAjvIBjAAIAADvg");
	this.shape_120.setTransform(-368.5,-244.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BBBDBF").s().p("AgxB9IAAj5IBjAAIAAD5g");
	this.shape_121.setTransform(-368.5,-210);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#BBBDBF").s().p("AgxB4IAAjvIBjAAIAADvg");
	this.shape_122.setTransform(-368.5,-173.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BBBDBF").s().p("AlnBBIAAiBILPAAIAACBg");
	this.shape_123.setTransform(-325.5,-173);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BBBDBF").s().p("AlnBGIAAiLILPAAIAACLg");
	this.shape_124.setTransform(-325.5,-210.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#BBBDBF").s().p("AlnBBIAAiBILPAAIAACBg");
	this.shape_125.setTransform(-325.5,-244);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D0D2D3").s().p("Al7JsIAAzXIL3AAIAATXg");
	this.shape_126.setTransform(-325.5,-208.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#D0D2D3").s().p("Eg2IAAtIAAhZMBsRAAAIAABZg");
	this.shape_127.setTransform(-284,-142);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D0D2D3").s().p("A3RAtIAAhZMAujAAAIAABZg");
	this.shape_128.setTransform(-733.5,-240);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#D0D2D3").s().p("A3RAtIAAhZMAujAAAIAABZg");
	this.shape_129.setTransform(-733.5,-255);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D0D2D3").s().p("A3RAtIAAhZMAujAAAIAABZg");
	this.shape_130.setTransform(-733.5,-270);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#88C84C").s().p("Ap6DwIAAnfIT1AAIAAHfg");
	this.shape_131.setTransform(-105,224.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#88C84C").s().p("Ap6DwIAAnfIT1AAIAAHfg");
	this.shape_132.setTransform(221,224.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#88C84C").s().p("Ap6DwIAAnfIT1AAIAAHfg");
	this.shape_133.setTransform(533,224.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#88C84C").s().p("AyWDwIAAnfMAktAAAIAAHfg");
	this.shape_134.setTransform(613,-159.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#88C84C").s().p("AyWDwIAAnfMAktAAAIAAHfg");
	this.shape_135.setTransform(295,-155.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#88C84C").s().p("Eg8YADwIAAnfMB4xAAAIAAHfg");
	this.shape_136.setTransform(-282,-139.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A9D148").s().p("EhukAuGQiWAAiJg6QiFg4hmhmQhmhmg4iFQg6iJAAiWMAAAhFIQAAiWA6iJQA4iEBmhmQBmhmCFg4QCJg6CWAAMDdJAAAQCWAACJA6QCEA4BnBmQBmBmA4CEQA6CJAACWMAAABFIQAACWg6CJQg4CFhmBmQhnBmiEA4QiJA6iWAAg");
	this.shape_137.setTransform(101,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-882.5,-474.5,1765,949);


(lib.E1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.E1, new cjs.Rectangle(-1,0.6,34,33.4), null);


(lib.E3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.E1();
	this.instance.parent = this;
	this.instance.setTransform(17,16.7,1,1,0,0,0,16,17.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:337.1},20).to({regX:15.8,regY:17.1,scaleX:0.24,scaleY:0.24,x:344.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,33.4);


(lib.E2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9 copy
	this.instance = new lib.E1();
	this.instance.parent = this;
	this.instance.setTransform(375.1,-41.5,0.827,0.827,0,0,0,17.1,16.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({regX:16.8,scaleX:1.01,scaleY:1.01,guide:{path:[375,-41.4,385.5,-41,397.1,-38.6,411,-35.7,425,-35.7,457.9,-35.7,491.3,-41.9,520.7,-47.4,542.3,-55.9,542.3,-54.1,542.3,-52.2,542.3,-23.9,539.9,23.6,537.1,79.2,532.4,131.4,519.4,272.3,499,317.8,493.2,314.9,488.3,314.9,487.2,314.9,461.8,325.9,435.8,337.2,428.5,338.1,415.3,339.7,397.7,341.3,369.8,343.8,354.3,343.8,343.3,343.8,324.8,340.5,309.2,337.8,300.5,335.2,291.5,332.6,274,323.4,258.4,314.9,258.1,314.9,244,314.9,198.3,326.8,148.8,340.3,135.1,343.8,130.1,344.9,90.1,347.2,48.9,349.6,30.2,349.6,-24,349.6,-66.9,342.5,-121.2,333.6,-145,314.9,-145,320.9,-141.4,327.3,-137.8,333.7,-137.8,335.8,-137.8,341.1,-139.4,347.2,-140,349.6,-142.8,358.2,-147.9,373.5,-147.9,386.9,-147.9,414.9,-147.9,443,-147.9,465,-149.4,512.3,-150.1,535.9,-150.8,557.3,-150.8,656.2,-150.2,707.6,-149,813.5,-145.2,865.3]}},65).wait(1));

	// Layer 9 copy 2
	this.instance_1 = new lib.E1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.1,-41.5,0.827,0.827,0,0,0,17.1,16.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({regX:16.8,scaleX:1.01,scaleY:1.01,guide:{path:[375,-41.4,385.5,-41,397.1,-38.6,411,-35.7,425,-35.7,457.9,-35.7,491.3,-41.9,520.7,-47.4,542.3,-55.9,542.3,-54.1,542.3,-52.2,542.3,-23.9,539.9,23.6,537.1,79.2,532.4,131.4,519.4,272.3,499,317.8,493.2,314.9,488.3,314.9,487.2,314.9,461.8,325.9,435.8,337.2,428.5,338.1,415.3,339.7,397.7,341.3,369.8,343.8,354.3,343.8,343.3,343.8,324.8,340.5,309.2,337.8,300.5,335.2,291.5,332.6,274,323.4,258.4,314.9,258.1,314.9,244,314.9,198.3,326.8,148.8,340.3,135.1,343.8,130.1,344.9,90.1,347.2,48.9,349.6,30.2,349.6,-24,349.6,-66.9,342.5,-121.2,333.6,-145,314.9,-145,320.9,-141.4,327.3,-137.8,333.7,-137.8,335.8,-137.8,341.1,-139.4,347.2,-140,349.6,-142.8,358.2,-147.9,373.5,-147.9,386.9,-147.9,414.9,-147.9,443,-147.9,465,-149.4,512.3,-150.1,535.9,-150.8,557.3,-150.8,656.2,-150.2,707.6,-149,813.5,-145.2,865.3]}},45).wait(1));

	// Layer 9
	this.instance_2 = new lib.E1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(375.1,-41.5,0.827,0.827,0,0,0,17.1,16.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({regX:16.8,scaleX:1.01,scaleY:1.01,guide:{path:[375,-41.4,385.5,-41,397.1,-38.6,411,-35.7,425,-35.7,457.9,-35.7,491.3,-41.9,520.7,-47.4,542.3,-55.9,542.3,-54.1,542.3,-52.2,542.3,-23.9,539.9,23.6,537.1,79.2,532.4,131.4,519.4,272.3,499,317.8,493.2,314.9,488.3,314.9,487.2,314.9,461.8,325.9,435.8,337.2,428.5,338.1,415.3,339.7,397.7,341.3,369.8,343.8,354.3,343.8,343.3,343.8,324.8,340.5,309.2,337.8,300.5,335.2,291.5,332.6,274,323.4,258.4,314.9,258.1,314.9,244,314.9,198.3,326.8,148.8,340.3,135.1,343.8,130.1,344.9,90.1,347.2,48.9,349.6,30.2,349.6,-24,349.6,-66.9,342.5,-121.2,333.6,-145,314.9,-145,320.9,-141.4,327.3,-137.8,333.7,-137.8,335.8,-137.8,341.1,-139.4,347.2,-140,349.6,-142.8,358.2,-147.9,373.5,-147.9,386.9,-147.9,414.9,-147.9,443,-147.9,465,-149.4,512.3,-150.1,535.9,-150.8,557.3,-150.8,656.2,-150.2,707.6,-149,813.5,-145.2,865.3]}},38).wait(1));

	// Layer 1 copy 3
	this.instance_3 = new lib.E1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(210.5,-46.4,1,1,0,0,0,16.9,16.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({guide:{path:[210.6,-46.3,241,-33.5,328.3,-29.8,360.2,-28.5,400.6,-28.4,422.3,-28.3,451.1,-28.5,481.6,-28.5,520,-28.4,546.3,-28.5,563.8,-29.8,582.5,-31.3,612,-35.7,628.9,-38.2,694.2,-48.7,698.4,-48.7,702.7,-48.7,696.5,-33.6,690.4,-3.7,684,31.1,681.1,46.1,677.8,63.7,671.5,98.3,665.7,128,659.6,148,653.6,167.6,645,198.6,637.2,225.7,628,250,623.4,262,616.2,284.2,611.1,299.8,608,305.4,603.8,313.2,596.9,316.1,590,319.1,576.2,319.1,537,328.8,485,338.5,381,357.8,315.5,357.8,293.6,357.8,266.6,351.3,240.3,343.9,232.8,342.1,222.5,339.6,216,337.6,208.2,335.3,199.8,332.1,192.4,329.3,181.4,321.7,172,314.7,171.7,314.7,159.7,314.7,143.6,318.1,123.7,322.8,112,325.5,65,336.3,16.6,336.3,-6.9,336.3,-19.3,332.9,-25.1,331.4,-33.3,328.1,-43.7,323.8,-50.8,320.8,-51.2,320.7,-51.5,320.5,-51.5,319.8,-51.5,319.1,-51.2,319.9,-50.8,320.8,-48.3,328.1,-47.5,345.3,-47.2,353.1,-47.2,376.5,-47.2,387.3,-49.3,408.7,-51.5,429.9,-51.5,445.5,-51.5,454.4,-47.2,484.9,-42.8,515.4,-42.8,526.7,-42.8,531.5,-47.3,583,-51.7,633.7,-51.5,640.9,-50.6,672.6,-50.1,744.3,-50.1,781.7,-50.4,791.4,-51.2,812.6,-54.4,832.1,-54.4,850.1,-54.4,868,-53.7,868,-53,868,-53,865.8,-53,863.6]}},75).wait(1));

	// Layer 1 copy 4
	this.instance_4 = new lib.E1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(210.5,-46.4,1,1,0,0,0,16.9,16.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24).to({_off:false},0).to({guide:{path:[210.6,-46.3,241,-33.5,328.3,-29.8,360.2,-28.5,400.6,-28.4,422.3,-28.3,451.1,-28.5,481.6,-28.5,520,-28.4,546.3,-28.5,563.8,-29.8,582.5,-31.3,612,-35.7,628.9,-38.2,694.2,-48.7,698.4,-48.7,702.7,-48.7,696.5,-33.6,690.4,-3.7,684,31.1,681.1,46.1,677.8,63.7,671.5,98.3,665.7,128,659.6,148,653.6,167.6,645,198.6,637.2,225.7,628,250,623.4,262,616.2,284.2,611.1,299.8,608,305.4,603.8,313.2,596.9,316.1,590,319.1,576.2,319.1,537,328.8,485,338.5,381,357.8,315.5,357.8,293.6,357.8,266.6,351.3,240.3,343.9,232.8,342.1,222.5,339.6,216,337.6,208.2,335.3,199.8,332.1,192.4,329.3,181.4,321.7,172,314.7,171.7,314.7,159.7,314.7,143.6,318.1,123.7,322.8,112,325.5,65,336.3,16.6,336.3,-6.9,336.3,-19.3,332.9,-25.1,331.4,-33.3,328.1,-43.7,323.8,-50.8,320.8,-51.2,320.7,-51.5,320.5,-51.5,319.8,-51.5,319.1,-51.2,319.9,-50.8,320.8,-48.3,328.1,-47.5,345.3,-47.2,353.1,-47.2,376.5,-47.2,387.3,-49.3,408.7,-51.5,429.9,-51.5,445.5,-51.5,454.4,-47.2,484.9,-42.8,515.4,-42.8,526.7,-42.8,531.5,-47.3,583,-51.7,633.7,-51.5,640.9,-50.6,672.6,-50.1,744.3,-50.1,781.7,-50.4,791.4,-51.2,812.6,-54.4,832.1,-54.4,850.1,-54.4,868,-53.7,868,-53,868,-53,865.8,-53,863.6]}},65).wait(1));

	// Layer 1
	this.instance_5 = new lib.E1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(210.5,-46.4,1,1,0,0,0,16.9,16.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).to({guide:{path:[210.6,-46.3,241,-33.5,328.3,-29.8,360.2,-28.5,400.6,-28.4,422.3,-28.3,451.1,-28.5,481.6,-28.5,520,-28.4,546.3,-28.5,563.8,-29.8,582.5,-31.3,612,-35.7,628.9,-38.2,694.2,-48.7,698.4,-48.7,702.7,-48.7,696.5,-33.6,690.4,-3.7,684,31.1,681.1,46.1,677.8,63.7,671.5,98.3,665.7,128,659.6,148,653.6,167.6,645,198.6,637.2,225.7,628,250,623.4,262,616.2,284.2,611.1,299.8,608,305.4,603.8,313.2,596.9,316.1,590,319.1,576.2,319.1,537,328.8,485,338.5,381,357.8,315.5,357.8,293.6,357.8,266.6,351.3,240.3,343.9,232.8,342.1,222.5,339.6,216,337.6,208.2,335.3,199.8,332.1,192.4,329.3,181.4,321.7,172,314.7,171.7,314.7,159.7,314.7,143.6,318.1,123.7,322.8,112,325.5,65,336.3,16.6,336.3,-6.9,336.3,-19.3,332.9,-25.1,331.4,-33.3,328.1,-43.7,323.8,-50.8,320.8,-51.2,320.7,-51.5,320.5,-51.5,319.8,-51.5,319.1,-51.2,319.9,-50.8,320.8,-48.3,328.1,-47.5,345.3,-47.2,353.1,-47.2,376.5,-47.2,387.3,-49.3,408.7,-51.5,429.9,-51.5,445.5,-51.5,454.4,-47.2,484.9,-42.8,515.4,-42.8,526.7,-42.8,531.5,-47.3,583,-51.7,633.7,-51.5,640.9,-50.6,672.6,-50.1,744.3,-50.1,781.7,-50.4,791.4,-51.2,812.6,-54.4,832.1,-54.4,850.1,-54.4,868,-53.7,868,-53,868,-53,865.8,-53,863.6]}},51).wait(1));

	// Layer 1 copy
	this.instance_6 = new lib.E1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(24.9,18.4,1,1,0,0,0,16.9,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({guide:{path:[25,18.4,54.7,23.4,86.7,21,117.1,18.6,145.7,8.3,163,2.1,178.8,-5.6,190.8,-16.7,202.9,-27.9,207.3,-35.9,211.7,-44,211.7,-45.3,211.7,-46.7]}},14).to({_off:true},1).wait(75));

	// Layer 1 copy 2
	this.instance_7 = new lib.E1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(24.9,18.4,1,1,0,0,0,16.9,16.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({guide:{path:[25,18.5,54.7,23.4,86.6,21,117,18.7,145.7,8.4,162.9,2.2,178.7,-5.5,190.8,-16.7,202.8,-27.9,207.2,-35.9,211.6,-43.9]}},14).to({_off:true},1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,2.4,33.9,33.4);


// stage content:
(lib._048_ระบบส่งกำลังไฟฟ้า = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F25B2F").s().p("EhfzACcIAAk3MC/nAAAIAAE3g");
	this.shape.setTransform(959.8,630.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_1.setTransform(1500,526.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("Ai3CyIAAjLIhRAAIAAiYIChAAIAjALIAaAWQALAOAAAZIAACDIEoAAIAACYg");
	this.shape_2.setTransform(1431.5,400.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AB3LgQgjgLgagVQgagVgQgfQgPggAAgpQgBApgPAgQgPAfgbAVQgZAVgjALIhMAKQg2AAgrgMIhKgfIg3gsIglg0Qgkg+gIhOIAAs1ICiAAIAAL2QAABIASAnQAQAnAYARQAYARAWAEIAjADIAHAAQAqAAAZgXQAYgWANgdIAOg7IAEgsIAAgOIAAr2ICPAAIAAL2IAAAOIADAsIARA7QANAdAYAWQAYAXArAAIAIAAIAigDQAXgEAWgRQAWgRASgnQAPgnAAhIIAAx9ICiAAIAAS8QgHBOgkA+IgmA0Ig2AsIhLAfQgrAMg2AAg");
	this.shape_3.setTransform(1414.9,507.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AB3LgQgkgLgZgVQgagVgPgfQgPgggCgpQAAApgPAgQgPAfgaAVQgaAVgjALIhMAKQg3AAgqgMIhKgfIg3gsIglg0Qgkg+gJhOIAAs1ICiAAIAAL2QAABIASAnQASAnAXARQAXARAXAEIAjADIAHAAQArAAAYgXQAYgWAMgdIAQg7IACgsIAAgOIAAr2ICPAAIAAL2IAAAOIAEAsIAQA7QANAdAZAWQAZAXAqAAIAIAAIAjgDQAVgEAXgRQAWgRASgnQAPgnABhIIAAx9ICiAAIAAS8QgJBOgjA+IglA0Ig3AsIhLAfQgqAMg3AAg");
	this.shape_4.setTransform(1296.1,507.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("ABiOKIAA3bIgLgqIgYgoIgkgoIiBCBIidjRIBlheIBEBkIBPh0QAzAHAnARIBEAnIAxAzIAfA3QAdBAAEBPIAAXbg");
	this.shape_5.setTransform(1200.1,490.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AghInQhcAAhAgZQhBgbgqgnQgsgogYgwIglheIgQhUIgDg4IAAgNIAAqjICiAAIAAKjQAABFASAvQARAvAcAeQAaAeAgARIA+AYIA0AJIAaABQA/AAAsgTQArgTAcgdQAdgdAQgjIAXhAIAJg1IABgaIAAqjICiAAIAAQ+IiiAAIAAiYIgOA2IgeAnIgpAdIguAVQg4AThFAFg");
	this.shape_6.setTransform(1135,527.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AB1IjIAAsGQgCgrgOgjIgPgdIgXgZIgegSIgpgHIhDAKIgvAWIgcAYIgRAQIhvh0QAaghAogaIBUgoQAygTBFAAIAeACIA3AKIBEAcQAkATAeAjQAdAkAVA3QATA2AABQIAAMGg");
	this.shape_7.setTransform(1043,526.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AhLCaIAAkzICXAAIAAEzg");
	this.shape_8.setTransform(988.8,402.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AB3IdQgjgLgagVQgagVgPgfQgPgggBgpQgBApgPAgQgPAfgaAVQgaAVgjALIhMAKQg2AAgrgMIhKggIg2gsIgmg0Qgjg+gKhNIAAs2IEHAAIAACYIhlAAIAAJgQAABHASAmQARAnAXASQAXARAYADIAiADIAHAAQArAAAYgWQAYgWAOgeIAPg7IADgsIAAgMIAAr4ICPAAIAAL4IAAAMIAEAsIARA7QANAeAZAWQAZAWAqAAIAIAAIAigDQAWgDAWgRQAVgSASgnQAQgmAAhHIAAr4ICiAAIAAM2QgIBNgkA+IglA0Ig3AsIhLAgQgqAMg3AAg");
	this.shape_9.setTransform(957.6,527.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AiBIVIhTgoQgogbgaggIBthqIASARIAeAXIAuAWIBCAKIAogIIAfgSIAWgbIAQgeQAOglADgvIAAp3IiZAAIAAiYIE7AAIAAMPQAABNgTA3QgVA2gdAjQgfAkgjAUIhFAcIg4ALIgcACQhHAAgxgSg");
	this.shape_10.setTransform(860.7,527.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AhLCaIAAkzICXAAIAAEzg");
	this.shape_11.setTransform(805.2,402.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("ADuJgIAAlAQgBgugVggQgVgggggVIhEggIhGgRIhKgIIgUABIgpAHIg1AQIg2AfIgvAzQgVAegIAtIgDAOIAAANQAAAhASAZQARAZAaAQIA8AaIBAAPIA6AHIApABIAOAAIAACYIi2AAQg5AAgxgYQgzgYgkgqQgmgqgVg4QgWg3AAg8QAAg9Abg9QAbg+A/g5IBNg7IBPgkIBOgUIBLgGIBpALIBTAWIBOAhIAAg+QAAgzgMgmIgdhDIgrgwIgwggQg6gdhJgEQhCgBgtAYQguAXgdAjQgeAhgQAmIgXA/IiqAAQAGhaAdg+QAchAAqgpQAogqAwgZIBdgjIBPgQIAxgCIALAAQBLgBBPAWQAqgGAogTIBFgqQAjgdAYgwIA1A1IAUAVIATASIAQAOIAIAIQgDAIgFAJIgWAbIgfAfIghAfIgfAZIgZANQAhAoATAtIAbBVIAMBGIACAuIAAAKIAAKVg");
	this.shape_12.setTransform(783.6,520);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AiIIXQg7gRgtgbQgsgcgfgiIgzhIQgxhVgJhuIAArIICiAAIAALIQAAAsALAjIAeA7IArAqIAwAcQA5AbBJADQBKgDA6gbIAwgcIArgqIAdg7QALgjAAgsIAArIICiAAIAALIQgKBugwBVIgzBIQgfAigtAcQgsAbg7ARQg8AQhNAAQhNAAg7gQg");
	this.shape_13.setTransform(678,527.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AiIIXQg7gRgtgbQgsgcgfgiIgzhIQgxhVgJhuIAArIICiAAIAALIQAAAsALAjIAeA7IArAqIAwAcQA5AbBJADQBKgDA6gbIAwgcIArgqIAdg7QALgjAAgsIAArIICiAAIAALIQgKBugwBVIgzBIQgfAigtAcQgsAbg7ARQg8AQhNAAQhNAAg7gQg");
	this.shape_14.setTransform(572.4,527.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AiRG+QgaAAgPgLIgVgZIgKgkIAAihICYAAIAABRIEbAAIAACYgAiRjVQgaABgPgLIgVgZIgKgkIAAihICYAAIAABRIEbAAIAACXg");
	this.shape_15.setTransform(492.8,526.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AisITQhPgag0geQg7gigoguIBshpIAzAnIBKAlIBYAaIBfAKQAyAAAqgMQAogNAegYQAdgXAPgfQAPggAAgmQAAgogOgYIgdgnIglgUIgcgIIghgFIhBgLIhIgMIg4gKIghgIIgygTIg2ghIgyg1QgYgggOgrQgOgtAAg7QAAhYAfg9QAfg9AzgnQAzgmA/gRQBBgSA/AAQBDAAA4APIBfAhIBVAuIBTA5IhaCIIhFgtIg5geIg/gaIg8gSIgvgGIhIAHQgiAGgaATQgbARgPAfQgQAfAAAxQAAAyAbAcQAbAcArAQIBfAXIBsARQA1AJAyAcQAxAaAnAnQAlAnAYAzQAWAyAAA5QAABUgeA+QgfA9gzApQg1AnhGAUQhHAThPAAQhuAAhOgYg");
	this.shape_16.setTransform(419.4,526.9);

	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(959.8,553.3);
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(389.9,163.1,0.465,0.465,0,0,0,0.3,0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},15).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_1}]},405).to({state:[{t:this.instance_1}]},8).to({state:[]},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({_off:true,regX:0.3,regY:0.3,scaleX:0.47,scaleY:0.47,x:389.9,y:163.1},14).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:false},14).wait(405).to({regX:0,regY:92.4,x:389.8,y:205.9},0).to({regY:93.7,scaleY:0.02},8).to({_off:true},1).wait(22));

	// พลังงาน
	this.instance_2 = new lib.E3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-23.1,386.7,1,1,0,0,0,16.9,16.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).wait(383).to({_off:true},1).wait(22));

	// Layer 1
	this.instance_3 = new lib.E2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(914.5,341,1,1,0,0,0,23.9,19);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).wait(363).to({_off:true},1).wait(22));

	// R
	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(806.8,336.6,0.021,0.021,0,0,0,0,150);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(806.8,336.5,1,1,0,0,0,0,150);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(69).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,y:336.5},10).wait(386));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(69).to({_off:false},10).wait(111).to({startPosition:0},0).to({regY:149.4,scaleX:0.04,scaleY:0.04},6).to({_off:true},1).wait(268));

	// Y
	this.instance_6 = new lib.Tween14("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1505.8,615.7,0.028,0.028,0,0,0,-106.1,-171.6);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween15("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1505.8,615.7,1,1,0,0,0,-105.8,-170.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(199).to({_off:false},0).to({_off:true,regX:-105.8,regY:-170.7,scaleX:1,scaleY:1},7).wait(259));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(199).to({_off:false},7).wait(54).to({startPosition:0},0).to({regX:-105.4,scaleX:0.02,scaleY:0.02},8).to({_off:true},1).wait(196));

	// G
	this.instance_8 = new lib.Tween16("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(713.1,880.5,0.06,0.06,0,0,0,150,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween17("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(713,880.5,1,1,0,0,0,150,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(269).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:713},7).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(269).to({_off:false},7).wait(132).to({startPosition:0},0).to({scaleX:0.05,scaleY:0.05},9).to({_off:true},1).wait(47));

	// Fac
	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(882.5,1117.1,0.026,0.026,0,0,0,0,474.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween4("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(882.5,1117,1,1,0,0,0,0,474.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).to({_off:true,regY:474.5,scaleX:1,scaleY:1,y:1117},10).wait(431));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},10).wait(400).to({startPosition:0},0).to({regY:469.9,scaleY:0},18).to({_off:true},1).wait(12));

	// BG
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F0F3E1").s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_17.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(465));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;