ServerEvents.recipes(event => {
const production = event.recipes.gtceu.mana_production;

    // Mana Producer Recipes
    production('coal_production')
    .itemInputs('minecraft:coal')
    .outputFluids('manafluid:mana 1')
    .duration(200)
    .EUt(16);

}
)