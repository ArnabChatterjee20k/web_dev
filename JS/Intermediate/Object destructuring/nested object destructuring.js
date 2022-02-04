const nested_obj = {
        school_details: {
            name: "arnab",
            class: '12'
        },
        hobby: {
            passtime: "programming",
            languages: "5"
        }
    }
    // const {nested_obj_property : {key}} = expression;
const { hobby: { languages } } = nested_obj; // extracting languages from hobby property
console.log(languages)
    // workflow in simple words:
    // first it will go to the hobby key of expression then it will extract the value of languages from it and save it to languages.