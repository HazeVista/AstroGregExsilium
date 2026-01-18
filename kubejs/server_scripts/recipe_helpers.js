//priority: 1
// Helper functions for applying recipe components

function CheckEmpty(variable) { return (variable == '' || variable == null || variable == undefined) }

global.applyNotConsumableItem = function applyNotConsumableItem(recipe, toApply, prefix) {
    if (CheckEmpty(toApply)) { return }
    if (prefix == undefined) { 
        recipe.applyNotConsumableItem(toApply);
        return
    } 
    recipe.applyNotConsumableItem(`${prefix}:${toApply}`);
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
        recipe.fluidInputs(toApply);
        return
    }    
    recipe.fluidInputs(`${prefix}:${toApply}`);
}

global.applyItemOutput = function applyItemOutput(recipe, toApply, prefix) {
    if (CheckEmpty(toApply)) { return }
    if (prefix == undefined) {
        recipe.itemOutputs(toApply);
        return
    }
    recipe.itemOutputs(`${prefix}:${toApply}`);
}
