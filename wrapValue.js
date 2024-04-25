const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
console.log(false === '0');
[foo, bar] = [bar, foo];
console.log("1 && 2 = "+(1 && 2));
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const copyToClipboard = (text) => navigator.clipboard.writeText(text);