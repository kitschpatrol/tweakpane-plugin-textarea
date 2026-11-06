# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Maintenance

- Update the pinned pnpm version to 12.16.1.
- Update the GitHub release and changelog actions.
- Use an npm one-time password from 1Password when publishing releases.

## [2.0.1-fork.1] - 2026-10-15

### Documentation

- Document the `fork` version suffix, refresh reference links and badges, and clarify MIT license attribution for the original plugin and fork.

### Maintenance

- Refresh tooling with pnpm 12, ESLint 10 flat configuration and TypeScript 6; require Node.js `^24.16.0 || >=26.3.0` for contributors.
- Replace npm-run-all, onchange and rimraf with pnpm script orchestration, Rollup watch and shx cleanup.
- Use Sass's modern compiler API and rebuild embedded styles when watched stylesheets change.
- Generate README metadata with mdat and check it alongside linting.
- Test and build before versioning, use `fork` prerelease identifiers, and modernize GitHub releases with default-branch validation.
- Add scheduled link checks and fork-maintenance workflows, and update repository-metadata synchronization.
- Normalize repository metadata and filenames, enforce LF line endings, and refresh ignore rules.

## [2.0.1-beta.2] - 2025-03-04

### Changed

- **Breaking:** Declare Node.js 18 or newer as the package engine requirement.

### Documentation

- Correct versioning guidance to describe fork betas of the next upstream patch release.

### Maintenance

- Update the `@tweakpane/core` runtime dependency requirement to `^2.0.5`.
- Refresh development dependencies and move to pnpm 10, allowing install-time builds for `@parcel/watcher`.
- Correct the repository URL in npm package metadata.
- Publish with the npm `latest` tag and update release and repository-metadata workflow configuration.

## [2.0.1-beta.1] - 2024-09-15

### Changed

- **Breaking:** Rename the package to `@kitschpatrol/tweakpane-plugin-textarea` and use matching `tweakpane-plugin-textarea` bundle filenames.
- **Breaking:** Externalize `@tweakpane/core` as a runtime dependency with requirement `^2.0.4`; direct browser imports now need an import map.

### Documentation

- Document the fork's dependency externalization, browser import maps, package rename, and prerelease versioning.

### Maintenance

- Adopt pnpm and refresh development dependencies, including Rollup 4, TypeScript 5.6, Prettier 3, and `@rollup/plugin-terser`.
- Replace the legacy npm publishing workflow with a local release script and GitHub release and repository-metadata automation.

## [2.0.0] - 2024-02-11

### Added

- Export bundle-level `id` and `css` alongside `plugins` for Tweakpane 4 registration.

### Changed

- **Breaking:** Require Tweakpane `^4.0.0` and migrate the binding plugin and theme styles to its v4 APIs.
- **Breaking:** Switch the package and browser bundles from UMD to ES modules.
- **Breaking:** Rename the `lineCount` option to `rows` and `PluginInputParams` to `TextareaPluginInputParams`.

### Documentation

- Update examples for `addBinding()` and `rows`, and convert the browser demo to ES module imports.

### Maintenance

- Refresh TypeScript and lint dependencies, adapt build/release scripts to ESM, and add a local server for the browser demo.

## [1.0.4] - 2022-05-25

No notable changes.

## [1.0.3] - 2022-05-25

### Added

- Add the optional `lineCount` parameter to control textarea height, defaulting to three rows.
- Add configurable `placeholder` text, defaulting to `Enter text here`.

### Fixed

- Remove excess spacing below the textarea.

### Documentation

- Document npm installation and the `lineCount` and `placeholder` options.
- Expand the browser demo with live change output and randomized content using `pane.refresh()`, and add an animated preview.

### Maintenance

- Remove tracked macOS metadata and ignore `.DS_Store` files.
- Add the `multiline` npm keyword.

## [1.0.2] - 2022-04-16

### Maintenance

- Add author contact information and package-discovery keywords to npm metadata.

## [1.0.1] - 2022-04-16

### Maintenance

- Add the source repository URL to npm package metadata.

## [1.0.0] - 2022-04-16

### Documentation

- Correct package imports to use the lowercase `@pangenerator` scope and add an npm version badge.

## [0.1.14] - 2022-04-16

### Fixed

- Fix bundle filenames to match the package entry point and expose the documented `TweakpaneTextareaPlugin` browser global.

## [0.1.13] - 2022-04-16

### Maintenance

- Publish scoped npm packages with explicit public access.

## [0.1.12] - 2022-04-16

### Maintenance

- Switch publishing from GitHub Packages to npm, remove the registry override, and update the workflow to Node.js 16 and npm token authentication.

## [0.1.11] - 2022-04-15

### Maintenance

- Normalize the npm package scope to lowercase `@pangenerator`.

## [0.1.10] - 2022-04-15

### Maintenance

- Use `npm install` in the publishing job so it can run without a package lockfile.

## [0.1.9] - 2022-04-15

### Maintenance

- Push tags automatically after versioning and use `npm install` in the release build job.

## [0.1.8] - 2022-04-15

### Changed

- **Breaking:** Rename the package from `tweakpane-textarea-plugin` to `@panGenerator/tweakpane-textarea-plugin` and configure GitHub Packages publishing.

### Documentation

- Correct the browser bundle name, plugin registration, package import, and string-binding example.

### Maintenance

- Add a GitHub Actions workflow to test and publish packages when a release is created.

## [0.1.6] - 2022-04-12

### Added

- Add multiline string inputs for Tweakpane 3 through `view: 'textarea'`, with initial values, bound-value synchronization, disabled states, and theme styling.
- Provide a registrable `plugins` export, UMD bundles, minified builds, and TypeScript declarations.

### Documentation

- Add browser/package registration instructions and a browser demo showing multiline editing and preset updates.

### Maintenance

- Set up TypeScript/Rollup builds, Sass compilation, linting, formatting, watch mode, and versioned release archives.

[Unreleased]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/2.0.1-fork.1...HEAD
[0.1.6]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/releases/tag/v0.1.6
[0.1.8]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.6...v0.1.8
[0.1.9]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.8...v0.1.9
[0.1.10]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.9...v0.1.10
[0.1.11]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.10...v0.1.11
[0.1.12]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.11...v0.1.12
[0.1.13]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.12...v0.1.13
[0.1.14]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.13...v0.1.14
[1.0.0]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v0.1.14...v1.0.0
[1.0.1]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v1.0.3...v1.0.4
[2.0.0]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v1.0.4...v2.0.0
[2.0.1-beta.1]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/v2.0.0...2.0.1-beta.1
[2.0.1-beta.2]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/2.0.1-beta.1...2.0.1-beta.2
[2.0.1-fork.1]: https://github.com/kitschpatrol/tweakpane-plugin-textarea/compare/2.0.1-beta.2...2.0.1-fork.1
