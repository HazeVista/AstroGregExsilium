ServerEvents.recipes(event => {

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_charcoal')
        .itemInputs('gtceu:steel_ingot', 'minecraft:charcoal')
        .itemOutputs('gtceu:damascus_steel_ingot')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coal')
        .itemInputs('gtceu:steel_ingot', 'minecraft:coal')
        .itemOutputs('gtceu:damascus_steel_ingot')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coke')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coke_gem')
        .itemOutputs('gtceu:damascus_steel_ingot')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_charcoal_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:charcoal_dust')
        .itemOutputs('gtceu:damascus_steel_ingot')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coal_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coal_dust')
        .itemOutputs('gtceu:damascus_steel_ingot')
        .duration(1200)

    event.recipes.gtceu.primitive_blast_furnace('dam_steel_coke_dust')
        .itemInputs('gtceu:steel_ingot', 'gtceu:coke_dust')
        .itemOutputs('gtceu:damascus_steel_ingot')
        .duration(1200)

})