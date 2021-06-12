



const skillsMods = (allSkills, mods) => {
    const noDuplicates = [...new Set(allSkills)];
    console.log(noDuplicates);
    let skillsMod = [];
    const skills = [
        ['Acrobatics', mods[1]],
        ['Animal Handling',mods[4]],
        ['Arcana',mods[3]],
        ['Athletics',mods[0]],
        ['Deception',mods[5]],
        ['History',mods[3]],
        ['Insight',mods[4]],
        ['Intimidation',mods[5]],
        ['Investigation',mods[3]],
        ['Medicine',mods[4]],
        ['Nature',mods[3]],
        ['Perception',mods[4]],
        ['Performance',mods[5]],
        ['Persuasion',mods[5]],
        ['Religion',mods[3]],
        ['Sleight of Hand',mods[1]],
        ['Stealth',mods[1]],
        ['Survival',mods[4]],
    ];
    skills.map((skill) => {
        let notPushed = true;
        noDuplicates.forEach((charSkill)=> {
            if(charSkill === skill[0]) {
                skillsMod.push([2+skill[1],1]);
                notPushed = false;
            } 
        });
        if (notPushed) skillsMod.push([skill[1],0]);

    });
    return skillsMod;   

}

export default {skillsMods}