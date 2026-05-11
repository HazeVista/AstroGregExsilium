//priority: 1
// Helper functions for applying recipe components

function CheckEmpty(variable) { return (variable == '' || variable == null || variable == undefined) }

global.applyNotConsumableItem = function applyNotConsumableItem(recipe, toApply, prefix) {
    if (CheckEmpty(toApply)) { return }
    if (prefix == undefined) { 
        recipe.notConsumable(toApply);
        return
    } 
    recipe.notConsumable(`${prefix}:${toApply}`);
}

global.applyItemInput = function applyItemInput(recipe, toApply, prefix) {
    if (CheckEmpty(toApply)) { return }
    console.log(`Applying Item Input: ${toApply} with prefix: ${prefix}`)
    if (prefix == undefined) {
        recipe.itemInputs(toApply);
        return
    }    
    recipe.itemInputs(`${prefix}:${toApply}`);
}

global.applyFluidInput = function applyFluidInput(recipe, toApply, prefix) {
    if (CheckEmpty(toApply)) { return }
    if (prefix == undefined) {
        recipe.inputFluids(toApply);
        return
    }    
    recipe.inputFluids(`${prefix}:${toApply}`);
}

global.applyItemOutput = function applyItemOutput(recipe, toApply, prefix) {
    if (CheckEmpty(toApply)) { return }
    if (prefix == undefined) {
        recipe.itemOutputs(toApply);
        return
    }
    recipe.itemOutputs(`${prefix}:${toApply}`);
}
