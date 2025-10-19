ServerEvents.recipes(event => {

event.shaped('create:precision_mechanism', [
    'ADA',
    'BCB',
    'ABA'
], {
    A: 'create:cogwheel',
    B: 'gtceu:brass_screw',
    C: 'gtceu:gold_plate',
    D: '#forge:tools/screwdriver'
})

event.shaped('create:polished_rose_quartz', [
    'B',
    ' A'
], {
    A: 'create:rose_quartz',
    B: '#forge:tools/file'
})

event.recipes.gtceu.lathe('lathe_polished_rose_quartz')
    .itemInputs('create:rose_quartz')
    .itemOutputs('create:polished_rose_quartz')
    .duration(120)
    .EUt(7)

//create crafts & additions
//rolling (primitive lathe)
    
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:wrought_iron_ingot"
        },
        result: {
            item: "gtceu:wrought_iron_rod",
            count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:tin_ingot"
        },
        result:{
            item: "gtceu:tin_rod",
            count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:bronze_ingot"
        },
        result:{
            item: "gtceu:bronze_rod",
            count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:potin_ingot"
        },
        result:{
            item: "gtceu:potin_rod",
    count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:lead_ingot"
        },
        result:{
            item: "gtceu:lead_rod",
            count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:cupronickel_ingot"
        },
        result:{
            item: "gtceu:cupronickel_rod",
            count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:rubber_ingot"
        },
        result:{
            item: "gtceu:rubber_rod",
            count: 2
        }
    })
    event.custom({
        type:"createaddition:rolling",
        input: {
            item: "gtceu:invar_ingot"
        },
        result:{
            item: "gtceu:invar_rod",
            count: 2
        }
    })   
});