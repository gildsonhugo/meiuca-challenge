import tokens from "./tokens.json" assert { type: "json" };
import fs from 'fs';

let generatedTokens = {}

for(let item in tokens){
    getTokenValue(item, tokens);
}

function getTokenValue(key, obj){
    if(!obj[key].hasOwnProperty("value")){
        for(let item in obj[key]){
            getTokenValue(item, obj[key]);
        }
        return;
    }
    generatedTokens[`${obj[key].attributes.type}-${obj[key].attributes.category}-${key}`] = obj[key].value
}

fs.writeFile('src/tokens/variables.json', JSON.stringify(generatedTokens), {encoding:'utf8', overwrite: true}, () => {});

//console.log(generatedTokens)