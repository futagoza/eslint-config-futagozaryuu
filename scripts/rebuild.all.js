// 
// HAVE TO DO THIS MANUALLY TO MAKE SURE ALL TASKS ARE RUN SERIALLY
// 

const tasks = [

    "core",
    "n",
    "style",
    "ts",

]

for ( const task of tasks ) {

    await import( `./rebuild.${ task }.js` )

    // empty space in the console between each task
    console.log( "" )

}
