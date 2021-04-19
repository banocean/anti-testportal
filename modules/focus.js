try{

	const original = RegExp.prototype.test;
	RegExp.prototype.test = function (s) {

		const string = this.toString()

		if(string.includes("native code") && string.includes("function")) {
			return true;
		};
		
		const r = original.call(this, s);
		return r;
	};

	document.hasFocus = () => {
		return true;
	};
	
} catch (e) {
	alert(e);
};