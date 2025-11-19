ServerEvents.recipes(event => {

    //#region Botania KubeJS guide
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
    # pure daisy: (time amounts make no fucking sense, 600=4 mins somehow. 1t = 0.125)
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
    # orechids: (time is also in shit units here)
    # event.recipes.botania.orechid('output_block', 'input_block', time)
    # event.recipes.botania.orechid_ignem('output_block', 'input_block', 1)
    #
    # I couldnt figure out the marimorphiposa or brewing but we probably won't have to worry abt them 
    */
    //#endregion

    

    //#region crafting block recipes
    event.shaped('botania:apothecary_default', [
        'ABA',
        ' A ',
        'AAA'
    ], {
        A: 'kubejs:cobbled_asteroid_stone',
        B: '#botania:petals'
    })
    
    event.shaped('botanicadds:dreaming_pool', [
        '   ',
        'A A',
        'AAA'
    ], {
        A: 'botanicadds:dreamrock'
    })
    //#endregion


    
    //#region low level materials
    event.recipes.botania.mana_infusion('botania:manaweave_cloth', 'farmersdelight:canvas', 5000)
    event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:stone_dust', 100)
    event.recipes.botania.mana_infusion('botania:mana_powder', 'gtceu:asteroid_stone_dust', 100)
    event.recipes.botania.mana_infusion('botania:mana_glass', 'gtceu:tempered_glass', 100)
    event.recipes.botania.mana_infusion('minecraft:nether_wart_block', 'botania:blaze_block', 36000, 'botania:alchemy_catalyst')
    
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

    event.recipes.gtceu.forge_hammer('forge_hammer_gaia_shard')
        .itemInputs('botania:life_essence')
        .itemOutputs('5x botanicadds:gaia_shard')
        .duration(100)
        .EUt(2000)
    //#endregion

        

    //#region mana manipulation
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

    event.shaped('botania:mana_distributor', [
        'BBB',
        'CAC',
        'BBB'
    ], {
       A: 'gtceu:manasteel_frame',
       B: 'botania:livingrock',
       C: 'gtceu:manasteel_ring'
    })

    event.shaped('2x botania:pump', [
        'ADA',
        'C B',
        'ADA'
    ], {
       A: 'gtceu:manasteel_plate',
       B: '#forge:tools/hammers',
       C: '#forge:tools/wrenches',
       D: 'botania:livingrock'
    })

    event.shaped('botania:alchemy_catalyst', [
        'BBB',
        'CAC',
        'BBB'
    ], {
        A: 'gtceu:flawless_mana_diamond_gem',
        B: 'botania:livingrock',
        C: 'gtceu:gold_plate'
    })
    //#endregion



    //#region manasteel cooking
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
    //#endregion



    //#region trinkets
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

    event.shaped('botania:sextant', [
        ' AC',
        ' AA',
        'BBB'
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:manasteel_plate',
        C: 'gtceu:manasteel_rod'
    })

    event.shaped('botania:super_lava_pendant', [
        ' A ',
        'A A',
        'BA '
    ], {
        A: 'botania:red_string',
        B: 'botania:lava_pendant'
    })
    
    event.shaped('botania:super_cloud_pendant', [
        ' A ',
        'A A',
        'BA'
    ], {
        A: 'botania:red_string',
        B: 'botania:cloud_pendant'
    })

    event.shaped('botania:mana_mirror', [
        ' BC',
        ' AB',
        'A  '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:mana_tablet'
    })
    //#endregion


    
    //#region tools
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
        'ACA',
        'BDB',
        ' B '
    ], {
        A: 'botania:livingwood_twig',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:rune_summer',
        D: 'botania:manasteel_chestplate'
    })
    //#endregion



    //#region lenses
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
    //#endregion



    //#region rings
    event.shaped('botania:mana_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'botania:mana_tablet'
    })

    event.shaped('botania:magnet_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'botania:lens_magnet'
    })
    
    event.shaped('botania:aura_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'botania:rune_mana'
    })
    
    event.shaped('botania:water_ring', [
        'CBD',
        'BAB',
        'DBC'
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'botania:rune_water',
        D: '#minecraft:fishes'
    })
    
    event.shaped('botania:swap_ring', [
        'CBD',
        'BAB',
        'EBF'
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'minecraft:clay',
        D: '#forge:stone',
        E: '#minecraft:logs',
        F: '#minecraft:leaves'
    })
    
    event.shaped('botania:dodge_ring', [
        'CB ',
        'BAB',
        ' BD'
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'botania:rune_air',
        D: 'botania:rune_fire'
    })
    
    event.shaped('botania:mining_ring', [
        'CBD',
        'BAB',
        'DBC'
    ], {
        A: 'gtceu:manasteel_ring',
        B: 'gtceu:manasteel_plate',
        C: 'botania:rune_earth',
        D: 'minecraft:diamond_pickaxe'
    })
    
    event.shaped('botania:magnet_ring_greater', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:magnet_ring',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:lens_magnet'
    })
     
    event.shaped('botania:aura_ring_greater', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:aura_ring',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:rune_mana'
    })
        
    event.shaped('botania:mana_ring_greater', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:mana_ring',
        B: 'gtceu:terrasteel_plate',
        C: 'botania:mana_tablet'
    })

    event.shaped('botania:pixie_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtceu:elementium_ring',
        B: 'gtceu:elementium_plate',
        C: 'botania:pixie_dust'
    })

    event.shaped('botania:reach_ring', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'gtceu:elementium_ring',
        B: 'gtceu:elementium_plate',
        C: 'botania:rune_pride'
    })

    event.shaped('botanicadds:mana_ring_gaia', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:mana_ring_greater',
        B: 'gtceu:gaiasteel_plate',
        C: 'botania:rune_mana'
    })

    event.shaped('botanicadds:aura_ring_gaia', [
        'CB ',
        'BAB',
        ' B '
    ], {
        A: 'botania:aura_ring_greater',
        B: 'gtceu:gaiasteel_plate',
        C: 'botania:rune_aura'
    })
    //#endregion



    //#region spark augments
    event.shaped('botania:spark_upgrade_dispersive', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'botania:rune_water',
        C: 'botania:pixie_dust'
    })

    event.shaped('botania:spark_upgrade_dominant', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'botania:rune_fire',
        C: 'botania:pixie_dust'
    })
   
    event.shaped('botania:spark_upgrade_recessive', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'botania:rune_earth',
        C: 'botania:pixie_dust'
    })
    
    event.shaped('botania:spark_upgrade_isolated', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'gtceu:manasteel_plate',
        B: 'botania:rune_air',
        C: 'botania:pixie_dust'
    }) 

    event.shaped('botania:spark_changer', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:elementium_plate',
        B: 'botania:livingrock',
        C: 'gtceu:manasteel_plate'
    })
    //#endregion

    // event.shaped('botania:', [
    //     '',
    //     '',
    //     ''
    // ], {
    //    A: '',
    //    B: ''
    // })

})