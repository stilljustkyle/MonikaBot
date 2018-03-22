const config = require("../config.json", "utf-8");
const popura = require('popura');
const malScraper = require('mal-scraper');

exports.run = (client, message, args) => {
	console.log(message.author.username, "used manga");
	const malClient = popura(process.env.MAL_USERNAME, process.env.MAL_PASSWORD);
    return new Promise(async(resolve, reject) => {
        try {
            if (!args.length) return resolve(await message.channel.createMessage("You did not enter an manga to search for"));
            let mangaName = args.join(" ");
            const res = await malClient.searchMangas(mangaName);
            if (!res[0]) return resolve(await message.channel.createMessage("Your search did not returned any result"));
            let embedFields = [];
            let selectedManga = res[0];
            if (res.length > 1) {
                let i = 1;
                let resultList = res.map(a => `[${i++}] ${a.title}`).join('\n').replace(/undefined/gim, "");
                if (resultList.length > 2030) resultList = resultList.substr(0, 2030) + '..';
                const reply = 1
                selectedManga = res[Math.round(reply - 1)];
            }
			const manga = await malScraper.getInfoFromName(selectedManga.title);
            if (selectedManga.chapters) {
                embedFields.push({
                    name: 'Chapters',
                    value: selectedManga.chapters.toString(),
                    inline: true
                });
            }
            if (selectedManga.volumes) {
                embedFields.push({
                    name: 'Volumes',
                    value: selectedManga.chapters.toString(),
                    inline: true
                })
            }
            if (selectedManga.score) {
                embedFields.push({
                    name: 'Score',
                    value: selectedManga.score.toString(),
                    inline: true
                });
            }
            if (selectedManga.type) {
                embedFields.push({
                    name: 'Type',
                    value: selectedManga.type
                });
            }
            if (selectedManga.status) {
                embedFields.push({
                    name: 'Status',
                    value: selectedManga.status,
                    inline: true
                });
            }
            if (selectedManga.start_date) {
                embedFields.push({
                    name: 'Start date',
                    value: selectedManga.start_date.replace(/-/g, "/"),
                    inline: true
                });
            }
            if (selectedManga.end_date && selectedManga.end_date !== '0000-00-00') {
                embedFields.push({
                    name: 'End date',
                    value: selectedManga.end_date.replace(/-/g, "/"),
                    inline: true
                });
            }
            if (selectedManga.synopsis) {
                if (selectedManga.synopsis.length > 1024) selectedManga.synopsis = selectedManga.synopsis.substr(0, 1021) + '..';
                embedFields.push({
                    name: 'Synopsis',
                    value: selectedManga.synopsis.replace(/(&quot;|&mdash;|&rsquo;|&#039;|\[i]|\[\/i])/gim, ""),
                });
            }
            return resolve(await message.channel.send({
                embed: {
					color: 3447003,
					author: {
						name: selectedManga.title,
						url: manga.url
					},
					thumbnail: {
						url: selectedManga.image
					},
                    fields: embedFields
                }
            }));
        } catch (err) {
            reject(err);
        }
    });
}
