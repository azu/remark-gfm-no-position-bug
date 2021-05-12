# remark-gfm-no-position-bug

Some text does not have `position` property.

## Usage

    yarn install
    npm test

output

```json
{
    "type": "root",
    "children": [
        {
            "type": "paragraph",
            "children": [
                {
                    "type": "text",
                    "value": "http://user:password@host:port/path?key=value#fragment"
                }
            ],
            "position": {
                "start": {
                    "line": 1,
                    "column": 1,
                    "offset": 0
                },
                "end": {
                    "line": 1,
                    "column": 60,
                    "offset": 59
                }
            }
        }
    ],
    "position": {
        "start": {
            "line": 1,
            "column": 1,
            "offset": 0
        },
        "end": {
            "line": 1,
            "column": 60,
            "offset": 59
        }
    }
}
```

## Changelog

See [Releases page](https://github.com/azu/remark-gfm-no-position-bug/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/remark-gfm-no-position-bug/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu
