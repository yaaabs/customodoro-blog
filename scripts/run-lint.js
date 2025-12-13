#!/usr/bin/env node
const { ESLint } = require('eslint');

(async () => {
  try {
    const eslint = new ESLint();
    const fs = require('fs');
    const candidateDirs = ["app", "components", "content", "hooks", "lib", "styles"];
    const patterns = [];
    function dirHasSourceFiles(dir) {
      try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const e of entries) {
          if (e.isFile()) {
            if (/\.(js|jsx|ts|tsx)$/.test(e.name)) return true;
          } else if (e.isDirectory()) {
            if (dirHasSourceFiles(`${dir}/${e.name}`)) return true;
          }
        }
      } catch (err) {
        return false;
      }
      return false;
    }
    for (const d of candidateDirs) {
      if (fs.existsSync(d) && dirHasSourceFiles(d)) patterns.push(`${d}/**/*.{js,jsx,ts,tsx}`);
    }
    if (fs.existsSync('next.config.mjs')) patterns.push('next.config.mjs');
    if (fs.existsSync('tailwind.config.ts')) patterns.push('tailwind.config.ts');
    if (patterns.length === 0) {
      console.log('No source patterns found to lint.');
      process.exitCode = 0;
      return;
    }
    const results = await eslint.lintFiles(patterns);
    const errorCount = results.reduce((s, r) => s + r.errorCount, 0);
    const warningCount = results.reduce((s, r) => s + r.warningCount, 0);
    if (errorCount === 0) {
      if (warningCount === 0) {
        console.log('ESLint: no errors, no warnings — all good');
      } else {
        console.log(`ESLint: no errors, ${warningCount} warning(s)`);
        const formatter = await eslint.loadFormatter('stylish');
        console.log(formatter.format(results));
      }
      process.exitCode = 0;
      return;
    }

    // There are errors — print formatted output and exit with non-zero code
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);
    console.log(resultText);
    console.log(`ESLint: ${errorCount} error(s), ${warningCount} warning(s)`);
    process.exitCode = 1;
  } catch (err) {
    console.error('ESLint runner failed:', err);
    process.exitCode = 2;
  }
})();
