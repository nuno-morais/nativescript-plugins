const npsUtils = require('nps-utils');

module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nuno-morais/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nuno-morais/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nuno-morais': {
			// @nuno-morais/nativescript-multiple-list-picker
			'nativescript-multiple-list-picker': {
				build: {
					script: 'nx run nativescript-multiple-list-picker:build.all',
					description: '@nuno-morais/nativescript-multiple-list-picker: Build',
				},
			},

			// @nuno-morais/nativescript-twilio
			'nativescript-twilio': {
				build: {
					script: 'nx run nativescript-twilio:build.all',
					description: '@nuno-morais/nativescript-twilio: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			'nativescript-multiple-list-picker': {
				script: 'nx run nativescript-multiple-list-picker:focus',
				description: 'Focus on @nuno-morais/nativescript-multiple-list-picker',
			},
			'nativescript-twilio': {
				script: 'nx run nativescript-twilio:focus',
				description: 'Focus on @nuno-morais/nativescript-twilio',
			},
			reset: {
				script: 'nx run all:focus',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
