function transfer(json){
    let result = {}
    result.h = Object.keys(json[0])
    result.d = []
    json.forEach(data => {
        result.d.push(Object.values(data))
    });

    return JSON.stringify(result)
}
