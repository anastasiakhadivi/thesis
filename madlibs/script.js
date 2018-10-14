// array of words for god
			var changeGod = ["Creator", "Deity", "Idol", "Holiness", "Lord", "Maker", "Power", "Soul", "Spirit", "Universal Life Force", "Divinity", "All knowing", "God"];

			// function for switching the words on every click(god)
			function switchGod(){
				var god = changeGod[Math.floor(Math.random() *changeGod.length)];
				document.getElementById("word-god").innerHTML = god;
			}
			
			// array of words for liberty
			var changeLiberty = ["Choice", "Emancipation", "Independence", "Opportunity", "Privilege", "Right", "Sanction", "Sovereignty", "Free Speech", "Birthright", "Power of choice","Liberty"];

			// function for switching the words on every click(liberty)
			function switchLiberty(){
				var liberty = changeLiberty[Math.floor(Math.random() *changeLiberty.length)];
				document.getElementById("word-liberty").innerHTML = liberty;
			}

			// array of words for justice
			var changeJustice = ["Authority", "Due process", "Honesty", "Integrity", "Law", "Right", "Truth", "Sanction", "Justness", "Legitimacy", "Rule", "Review", "Justice"];

			// function for switching the words on every click(justice)
			function switchJustice(){
				var justice = changeJustice[Math.floor(Math.random() *changeJustice.length)];
			document.getElementById("word-justice").innerHTML = justice;
			}

			// array of words for all
			var changeAll = ["Complete", "Entire", "Full", "Greatest", "Total", "Everyone", "People", "Every man", "Masses", "Generality", "Anybody", "Whole", "All"]
			
			// function for switching the words on every click(all)
			function switchAll(){
				var all = changeAll[Math.floor(Math.random()*changeAll.length)];
				document.getElementById("word-all").innerHTML = all;
			}