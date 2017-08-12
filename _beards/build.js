var fs = require('fs');

["Hollywoodian","Mutton Chops","A la Souvarov","French Fork",
	"Handlebar and Chin Puff","Van Dyke","Friendly Mutton Chops","Balbo",
	"Short Boxed Beard","Goatee","Chin Curtain","Hulihee",
	"Petit Goatee","Franz Josef","Anchor","Napoleon III Imperial",
	"Duck Tail","Fu Manchu","Old Dutch","Dali",
	"Rap Industry Standard","Jack Sparrow","Klingon","Federation Standard",
	"The Zappa","Soul Patch","Handlebar and Goatee","The Winnfield",
	"Copstash","Pencil","Super Mario","Handlebar",
	"The Mighty El Insecto","Miami Vice","Chin Pillow","Toothbrush"
].forEach(function(n,i){
	fs.writeFileSync(`./_beards/${('0'+i).slice(-2)}.${n.toLowerCase().replace(/ /g,'.')}.md`, [
			'---',
			`title: ${n}`,
			`tag: ${n.toLowerCase().replace(/ /g,'.')}`,
			`photo: /images/${Math.floor( i / 4 + 1 ) *10 + i % 4 + 1}.jpg`,
			`proto: /images/${Math.floor( i / 4 + 1 ) *10 + i % 4 + 1}.gif`,
			'---'
		].join('\n'));
});
