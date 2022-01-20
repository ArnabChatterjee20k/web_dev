try {
    // fjsdlfjldjfl //this line is not a syntax of js and will give error on execution but will be catch by catch block
    console.log("try block")
    fdsjfl
} catch (error) {
    // console.log(error)
    console.log("error") // instead of getting error we will get this text.
    console.log(error.name) // name of error that we were getting
    console.log(error.message) // message of error that we were getting
} finally{
    console.log("finally this will always run") // it will always run
}

// try catch will not let the stop the execution of program due to errors.
// thus our code will get terminated uncondinationally due to error
// finally will run always whether try got executed or catch got executed