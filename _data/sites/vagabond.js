module.exports = {
	name: "vagabond.com", // optional, falls back to object key
	description: "vagabond.com",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.vagabond.com/se/",
		"https://www.vagabond.com/us/",
		"https://www.vagabond.com/se/women/footwear/sneakers/",
		"https://www.vagabond.com/us/women/footwear/sneakers/",
		"https://www.vagabond.com/se/judy-4924-001-37/",
		"https://www.vagabond.com/us/judy-4924-001-37/"
	]
};