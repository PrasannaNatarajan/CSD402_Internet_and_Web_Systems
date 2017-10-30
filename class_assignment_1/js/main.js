var events = {
	"user1":[
		{"title": "Event 1",
		  "day": "Monday"	
		},
		{"title": "Event 2",
		  "day": "Tuesday"	
		},
		{"title": "Event 3",
		  "day": "Wednesday"	
		},
		{"title": "Event 4",
		  "day": "Thursday"	
		},
		{"title": "Event 5",
		  "day": "Friday"	
		},
		{"title": "Event 6",
		  "day": "Saturday"	
		},
		{"title": "Event 7",
		  "day": "Sunday"	
		}
	],
	"user2":[
		{"title": "Event 1",
		  "day": "Monday"	
		},
		{"title": "Event 2",
		  "day": "Tuesday"	
		},
		{"title": "Event 3",
		  "day": "Wednesday"	
		},
		{"title": "Event 4",
		  "day": "Thursday"	
		},
		{"title": "Event 5",
		  "day": "Friday"	
		},
		{"title": "Event 6",
		  "day": "Saturday"	
		},
		{"title": "Event 7",
		  "day": "Sunday"	
		}
	],
	"user3":[
		{"title": "Event 1",
		  "day": "Monday"	
		},
		{"title": "Event 2",
		  "day": "Tuesday"	
		},
		{"title": "Event 3",
		  "day": "Wednesday"	
		},
		{"title": "Event 4",
		  "day": "Thursday"	
		},
		{"title": "Event 5",
		  "day": "Friday"	
		},
		{"title": "Event 6",
		  "day": "Saturday"	
		},
		{"title": "Event 7",
		  "day": "Sunday"	
		}
	],
	"user4":[
		{"title": "Event 1",
		  "day": "Monday"	
		},
		{"title": "Event 2",
		  "day": "Tuesday"	
		},
		{"title": "Event 3",
		  "day": "Wednesday"	
		},
		{"title": "Event 4",
		  "day": "Thursday"	
		},
		{"title": "Event 5",
		  "day": "Friday"	
		},
		{"title": "Event 6",
		  "day": "Saturday"	
		},
		{"title": "Event 7",
		  "day": "Sunday"	
		}
	],
	"user5":[
		{"title": "Event 1",
		  "day": "Monday"	
		},
		{"title": "Event 2",
		  "day": "Tuesday"	
		},
		{"title": "Event 3",
		  "day": "Wednesday"	
		},
		{"title": "Event 4",
		  "day": "Thursday"	
		},
		{"title": "Event 5",
		  "day": "Friday"	
		},
		{"title": "Event 6",
		  "day": "Saturday"	
		},
		{"title": "Event 7",
		  "day": "Sunday"	
		}
	]
};

$(document).ready(function(){

	$('#dropdown1 a').click(function(){
		console.log($(this).text(0));
		addEvents($(this).attr('id'));
	});

});

function addEvents(user_id) {
	// body...
	clearCalender();
	console.log(user_id);
	events[user_id].map(function(curVal){
		obj = `<div class="row events">
				<h5>`+curVal.title+`</h5>

		</div>`;
		console.log(curVal.day);
		$(`#`+curVal.day.toLowerCase()).append(obj);
	});
}

function clearCalender(){
	$('3')
}