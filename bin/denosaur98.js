const { program } = require('commander')
const fs = require('fs-extra')
const path = require('path')
const { execSync } = require('child_process')

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

		const assetsPath = path.join(projectPath, 'src', 'assets')
		const imagesPath = path.join(assetsPath, 'images')
		const iconsPath = path.join(assetsPath, 'icons')

		await fs.ensureDir(imagesPath)
		await fs.ensureDir(iconsPath)

		const gitignorePath = path.join(projectPath, '.gitignore')
		if (!fs.existsSync(gitignorePath)) {
			const defaultGitignore = `
				node_modules/
				output/
				dist/
				.env
				*.log
				*.lock
			`
			await fs.writeFile(gitignorePath, defaultGitignore.trim())
		}

		process.chdir(projectPath)
		execSync('npm install', { stdio: 'inherit' })

		console.log(`Project "${projectName}" created successfully.`)
	})

program.parse(process.argv)
