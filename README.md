# Backbone.nestedData

## Problem
```javascript
>>> var m = new Backbone.Model();
>>> m.on('change:foo', function() { console.log('foo changed'); });
>>> m.set('foo', ['bar', 'baz']);
"foo changed"
>>> var x = m.get('foo');
>>> x.push('foobar');
>>> m.set('foo', x);
```

The last command should trigger a ``change`` event, but it doesn't as ``x`` is a reference to ``m.attributes.foo``.
This means the last ``m.set('foo', x);`` is not necessary as ``m.attributes.foo`` is already ``['bar', 'baz', 'foobar']`` because it is a reference. This is evil.

This extension returns a cloned version of ``foo`` in ``Model.get``.

## Links
https://github.com/documentcloud/backbone/pull/1601
https://github.com/documentcloud/backbone/pull/1602
