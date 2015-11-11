function stripHTML (s) {
	return s.replace(/<(?:.|\n)*?>/gm, '');
}