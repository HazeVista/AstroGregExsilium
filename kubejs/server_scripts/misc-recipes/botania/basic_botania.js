ServerEvents.recipes(event => {

    /* Helper for botania recipes
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    #
    */


    //crafting "machine" recipes
    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ], {
        A: 'kubejs:cobbled_asteroid_stone',
        B: '#botania:petals'
    })
    

    //low level materials

    event.shaped('2x botania:mana_glass_pane', [
        'AB'
    ], {
       A: 'botania:mana_glass',
       B: '#forge:tools/saws'
    })    

    event.recipes.gtceu.cutter('cutting_mana_glass')
        .itemInputs('3x botania:mana_glass')
        .itemOutputs('8x botania:mana_glass_pane')
        .duration(50)
        .EUt(7)

    event.shaped('2x botania:bifrost_pane', [
        'AB'
    ], {
       A: 'botania:bifrost_perm',
       B: '#forge:tools/saws'
    })    

    event.recipes.gtceu.cutter('cutting_bifrost_glass')
        .itemInputs('3x botania:bifrost_perm')
        .itemOutputs('8x botania:bifrost_pane')
        .duration(50)
        .EUt(7)

    event.shaped('2x botania:elf_glass_pane', [
        'AB'
    ], {
       A: 'botania:elf_glass',
       B: '#forge:tools/saws'
    })    

    event.recipes.gtceu.cutter('cutting_elf_glass')
        .itemInputs('3x botania:elf_glass')
        .itemOutputs('8x botania:elf_glass_pane')
        .duration(50)
        .EUt(7)

        

    //mana manipulation blocks
    event.shaped('botania:bellows', [
        'AAA',
        'BC ',
        'AAA'
    ], {
       A: 'botania:livingwood_slab',
       B: 'botania:rune_air',
       C: 'farmersdelight:canvas'
    })

    event.shaped('botania:turntable', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'botania:livingwood_slab',
        B: 'gtceu:iron_plate',
        C: 'gtceu:lv_electric_motor'
    })

    event.shaped('botania:redstone_spreader', [
        'AB'
    ], {
        A: 'botania:mana_spreader',
        B: 'minecraft:clock'
    })

    //manasteel cooking


    //trinkets
    event.shaped('botania:monocle', [
        'AB',
        ' B',
        ' B'
    ], {
       A: 'botania:lens_normal',
       B: 'dustrial_decor:gold_chain'
    })

    event.shaped('botania:prism', [
        'ABA',
        'ACA',
        'ABA'
    ], {
       A: 'botania:mana_glass_pane',
       B: 'botania:lens_normal',
       C: 'botania:spectral_platform'
    })

    //tools


    // event.shaped('botania:', [
    //     '',
    //     '',
    //     ''
    // ], {
    //    A: '',
    //    B: ''
    // })

})