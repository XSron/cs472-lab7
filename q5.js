var foo = 1;
function bar() {
    if(!foo) {
        var foo = 10;
    }
    console.log("foo is " + foo);
}
bar();

/*
    foo equal 10 because foo is declare before(it passed the !foo condition) 
    use in console.log
*/