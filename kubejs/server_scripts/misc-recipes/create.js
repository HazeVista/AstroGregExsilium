ServerEvents.recipes(event => {

event.shaped('create:precision_mechanism', [
    'ADA',
    'BCB',
    'ABA'
], {
    A: 'create:cogwheel',
    B: 'gtceu:brass_screw',
    C: 'gtceu:gold_plate',
    D: '#gtceu:tools/screwdriver'
})

event.shapeless('create:polished_rose_quartz', [
    'A',
    'B'
], {
    A: 'create:rose_quartz',
    B: '#gtceu:tools/file'
})

event.recipes.gtceu.lathe('lathe_polished_rose_quartz')
    .itemInputs('create:rose_quartz')
    .itemOutputs('create:polished_rose_quartz')
    .duration(120)
    .EUt(7)

});