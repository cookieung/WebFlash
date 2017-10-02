function findNextPage(){
	var filename = location.href.split('/')[ location.href.split('/').length - 1 ];
	var temp_arr = filename.split('_');
	var prefix_arr = temp_arr[0].split('-');
	var subfix_arr = temp_arr[1].split('.');
	var curr_index = parseInt(subfix_arr[0]);
	var curr_source = parseInt(prefix_arr[0]);
	console.log(curr_index);
	console.log(curr_source);
	if(curr_index==3) return '../../lightSelection.html';
	curr_source++;
	curr_index++;
	let p = '0'+curr_source;
	return (p+'-'+prefix_arr[1]+'_'+curr_index+'.html');
}

//Leap controller
var leapEnable = false;
var leapCnt = 0;
//register the Leapmotion handler function
if (external.AddListenerForLeapMotion)
	external.AddListenerForLeapMotion(LeapHandler);

function LeapHandler(fh) {
	//$("#leap-info pre").text("fingers: " + JSON.stringify(fh.fingers, null, " "));
	//$("#leap-info pre").text("gesture: " + JSON.stringify(fh.gesture, null, " "));
	// $("#leap-info pre").text("hands: " + JSON.stringify(fh.hands, null, " "));
	//
	// LeapPointerDraw(fh.hands);

	// if (leapEnable) {
		console.log(currentPage);
	//
	// 	//check fingers appear
	// 	if (fh.fingers.length>0) {
	// 		if (typeof curPage.noTimeout !== "undefined") {
	// 			//PageTransitions.nextPage({"animation": 58, "showPage": curPage.linkPages.right});
	// 			PageTransitions.nextPage({"animation": 1, "showPage": curPage.linkPages.right});
	// 			return;
	// 		}
	// 	}

		LeapHandChangePage(fh.hands);
		//LeapGestureChangePage(fh.gesture, curPage);
	//
	// }
}

 // function LeapHandChangePage(hands) {
 // 	if (hands.length>0) {
 // 		var z = hands[0][2],
 // 				velX = hands[0][3],
 // 				velY = hands[0][4];
 // 		if (z<0.6) {
 // 			if (Math.abs(velX)>=Math.abs(velY)) {
 // 				if (Math.abs(velX)>800) {
 // 					if (velX>0) {
 // 						console.log('LEFT'+velX);
 // 					window.location.href = '03-5_Factory.html';
 // 					} else {
 // 					console.log('RIGHT');
 // 						window.location.href = '../../lightSelection.html';
 // 					}
 // 				}
 // 			} else {
 // 				if (Math.abs(velY)>500) {
 // 					if (velY>0) {
 // 					window.location.href = '03-5_Factory.html';
 // 					} else {
 // 					// 	window.location.href = '../../06_Lamp.html';
 // 					}
 // 				}
 // 			}
 // 		}
 // 	}
 // }

var nextPage = findNextPage();
console.log(nextPage);

setTimeout(function(){ window.location.href = nextPage; }, 15000);
