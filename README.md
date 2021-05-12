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
            "type": "list",
            "ordered": false,
            "start": null,
            "spread": false,
            "children": [
                {
                    "type": "listItem",
                    "spread": false,
                    "checked": null,
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
                                    "line": 2,
                                    "column": 5,
                                    "offset": 5
                                },
                                "end": {
                                    "line": 2,
                                    "column": 64,
                                    "offset": 64
                                }
                            }
                        }
                    ],
                    "position": {
                        "start": {
                            "line": 2,
                            "column": 1,
                            "offset": 1
                        },
                        "end": {
                            "line": 2,
                            "column": 64,
                            "offset": 64
                        }
                    }
                },
                {
                    "type": "listItem",
                    "spread": false,
                    "checked": null,
                    "children": [
                        {
                            "type": "paragraph",
                            "children": [
                                {
                                    "type": "text",
                                    "value": "https://user:password@host:port/path?key=value#fragment"
                                }
                            ],
                            "position": {
                                "start": {
                                    "line": 3,
                                    "column": 5,
                                    "offset": 69
                                },
                                "end": {
                                    "line": 3,
                                    "column": 65,
                                    "offset": 129
                                }
                            }
                        }
                    ],
                    "position": {
                        "start": {
                            "line": 3,
                            "column": 1,
                            "offset": 65
                        },
                        "end": {
                            "line": 3,
                            "column": 65,
                            "offset": 129
                        }
                    }
                }
            ],
            "position": {
                "start": {
                    "line": 2,
                    "column": 1,
                    "offset": 1
                },
                "end": {
                    "line": 3,
                    "column": 65,
                    "offset": 129
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
            "line": 4,
            "column": 1,
            "offset": 130
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
