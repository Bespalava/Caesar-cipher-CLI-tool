# Caesar-cipher cli tool

## Downloading

```
git clone {repository URL}
```

## Installing
For using install all dependencies with command:
```
npm install
```
**NB!** You should have Node version at least **Latest LTS Version: 14.16.1**

## Description
[Basic scope](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/caesar-cipher-cli-tool.md)

CLI tool take parameters:

1.  **-s, --shift**: a shift - required
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

## Usage
**example:**

```bash
 node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
 node index --action encode --shift 7 --input input.txt --output output.txt
```

```bash
 node index --action decode --shift 7 --input input.txt --output output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
