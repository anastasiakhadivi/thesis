// array of words for god
			var changeGod = ["Creator", "Deity", "Idol", "Holiness", "Lord", "Maker", "Power", "Soul", "Spirit", "Universal Life Force", "Divinity", "All knowing", "God"];

			// function for switching the words on every click(god)
			function switchGod(){
				var god = changeGod[Math.floor(Math.random() *changeGod.length)];
				document.getElementById("word-god").innerHTML = god;
			}
			
			// array of words for liberty
			var changeLiberty = ["choice", "emancipation", "independence", "opportunity", "privilege", "right", "sanction", "sovereignty", "free speech", "birthright", "power of choice","Liberty"];

			// function for switching the words on every click(liberty)
			function switchLiberty(){
				var liberty = changeLiberty[Math.floor(Math.random() *changeLiberty.length)];
				document.getElementById("word-liberty").innerHTML = liberty;
			}

			// array of words for justice
			var changeJustice = ["authority", "due process", "honesty", "integrity", "law", "right", "truth", "sanction", "justness", "legitimacy", "rule", "review", "justice"];

			// function for switching the words on every click(justice)
			function switchJustice(){
				var justice = changeJustice[Math.floor(Math.random() *changeJustice.length)];
			document.getElementById("word-justice").innerHTML = justice;
			}

			// array of words for all
			var changeAll = ["complete", "entire", "full", "greatest", "total", "everyone", "people", "every man", "masses", "generality", "anybody", "whole", "all"]
			
			// function for switching the words on every click(all)
			function switchAll(){
				var all = changeAll[Math.floor(Math.random()*changeAll.length)];
				document.getElementById("word-all").innerHTML = all;
			}