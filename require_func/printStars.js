const print = (stars, header) => {
    console.log('*'.repeat(stars));
    console.log(header);
    console.log('*'.repeat(stars));
};

// test to see if script is being required or ran by itself
if (require.main == module) {
    // will enter if run as stand-alone
    print(process.argv[2], process.argv[3]);
} else {
    // being required
    module.exports = print;
}