#!/usr/bin/env node

const { execSync } = require('node:child_process');

// Get package names from command line arguments
const packages = process.argv.slice(2);

// If no packages provided, show usage
if (packages.length === 0) {
    console.log('Usage: npx peerd <package1> <package2> ...');
    process.exit(1);
}

// Construct and execute npm install command
try {
    const command = `npm install ${packages.join(' ')} --legacy-peer-deps`;
    execSync(command, { stdio: 'inherit' });
} catch (error) {
    console.error('Installation failed:', error.message);
    process.exit(1);
}