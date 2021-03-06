function clock(){
			var date = new Date;
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();
			var midday;

			hours = updateTime(hours);
			minutes = updateTime(minutes);
			seconds = updateTime(seconds);
			var name = 'Shefroy';

			//if else condition
			midday = (hours >= 12) ? 'PM' : 'AM';

			document.getElementById('clock').innerHTML = '<span>' + hours + '</span>' + ':' + '<span>' + 
			minutes + '</span>' + ':' + '<span>' + seconds + '</span>' + '<span>' + midday + '</span>';

			var time = setTimeout(function(){
				clock();
			}, 1000);

			//Greeting (morning || afternoon condition)
			if (hours < 12){
				var greeting = 'Good Morning ' + name + '!';
			}
			if (hours >= 12 && hours <= 18){
				var greeting = 'Good afternoon ' + name + '.';
			}
			if (hours >= 18 && hours <= 24){
				var greeting = 'Good evening ' + name;
			}
			document.getElementById('greeting').innerHTML = greeting;
		}

		function updateTime(k){
			if (k < 10){
				return '0' + k;
			}else {
				return k;
			}
		}

		//call clock funtion
		clock();