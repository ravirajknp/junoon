
 export const getFirstCharacter = (name) => {
    const fullName= name.split(" ");
    let charName="";
    for(let i=0; i<fullName.length; i++){
        charName +=fullName[i][0];
        // charName = fullName[i][0].concat();
    }
    return charName;
    console.log(charName);
}
