/**
 * Localization file for Turkish - Turkey (tr-TR)
 */
(function(factory) {
	// Module systems magic dance.
	/*global require,ko,define*/
	if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
		// CommonJS or Node: hard-coded dependency on 'knockout'
		factory(require('knockout'));
	} else if (typeof define === "function" && define['amd']) {
		// AMD anonymous module with hard-coded dependency on 'knockout'
		define(['knockout'], factory);
	} else {
		// <script> tag: use the global `ko` object
		factory(ko);
	}
}(function(ko) {
	if (!ko.validation || typeof ko.validation.defineLocale !== 'function') {
		throw new Error('Knockout-Validation is required, please ensure it is loaded before this localization file');
	}
	return ko.validation.defineLocale('tr-TR', {
		required: 'Bu alanın doldurulması zorunludur.',
		min: 'Lütfen {0} veya daha yüksek değer giriniz.',
		max: 'Lütfen {0} veya daha düşük değer giriniz.',
		minLength: 'Lütfen en az {0} karakter giriniz.',
		maxLength: 'Lütfen en fazla {0} karakter giriniz.',
		pattern: 'Lütfen bu alanı kontrol ediniz.',
		step: 'Değer {0} arttırılmalı.',
		email: 'Bu geçerli bir E-Mail adresi değil.',
		date: 'Lütfen geçerli bir tarih giriniz.',
		dateISO: 'Lütfen geçerli bir tarih giriniz.',
		number: 'Lütfen bir sayı değeri giriniz.',
		digit: 'Lütfen bir rakam değeri giriniz.',
		phoneUS: 'Lütfen geçerli bir telefon numarası giriniz.',
		equal: 'Değerler eşit olmalıdır.',
		notEqual: 'Lütfen farklı bir değer seçiniz.',
		unique: 'Lütfen değerin farklı olduğunu kontrol ediniz.'
	});
}));
