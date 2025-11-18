ServerEvents.recipes(event => {

    /* Helper for botania recipes:
    # The documentation is pretty poor and the format is extremely inconsistent, 
    # so I had to add my own documentation here.
    #
    # IMPORTANT: 1 bucket/1,000mb of mana is equal to 100,000 native units of mana. 100 units = 1mb.
    #
    # mana imbument:
    # event.recipes.botania.mana_infusion('output', 'input', mana_amount, 'optional_catalyst')
    #
    # elf trades: (probably won't use these)
    # event.recipes.botania.elven_trade(['output'], 'input')
    # event.recipes.botania.elven_trade(['output1', 'output2'], ['input1', 'input2'])
    #
    # pure daisy: (time is in minutes, e.g. 1 = 60s, 2 = 120s, etc. non-whole numbers dont work >:/ grrr)
    # event.recipes.botania.pure_daisy('output', 'input', time)
    #
    # apothecary: (automatically adds seeds and water)
    # event.recipes.botania.petal_apothecary('output', ['input'])
    #
    # altar: (automatically adds livingrock)
    # event.recipes.botania.runic_altar('output', ['input1', 'input2'], mana_amount)
    #
    # terra plate: (probably won't be used)
    # event.recipes.botania.terra_plate('output', ['input1', 'input2'], mana_amount)
    #
    # orechids: (time is also in minutes here)
    # event.recipes.botania.orechid('output_block', 'input_block', time)
    # event.recipes.botania.orechid_ignem('output_block', 'input_block', 1)
    #
    # I couldnt figure out the marimorphiposa or brewing but we probably won't have to worry abt them 
    */



    //crafting 'machine' recipes
    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ], {
        A: 'kubejs:cobbled_asteroid_stone',
        B: '#botania:petals'
    })
    


    //low level materials
    event.recipes.botania.mana_infusion('botania:manaweave_cloth', 'farmersdelight:canvas', 5000)
    event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:stone_dust', 100)
    event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:asteroid_stone_dust', 100)
    event.recipes.botania.mana_infusion('botania:mana_glass', 'gtceu:tempered_glass', 100)

    event.recipes.botania.pure_daisy('minecraft:clay', 'minecraft:sand', 1)
    event.recipes.botania.pure_daisy('minecraft:clay', 'kubejs:asteroid_sand', 1)
    
    event.shaped('4x gtceu:manasteel_dust', [
        'ABA',
        'BAB',
        'ABA'
    ], {
        A: 'botania:mana_powder',
        B: 'gtceu:wrought_iron_dust'
    })

    event.recipes.gtceu.mixer('mix_manasteel_dust')
        .itemInputs('botania:mana_powder', 'gtceu:wrought_iron_dust')
        .itemOutputs('2x gtceu:manasteel_dust')
        .duration(80)
        .EUt(7)

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
    event.shaped('botania:hourglass', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'gtceu:gold_plate',
        B: 'botania:mana_glass_pane',
        C: 'gtceu:manasteel_plate'
    })

    event.shaped('botania:forest_eye', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'botania:livingrock',
        C: 'minecraft:ender_eye'
    })

    event.shaped('botanicadds:dreaming_pool', [
        '   ',
        'A A',
        'AAA'
    ], {
        A: 'botanicadds:dreamrock'
    })

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

    event.shaped('botania:elven_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: 'botanicadds:elvenwood_log',
        B: 'botania:mana_spreader',
        C: 'gtceu:double_elementium_plate',
        D: 'botania:pixie_lens'
    })

    event.shaped('botania:gaia_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: '#botania:dreamwood_logs',
        B: 'botania:elven_spreader',
        C: 'gtceu:double_gaiasteel_plate',
        D: 'botania:gaia_lens'
    })

    event.shaped('botania:mana_spreader', [
        'AAA',
        'CBD',
        'AAA'
    ], {
        A: '#botania:livingwood_logs',
        B: '#botania:petals',
        C: 'gtceu:double_copper_plate',
        D: '#c:glass_panes'
    })

    //manasteel cooking
        event.recipes.gtceu.primitive_blast_furnace('manasteel_charcoal')
        .itemInputs('gtceu:manasteel_dust', 'minecraft:charcoal')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    event.recipes.gtceu.primitive_blast_furnace('manasteel_coal')
        .itemInputs('gtceu:manasteel_dust', 'minecraft:coal')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    event.recipes.gtceu.primitive_blast_furnace('manasteel_coke')
        .itemInputs('gtceu:manasteel_dust', 'gtceu:coke_gem')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(750)

    event.recipes.gtceu.primitive_blast_furnace('manasteel_charcoal_dust')
        .itemInputs('gtceu:manasteel_dust', 'gtceu:charcoal_dust')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    event.recipes.gtceu.primitive_blast_furnace('manasteel_coal_dust')
        .itemInputs('gtceu:manasteel_dust', 'gtceu:coal_dust')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(900)

    event.recipes.gtceu.primitive_blast_furnace('manasteel_coke_dust')
        .itemInputs('gtceu:manasteel_dust', 'gtceu:coke_dust')
        .itemOutputs('botania:manasteel_ingot', 'gtceu:tiny_dark_ash_dust')
        .duration(750)



    //trinkets
    event.shaped('botania:crafting_halo', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'minecraft:crafting_table',
        C: 'botania:mana_pearl'
    })

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

    event.shaped('botania:thorn_chakram', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:vine',
        B: 'gtceu:terrasteel_ring'
    })

    event.shaped('botania:bauble_box', [
        'BCB',
        'BAB',
        'BBB'
    ], {
        A: '#forge:chests',
        B: 'gtceu:manasteel_plate',
        C: 'gtceu:gold_ring'
    })


    
    //tools
    event.shaped('botania:manasteel_shears', [
        'AB',
        'BC'
    ], {
       A: '#forge:tools/hammers',
       B: 'gtceu:manasteel_plate',
       C: '#forge:tools/files'
    })

    event.shaped('botania:elementium_shears', [
        'AB',
        'BC'
    ], {
       A: '#forge:tools/hammers',
       B: 'gtceu:elementium_plate',
       C: '#forge:tools/files'
    })

    event.shaped('botania:open_bucket', [
        'BAB',
        ' B '
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:elementium_plate'
    })

    event.shaped('botania:elementium_shovel', [
        'EBD',
        ' A ',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:elementium_plate',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })
    
    event.shaped('botania:elementium_sword', [
        ' B ',
        'EBD',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:elementium_plate',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:elementium_pickaxe', [
        'BCC',
        'EAD',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:elementium_plate',
        C: 'botania:elementium_ingot',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:elementium_hoe', [
        'BCD',
        'EA ',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:elementium_plate',
        C: 'botania:elementium_ingot',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:elementium_axe', [
        'BCD',
        'BA ',
        'EA '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:elementium_plate',
        C: 'botania:elementium_ingot',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:manasteel_shovel', [
        'EBD',
        ' A ',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:manasteel_plate',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })
    
    event.shaped('botania:manasteel_sword', [
        ' B ',
        'EBD',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:manasteel_plate',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:manasteel_pick', [
        'BCC',
        'EAD',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:manasteel_plate',
        C: 'botania:manasteel_ingot',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:manasteel_hoe', [
        'BCD',
        'EA ',
        ' A '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:manasteel_plate',
        C: 'botania:manasteel_ingot',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:manasteel_axe', [
        'BCD',
        'BA ',
        'EA '
    ], {
        A: 'minecraft:stick',
        B: 'gtceu:manasteel_plate',
        C: 'botania:manasteel_ingot',
        D: '#forge:tools/hammers',
        E: '#forge:tools/files'
    })

    event.shaped('botania:terra_axe', [
        'BEC',
        'BA ',
        'DA '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'botania:terrasteel_ingot'
        
    })

    event.shaped('botania:terra_sword', [
        ' B ',
        'DBC',
        ' A '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
    })

    event.shaped('botania:terra_pick', [
        'BFE',
        'DAC',
        ' A '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: '#forge:tools/hammers',
        D: '#forge:tools/files',
        E: 'botania:terrasteel_ingot',
        F: 'botania:mana_tablet'
    })

    event.shaped('botania:terrasteel_boots', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:rune_winter',
        D: 'botania:manasteel_boots'
    })

    event.shaped('botania:terrasteel_leggings', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:rune_autumn',
        D: 'botania:manasteel_leggings'
    })

    event.shaped('botania:terrasteel_helmet', [
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:rune_spring',
        D: 'botania:manasteel_helmet'
    })
    
    event.shaped('botania:terrasteel_chestplate', [
        '',
        '',
        ''
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:rune_summer',
        D: 'botania:manasteel_chestplate'
    })



    //lenses
    event.shaped('botania:lens_normal', [
        'BAB'
    ], {
       A: 'gtceu:manasteel_ring',
       B: 'botania:mana_glass_pane'
    })

    event.shaped('botania:terra_lens', [
        'BAB'
    ], {
       A: 'gtceu:terrasteel_ring',
       B: 'botania:mana_glass_pane'
    })

    event.shaped('botania:gaia_lens', [
        'BAB'
    ], {
       A: 'gtceu:gaiasteel_ring',
       B: 'botania:bifrost_pane'
    })

    event.shaped('botania:pixie_lens', [
        'BAB'
    ], {
       A: 'gtceu:elementium_ring',
       B: 'botania:elf_glass_pane'
    })

    event.shaped('botania:lens_magnet', [
        'ABC',
        '   ',
        '   '
    ], {
        A: 'gtceu:magnetic_iron_rod',
        B: 'botania:lens_normal',
        C: 'gtceu:gold_rod'
    })

    // event.shaped('botania:', [
    //     '',
    //     '',
    //     ''
    // ], {
    //    A: '',
    //    B: ''
    // })

})