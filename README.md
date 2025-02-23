# peerd 🚀

**Install npm packages with `--legacy-peer-deps` the easy way!**  
Say goodbye to peer dependency headaches and hello to smooth installs. 😎

---

## What it does ✨
`peerd` is a tiny CLI tool that automatically adds `--legacy-peer-deps` to your `npm install` commands. Perfect for those pesky legacy projects! 🛠️

### Example
```bash
npx peerd express axios
```

## Installation 📦
```bash
npm install -g peerd
```

## Usage 📝
```bash
npx peerd <package1> <package2> ...
```

## Why use `peerd`? 🤔

- **Legacy Projects**: If your project relies on older npm versions, `peerd` ensures compatibility.
- **Peer Dependency Issues**: Say goodbye to those pesky "can't install peer dependencies" errors.
- **Simplified Installs**: Just specify the packages you need, and let `peerd` handle the rest.

## Contributing 🤝
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License 📝
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author 🤵
This project is created by [Alohe](https://github.com/alohe).

## Acknowledgements 🤝
- [npm-cli](https://github.com/npm/cli)
- [node-child_process](https://nodejs.org/api/child_process.html)
