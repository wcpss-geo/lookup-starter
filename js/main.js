new Autocomplete("lookup-search", {
    selectFirst: true,
    howManyCharacters: 1,
    onSearch: ({ currentValue }) => {
        return new Promise((resolve) => {
            fetch(`./data/data.json`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    let results = data.data
                    resolve(
                        results
                            .filter(element => element.value.match(new RegExp(currentValue), "i"))
                    );
                })
                .catch((error) => {
                    console.error(error)
                })
        })
    },

    onResults:( {currentValue, matches, template}) => {
        return matches === 0
        ? template
        : matches
            .map((element) => {
                return `
                <li class="dropdown-item">${element.value}</li>
                `
            }).join("")
    },

    onSubmit: ({object}) => {
        console.log(object)        
    },
    
    onReset: () => {
        return
    }
})