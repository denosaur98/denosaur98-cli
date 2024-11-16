const { program } = require('commander')
const fs = require('fs-extra')
const path = require('path')

program
	.command('create <project-name>')
	.description('Create a new denosaur98 project')
	.action(async projectName => {
		const projectPath = path.resolve(process.cwd(), projectName)

		if (fs.existsSync(projectPath)) {
			console.error(`Project "${projectName}" already exists.`)
			process.exit(1)
		}

		const templatePath = path.join(__dirname, '..', 'templates', 'project')
		await fs.copy(templatePath, projectPath)

		console.log(`Project "${projectName}" created successfully.`)
	})

program.parse(process.argv)
