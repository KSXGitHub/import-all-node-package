
module.exports = Object.assign({
	ExtendedPromise: getpkg('extended-promise'),
	TryPromise: getpkg('try-promise'),
	justTry: getpkg('just-try'),
	fsForce: getpkg('fs-force'),
	fsWatcher: getpkg('fs-watcher')
}, getpkg('x-iterable-base'), getpkg('x-iterable'));

function getpkg(fname) {
	try {
		return require(fname)
	} catch (error) {
		return error
	}
}