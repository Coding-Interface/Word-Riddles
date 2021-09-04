


const scriptsInEvents = {

		async Egameplay_Event10_Act1(runtime, localVars)
		{
			function shuffle(s) {
			  var arr = s.split('');           // Convert String to array
			  
			  arr.sort(function() {
			    return 0.5 - Math.random();
			  });  
			  s = arr.join('');                // Convert Array to string
			  return s;                        // Return shuffled string
			}
			localVars["text"] = shuffle(localVars["text"]);
		},

		async Egameplay_Event29_Act1(runtime, localVars)
		{
			localVars["returnValue"] = localVars["letter"].charCodeAt(0) - 64;
		},

		async Egameplay_Event31_Act1(runtime, localVars)
		{
			localVars["returnValue"] = String.fromCharCode(localVars["frame_no"]+64)
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

