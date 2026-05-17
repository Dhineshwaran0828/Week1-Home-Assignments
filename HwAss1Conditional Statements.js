function launchBrowser(browserName)
{
if(browserName === "chrome"){
console.log("launching chrome browser");
}
else{
    console.log("launching other browser");
}
}

function runTests(testType){
switch(testType){
    case "smoke":
        console.log("runTests smoke");
        break;
    case "sanity":
        console.log("runTests sanity");
    break;
    case "regression":
        console.log("runTests regression");
    break;
    default:
        console.log("runTests smoke");
}
}

launchBrowser("firefox");
runTests("smoke");
