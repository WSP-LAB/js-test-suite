load("201224b0d1c296b45befd2285e95dd42.js");
// These tests just mustn't trigger asserts.
if (!this.hasOwnProperty('Intl'))
    quit();

Object.prototype.get = 5;
new Intl.Collator().resolvedOptions();

Intl.DateTimeFormat.supportedLocalesOf('en');
